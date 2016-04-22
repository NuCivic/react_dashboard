import React, { Component } from 'react';
import {Registry, Choropleth} from 'react-dashboard';

export default class GAChoropleth extends Choropleth {
  getArrestDataByCounty(){
    let data = this.props.globalData;
    return data.by_county || [];
  }
}

Registry.set('GAChoropleth', GAChoropleth);