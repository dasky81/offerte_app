import React, { useState, useEffect, useMemo } from 'react';
import { 
  Zap, 
  Smartphone, 
  CreditCard, 
  Shield, 
  Tv, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  TrendingDown, 
  Info,
  Menu,
  X,
  Star
} from 'lucide-react';

// --- TIPI E INTERFACCE ---

type Category = 'energy' | 'telco' | 'finance' | 'insurance' | 'digital';

interface Offer {
  id: string;
  category: Category;
  provider: string;
  name: string;
  price: number; // Prezzo base per ordinamento
  priceLabel: string; // Es: "/mese", "/anno"
  features: string[];
  badges?: string[];
  rating: number;
  // Campi specifici per calcoli dinamici
  pricePerUnit?: number; // Es: costo kWh
  fixedCost?: number; // Costi fissi
  data?: number; // GB per telco
  speed?: number; // Mbps
}

// --- MOCK DATA (SIMULAZIONE DATABASE) ---

const MOCK_DB: Offer[] = [
  // LUCE & GAS
  {
    id: 'e1',
    category: 'energy',
    provider: 'EcoPower',
    name: 'Luce Verde Fix',
    price: 0.12, // Costo materia prima
    priceLabel: '/kWh',
    pricePerUnit: 0.12,
    fixedCost: 10, // Costi fissi mensili
    features: ['Prezzo Bloccato 12 mesi', '100% Green', 'Bolletta Web'],
    badges: ['Consigliato', 'Green'],
    rating: 4.8
  },
  {
    id: 'e2',
    category: 'energy',
    provider: 'FlashEnergy',
    name: 'Variabile Smart',
    price: 0.10,
    priceLabel: '/kWh (PUN)',
    pricePerUnit: 0.10,
    fixedCost: 8,
    features: ['Prezzo indicizzato', 'Sconto domiciliazione', 'App dedicata'],
    badges: ['Miglior Prezzo'],
    rating: 4.2
  },
  {
    id: 'e3',
    category: 'energy',
    provider: 'GasSicuro',
    name: 'Gas Inverno',
    price: 0.45,
    priceLabel: '/Smc',
    pricePerUnit: 0.45,
    fixedCost: 12,
    features: ['Caldaia in omaggio', 'Manutenzione inclusa'],
    badges: ['Bundle'],
    rating: 4.5
  },

  // TELEFONIA
  {
    id: 't1',
    category: 'telco',
    provider: 'FastWebs',
    name: 'Mobile Rush',
    price: 7.99,
    priceLabel: '/mese',
    data: 150,
    speed: 1000,
    features: ['150 GB 5G', 'Minuti Illimitati', 'Attivazione Gratis'],
    badges: ['5G Incluso', 'Operator Attack'],
    rating: 4.6
  },
  {
    id: 't2',
    category: 'telco',
    provider: 'IliadLike',
    name: 'Giga 200',
    price: 9.99,
    priceLabel: '/mese',
    data: 200,
    speed: 500,
    features: ['200 GB', 'Per sempre', 'Zero vincoli'],
    badges: ['Popolare'],
    rating: 4.9
  },

  // CONTI & CARTE
  {
    id: 'f1',
    category: 'finance',
    provider: 'NeoBank',
    name: 'Conto Smart',
    price: 0,
    priceLabel: '/anno',
    features: ['Carta Debito Virtuale', 'Bonifici Gratis', 'Salvadanai'],
    badges: ['Zero Spese', 'Under 30'],
    rating: 4.7
  },
  {
    id: 'f2',
    category: 'finance',
    provider: 'PrimeBank',
    name: 'Carta Oro',
    price: 60,
    priceLabel: '/anno',
    features: ['Assicurazione Viaggi', 'Lounge Aeroporti', 'Concierge'],
    badges: ['Premium'],
    rating: 4.9
  },

  // ASSICURAZIONI
  {
    id: 'i1',
    category: 'insurance',
    provider: 'SafeDrive',
    name: 'RC Auto Base',
    price: 240,
    priceLabel: '/anno',
    features: ['Guida Esperta', 'Soccorso Stradale', 'Tutela Legale'],
    badges: ['Sconto Web'],
    rating: 4.3
  },
  {
    id: 'i2',
    category: 'insurance',
    provider: 'TravelGuard',
    name: 'Viaggio USA',
    price: 45,
    priceLabel: ' una tantum',
    features: ['Spese mediche illimitate', 'Bagaglio smarrito', 'Annullamento'],
    badges: ['Essenziale'],
    rating: 4.8
  },

  // ABBONAMENTI DIGITALI
  {
    id: 'd1',
    category: 'digital',
    provider: 'StreamFlix',
    name: 'Piano Standard + VPN',
    price: 12.99,
    priceLabel: '/mese',
    features: ['4K HDR', 'VPN Inclusa', '3 Dispositivi'],
    badges: ['Bundle Esclusivo'],
    rating: 4.5
  },
  {
    id: 'd2',
    category: 'digital',
    provider: 'NordSecure',
    name: 'VPN 2 Anni',
    price: 3.49,
    priceLabel: '/mese',
    features: ['6000+ Server', 'No Log', 'Threat Protection'],
    badges: ['Sconto 68%', 'Lifetime Deal'],
    rating: 4.9
  }
];

