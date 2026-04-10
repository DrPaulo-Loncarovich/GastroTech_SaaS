import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Activity, AlertTriangle, TrendingDown } from 'lucide-react';

const COLORS = ['#4F46E5', '#818CF8', '#A5B4FC', '#C7D2FE'];

export const GastroDashboard = ({ userId }) => {
  const [data, setData] = useState({ timeline: [], triggers: [] });

  useEffect(() => {
    fetch(`http://localhost:3001/api/gastro-stats/${userId}`)
      .then(res => res.json())
      .then(json => setData(json));
  }, [userId]);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Avg. Intensity" value="4.2" icon={<Activity className="text-blue-600"/>} color="bg-blue-50" />
        <StatCard title="Improvement" value="+12%" icon={<TrendingDown className="text-emerald-600"/>} color="bg-emerald-50" />
        <StatCard title="Main Trigger" value="Lactose" icon={<AlertTriangle className="text-amber-600"/>} color="bg-amber-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1: Sintomas vs Tempo */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Symptom Evolution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.timeline}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Line type="monotone" dataKey="intensity" stroke="#4F46E5" strokeWidth={4} dot={{r: 4, fill: '#4F46E5', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Frequência de Gatilhos */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Top Dietary Triggers</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.triggers} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={80} tick={{fontSize: 12, fontWeight: 600}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
                  {data.triggers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-3xl ${color} flex items-center justify-between shadow-sm`}>
    <div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{title}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
    </div>
    <div className="p-3 bg-white rounded-2xl shadow-sm">{icon}</div>
  </div>
);