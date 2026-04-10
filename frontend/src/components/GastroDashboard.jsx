import React, { useState, useEffect } from 'react';

const GastroDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulação de busca no banco de dados
  useEffect(() => {
    const fetchData = async () => {
      // Aqui no futuro entrará a conexão real com o banco
      setTimeout(() => {
        setData({
          paciente: "Paciente Exemplo",
          evolucao: [65, 59, 80, 81, 56, 55, 40],
          adesao: "85%"
        });
        setLoading(false);
      }, 1500);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gastro-light text-gastro-primary">
        <p className="text-xl font-semibold animate-pulse">Consultando banco de dados médico...</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gastro-primary">Dashboard de Evolução</h1>
        <p className="text-gray-600">Acompanhamento clínico: {data.paciente}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-gastro-light rounded-xl shadow-sm border border-blue-100">
          <h3 className="text-sm font-medium text-gastro-primary uppercase">Adesão ao Tratamento</h3>
          <p className="text-4xl font-bold text-gastro-primary">{data.adesao}</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-sm border border-green-100">
          <h3 className="text-sm font-medium text-gastro-accent uppercase">Redução de Sintomas</h3>
          <p className="text-4xl font-bold text-gastro-accent">-32%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-64 flex items-center justify-center">
        <p className="text-gray-400 italic">[Espaço reservado para o Gráfico de Evolução Semanal]</p>
      </div>
    </div>
  );
};

export default GastroDashboard;