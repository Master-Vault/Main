import React from 'react';

const MonthlyExpenseCard = (props) => {
  const { savings } = props;
  const monthlyExpenses = Math.abs(savings[0]);
  return (
    <div className='MonthlyExpenseCard Card'>
      Monthly Expenses {monthlyExpenses}
    </div>
  );
};

export default MonthlyExpenseCard;
