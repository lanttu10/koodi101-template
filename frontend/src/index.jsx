/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getMeasurementFromBackend = async () => {
  try {
    const url = `${baseURL}/api/enviro`
    console.log("Getting measurement from '"+url+"'...")
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get measurement from backend"};
};


const BackendGreeting = (props) => (
  <div><p>Backend says: {props.greeting}</p></div>
);

const ShowMeasurement = (props) => (
    <div>
        <h1>Latest measure</h1>
        <p>
        Measuring time: {props.state.measureTime}<br></br>
        Temperature: {props.state.temperature}<br></br>
        Pressure: {props.state.pressure}<br></br>
        Brightness: {props.state.brightness}
        </p>
        <a href="">
            Refresh
        </a>
    </div>
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        measureTime: "",
        temperature: "",
        pressure: "",
        brightness: ""
    };
  }

  async componentWillMount() {
    const response = await getMeasurementFromBackend();
    const measure = response.results[response.results.length - 1];
    this.setState({
        measureTime: measure.measureTime,
        temperature: measure.temperature,
        pressure: measure.pressure,
        brightness: measure.brightness
    });
  }

  render() {

    return (

      <ShowMeasurement state={this.state} />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
