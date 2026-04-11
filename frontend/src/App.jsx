import React, { useState } from 'react';
import { 
  Zap, BrainCircuit, Activity, TrendingUp, AlertCircle, 
  Calendar, LayoutDashboard, Stethoscope, CreditCard, Home, Shield
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// --- CONFIGURAÇÃO DE DESIGN (ESTILO BOLT DARK) ---
// Background: #021526 | Accent: #00afb9

const App = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState(null);

  const mockData = [
    { name: 'Seg', intensity: 4 }, { name: 'Ter', intensity: 7 }, 
    { name: 'Qua', intensity: 3 }, { name: 'Qui', intensity: 8 }, 
    { name: 'Sex', intensity: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans selection:bg-[#00afb9]/30">
      
      {/* --- HEADER COM LOGO INTEGRADA VIA CÓDIGO --- */}
      <header className="fixed top-0 w-full bg-[#021526]/90 backdrop-blur-md z-50 py-4 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO BIOGSAÚDE */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 bg-[#00afb9] rounded-lg text-[#021526] shadow-lg shadow-[#00afb9]/20 group-hover:scale-110 transition-transform">
              <Activity size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                BIOG<span className="text-[#00afb9]">SAÚDE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                Gastroenterologia & IA
              </span>
            </div>
          </div>
          
          {/* MENU DE NAVEGAÇÃO ESTILO BOLT */}
          <div className="hidden lg:flex items-center bg-[#082635] rounded-xl px-2 py-1 border border-white/5 shadow-inner">
            <button className="flex items-center gap-2.5 px-5 py-2.5 bg-[#0a3a4a] text-[#00afb9] rounded-lg text-xs font-bold transition-all shadow-md">
              <Home size={15}/> Início
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all">
              <LayoutDashboard size={15}/> Dashboard
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all">
              <Stethoscope size={15}/> Triagem IA
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all">
              <CreditCard size={15}/> Planos
            </button>
          </div>

          <button className="px-6 py-3 bg-[#00afb9] text-[#021526] rounded-xl text-sm font-black hover:bg-[#00d1d1] transition-all hover:scale-105 shadow-lg shadow-[#00afb9]/20">
            Começar Grátis
          </button>
        </nav>
      </header>

      {/* --- SEÇÃO PRINCIPAL (HERO) --- */}
      <section className="pt-52 pb-24 px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="p-4 rounded-full bg-[#00afb9]/10 border-2 border-[#00afb9]/30 text-[#00afb9] shadow-xl shadow-[#00afb9]/10">
            <Shield size={44} className="opacity-80" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-8 leading-[1.1]">
          Pronto para revolucionar seu consultório?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed opacity-90">
          Junte-se a mais de 340 especialistas que já utilizam a GastroTech para oferecer um cuidado digestivo de excelência e conformidade total.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto px-12 py-5 bg-[#00afb9] text-[#021526] rounded-2xl text-lg font-extrabold hover:bg-[#00d1d1] transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-[#00afb9]/20">
            <Zap size={22} /> Ver Planos e Preços
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm group">
            <BrainCircuit size={22} className="text-[#00afb9] group-hover:scale-110 transition-transform" /> Testar Triagem IA
          </button>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <div className="max-w-6xl mx-auto px-6 mb-32 relative">
        <div className="bg-[#082038]/60 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 md:p-14 shadow-2xl relative z-10">
           <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/10">
              <h2 className="text-3xl font-bold tracking-tight text-[#00afb9]">Análise do Paciente</h2>
              <div className="px-5 py-2 bg-white/5 rounded-xl text-xs font-bold text-gray-400 uppercase tracking-widest border border-white/5 flex items-center gap-2.5 backdrop-blur-sm">
                <Calendar size={16}/> Últimos 7 Dias
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
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 shadow-lg">
                   <AlertCircle size={28} className="mb-5 text-[#00afb9]" />
                   <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Gatilho Principal</div>
                   <div className="text-3xl font-bold">Laticínios / Lactose</div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          <div className="p-1.5 bg-[#00afb9] rounded text-[#021526]"><Activity size={14}/></div>
          <span className="text-sm font-bold text-gray-200">GastroTech SaaS <span className="text-gray-600 font-medium ml-2">by BIOGSAÚDE</span></span>
        </div>
        
        <p className="text-[10px] text-gray-600 font-medium text-center uppercase tracking-[0.1em]">
          © 2026 BIOGSAÚDE. Todos os direitos reservados. Plataforma em conformidade com LGPD e CFM.
        </p>

        <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </footer>
    </div>
  );
}

export default App;