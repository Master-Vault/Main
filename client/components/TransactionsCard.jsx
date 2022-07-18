import React, { Component } from 'react';
import TransactionItem from './TransactionItem.jsx';

const TransactionsCard = (props) => {
  const transactions = [];
  console.log('CURRENT STATE OF TRANSACTION CARD ', props.transactions);
  console.log('TRIGGER ', props.transactions[0])

  props.transactions.forEach((el, i) => {
    transactions.push(<TransactionItem transactions={el} key={i} />);
  });

  return (
    <div className='transactionsContainer'>
      {transactions}
    </div>
  )
};

export default TransactionsCard;