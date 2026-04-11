import React, { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, BarChart3, BrainCircuit, Target, Star, 
  Check, Globe, Activity, TrendingUp, AlertCircle, Calendar 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';

// --- CONFIGURAÇÃO DE CORES ---
const COLORS = ['#4f46e5', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

// --- 1. COMPONENTE: LANDING PAGE PREMIUM ---
const LandingSection = () => (
  <div className="bg-white">
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 rounded-lg text-white"><BrainCircuit size={20} /></div>
          <span className="text-xl font-black tracking-tighter">GastroTech <span className="text-indigo-600">Solutions</span></span>
        </div>
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold">Começar Agora</button>
      </nav>
    </header>

    <section className="pt-32 pb-20 bg-gray-50/50 text-center px-6">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 mb-6">
        <Zap size={14} /><span className="text-xs font-bold uppercase">Saúde com Inteligência Artificial</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
        Decisões Clínicas com <span className="text-indigo-600">Inteligência Artificial</span>.
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        Monitoramento preditivo e análise em tempo real para a gastroenterologia moderna.
      </p>
    </section>
  </div>
);

// --- 2. COMPONENTE: GASTRO AI ANALYZER ---
const GastroAIModule = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState(null);
  const [form, setForm] = useState({ sintoma: '', dieta: '', estresse: 'medium' });

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/gastro-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setInsight(data);
    } catch {
      setInsight({ correlation: "85%", message: "Padrão detectado: Alta ingestão de FODMAPs.", suggestion: "Reduzir laticínios por 48h." });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-[32px] shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Activity className="text-indigo-600"/> Simulador GastroAI</h3>
      <div className="space-y-4">
        <input className="w-full p-4 rounded-2xl bg-gray-50 border-0 ring-1 ring-gray-200" placeholder="Sintoma (ex: Distensão Abdominal)" onChange={e => setForm({...form, sintoma: e.target.value})} />
        <textarea className="w-full p-4 rounded-2xl bg-gray-50 border-0 ring-1 ring-gray-200" placeholder="Dieta recente..." onChange={e => setForm({...form, dieta: e.target.value})} />
        <button onClick={handleAnalyze} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
          {loading ? "Analisando..." : "Gerar Insight por IA"}
        </button>
      </div>
      {insight && (
        <div className="mt-6 p-6 bg-indigo-50 rounded-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between font-bold text-indigo-600 text-xs uppercase mb-2"><span>Insight da IA</span><span>{insight.correlation}</span></div>
          <p className="text-gray-800 font-medium mb-2">{insight.message}</p>
          <div className="text-sm text-gray-600 italic">Dica: {insight.suggestion}</div>
        </div>
      )}
    </div>
  );
};

// --- 3. COMPONENTE: DASHBOARD ---
const DashboardSection = () => {
  const mockData = [
    { name: 'Seg', intensity: 4 }, { name: 'Ter', intensity: 7 }, 
    { name: 'Qua', intensity: 3 }, { name: 'Qui', intensity: 8 }, 
    { name: 'Sex', intensity: 5 }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-[32px] shadow-2xl border border-gray-100 mt-20">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-black tracking-tight">Análise do Paciente</h2>
        <div className="flex gap-2 p-2 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 uppercase"><Calendar size={14}/> Últimos 7 Dias</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="h-64 bg-gray-50 p-6 rounded-3xl">
          <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase">Evolução da Intensidade</h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Line type="monotone" dataKey="intensity" stroke="#4f46e5" strokeWidth={5} dot={{r:6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 bg-indigo-600 rounded-3xl text-white">
            <TrendingUp size={24} className="mb-2" />
            <div className="text-sm opacity-80">Melhora Semanal</div>
            <div className="text-3xl font-black">+14%</div>
          </div>
          <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
            <AlertCircle size={24} className="mb-2 text-emerald-600" />
            <div className="text-sm text-emerald-800">Gatilho Principal</div>
            <div className="text-xl font-bold text-emerald-900">Laticínios / Lactose</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. COMPONENTE: PRICING ---
const PricingSection = () => (
  <section className="py-20 text-center px-6">
    <h2 className="text-4xl font-black mb-12">Planos <span className="text-indigo-600">Flexíveis.</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="p-8 border border-gray-200 rounded-[32px] text-left">
        <h3 className="text-xl font-bold mb-4">Essencial</h3>
        <div className="text-4xl font-black mb-6">R$49<span className="text-sm text-gray-400">/mês</span></div>
        <button className="w-full py-4 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50">Iniciar Teste Grátis</button>
      </div>
      <div className="p-8 bg-gray-950 text-white rounded-[32px] text-left relative overflow-hidden ring-4 ring-indigo-600/20">
        <div className="absolute top-4 right-4 bg-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">Mais Popular</div>
        <h3 className="text-xl font-bold mb-4">Clínico Pro</h3>
        <div className="text-4xl font-black mb-6">R$99<span className="text-sm text-gray-500">/mês</span></div>
        <button className="w-full py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-500 transition-all">Acesso Completo</button>
      </div>
    </div>
  </section>
);

// --- APP PRINCIPAL ---
export default function App() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <LandingSection />
      <GastroAIModule />
      <DashboardSection />
      <PricingSection />
      <footer className="text-center text-gray-400 text-xs mt-20">
        © 2026 GastroTech Solutions - Análise de IA de Nível Médico
      </footer>
    </div>
  );
}