/**
 * Vercel Serverless Function: /api/search
 * Env: GEMINI_API_KEY
 */
module.exports = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const q = (req.query.q || '').toString().trim();
    if (!q || q.length < 2) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Query mancante o troppo corta' }));
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'GEMINI_API_KEY non configurata su Vercel' }));
    }

    const model = 'gemini-2.5-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    const prompt = `
Sei un motore di aggregazione offerte per e-commerce in Italia.
Trova offerte reali e recenti per la query: "${q}".

Regole:
- Rispondi SOLO con JSON valido (nessun testo extra).
- Output:
{
  "deals":[
    {
      "title": string,
      "price": number|null,
      "originalPrice": number|null,
      "discount": number|null,
      "store": string|null,
      "url": string|null,
      "image": string|null,
      "time": string|null,
      "category": string|null
    }
  ],
  "notes": string
}
- Max 12 risultati.
- Se un dato non è certo, usa null.
- Preferisci risultati italiani e store noti.
`;

    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        tools: [{ google_search: {} }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 2048 }
      })
    });

    if (!resp.ok) {
      const details = await resp.text().catch(() => '');
      res.statusCode = 502;
      return res.end(JSON.stringify({ error: 'Errore Gemini', status: resp.status, details: details.slice(0, 2000) }));
    }

    const data = await resp.json();
    const text =
      (data?.candidates?.[0]?.content?.parts || [])
        .map(p => p?.text)
        .filter(Boolean)
        .join('\n') || '';

    const safeJsonExtract = (t) => {
      try { return JSON.parse(t); } catch {}
      const m = t.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
      if (!m) return null;
      try { return JSON.parse(m[1]); } catch { return null; }
    };

    const json = safeJsonExtract(text);
    const deals = Array.isArray(json?.deals) ? json.deals : [];

    const gm = data?.candidates?.[0]?.groundingMetadata;
    const sources =
      (gm?.groundingChunks || [])
        .map(c => c?.web)
        .filter(Boolean)
        .map(w => ({ title: w.title || 'source', uri: w.uri }))
        .slice(0, 10);

    const normalized = deals.slice(0, 12).map((d) => ({
      title: typeof d.title === 'string' ? d.title.slice(0, 140) : 'Offerta',
      price: (typeof d.price === 'number' && isFinite(d.price)) ? d.price : null,
      originalPrice: (typeof d.originalPrice === 'number' && isFinite(d.originalPrice)) ? d.originalPrice : null,
      discount: (typeof d.discount === 'number' && isFinite(d.discount)) ? d.discount : null,
      store: typeof d.store === 'string' ? d.store.slice(0, 60) : null,
      url: typeof d.url === 'string' ? d.url.slice(0, 2000) : null,
      image: typeof d.image === 'string' ? d.image.slice(0, 2000) : null,
      time: typeof d.time === 'string' ? d.time.slice(0, 60) : 'Adesso',
      category: typeof d.category === 'string' ? d.category.slice(0, 30) : 'generated',
      hot: false
    }));

    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=120');
    res.statusCode = 200;
    return res.end(JSON.stringify({
      query: q,
      deals: normalized,
      sources,
      meta: {
        model,
        grounded: Boolean(gm),
        webSearchQueries: gm?.webSearchQueries || undefined
      }
    }));
  } catch (e) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: 'Errore server', details: (e && e.message) ? e.message : String(e) }));
  }
};
