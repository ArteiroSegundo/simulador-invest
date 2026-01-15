
import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg mt-10 space-y-12 text-slate-700 leading-relaxed border border-slate-100">
      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-slate-100 pb-3">Guia do Simulador de Juros Compostos</h2>
        <p>Nossa ferramenta foi projetada para ser intuitiva e poderosa, permitindo que você visualize o potencial de crescimento dos seus investimentos de forma clara e objetiva. Siga os passos abaixo para começar:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2C3FA5]">
            <span className="font-bold block text-[#2C3FA5]">Valor Inicial</span> Montante que você já possui para começar a investir.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2C3FA5]">
            <span className="font-bold block text-[#2C3FA5]">Valor Mensal</span> Quantia que planeja adicionar ao investimento todos os meses.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2C3FA5]">
            <span className="font-bold block text-[#2C3FA5]">Taxa de Juros</span> Rentabilidade esperada (pode ser anual ou mensal).
          </li>
          <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2C3FA5]">
            <span className="font-bold block text-[#2C3FA5]">Período</span> Por quanto tempo o dinheiro ficará investido.
          </li>
        </ul>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-slate-100 pb-3">Qual é a fórmula e como se calculam os juros compostos?</h2>
        <div className="bg-slate-900 text-white p-6 rounded-xl font-mono text-center shadow-inner">
          M = C * (1 + i)<sup>t</sup>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
          <p><strong className="text-[#2C3FA5]">M:</strong> Montante final acumulado</p>
          <p><strong className="text-[#2C3FA5]">C:</strong> Capital inicial (investimento original)</p>
          <p><strong className="text-[#2C3FA5]">i:</strong> Taxa de juros (formato decimal)</p>
          <p><strong className="text-[#2C3FA5]">t:</strong> Tempo (mesmo período da taxa)</p>
        </div>
        <p>Nossa calculadora expande essa fórmula para incluir aportes mensais recorrentes, simulando a realidade da maioria dos investidores.</p>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-slate-100 pb-3">Juros Simples vs. Juros Compostos</h2>
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <p className="mb-4">Imagine R$ 10.000 a 10% ao ano por 3 anos:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800">Juros Simples</h4>
              <p className="text-sm">Rende apenas sobre o valor original.</p>
              <ul className="text-sm list-disc list-inside">
                <li>Ano 1: R$ 1.000</li>
                <li>Ano 2: R$ 1.000</li>
                <li>Ano 3: R$ 1.000</li>
                <li className="font-bold text-[#2C3FA5]">Total: R$ 13.000</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800">Juros Compostos</h4>
              <p className="text-sm">Rende sobre o valor total acumulado.</p>
              <ul className="text-sm list-disc list-inside">
                <li>Ano 1: R$ 1.000</li>
                <li>Ano 2: R$ 1.100 (10% de 11k)</li>
                <li>Ano 3: R$ 1.210 (10% de 12.1k)</li>
                <li className="font-bold text-[#2C3FA5]">Total: R$ 13.310</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="italic text-slate-500 text-center">"Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha. Aquele que não entende, paga." — Albert Einstein</p>
      </article>
    </div>
  );
};
