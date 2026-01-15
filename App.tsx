
import React, { useState, useRef } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { InfoSection } from './components/InfoSection';
import { FormData, CalculationResult } from './types';
import { calculateCompoundInterest } from './utils/calculator';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (formData: FormData) => {
    try {
      const calculationResult = calculateCompoundInterest(formData);
      setResult(calculationResult);
      // Wait for DOM update before scrolling
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao calcular. Verifique os valores informados.');
    }
  };

  const handleClear = () => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="bg-[#2C3FA5] py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            Simulador Invest
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 md:p-10 max-w-5xl">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Simulador de Juros Compostos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubra o quanto seu dinheiro pode render ao longo do tempo com o poder dos juros sobre juros.
          </p>
        </header>

        <div className="relative">
          <CalculatorForm onCalculate={handleCalculate} onClear={handleClear} />
        </div>

        {result && (
          <div ref={resultsRef} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ResultsDisplay result={result} />
          </div>
        )}
        
        <InfoSection />

        <footer className="text-center mt-20 py-10 border-t border-slate-200">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-8 h-8 rounded-full bg-[#2C3FA5] flex items-center justify-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
             </div>
             <span className="font-bold text-slate-900">Simulador Invest</span>
          </div>
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Simulador de Juros Compostos. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
