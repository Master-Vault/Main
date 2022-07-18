import React from 'react';

const CashFlowCard = (props) => {
  const { savings, monthlyIncome } = props;
  const cashFlow = monthlyIncome - savings[0];
  const resultToDecimal = cashFlow.toFixed(2);
  return <div className='cardHeader Card'>Cash Flow ${resultToDecimal} </div>;
};

export default CashFlowCard;
