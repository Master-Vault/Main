import React from 'react';

const IndividualBalances = ({ account, info }) => {
  const { balance_available, balance_current, name } = info;

  return (
    <div className='balanceItems'>
      <div className='acc_name'>{name}</div>
      <div className='balance'> Available Balance: ${balance_available}</div>
      <div className='balance'> Current Balance: ${balance_current}</div>
    </div>
  );
};
export default IndividualBalances;