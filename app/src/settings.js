import {timeFormat as d3_timeFormat} from 'd3-time-format';
import colorbrewer from 'colorbrewer';
import d3 from 'd3';
import {getNid} from './utils';

export var settings = {
  title: 'State Medical Board Licensure Data',
  queries: {
    arrests_avg: {
      avg: "count"
    },
    arrests_sum: {
      sum: "count",
      fields: "count"
    },
    arrests_max: {
      max: "count"
    },
    arrests_min: {
      min: "count"
    },
    by_age: {
      groupBy: "adult_or_juvenil",
      sum: "count",
      fields: "adult_or_juvenil"
    },
    by_category: {
      groupBy: "category",
      sum: "count",
      fields: "category"
    },
    by_month: {
      groupBy: "month",
      sum: "count",
      fields: "month"
    },
    by_description: {
      groupBy: "description",
      sum: "count",
      fields: "description"
    },
    by_county: {
      groupBy: "county",
      sum: "count",
      fields: "county",
      limit: [0, 100]
    },
  },
  regions: {
    filterCounty: [
      {
        type: 'Autocomplete',
        name: 'county-autocomplete',
        multi: true,
        url: '/dashboard_autocomplete/GBPW_counties',
        cardStyle: 'none',
        id: 'county-autocomplete',
        placeholder: 'Select county'
      }
    ],
    filterSpecialty: [
      {
        type: 'Autocomplete',
        name: 'specialty-autocomplete',
        multi: true,
        url: '/dashboard_autocomplete/GBPW_Specialty',
        cardStyle: 'none',
        id: 'year-autocomplete',
        placeholder: 'Select specialty'
      }
    ],
    top: [
      {
        id: 'by_county',
        header:'By county',
        type: 'GAChart',
        iconClass: 'fa fa-bar-chart',
        settings: {
          id:'by_county',
          type: 'discreteBarChart',
          x: 'county',
          y: 'count_sum',
          height: 360,
          rotateLabels: -45,
          xAxis: {
            tickFormat: (d) => d.replace(' County', '')
          },
          yDomain: [0, 360000],
          margin: {
            bottom: 70
          },
          noData: 'Loading...'
        },
        cardStyle: 'card',
        dataHandlers: []
      },
    ]
  }
};
