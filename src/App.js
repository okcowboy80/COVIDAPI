import React, { Component } from 'react';
import Monkeys from './Monkeys';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isShown: false,
    }
  }

  componentDidMount() {

    fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=0025a19ed628498c9b58691df6b9b07a')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,

        })
      });
  }

  render() {

    const mystyle = {
      color: "white",
      backgroundColor: "Tomato",
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center"
    };
    
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } 

    else {

      return (
        <div className="App">
          <div style={mystyle}>
            <h2>Actual Cases:</h2>
            <p><h4>{items.actuals.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></p>
            <h2>Actual Deaths:</h2>
            <p><h4>{items.actuals.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></p>
            <h2>Number of Vaccines Distributed:</h2>
            <p><h4>{items.actuals.vaccinesDistributed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></p>
            <h2>Number of Vaccinations Initiated:</h2>
            <p><h4>{items.actuals.vaccinationsInitiated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></p>
            
          </div>
          <div >
            <Monkeys></Monkeys>
          </div>
          
        </div>
        
      )
    }
    
  }
}

export default App;

