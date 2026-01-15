
import { FormData, MonthlyData, CalculationResult } from '../types';

export const calculateCompoundInterest = (formData: FormData): CalculationResult => {
  const { initialValue, monthlyValue, interestRate, rateType, period, periodType } = formData;

  // Conversion of rates: Yearly to Monthly if needed
  const monthlyRate = rateType === 'yearly' 
    ? Math.pow(1 + interestRate / 100, 1 / 12) - 1 
    : interestRate / 100;
  
  const totalMonths = periodType === 'years' ? period * 12 : period;

  let accumulatedValue = initialValue;
  let totalInvested = initialValue;
  let totalInterest = 0;
  const monthlyData: MonthlyData[] = [];

  // Month 0 (Starting point)
  monthlyData.push({
    month: 0,
    interest: 0,
    totalInvested: initialValue,
    totalInterest: 0,
    totalAccumulated: initialValue,
  });

  for (let m = 1; m <= totalMonths; m++) {
    // 1. Interest on what was already there
    const interestForMonth = accumulatedValue * monthlyRate;
    accumulatedValue += interestForMonth;
    totalInterest += interestForMonth;

    // 2. Add monthly contribution
    accumulatedValue += monthlyValue;
    totalInvested += monthlyValue;

    monthlyData.push({
      month: m,
      interest: interestForMonth,
      totalInvested: totalInvested,
      totalInterest: totalInterest,
      totalAccumulated: accumulatedValue,
    });
  }
  
  if (totalMonths === 0) {
    return {
      finalAmount: initialValue,
      totalInvested: initialValue,
      totalInterest: 0,
      monthlyData: [monthlyData[0]],
    };
  }

  return {
    finalAmount: accumulatedValue,
    totalInvested: totalInvested,
    totalInterest: totalInterest,
    monthlyData,
  };
};
