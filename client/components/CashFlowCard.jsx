import React from 'react';

const CashFlowCard = (props) => {
  const { savings, monthlyIncome } = props;
  const cashFlow = monthlyIncome + savings[0];
  const resultToDecimal = cashFlow.toFixed(2);
  console.log(1);

  return (
    <div className='Card'>
      <div className='cardHeader'> Cash Flow </div>
      <div>${resultToDecimal}</div>
    </div>
  );
};

export default CashFlowCard;
