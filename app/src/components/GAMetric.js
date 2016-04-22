import React, { Component } from 'react';
import {Registry, Metric, Dataset} from 'react-dashboard';


export default class GAMetric extends Metric {

  getRandomMetric() {
    return 100;
  }

  getCustomData() {
    // // An example about how to use data from a remote resource
    // return new Promise((resolve, reject) => {
    //   let dataset = new Dataset({
    //     backend: 'csv',
    //     url: 'http://demo.getdkan.com/node/9/download'
    //   });
    //   dataset.fetch().then(() => {
    //     dataset.query({size: 100, from: 0}).then((data) =>{
    //       resolve(data.hits);
    //     });
    //   });
    // });
  }

  getStateAVG() {
    return this.getStatistic('arrests_avg', 'count_avg');
  }

  getStateTotal() {
    return this.getStatistic('arrests_sum', 'count_sum');
  }

  getStateMax() {
    return this.getStatistic('arrests_max', 'count_max');
  }

  getStateMin() {
    return this.getStatistic('arrests_min', 'count_min');
  }

  getStatistic(query, field) {
    let data = this.props.globalData;
    return (data[query]) ? this.formatNumber(Number(data[query][0][field]).toFixed(2)) : '...';
  }

  formatNumber(num) {
    let si = [
      { value: 1E18, symbol: 'E' },
      { value: 1E15, symbol: 'P' },
      { value: 1E12, symbol: 'T' },
      { value: 1E9,  symbol: 'G' },
      { value: 1E6,  symbol: 'M' },
      { value: 1E3,  symbol: 'k' }
    ], i;
    for (i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
      }
    }
    return num.toString();
  }
}

Registry.set('GAMetric', GAMetric);