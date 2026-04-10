import React, { useState } from 'react';

const GastroAIModule = () => {
  // Estado para armazenar o texto do paciente e o status de carregamento
  const [sintomas, setSintomas] = useState('');
  const [analisando, setAnalisando] = useState(false);

  const realizarAnalise = () => {
    setAnalisando(true);
    // Simulação de integração com o banco de dados/IA no futuro
    setTimeout(() => {
      setAnalisando(false);
      alert("Análise concluída com sucesso! (Simulação)");
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-blue-50 my-10 font-sans">
      <div className="flex items-center mb-6">
        <div className="bg-gastro-primary p-3 rounded-2xl mr-4 text-white">
          <span className="text-2xl">🧠</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gastro-primary">Assistente GastroAI</h2>
          <p className="text-gray-500 text-sm">Descreva como você se sente para uma triagem inteligente.</p>
        </div>
      </div>

      <textarea
        className="w-full h-40 p-4 border-2 border-gray-100 rounded-2xl focus:border-gastro-primary focus:outline-none transition-all resize-none text-gray-700 placeholder-gray-400"
        placeholder="Ex: Sinto um refluxo constante após o jantar e dor abdominal leve..."
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      />

      <button
        onClick={realizarAnalise}
        disabled={analisando || !sintomas}
        className={`w-full mt-6 py-4 rounded-2xl font-bold text-white transition-all shadow-md ${
          analisando || !sintomas 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-gastro-primary hover:bg-blue-800 active:scale-95'
        }`}
      >
        {analisando ? "A IA está processando seus dados..." : "Iniciar Análise Clínica"}
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <p className="text-xs text-blue-800 leading-relaxed text-center">
          <strong>Nota importante:</strong> Esta ferramenta utiliza inteligência artificial para triagem informativa e não substitui o diagnóstico médico profissional.
        </p>
      </div>
    </div>
  );
};

export default GastroAIModule;