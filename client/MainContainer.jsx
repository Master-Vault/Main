import React, {useState, setState} from 'react';
//import axios from 'axios';

const MainContainer = props => {
  return(
    <div>
      <h1> FirstName LastName </h1>
      <div className='BalanceContainer'>
        <Balance/>
      </div>
      <div className='TransactionsContainer'>
        <TransactionsComponent/>
      </div>
    </div>
  )
}

export default MainContainer;
