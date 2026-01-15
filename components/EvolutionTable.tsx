
import React from 'react';
import { MonthlyData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface EvolutionTableProps {
  data: MonthlyData[];
}

export const EvolutionTable: React.FC<EvolutionTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50 sticky top-0 z-10">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Mês</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Juros</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Total Investido</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Total Juros</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Total Acumulado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row) => (
              <tr key={row.month} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">{row.month}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{formatCurrency(row.interest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{formatCurrency(row.totalInvested)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{formatCurrency(row.totalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#2C3FA5]">{formatCurrency(row.totalAccumulated)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
