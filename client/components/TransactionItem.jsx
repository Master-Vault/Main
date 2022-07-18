import React from 'react'

const TransactionItem = props => {
  const { amount, name, date, category } = props.transactions;
  return (
    <div className="transactionItems">
      Amount: '$'+{amount}, Name: {name}, Date: {date}, Category: {category}
    </div>
  )
}

export default TransactionItem;
