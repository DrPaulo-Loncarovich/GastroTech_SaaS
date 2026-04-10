app.get('/api/gastro-stats/:userId', async (req, res) => {
  try {
    const logs = await UserLog.find({ userId: req.params.userId }).sort({ timestamp: 1 });
    
    // 1. Linha do Tempo: Intensidade vs Data
    const timeline = logs.map(log => ({
      name: new Date(log.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      intensity: log.sintoma.intensity || 5
    }));

    // 2. Frequência de Gatilhos (Contagem de alimentos nas crises)
    const triggerMap = {};
    logs.filter(l => l.sintoma.intensity > 5).forEach(log => {
      log.dieta.forEach(item => {
        triggerMap[item] = (triggerMap[item] || 0) + 1;
      });
    });

    const triggers = Object.entries(triggerMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value).slice(0, 5);

    res.json({ timeline, triggers });
  } catch (error) {
    res.status(500).json({ error: "Analytics failed" });
  }
});