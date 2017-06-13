import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plugin from './plugin'

class HighMap extends Component {
  render (){
    let Chart = Plugin(this.props.chart)
    return (
      <Chart />
    )
  }
}
class App extends Component { 
  constructor(props) {
    super(props);    
    this.state = {
      name: 'common'
    };
    this.handleClick = this.handleClick.bind(this)

  }
  
  handleClick (e) {
    let target = e.target;
    if(target.nodeName === 'A'){
        e.preventDefault()
        this.setState(function(state){
          state.name = target.getAttribute('name')
        })
    }
  }
  render() {        
    return (      
      <div>
        <div className="menu" onClick={this.handleClick}>
          <a href='#' name='common'>Common Demo</a>
          <a href='#' name='highmap'>HighMap Demo</a>
          <a href='#' name='highstock'>HighStock Demo</a>
          <a href='#' name='more'>More Demo</a>
          <a href='#' name='live'>Live Demo</a>
          <a href='#' name='column'>Column chart Demo</a>
          <a href='#' name='scatter'>Scatter chart Demo</a>
        </div>
        <HighMap chart={this.state.name} />
      </div>
    );
  }
}

export default App
