import React, { Component } from 'react';
import './App.css';
import WeatherCards from './components/WeatherCards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherCards />
      </div>
    );
  }
}

export default App;
