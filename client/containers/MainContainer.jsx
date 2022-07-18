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
import Header from '../components/Header.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      balance: [],
      sumArray: [],
      monthlyIncome: 5000,
      // synced: false,
    };
    // this.updateSynced = this.updateSynced.bind(this);
  }

  componentDidMount() {
    // make call to our endpoint and populate
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          transactions: data.transactions,
          balance: data.balance,
        });

        // spread out our state and update our transactions array
        const transactionsSum = this.state.transactions.reduce(
          (acc, el) => {
            if (el.account_id === 'bZPxWjNA5Wf4oJE95B1KTlajybobDVu3Gap6P') {
              acc[0] += Number(el.amount);
              return acc;
            }
            if (el.account_id === 'mv35n9oz4nuqLwonrkbRtGrA4ZlZ5ViA7xZQ8') {
              acc[1] += Number(el.amount);
              return acc;
            }
          },
          [0, 0]
        );

        this.setState({
          ...this.state,
          sumArray: transactionsSum,
        });
      });
  }

  componentDidUpdate() {
    // make call to our endpoint and populate
    if (this.state.synced) {
      fetch('/api')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            ...this.state,
            transactions: data.transactions,
            balance: data.balance,
            // synced: false,
          });
        });
    }
  }

  // updateSynced() {
  //   this.setState({
  //     synced: true,
  //   });
  // }
  render() {
    return (
      <>
        <div className='mainContainer'>
          <Header />
          <Navigation updateSynced={this.updateSynced} />
          <MonthlyIncomeCard monthlyIncome={this.state.monthlyIncome} />
          <MonthlyExpenseCard savings={this.state.sumArray} />
          <CashFlowCard
            savings={this.state.sumArray}
            monthlyIncome={this.state.monthlyIncome}
          />
          <ForecastCard />
          <AssetsCard />
          <BudgetCard />
          <BalanceCard balanceArray={this.state.balance} />
          <TrendChartCard />
          <TransactionsCard transactions={this.state.transactions} />
        </div>
      </>
    );
  }
}
export default MainContainer;
