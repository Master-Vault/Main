import React from 'react';

const BalanceCard = ({ balanceArray }) => {
  //console.log('props1: ', props.balance);
  const first = balanceArray[0];
  console.log('first balance array: ', first);

  // const balanceElems = balanceArray.map((balanceData, i) => {
  //   return (
  //     <IndividualBalances
  //       account={balanceData.name}
  //       key={balanceData.account_id}
  //       info={balanceData}
  //     />
  //   );
  // });

  return (
    <div className='BalanceCard'>
      <div className='cardHeader Card'>Balance</div>
      <div> Balance Availiable: 11 </div>
    </div>
  );
};

export default BalanceCard;
