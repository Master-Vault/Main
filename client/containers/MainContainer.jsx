import React, { useState, useEffect, Component } from 'react';
//import axios from 'axios';
import TransactionsCard from '../components/TransactionsCard.jsx'


// const balancesOutput 
//
//
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    // make call to our endpoint and populate all foods in our database
    console.log('prefetch')
    fetch('/')
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE ", data);
        // spread out our state and update our food array
        // this.setState({
        //   ...this.state,
        //   transactions: data.transactions,
        // });
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
