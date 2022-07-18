import React from 'react';

const IndividualBalances = ({ account, info }) => {
  const { balance_available, balance_current, name } = info;

  return (
    <div className='IndividualBalances'>
      Account: {name}, Balance Available: {balance_available}, Balance Current:{' '}
      {balance_current}
    </div>
  );
};
export default IndividualBalances;
