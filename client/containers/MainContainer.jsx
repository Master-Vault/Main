import React, { useState, useEffect, Component } from 'react';
import '../stylesheets/styles.css';
import Navigation from '../components/Navigation.jsx';
import MonthlyIncomeCard from '../components/MonthlyIncomeCard.jsx';
import MonthlyExpenseCard from '../components/MonthlyExpenseCard.jsx';
import CashFlowCard from '../components/CashFlowCard.jsx';
import ForecastCard from '../components/ForecastCard.jsx';
import AssetsCard from '../components/AssetsCard.jsx';
import BudgetCard from '../components/BudgetCard.jsx';
import BalanceCard from '../components/BalanceCard.jsx';
import TrendChartCard from '../components/TrendChartCard.jsx';
import TransactionsCard from '../components/TransactionsCard.jsx';

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
        // spread out our state and update our transactions array
        this.setState({
          ...this.state,
          transactions: data.transactions,
          balance: data.balance,
        });
        //console.log('ALL TRANSACTIONS ', this.state.transactions);
        // console.log('ALL BALANCES ', this.state.balance);
      });
  }

  render() {
    // console.log('CURRENT STATE OF MAIN CONTAINER ', this.state);
    return (
      <>
        <div className="mainContainer">
          <Navigation />
          <MonthlyIncomeCard />
          <MonthlyExpenseCard />
          <CashFlowCard />
          <ForecastCard />
          <AssetsCard />
          <BudgetCard />
          <BalanceCard />
          <TrendChartCard />
          <TransactionsCard transactions={this.state.transactions} />
        </div>
      </>
    );
  }
}
export default MainContainer;
