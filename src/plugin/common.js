import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src'
import ReactHighstock from 'react-highcharts/ReactHighstock.src'
import Highlight from 'react-highlight'
import * as Config from './../data/data'

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    let flag = false;
    let dischart = this.refs.dischart.getChart();
    for(var i=0,len=dischart.series.length;i<len;i++){
      // console.log(dischart);
      if(dischart.series[i].name != "London"){
        console.log("aaa")
        flag = true;
      }else {
        flag = false;
      }
    }

    if(flag){
      dischart.addSeries({
       name:'London',
       data:[60, 128, 500, 230, 320, 120, 448,
       141, 301, 241, 486, 50],
        cursor:"pointer",
        events:{
         click:function(e){
           alert(this.name +' clicked\n'+
             ' X轴是： '+e.point.category+
             ' Y轴是： '+this.data[e.point.x].y
           );
           // console.log(event.point);
         }
        }
       })
    }

  }
  render() {
    return (
      <div className="App">
        <ReactHighcharts config={Config.common} ref="dischart" />
        <button onClick = {this.handleClick}>点击</button>
      </div>
    );
  }
}

export default App;


/*
addSeries
getCharts()
{
  name: 'New York',
      data: [30, 48, 57, 210, 450, 320, 248,
  341, 201, 141, 186, 250]
}
conser:ponter
event
*/
