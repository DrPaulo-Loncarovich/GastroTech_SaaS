import React, { useState } from 'react';
import { 
  Zap, BrainCircuit, Activity, TrendingUp, AlertCircle, 
  Calendar, LayoutDashboard, Stethoscope, CreditCard, Home, Shield
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// --- CONFIGURAÇÃO DE CORES ---
// Fundo: #05192d (Dark Navy) | Destaque: #00b5ad (Teal/Ciano)

const App = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState(null);

  const mockData = [
    { name: 'Seg', intensity: 4 }, { name: 'Ter', intensity: 7 }, 
    { name: 'Qua', intensity: 3 }, { name: 'Qui', intensity: 8 }, 
    { name: 'Sex', intensity: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#05192d] text-white font-sans selection:bg-cyan-500/30">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full bg-[#05192d]/80 backdrop-blur-md z-50 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500 rounded-lg text-[#05192d] shadow-lg shadow-cyan-500/20">
              <Activity size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter leading-none">GastroTech</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">BIOGSAÚDE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="flex items-center gap-2 text-cyan-400"><Home size={16}/> Início</a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><LayoutDashboard size={16}/> Dashboard</a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Stethoscope size={16}/> Triagem IA</a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><CreditCard size={16}/> Planos</a>
          </div>

          <button className="px-6 py-2.5 bg-cyan-500 text-[#05192d] rounded-full text-sm font-extrabold hover:bg-cyan-400 transition-all hover:scale-105">
            Começar Grátis
          </button>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-44 pb-20 px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Shield size={32} />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-6 leading-[1.1]">
          Pronto para revolucionar seu consultório?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Junte-se a mais de 340 especialistas que já utilizam a GastroTech para oferecer um cuidado digestivo de excelência.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-5 bg-cyan-500 text-[#05192d] rounded-2xl text-lg font-black hover:bg-cyan-400 transition-all">
            Ver Planos e Preços
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <BrainCircuit size={22} /> Testar Triagem IA
          </button>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <div className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-[#082038] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
           <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight">Análise do Paciente</h2>
              <div className="px-4 py-1.5 bg-white/5 rounded-xl text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5 flex items-center gap-2">
                <Calendar size={14}/> Últimos 7 Dias
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 bg-[#05192d]/50 p-6 rounded-3xl border border-white/5">
                <div className="text-[10px] font-black text-cyan-500/50 uppercase tracking-widest mb-4">Evolução da Intensidade</div>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid stroke="#ffffff" strokeOpacity={0.05} vertical={false} />
                    <XAxis dataKey="name" hide />
                    <Tooltip contentStyle={{backgroundColor: '#082038', borderColor: '#ffffff10', borderRadius: '12px'}} />
                    <Line type="monotone" dataKey="intensity" stroke="#00b5ad" strokeWidth={4} dot={{fill: '#00b5ad', r:4}} activeDot={{r:8, strokeWidth:0}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <div className="p-8 bg-cyan-500 rounded-[32px] text-[#05192d] relative overflow-hidden group">
                   <TrendingUp size={40} className="mb-4 opacity-20 absolute -right-4 -top-4 scale-150" />
                   <div className="text-xs font-bold uppercase tracking-wider opacity-70">Melhora Semanal</div>
                   <div className="text-5xl font-black">+14%</div>
                </div>
                <div className="p-8 bg-white/5 rounded-[32px] border border-white/10">
                   <AlertCircle size={24} className="mb-4 text-cyan-400" />
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gatilho Principal</div>
                   <div className="text-2xl font-bold">Laticínios / Lactose</div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          <Activity size={20} className="text-cyan-500" />
          <span className="text-sm font-bold">GastroTech SaaS <span className="text-gray-500 font-medium ml-2">by BIOGSAÚDE</span></span>
        </div>
        
        <p className="text-[10px] text-gray-500 font-medium text-center uppercase tracking-[0.1em]">
          © 2026 BIOGSAÚDE. Todos os direitos reservados. Plataforma em conformidade com LGPD e CFM.
        </p>

        <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </footer>
    </div>
  );
}

export default App;