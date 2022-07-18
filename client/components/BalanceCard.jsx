import React from 'react';
import IndividualBalances from './IndividualBalances.jsx';

const BalanceCard = ({ balanceArray }) => {
  console.log(balanceArray)
  const balanceElems = balanceArray.map((balanceData, i) => {
    return (
      <IndividualBalances
        account={balanceData.name}
        key={balanceData.account_id}
        info={balanceData}
      />
    );
  });

  return (
    <div className='stats-accounts-card stats-balances card'>
      <div className='cardHeader'>Balance</div>
      {balanceElems}
    </div>
  );
};

export default BalanceCard;