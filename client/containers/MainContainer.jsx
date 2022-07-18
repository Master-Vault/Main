import React, { useState, useEffect, Component } from 'react';
import TransactionsCard from '../components/TransactionsCard.jsx';
import BalanceCard from '../components/BalanceCard.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      balance: [],
    };
  }

  componentDidMount() {
    // make call to our endpoint and populate
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        console.log('RESPONSE ', data);
        // spread out our state and update our transactions array
        this.setState({
          ...this.state,
          transactions: data.transactions,
          balance: data.balance,
        });
        //console.log('ALL TRANSACTIONS ', this.state.transactions);
        console.log('ALL BALANCES ', this.state.balance);
      });
  }

  render() {
    console.log('CURRENT STATE OF MAIN CONTAINER ', this.state);
    return (
      <>
        <div>Test</div>
        <BalanceCard />
        <TransactionsCard transactions={this.state.transactions} />
      </>
    );
  }
}
export default MainContainer;
