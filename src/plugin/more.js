import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src'
import ReactHighstock from 'react-highcharts/ReactHighstock.src'
import Highlight from 'react-highlight'
import * as Config from './../data/data'
import * as Point from './../data/more_data_y.json'


class App extends Component {
  handleClick(){
    //选出选中的select的option的值
    let selFirstVal = parseInt(document.getElementById("selfirst").options[document.getElementById("selfirst").selectedIndex].value);
     // console.log(selFirstVal);
     let selSecondVal = parseInt(document.getElementById("selsecond").options[document.getElementById("selsecond").selectedIndex].value);

     //选择月份区间的X轴显示
    var new_xpoint = [];
    console.log("X轴的月份： ",Point.xpoint.slice(selFirstVal-1,selSecondVal));
    new_xpoint = Point.xpoint.slice(selFirstVal-1,selSecondVal);
    console.log(999,new_xpoint);

    //选择月份区间的Y轴显示
    var new_ypoint = [];
    for(var i=0,len=Point.ypoint.length;i<len;i++){
      // Point.ypoint[i].data = Point.ypoint[i].data.slice(selFirstVal-1,selSecondVal)
      new_ypoint.push({
        "name":Point.ypoint[i].name,
        "data":Point.ypoint[i].data.slice(selFirstVal-1,selSecondVal)
      })
    }
    console.log(1222222,new_ypoint);


    //update更新数据date
    let chart = this.refs.chart.getChart();
    chart.update({
     series: new_ypoint
     })
    //更新X轴数据
    chart.xAxis[0].setCategories(new_xpoint);
    // console.log(134,chart);
    // console.log(234,Config.more(new_xpoint,Point.ypoint));

  }

  render() {
    return (
      <div className="App">
        <ReactHighcharts config={Config.more(Point.xpoint,Point.ypoint)} ref="chart"/>
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