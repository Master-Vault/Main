import React from 'react';
import IndividualBalances from './IndividualBalances.jsx';

const BalanceCard = ({ balanceArray }) => {
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
    <div className='BalanceCard Card'>
      <div className='cardHeader'>Balances</div>
      {balanceElems}
    </div>
  );
};

export default BalanceCard;
