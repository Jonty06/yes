import React from 'react';
import './BuySellSection.css';




class BuySellSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spendAmount: 0,
      earnAmount: 0
    };
  }

  handleSpendAmountChange = (event) => {
    this.setState({ spendAmount: event.target.value });
  }

  handleEarnAmountChange = (event) => {
    this.setState({ earnAmount: event.target.value });
  }

  handleSpendAmountIncrement = () => {
    this.setState((prevState) => ({ spendAmount: prevState.spendAmount + 1 }));
  }

  handleSpendAmountDecrement = () => {
    this.setState((prevState) => ({ spendAmount: prevState.spendAmount - 1 }));
  }

  handleEarnAmountIncrement = () => {
    this.setState((prevState) => ({ earnAmount: prevState.earnAmount + 1 }));
  }

  handleEarnAmountDecrement = () => {
    this.setState((prevState) => ({ earnAmount: prevState.earnAmount - 1 }));
  }

  render() {
    return (
      <div className="buy-sell-section">
        <div className="buy-sell-block">
          <h1>Buy and Sell</h1>
          <div className="form-group">
            <label htmlFor="spend-input">I will spend:</label>
            <div className="input-group">
              <button onClick={this.handleSpendAmountDecrement}>-</button>
              <input
                type="text"
                id="spend-input"
                placeholder="Enter amount"
                value={this.state.spendAmount}
                onChange={this.handleSpendAmountChange}
                className="input-box"
              />
              <button onClick={this.handleSpendAmountIncrement}>+</button>
              <span>$</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="earn-input">I will earn:</label>
            <div className="input-group">
              <button onClick={this.handleEarnAmountDecrement}>-</button>
              <input
                type="text"
                id="earn-input"
                placeholder="Enter amount"
                value={this.state.earnAmount}
                onChange={this.handleEarnAmountChange}
                className="input-box"
              />
              <button onClick={this.handleEarnAmountIncrement}>+</button>
              <span>$</span>
            </div>
          </div>
        </div>
        <div className="transaction-details">
          <h2>Transaction Details</h2>
          <div className="transaction-row">
            <label htmlFor="service-provider">Service Provider:</label>
            <input type="text" id="service-provider" placeholder="Enter service provider" />
          </div>
          <div className="transaction-row">
            <label htmlFor="deposit-account">Deposit to Account:</label>
            <input type="text" id="deposit-account" placeholder="Enter account for deposit" />
          </div>
          <div className="transaction-row">
            <label htmlFor="estimated-spend">Estimated Spend:</label>
            <input type="text" id="estimated-spend" placeholder="Enter estimated spend" />
          </div>
          <div className="transaction-row">
            <label htmlFor="estimated-receive">Estimated Receive:</label>
            <input type="text" id="estimated-receive" placeholder="Enter estimated receive" />
          </div>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
    );
  }
}




export default BuySellSection;









           








