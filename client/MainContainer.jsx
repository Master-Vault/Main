import React, {useState, setState} from 'react';
//import axios from 'axios';
import TransactionsComponent from './Transactions.jsx'

const MainContainer = props => {
  return(
    <div>
      <h1> FirstName LastName </h1>
      <div className='BalanceContainer'>
      </div>
      <div className='TransactionsContainer'>
        <TransactionsComponent/>
      </div>
    </div>
  )
}

export default MainContainer;
