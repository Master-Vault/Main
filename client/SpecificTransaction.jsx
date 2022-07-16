import React from 'react'

const SpecificTransaction = props => {
  const {amount, name, date, category} = props.transactions;
  return (
    <div>
    Amount: '$'+{amount}, Name: {name}, Date: {date}, Category: {category}
    
    </div>
  )
}

export default SpecificTransaction;
