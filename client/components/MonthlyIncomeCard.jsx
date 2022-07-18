import React from 'react';

const MonthlyIncomeCard = (props) => {
  const { monthlyIncome } = props;
  return (
    <div className='stats-overview-card'>
      <div className='cardHeader'> Monthly Income </div>
      <div className='cardAmount'>${monthlyIncome}</div>
    </div>
  );
};

export default MonthlyIncomeCard;
