import React, { useState } from 'react';

export default function App() {
  const [aba, setAba] = useState('ia');
  const [texto, setTexto] = useState('');
  const [logs, setLogs] = useState([]);

  // Função de Auditoria Clínica
  const processarDecisao = () => {
    console.log("Evento de clique detectado no botão IA");
    
    if (!texto) {
      console.warn("Tentativa de processamento sem texto.");
      alert("Por favor, insira dados clínicos para análise.");
      return;
    }

    const novoLog = {
      id: Date.now(),
      data: new Date().toLocaleString('pt-BR'),
      conteudo: texto,
      status: "VERIFICADO - FINEP PROTOCOL"
    };

    console.log("Novo Log gerado:", novoLog);
    setLogs([novoLog, ...logs]);
    setAba('logs');
    alert("Decisão Clínica Processada e Registrada no Log.");
  };

  return (
    <div style={{ backgroundColor: '#021526', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      
      {/* HEADER DESKTOP */}
      <header style={{ backgroundColor: '#082635', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00afb9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ backgroundColor: '#00afb9', padding: '8px', borderRadius: '8px', color: '#021526', fontWeight: 'bold' }}>BS</div>
          <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '-1px' }}>BIOG<span style={{ color: '#00afb9' }}>SAÚDE</span></h1>
        </div>
        <div style={{ fontSize: '12px', color: '#00afb9', border: '1px solid #00afb9', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
          Módulo Pericial Ativo
        </div>
      </header>

      {/* ÁREA DE TRABALHO */}
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* NAVEGAÇÃO INTERNA (BOTÕES) */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <button 
            onClick={() => { console.log("Trocou para IA"); setAba('ia'); }}
            style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: aba === 'ia' ? '#00afb9' : '#082635', color: aba === 'ia' ? '#021526' : 'white' }}
          >
            Analisador Preditivo
          </button>
          <button 
            onClick={() => { console.log("Trocou para Logs"); setAba('logs'); }}
            style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: aba === 'logs' ? '#00afb9' : '#082635', color: aba === 'logs' ? '#021526' : 'white' }}
          >
            Histórico de Decisões
          </button>
        </div>

        {/* TELAS */}
        {aba === 'ia' ? (
          <div style={{ backgroundColor: '#082635', padding: '30px', borderRadius: '20px', border: '1px solid #1a3a4a' }}>
            <h2 style={{ marginTop: 0 }}>Entrada de Dados Clínicos</h2>
            <textarea 
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Descreva aqui o caso para análise pericial..."
              style={{ width: '100%', height: '200px', backgroundColor: '#010b13', color: 'white', border: '1px solid #1a3a4a', borderRadius: '12px', padding: '20px', fontSize: '16px', marginBottom: '20px', boxSizing: 'border-box' }}
            />
            <button 
              onClick={processarDecisao}
              style={{ width: '100%', padding: '20px', backgroundColor: '#00afb9', color: '#021526', border: 'none', borderRadius: '12px', fontWeight: '900', fontSize: '18px', cursor: 'pointer' }}
            >
              EXECUTAR COMANDO DE IA
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {logs.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#444' }}>Nenhum log pericial registrado.</p>
            ) : (
              logs.map(log => (
                <div key={log.id} style={{ backgroundColor: '#010b13', padding: '20px', borderRadius: '15px', borderLeft: '5px solid #00afb9' }}>
                  <div style={{ color: '#00afb9', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>{log.data} | {log.status}</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.6' }}>{log.conteudo}</div>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#444', fontSize: '10px', letterSpacing: '2px' }}>
        BIOGSAÚDE INFRASTRUCTURE | POWERED BY MCTI - FINEP
      </footer>
    </div>
  );
}