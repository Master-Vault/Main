import React, { useState, useEffect, Component } from 'react';
import TransactionsCard from '../components/TransactionsCard.jsx'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    // make call to our endpoint and populate
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE ", data);
        // spread out our state and update our transactions array
        this.setState({
          ...this.state,
          transactions: data.transactions,
        });
        console.log('ALL TRANSACTIONS ', this.state.transactions);
      });
  }

  render() {
    console.log('CURRENT STATE OF MAIN CONTAINER ', this.state);
    return (
      <>
        {/* <Navigation />
      <Balance /> */}
        <TransactionsCard transactions={this.state.transactions} />
      </>
    );
  }
}
export default MainContainer;
