import React,{useEffect} from 'react';

const TransactionsComponent = props => {
  useEffect(() => {
    console.log('prefetch')
    fetch('/api')
    .then((res) => res.json())
    .then((transaction) => {
      console.log('check fetch')
      console.log(transaction)
    })

  },[]);
    
 

  return(
    <div> </div>
  )
}
export default TransactionsComponent;