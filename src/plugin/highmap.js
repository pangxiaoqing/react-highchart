import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src'
import ReactHighstock from 'react-highcharts/ReactHighstock.src'
import Highlight from 'react-highlight'
import * as Config from './../data/data'

class App extends Component { 
  render() {
    return (
      <div className="App">
        <ReactHighmaps config={Config.highmap} />
      </div>
    );
  }
}

export default App;