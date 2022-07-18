import React from 'react';

const MonthlyExpenseCard = (props) => {
  const { savings } = props;
  const monthlyExpenses = Math.abs(savings[0]).toFixed(2);
  return (
    <div className='stats-overview-card'>
      <div className='cardHeader'> Monthly Expenses </div>
      <div className='cardAmount'>${monthlyExpenses}</div>
    </div>
  );
};

export default MonthlyExpenseCard;
