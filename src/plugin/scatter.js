/**
 * Created by pxq on 17-6-9.
 */

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
                <ReactHighcharts config={Config.scatter} />
            </div>
        );
    }
}

export default App;