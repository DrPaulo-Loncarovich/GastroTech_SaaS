import React from 'react';

const GastroPricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "9",
      features: ["Acompanhamento de Sintomas", "Relatório Mensal", "Dicas de Dieta"],
      highlight: false
    },
    {
      name: "Profissional",
      price: "19",
      features: ["Análise por IA Ilimitada", "Suporte Prioritário", "Gráficos de Evolução Real", "Exportação para Médico"],
      highlight: true
    }
  ];

  return (
    <div className="py-12 bg-gastro-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gastro-primary mb-4">Escolha seu Plano de Saúde Digital</h2>
          <p className="text-gray-600">Tecnologia de ponta para o seu bem-estar gastrointestinal.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 ${
                plan.highlight ? 'bg-white border-4 border-gastro-accent relative' : 'bg-white border border-gray-100'
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-gastro-accent text-white px-4 py-1 rounded-bl-lg text-sm font-bold uppercase">
                  Mais Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gastro-primary">${plan.price}</span>
                <span className="text-gray-500 text-lg">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="mr-2 text-gastro-accent">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${
                plan.highlight 
                ? 'bg-gastro-accent hover:bg-green-600 text-white' 
                : 'bg-gastro-primary hover:bg-blue-800 text-white'
              }`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GastroPricing;