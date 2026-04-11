import React, { useState } from 'react';
import { 
  Zap, BrainCircuit, Activity, TrendingUp, AlertCircle, 
  Calendar, LayoutDashboard, Stethoscope, CreditCard, Home, Shield, Send
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const App = () => {
  // --- LÓGICA DE NAVEGAÇÃO ---
  const [activeTab, setActiveTab] = useState('inicio');
  const [sintomas, setSintomas] = useState('');
  const [resultadoIA, setResultadoIA] = useState(null);

  const mockData = [
    { name: 'Seg', intensity: 4 }, { name: 'Ter', intensity: 7 }, 
    { name: 'Qua', intensity: 3 }, { name: 'Qui', intensity: 8 }, 
    { name: 'Sex', intensity: 5 }
  ];

  const handleTriagem = (e) => {
    e.preventDefault();
    // Simulação do "Cérebro" da IA
    if (sintomas.toLowerCase().includes('dor')) {
      setResultadoIA("Possível Dispepsia. Sugerido: Avaliar sinais de alarme.");
    } else {
      setResultadoIA("Análise concluída. Agende consulta para detalhamento.");
    }
  };

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans selection:bg-[#00afb9]/30">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full bg-[#021526]/90 backdrop-blur-md z-50 py-4 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <div onClick={() => setActiveTab('inicio')} className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 bg-[#00afb9] rounded-lg text-[#021526] shadow-lg shadow-[#00afb9]/20">
              <Activity size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                BIOG<span className="text-[#00afb9]">SAÚDE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-gray-500 uppercase">Gastroenterologia & IA</span>
            </div>
          </div>
          
          {/* MENU COM CLIQUE FUNCIONAL */}
          <div className="hidden lg:flex items-center bg-[#082635] rounded-xl px-2 py-1 border border-white/5">
            <button 
              onClick={() => setActiveTab('inicio')}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'inicio' ? 'bg-[#0a3a4a] text-[#00afb9] shadow-md' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <Home size={15}/> Início
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'dashboard' ? 'bg-[#0a3a4a] text-[#00afb9] shadow-md' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <LayoutDashboard size={15}/> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('triagem')}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'triagem' ? 'bg-[#0a3a4a] text-[#00afb9] shadow-md' : 'text-gray-400 hover:bg-white/5'}`}
            >
              <Stethoscope size={15}/> Triagem IA
            </button>
          </div>

          <button className="px-6 py-3 bg-[#00afb9] text-[#021526] rounded-xl text-sm font-black hover:bg-[#00d1d1] transition-all hover:scale-105">
            Começar Grátis
          </button>
        </nav>
      </header>

      {/* --- CONTEÚDO DINÂMICO --- */}
      <main className="pt-40 pb-24 px-6">
        
        {/* TELA INICIAL */}
        {activeTab === 'inicio' && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center mb-10">
              <div className="p-4 rounded-full bg-[#00afb9]/10 border-2 border-[#00afb9]/30 text-[#00afb9] shadow-xl shadow-[#00afb9]/10">
                <Shield size={44} className="opacity-80" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-8">
              Sua clínica na era da <span className="text-[#00afb9]">Inteligência Artificial</span>.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button onClick={() => setActiveTab('dashboard')} className="w-full sm:w-auto px-12 py-5 bg-[#00afb9] text-[#021526] rounded-2xl text-lg font-extrabold hover:bg-[#00d1d1] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#00afb9]/20">
                Acessar Painel
              </button>
              <button onClick={() => setActiveTab('triagem')} className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <BrainCircuit size={22} className="text-[#00afb9]" /> Testar Triagem
              </button>
            </div>
          </div>
        )}

        {/* TELA DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-[#082038]/60 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 md:p-14 shadow-2xl">
               <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/10">
                  <h2 className="text-3xl font-bold tracking-tight text-[#00afb9]">Análise Clínica</h2>
                  <div className="px-5 py-2 bg-white/5 rounded-xl text-xs font-bold text-gray-400 border border-white/5 flex items-center gap-2.5">
                    <Calendar size={16}/> Abril 2026
                  </div>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="h-72 bg-[#05192d]/50 p-8 rounded-3xl border border-white/5 shadow-inner">
                    <div className="text-[10px] font-black text-[#00afb9]/60 uppercase tracking-widest mb-6 text-left">Evolução da Intensidade</div>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData}>
                        <CartesianGrid stroke="#ffffff" strokeOpacity={0.03} vertical={false} />
                        <XAxis dataKey="name" hide />
                        <Tooltip contentStyle={{backgroundColor: '#082038', borderColor: '#ffffff10', borderRadius: '16px'}} />
                        <Line type="monotone" dataKey="intensity" stroke="#00afb9" strokeWidth={5} dot={{fill: '#00afb9', r:6}} activeDot={{r:10, fill: '#fff'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-6 text-left">
                    <div className="p-10 bg-[#00afb9] rounded-[40px] text-[#021526] relative overflow-hidden shadow-xl">
                       <TrendingUp size={60} className="mb-4 opacity-15 absolute -right-6 -top-6 scale-150" />
                       <div className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">Melhora Semanal</div>
                       <div className="text-6xl font-black">+14%</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* TELA TRIAGEM IA */}
        {activeTab === 'triagem' && (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-[#082038]/60 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#00afb9]/20 rounded-2xl text-[#00afb9]">
                  <BrainCircuit size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Simulador GastroAI</h2>
                  <p className="text-gray-400 text-sm">Descreva os sintomas para análise preditiva.</p>
                </div>
              </div>

              <form onSubmit={handleTriagem} className="space-y-6">
                <textarea 
                  value={sintomas}
                  onChange={(e) => setSintomas(e.target.value)}
                  placeholder="Ex: Dor epigástrica pós-prandial há 2 semanas..."
                  className="w-full h-32 bg-black/20 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:border-[#00afb9] outline-none transition-all"
                />
                <button type="submit" className="w-full py-4 bg-[#00afb9] text-[#021526] rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-[#00d1d1] transition-all">
                  <Send size={18} /> Analisar Sintomas
                </button>
              </form>

              {resultadoIA && (
                <div className="mt-8 p-6 bg-[#00afb9]/10 border border-[#00afb9]/30 rounded-2xl animate-in zoom-in-95">
                  <div className="flex items-center gap-2 text-[#00afb9] font-bold mb-2">
                    <AlertCircle size={18} /> Insight da IA:
                  </div>
                  <p className="text-gray-300">{resultadoIA}</p>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-[#00afb9] rounded text-[#021526]"><Activity size={14}/></div>
          <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">BIOGSAÚDE</span>
        </div>
        <p className="text-[10px] text-gray-600 font-medium uppercase tracking-[0.1em]">
          © 2026 BIOGSAÚDE. Plataforma em conformidade com LGPD e CFM.
        </p>
      </footer>
    </div>
  );
}

export default App;