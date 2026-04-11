import React, { useState } from 'react';
import { 
  Zap, BrainCircuit, Activity, TrendingUp, AlertCircle, 
  Calendar, LayoutDashboard, Stethoscope, CreditCard, Home, Shield
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const App = () => {
  const mockData = [
    { name: 'Seg', intensity: 4 }, { name: 'Ter', intensity: 7 }, 
    { name: 'Qua', intensity: 3 }, { name: 'Qui', intensity: 8 }, 
    { name: 'Sex', intensity: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans">
      
      {/* --- HEADER COM LOGO EM CÓDIGO (SEM IMAGEM QUEBRADA) --- */}
      <header className="fixed top-0 w-full bg-[#021526]/90 backdrop-blur-md z-50 py-4 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO BIOGSAÚDE VIA CÓDIGO */}
          <div className="flex items-center gap-3 cursor-pointer group"></div>