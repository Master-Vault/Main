import React, { useState, useEffect, Component } from 'react';
import '../stylesheets/styles.scss';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OverviewHeaderCard from '../components/OverviewHeaderCard.jsx';
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     transactions: [],
  //     balance: [],
  //   };
  // }

  // componentDidMount() {
  //   // make call to our endpoint and populate
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // spread out our state and update our transactions array
  //       this.setState({
  //         ...this.state,
  //         transactions: data.transactions,
  //         balance: data.balance,
  //       });
  //       //console.log('ALL TRANSACTIONS ', this.state.transactions);
  //       // console.log('ALL BALANCES ', this.state.balance);
  //     });
  // }
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      balance: [],
      sumArray: [],
      monthlyIncome: 5000,
      synced: false,
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
      });

    // reduce and sum all transactions
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
    // update state with sumArray
    this.setState({
      ...this.state,
      sumArray: transactionsSum,
    });

  }

  componentDidUpdate() {
    // make call to our endpoint and resync state
    if (!this.state.synced) {
      fetch('/api')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            ...this.state,
            transactions: data.transactions,
            balance: data.balance,
            synced: true,
          });
        });
    }
  }

  render() {
    return (
      <>
        <div className="grid-container">
          <Header />
          <div className="stats-container">
            <div className="stats-header">
              <OverviewHeaderCard />
            </div>
            <div className="stats-overview">
              <MonthlyIncomeCard monthlyIncome={this.state.monthlyIncome} />
              <MonthlyExpenseCard savings={this.state.sumArray} />
              <CashFlowCard
                savings={this.state.sumArray}
                monthlyIncome={this.state.monthlyIncome} />
              <ForecastCard />
            </div>
            <div className="stats-accounts">
              <AssetsCard />
              <BudgetCard />
              <BalanceCard balanceArray={this.state.balance} />
              <TrendChartCard />
              <TransactionsCard transactions={this.state.transactions} />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default MainContainer;
