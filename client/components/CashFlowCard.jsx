import React from 'react';

const CashFlowCard = (props) => {
  const { savings, monthlyIncome } = props;
  const cashFlow = monthlyIncome + savings[0];
  const resultToDecimal = cashFlow.toFixed(2);

  return (
    <div className='stats-overview-card'>
      <div className='cardHeader'> Cash Flow </div>
      <div className='cardAmount'>${resultToDecimal}</div>
    </div>
  );
};

export default CashFlowCard;
