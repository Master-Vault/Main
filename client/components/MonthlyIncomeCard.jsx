import React from 'react';

const MonthlyIncomeCard = (props) => {
  const { monthlyIncome } = props;
  return (
    <div className='Card'>
      <div className='cardHeader'> Monthly Income </div>
      <div>${monthlyIncome}</div>
    </div>
  );
};

export default MonthlyIncomeCard;
