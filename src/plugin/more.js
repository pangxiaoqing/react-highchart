import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src'
import ReactHighstock from 'react-highcharts/ReactHighstock.src'
import Highlight from 'react-highlight'
import * as Config from './../data/data'


class App extends Component {
  handleClick(){
    /*let selFirst = this.refs.selfirst.childNodes;
    for(var i=0,len=selFirst.length;i<len;i++){
      if(selFirst[i].selected == true){
        console.log(selFirst[i].innerHTML);
      }
    }*/
    //选出选中的select的option的值
    let selFirstVal = parseInt(document.getElementById("selfirst").options[document.getElementById("selfirst").selectedIndex].value);
    // console.log(selFirstVal);
    let selSecondVal = parseInt(document.getElementById("selsecond").options[document.getElementById("selsecond").selectedIndex].value);

    let num = parseInt(selSecondVal-selFirstVal);
    console.log(33,selSecondVal);
    console.log(33,selFirstVal);
    console.log(33,num);
    //
    let chart = this.refs.chart.getChart();
    // let arrdata = [];
    console.log(23333,chart);
    console.log(123333,chart.series);
    console.log(111,chart.series[0].data);
    for(var i=0,len=chart.series.length;i<len;i++){
      console.log(99,chart.series[i].data.slice(selFirstVal-1,selSecondVal));
      chart.series[i].data = chart.series[i].data.slice(selFirstVal-1,selSecondVal);
      // console.log(99,chart.series[i].data.slice(0,num));
      // arrdata.push()
      /*for(var j=0,len=chart.series[i].data.length;j<len;j++){
        console.log(88,chart.series[i].data[j]);
      }*/
     // datas2.push(datas[0].slice(0,num));
     }
    for(var j=0,len=chart.series.length;j<len;j++){
      // debugger
      console.log(9090,chart.series[j].xAxis.categories.slice(selFirstVal-1,selSecondVal));
      chart.series[j].xAxis.categories = chart.series[j].xAxis.categories.slice(selFirstVal-1,selSecondVal);
    }
    for(var k=0,len=chart.series.length;k<len;k++){
      console.log(8989,chart.series[k].data.slice(selFirstVal-1,selSecondVal));
      for(var m=0,lens=chart.series[k].data.slice(selFirstVal-1,selSecondVal);m<lens;m++){
        console.log(9898,chart.series[k].data.slice(selFirstVal-1,selSecondVal)[m].y)
      }
      // chart.series[j].xAxis.categories = chart.series[j].xAxis.categories.slice(selFirstVal-1,selSecondVal);
    }
    /*let datas = [];
    let datas2 = [];
    for(var i=0,len=chart.series[0].data.length;i<len;i++){
      console.log(num);
      console.log(222,chart.series[0].data);
      datas.push(chart.series[0].data);
      for(var i=0,len=datas.length;i<len;i++){
        console.log(datas[0].slice(0,num));
        datas2.push(datas[0].slice(0,num));
      }
      // datas.push(chart.series[0].data.slice(0,num));
      // console.log(datas);
    }*/
    console.log(66666,chart.series);
    //update更新数据date
    chart.update({
      series: chart.series
    })
  }
  render() {
    return (
      <div className="App">
        <ReactHighcharts config={Config.more} ref="chart"/>
        <div>
          <select ref="selfirst" id="selfirst">
            <option value="1">一月</option>
            <option value="2">二月</option>
            <option value="3">三月</option>
            <option value="4">四月</option>
            <option value="5">五月</option>
            <option value="6">六月</option>
            <option value="7">七月</option>
            <option value="8">八月</option>
            <option value="9">九月</option>
            <option value="10">十月</option>
            <option value="11">十一月</option>
            <option value="12">十二月</option>
          </select>
          <select id="selsecond">
            <option value="1">一月</option>
            <option value="2">二月</option>
            <option value="3">三月</option>
            <option value="4">四月</option>
            <option value="5">五月</option>
            <option value="6">六月</option>
            <option value="7">七月</option>
            <option value="8">八月</option>
            <option value="9">九月</option>
            <option value="10">十月</option>
            <option value="11">十一月</option>
            <option value="12">十二月</option>
          </select>
          <button onClick={this.handleClick.bind(this)}>确定</button>
        </div>
      </div>
    );
  }
}

export default App;