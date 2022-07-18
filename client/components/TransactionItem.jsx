import React from 'react';

const TransactionItem = (props) => {
  const { amount, name, date, category } = props.transactions;
  // console.log(category);
  return (
    <div className='transactionItems'>
      <div className='transactions-left'>
        <div className='name'> {name}</div>
        <div className='date'> {date}</div>
        <div className='category'> {category[0]}</div>
      </div>
      <div className='transactions-right'>
        <div className='amount'>${amount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
