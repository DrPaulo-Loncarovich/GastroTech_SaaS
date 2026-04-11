import React, { useState } from 'react';
import { 
  Zap, BrainCircuit, Activity, TrendingUp, AlertCircle, 
  Calendar, LayoutDashboard, Stethoscope, CreditCard, Home, Shield, Mail, Phone, Users
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// --- CONFIGURAÇÃO DE CORES DO BOLT ---
// Fundo: #021526 (Dark Navy Deep) | Destaque/Ciano: #00afb9 (Vibrant Teal)

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
      
      {/* --- HEADER ESTILO BOLT COM INTEGRAÇÃO DA LOGO --- */}
      <header className="fixed top-0 w-full bg-[#021526]/90 backdrop-blur-md z-50 py-4 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Integração da Logomarca Profissional */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Se você salvou a imagem na pasta public, ela aparecerá aqui */}
            <img src="/logo-biogsaude.png" alt="Logomarca BIOGSAÚDE" className="h-10 w-auto" />
          </div>
          
          {/* Menu de Navegação Avançado do Bolt (Visível em Desktop) */}
          <div className="hidden lg:flex items-center bg-[#082635] rounded-xl px-2 py-1 border border-white/5 shadow-inner">
            <button className="flex items-center gap-2.5 px-5 py-2.5 bg-[#0a3a4a] text-[#00afb9] rounded-lg text-xs font-bold transition-all shadow-md">
              <Home size={15}/> Início
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all">
              <LayoutDashboard size={15}/> Dashboard
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all relative">
              <Stethoscope size={15}/> Triagem IA
               <span className="absolute top-1 right-1 flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00afb9] opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00afb9]"></span></span>
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 hover:bg-white/5 text-gray-400 rounded-lg text-xs font-bold transition-all">
              <CreditCard size={15}/> Planos
            </button>
          </div>

          <button className="px-6 py-3 bg-[#00afb9] text-[#021526] rounded-xl text-sm font-black hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/20">
            Começar Grátis
          </button>
        </nav>
      </header>

      {/* --- HERO SECTION DO BOLT --- */}
      <section className="pt-52 pb-24 px-6 text-center bg-transparent">
        <div className="flex justify-center mb-10">
          <div className="p-4 rounded-full bg-[#00afb9]/10 border-2 border-[#00afb9]/30 text-[#00afb9] shadow-xl shadow-[#00afb9]/10">
            <Shield size={44} className="opacity-80" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-8 leading-[1.1] text-shadow-xl shadow-[#00afb9]/10">
          Pronto para revolucionar seu consultório?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed opacity-90">
          Junte-se a mais de 340 especialistas que já utilizam a GastroTech para oferecer um cuidado digestivo de excelência e conformidade total.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto px-12 py-5 bg-[#00afb9] text-[#021526] rounded-2xl text-lg font-extrabold hover:bg-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20">
            <Zap size={22} /> Ver Planos e Preços
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm group">
            <BrainCircuit size={22} className="text-[#00afb9] group-hover:scale-110 transition-transform" /> Testar Triagem IA
          </button>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW INTEGRADO NO DESIGN BOLT --- */}
      <div className="max-w-6xl mx-auto px-6 mb-32 relative">
        <div className="absolute inset-0 bg-[#00afb9]/5 blur-[100px] rounded-full opacity-50"></div>
        <div className="bg-[#082038]/60 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 md:p-14 shadow-2xl relative z-10">
           <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/10">
              <h2 className="text-3xl font-bold tracking-tight">Análise do Paciente</h2>
              <div className="px-5 py-2 bg-white/5 rounded-xl text-xs font-bold text-gray-400 uppercase tracking-widest border border-white/5 flex items-center gap-2.5 backdrop-blur-sm shadow-inner">
                <Calendar size={16}/> Últimos 7 Dias
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="h-72 bg-[#05192d]/50 p-8 rounded-3xl border border-white/5 shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#00afb9]/2 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-[10px] font-black text-[#00afb9]/60 uppercase tracking-widest mb-6">Evolução da Intensidade</div>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid stroke="#ffffff" strokeOpacity={0.03} vertical={false} />
                    <XAxis dataKey="name" hide />
                    <Tooltip contentStyle={{backgroundColor: '#082038', borderColor: '#ffffff10', borderRadius: '16px', color: '#fff'}} />
                    <Line type="monotone" dataKey="intensity" stroke="#00afb9" strokeWidth={5} dot={{fill: '#00afb9', r:6}} activeDot={{r:10, strokeWidth:0, fill: '#fff'}} shadow={{color: '#00afb9', blur: 10}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                <div className="p-10 bg-[#00afb9] rounded-[40px] text-[#021526] relative overflow-hidden group shadow-xl">
                   <TrendingUp size={60} className="mb-4 opacity-15 absolute -right-6 -top-6 scale-150 group-hover:rotate-12 transition-transform" />
                   <div className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">Melhora Semanal</div>
                   <div className="text-6xl font-black">+14%</div>
                </div>
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 shadow-lg backdrop-blur-sm">
                   <AlertCircle size={28} className="mb-5 text-[#00afb9]" />
                   <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Gatilho Principal</div>
                   <div className="text-3xl font-bold">Laticínios / Lactose</div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- FOOTER ATUALIZADO DO BOLT --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-[#010c18]">
        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          {/* Logo compacta no rodapé */}
          <img src="/logo-biogsaude.png" alt="BIOGSAÚDE" className="h-6 w-auto" />
          <span className="text-sm font-bold text-gray-200">GastroTech SaaS <span className="text-gray-600 font-medium ml-2">by BIOGSAÚDE</span></span>
        </div>
        
        <p className="text-[10px] text-gray-600 font-medium text-center uppercase tracking-[0.1em] leading-relaxed">
          © 2026 BIOGSAÚDE. Todos os direitos reservados. Plataforma em conformidade total com LGPD e CFM.
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