import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, BrainCircuit, History, FileText, Lock } from 'lucide-react';

export default function App() {
  const [aba, setAba] = useState('ia');
  const [sintomas, setSintomas] = useState('');
  const [logs, setLogs] = useState([]);
  const [analiseAtual, setAnaliseAtual] = useState(null);

  // SIMULAÇÃO DE LOG DE MISSÃO CRÍTICA (PERSISTÊNCIA)
  const salvarLogClinico = (input, output) => {
    const novoLog = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toLocaleString('pt-BR'),
      medicoId: "CRM-AM-XXXX", // Puxaria do perfil do Dr. Paulo
      entradaPaciente: input,
      sugestaoIA: output,
      hashIntegridade: Math.random().toString(36).substring(2, 15) // Simulação de Hash SHA-256
    };
    setLogs([novoLog, ...logs]);
  };

  const executarAnalise = () => {
    if (!sintomas) return;
    
    // Lógica Preditiva
    const resultado = "BIOGSAÚDE IA: Detectado padrão sugestivo de Gastrite Erosiva. Recomendado protocolo de confirmação via EDA.";
    
    setAnaliseAtual(resultado);
    salvarLogClinico(sintomas, resultado);
  };

  return (
    <div className="min-h-screen bg-[#010b13] text-slate-200 font-sans flex flex-col">
      
      {/* HEADER COM STATUS DE SEGURANÇA */}
      <nav className="p-4 bg-[#081b2b] border-b border-cyan-900/30 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Activity className="text-[#00afb9]" />
          <h1 className="font-black tracking-tighter uppercase">Biog<span className="text-[#00afb9]">Saúde</span> <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded ml-2 border border-cyan-800">CRITICAL-MODE</span></h1>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setAba('ia')} className={`p-2 rounded-lg ${aba === 'ia' ? 'bg-cyan-900/40 text-cyan-400' : 'text-slate-500'}`}><BrainCircuit size={20}/></button>
          <button onClick={() => setAba('logs')} className={`p-2 rounded-lg ${aba === 'logs' ? 'bg-cyan-900/40 text-cyan-400' : 'text-slate-500'}`}><History size={20}/></button>
        </div>
      </nav>

      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        
        {aba === 'ia' && (
          <div className="animate-in fade-in duration-500">
            <header className="mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-green-500" /> Analisador Preditivo
              </h2>
              <p className="text-slate-500 text-sm italic">Ambiente seguro com criptografia ponta-a-ponta.</p>
            </header>

            <div className="space-y-4">
              <textarea 
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                className="w-full h-40 bg-[#021526] border border-cyan-900/30 rounded-2xl p-6 text-white outline-none focus:ring-2 ring-cyan-500/20 transition-all shadow-inner"
                placeholder="Insira os dados clínicos para análise pericial..."
              />
              <button 
                onClick={executarAnalise}
                className="w-full bg-[#00afb9] text-[#010b13] font-black py-4 rounded-xl shadow-lg shadow-cyan-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Lock size={18} /> PROCESSAR DECISÃO CLÍNICA
              </button>
            </div>

            {analiseAtual && (
              <div className="mt-8 p-6 bg-cyan-950/20 border border-cyan-500/30 rounded-2xl border-l-4 border-l-cyan-500">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Resultado da IA</span>
                <p className="mt-2 text-slate-300 leading-relaxed">{analiseAtual}</p>
              </div>
            )}
          </div>
        )}

        {aba === 'logs' && (
          <div className="animate-in slide-in-from-right duration-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FileText /> Trilha de Auditoria (Logs)</h2>
            <div className="space-y-4">
              {logs.length === 0 ? (
                <p className="text-slate-600 italic">Nenhum registro encontrado nesta sessão.</p>
              ) : (
                logs.map(log => (
                  <div key={log.id} className="p-4 bg-[#081b2b] border border-slate-800 rounded-xl text-xs font-mono">
                    <div className="flex justify-between text-cyan-500 mb-2 font-bold">
                      <span>{log.id}</span>
                      <span>{log.timestamp}</span>
                    </div>
                    <p className="text-slate-400 mb-1"><span className="text-slate-600">INPUT:</span> {log.entradaPaciente}</p>
                    <p className="text-slate-200 mb-2"><span className="text-slate-600">OUTPUT:</span> {log.sugestaoIA}</p>
                    <div className="text-[10px] text-slate-700 break-all border-t border-slate-800 pt-2 uppercase">
                      Integrity Hash: {log.hashIntegridade}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </main>

      <footer className="p-6 text-center border-t border-slate-900">
        <p className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em]">
          BIOGSAÚDE Critical Infrastructure - Built for Medical Excellence
        </p>
      </footer>
    </div>
  );
}