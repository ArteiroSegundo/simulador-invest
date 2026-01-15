
import React from 'react';
import { CalculationResult } from '../types';
import { formatCurrency } from '../utils/formatters';
import { EvolutionChart } from './EvolutionChart';
import { EvolutionTable } from './EvolutionTable';

interface ResultCardProps {
  label: string;
  value: number;
  highlight?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, highlight = false }) => (
  <div className={`p-6 rounded-xl flex-1 text-center transition-all shadow-md ${highlight ? 'bg-[#2C3FA5] text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'}`}>
    <p className={`text-xs uppercase tracking-wider font-bold mb-1 ${highlight ? 'text-indigo-200' : 'text-slate-500'}`}>{label}</p>
    <p className={`text-2xl md:text-3xl font-extrabold ${highlight ? 'text-white' : 'text-[#2C3FA5]'}`}>{formatCurrency(value)}</p>
  </div>
);

interface ResultsDisplayProps {
  result: CalculationResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mt-10 space-y-10 border border-slate-100">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#2C3FA5]">Resultado da Simulação</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <ResultCard label="Valor total final" value={result.finalAmount} highlight />
        <ResultCard label="Total investido" value={result.totalInvested} />
        <ResultCard label="Total em juros" value={result.totalInterest} />
      </div>

      <div className="pt-4 border-t border-slate-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-700">Evolução do Patrimônio</h3>
        </div>
        <EvolutionChart data={result.monthlyData} />
      </div>

      <div className="pt-4 border-t border-slate-50">
        <h3 className="text-xl font-bold mb-6 text-slate-700">Tabela Detalhada (Mensal)</h3>
        <EvolutionTable data={result.monthlyData} />
      </div>
    </div>
  );
};
