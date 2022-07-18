import React from 'react';

const MonthlyIncomeCard = (props) => {
  const { monthlyIncome } = props;
  return (
    <div>
      <div className='cardHeader Card'> Monthly Income {monthlyIncome} </div>
    </div>
  );
};

export default MonthlyIncomeCard;
