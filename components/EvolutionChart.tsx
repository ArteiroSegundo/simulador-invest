
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthlyData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface EvolutionChartProps {
  data: MonthlyData[];
}

export const EvolutionChart: React.FC<EvolutionChartProps> = ({ data }) => {
  // Aggregate data for years if long period
  const chartData = data.filter(d => d.month % 12 === 0 || d.month === data.length - 1).map(d => ({
    name: `Ano ${Math.floor(d.month / 12)}`,
    'Total Acumulado': d.totalAccumulated,
    'Valor Investido': d.totalInvested,
  }));
    
  if (data.length <= 13) {
    const monthlyChartData = data.map(d => ({
      name: `Mês ${d.month}`,
      'Total Acumulado': d.totalAccumulated,
      'Valor Investido': d.totalInvested,
    }));
    return <BaseChart data={monthlyChartData} />;
  }

  return <BaseChart data={chartData} />;
};

const BaseChart = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full h-[300px] md:h-[400px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => 
              new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short' }).format(value)
            }
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend iconType="circle" />
          <Line 
            type="monotone" 
            dataKey="Valor Investido" 
            stroke="#64748b" 
            strokeWidth={3} 
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }} 
          />
          <Line 
            type="monotone" 
            dataKey="Total Acumulado" 
            stroke="#2C3FA5" 
            strokeWidth={3} 
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