// --- COMPONENTI UI ---

const Badge = ({ text, colorClass }: { text: string; colorClass: string }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colorClass}`}>
    {text}
  </span>
);

const OfferCard = ({ offer, category, estimatedCost }: { offer: Offer; category: Category; estimatedCost?: number }) => {
  let categoryColor = '';
  switch (category) {
    case 'energy': categoryColor = 'bg-yellow-100 text-yellow-800 border-yellow-200'; break;
    case 'telco': categoryColor = 'bg-blue-100 text-blue-800 border-blue-200'; break;
    case 'finance': categoryColor = 'bg-green-100 text-green-800 border-green-200'; break;
    case 'insurance': categoryColor = 'bg-red-100 text-red-800 border-red-200'; break;
    case 'digital': categoryColor = 'bg-purple-100 text-purple-800 border-purple-200'; break;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
             <div className="flex flex-wrap gap-2 mb-2">
                {offer.badges?.map((badge, idx) => (
                  <Badge key={idx} text={badge} colorClass={categoryColor} />
                ))}
             </div>
            <h3 className="text-lg font-bold text-slate-800">{offer.provider}</h3>
            <p className="text-slate-500 text-sm">{offer.name}</p>
          </div>
          <div className="text-right">
            {estimatedCost ? (
               <div className="flex flex-col items-end">
                 <span className="text-xs text-slate-400">Stima Mensile</span>
                 <span className="text-2xl font-bold text-slate-900">€{estimatedCost.toFixed(2)}</span>
               </div>
            ) : (
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-slate-900">€{offer.price}</span>
                <span className="text-xs text-slate-400">{offer.priceLabel}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {offer.features.map((feat, idx) => (
            <div key={idx} className="flex items-center text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
              {feat}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
           <div className="flex items-center text-yellow-500 text-sm font-semibold">
              <Star className="w-4 h-4 fill-current mr-1" />
              {offer.rating}
           </div>
           <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center">
             Vedi Dettagli <ArrowRight className="w-4 h-4 ml-2" />
           </button>
        </div>
      </div>
      {/* Footer "segreto" della card con info extra */}
      <div className="bg-slate-50 px-6 py-2 text-xs text-slate-400 flex justify-between items-center group-hover:bg-slate-100 transition-colors">
         <span>Verificato oggi</span>
         <span className="flex items-center cursor-help" title="Mostra info sulla trasparenza">
           <Info className="w-3 h-3 mr-1" /> Termini e Condizioni
         </span>
      </div>
    </div>
  );
};

// --- APP PRINCIPALE ---

const OfferteApp = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('energy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Stati per i filtri (semplificati per la demo)
  const [energyConsumption, setEnergyConsumption] = useState(2700); // kWh annui
  const [telcoData, setTelcoData] = useState(50); // GB minimi
  const [sortOrder, setSortOrder] = useState<'price_asc' | 'rating_desc'>('price_asc');

  // Logica di filtraggio e calcolo
  const filteredOffers = useMemo(() => {
    let offers = MOCK_DB.filter(o => o.category === activeCategory);

    // Filtri specifici
    if (activeCategory === 'telco') {
      offers = offers.filter(o => (o.data || 0) >= telcoData);
    }

    // Ordinamento
    offers.sort((a, b) => {
      // Per l'energia calcoliamo il prezzo stimato per ordinare correttamente
      const priceA = activeCategory === 'energy' ? ((a.pricePerUnit || 0) * energyConsumption / 12) + (a.fixedCost || 0) : a.price;
      const priceB = activeCategory === 'energy' ? ((b.pricePerUnit || 0) * energyConsumption / 12) + (b.fixedCost || 0) : b.price;

      if (sortOrder === 'price_asc') return priceA - priceB;
      if (sortOrder === 'rating_desc') return b.rating - a.rating;
      return 0;
    });

    return offers;
  }, [activeCategory, energyConsumption, telcoData, sortOrder]);

  const calculateEstimatedCost = (offer: Offer) => {
    if (activeCategory === 'energy' && offer.pricePerUnit && offer.fixedCost) {
      // Formula semplificata: (Costo kWh * Consumo Annuo / 12) + Costi Fissi
      return ((offer.pricePerUnit * energyConsumption) / 12) + offer.fixedCost;
    }
    return undefined;
  };

  // Configurazione Categorie
  const categories = [
    { id: 'energy', label: 'Luce & Gas', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { id: 'telco', label: 'Telefonia', icon: Smartphone, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'finance', label: 'Conti & Carte', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'insurance', label: 'Assicurazioni', icon: Shield, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 'digital', label: 'Abbonamenti', icon: Tv, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">offerte<span className="text-slate-400">.app</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900">Come funziona</a>
              <a href="#" className="hover:text-slate-900">Chi siamo</a>
              <a href="#" className="text-slate-900">Le mie Utenze</a>
            </nav>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-lg">
             <a href="#" className="block text-slate-600 font-medium">Come funziona</a>
             <a href="#" className="block text-slate-600 font-medium">Le mie Utenze</a>
          </div>
        )}
      </header>

      {/* CATEGORY NAV (SCROLLABLE) */}
      <div className="bg-white border-b border-slate-200 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 flex space-x-8 min-w-max py-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? `${cat.bg} ${cat.color} ring-1 ring-inset ring-current shadow-sm` 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'fill-current' : ''}`} />
                <span className="font-semibold text-sm">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SEARCH WIDGET / WIZARD (LEFT COLUMN) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Configura Ricerca
                </h2>
                <p className="text-sm text-slate-500 mt-1">Personalizza i risultati per le tue esigenze.</p>
              </div>

              {/* DYNAMIC FILTERS BASED ON CATEGORY */}
              <div className="space-y-6">
                
                {activeCategory === 'energy' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Consumo Annuo (kWh)
                    </label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="6000" 
                      step="100"
                      value={energyConsumption}
                      onChange={(e) => setEnergyConsumption(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                      <span>1000 kWh</span>
                      <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{energyConsumption} kWh</span>
                      <span>6000 kWh</span>
                    </div>
                  </div>
                )}

                {activeCategory === 'telco' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Dati Minimi (GB)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[50, 100, 200].map(val => (
                        <button 
                          key={val}
                          onClick={() => setTelcoData(val)}
                          className={`py-2 px-3 text-sm rounded-lg border ${
                            telcoData === val 
                              ? 'bg-blue-600 text-white border-blue-600' 
                              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                          }`}
                        >
                          {val}+ GB
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeCategory === 'insurance' && (
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tipologia
                    </label>
                    <select className="w-full border-slate-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 text-sm py-2">
                      <option>RC Auto</option>
                      <option>Moto</option>
                      <option>Autocarro</option>
                    </select>
                  </div>
                )}

                {/* Common Sort Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ordina per
                  </label>
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="w-full border-slate-300 rounded-lg shadow-sm text-sm py-2"
                  >
                    <option value="price_asc">Prezzo più basso</option>
                    <option value="rating_desc">Miglior Punteggio</option>
                  </select>
                </div>

                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2">
                  <Search className="w-4 h-4" />
                  Aggiorna Risultati
                </button>
              </div>
            </div>

            {/* PROMO BOX */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">My Wallet 💼</h3>
              <p className="text-indigo-100 text-sm mb-4">Carica le tue bollette. Ti avvisiamo noi quando puoi risparmiare!</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold w-full hover:bg-indigo-50 transition-colors">
                Attiva Monitoraggio
              </button>
            </div>
          </div>

          {/* RESULTS FEED (RIGHT COLUMN) */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Migliori offerte per <span className="capitalize">{categories.find(c => c.id === activeCategory)?.label}</span>
                </h1>
                <p className="text-slate-500 mt-1">
                  {filteredOffers.length} risultati trovati basati sul tuo profilo
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer) => (
                  <OfferCard 
                    key={offer.id} 
                    offer={offer} 
                    category={activeCategory}
                    estimatedCost={calculateEstimatedCost(offer)}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                  <p className="text-slate-500">Nessuna offerta corrisponde ai filtri selezionati.</p>
                  <button 
                    onClick={() => { setEnergyConsumption(2700); setTelcoData(50); }}
                    className="mt-2 text-blue-600 font-medium hover:underline"
                  >
                    Resetta filtri
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3 text-sm text-yellow-800">
               <Info className="w-5 h-5 flex-shrink-0" />
               <p>
                 I prezzi indicati per Luce & Gas sono stime basate sul consumo annuo inserito e includono imposte e oneri di sistema attuali. 
                 Verifica sempre le condizioni finali sul sito del fornitore.
               </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OfferteApp;
