import React, { Component } from "react";

class App extends Component {
  state = {
    RewardDetails: [
      {
        custid: 1,
        name: "Acme",
        amt: 120,
        transactionDate: new Date('08-01-2019'),
        rewards: parseInt(this.calculateRewards(120))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 75,
        transactionDate: new Date('08-21-2019'),
        rewards: parseInt(this.calculateRewards(75))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 94,
        transactionDate: new Date('08-21-2019'),
        rewards: parseInt(this.calculateRewards(94))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 10,
        transactionDate: new Date('06-05-2019'),
        rewards: parseInt(this.calculateRewards(10))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 75,
        transactionDate: new Date('06-21-2019'),
        rewards: parseInt(this.calculateRewards(75))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 200,
        transactionDate: new Date('07-01-2019'),
        rewards: parseInt(this.calculateRewards(200))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 1,
        transactionDate: new Date('07-04-2019'),
        rewards: parseInt(this.calculateRewards(1))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 80,
        transactionDate: new Date('07-03-2019'),
        rewards: parseInt(this.calculateRewards(80))
      },
      {
        custid: 1,
        name: "Acme",
        amt: 224,
        transactionDate: new Date('07-21-2019'),
        rewards: parseInt(this.calculateRewards(224))
      },
      {
        custid: 2,
        name: "Century",
        amt: 125,
        transactionDate: new Date('08-01-2019'),
        rewards: parseInt(this.calculateRewards(125))
      },
      {
        custid: 2,
        name: "Century",
        amt: 75,
        transactionDate: new Date('08-21-2019'),
        rewards: parseInt(this.calculateRewards(75))
      },
      {
        custid: 2,
        name: "Century",
        amt: 10,
        transactionDate: new Date('06-09-2019'),
        rewards: parseInt(this.calculateRewards(10))
      },
      {
        custid: 2,
        name: "Century",
        amt: 75,
        transactionDate: new Date('06-21-2019'),
        rewards: parseInt(this.calculateRewards(75))
      },
      {
        custid: 2,
        name: "Century",
        amt: 200,
        transactionDate: new Date('07-01-2019'),
        rewards: parseInt(this.calculateRewards(200))
      },
      {
        custid: 2,
        name: "Century",
        amt: 224,
        transactionDate: new Date('07-21-2019'),
        rewards: parseInt(this.calculateRewards(224))
      },
      {
        custid: 3,
        name: "Sallys Startup",
        amt: 120,
        transactionDate: new Date('06-21-2019'),
        rewards: parseInt(this.calculateRewards(120))
      }
    ]
  };

  rewardPerMonth() {
    var temp = "hi";
    let last3MonthRewardsInDesc = [];
    for (let i = 0; i < 3; i++) {
      let filteredList = this.state.RewardDetails.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i);
      last3MonthRewardsInDesc[i] = filteredList.reduce((acc, key) => key.rewards + acc, 0);
    }
    return last3MonthRewardsInDesc;
  }

  calculateRewards(price) {
    if (price >= 50 && price < 100) {
      return price - 50;
    } else if (price > 100) {
      return (2 * (price - 100) + 50);
    }
    return 0;
  }

  constructor() {
    super();
    this.rewardPerMonth();
    console.log("hi");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{JSON.stringify(this.state.RewardDetails) }</div>
          <div className="col-6">
            <div className="well-lg">First Month Reward Point :  {this.rewardPerMonth()[0]}</div>
            <div className="well-lg">Second Month Reward Point : {this.rewardPerMonth()[1]}</div>
            <div className="well-lg">Third Month Reward Point : {this.rewardPerMonth()[2]}</div>
            <div className="well-lg">Total Reward Point : {this.rewardPerMonth()[0] + this.rewardPerMonth()[1] + this.rewardPerMonth()[2]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
