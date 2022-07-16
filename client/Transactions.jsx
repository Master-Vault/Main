import React, { Component } from 'react';
import SpecificTransaction from './SpecificTransaction.jsx';

// const TransactionsComponent = props => {
//   let renderedArray = [];

//  const [array, setArray] = useState([]);


//   useEffect(() => {
//     console.log('prefetch')
//     fetch('/api')
//     .then((res) => res.json())
//     .then((transaction) => {
//       console.log('check fetch')
//       setArray((transaction) => {
//         console.log(transaction)
//         array = transaction
//         })
//     })

//   },[]);

//   const output = [];
//   for (let i = 0; i < array.length; i++){
//     output.push(
//         <SpecificTransaction obj={this.state.array[i]}/> 
//     )
//   }
 

//   return(
//     <div>{output}</div>
//   )
// }
// export default TransactionsComponent;


class TransactionsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    // make call to our endpoint and populate all foods in our database
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // spread out our state and update our food array
        this.setState({
          ...this.state,
          transactions: data,
        });
        console.log('ALL TRANSACTIONS ', this.state.transactions);
      });
  }

  render() {
    const transactions = [];
    console.log('ALL TRANSACTIONS ', this.state);

    this.state.transactions.forEach((el,i) => {
      transactions.push(<SpecificTransaction transactions={el}/>)
    })

    return (
      <>
        <div className="transactionsContainer">
        {transactions}
        </div>
      </>
    );
  }
}
export default TransactionsComponent;