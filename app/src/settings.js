import {timeFormat as d3_timeFormat} from 'd3-time-format';
import colorbrewer from 'colorbrewer';
import d3 from 'd3';
import {getNid} from './utils';

export var settings = {
  title: 'UCR Offense Data',
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
        url: '/dashboard_autocomplete/' + getNid() + '/county/{{value}}',
        cardStyle: 'none',
        id: 'county-autocomplete',
        placeholder: 'Select counties to compare'
      }
    ],
    filterYear: [
      {
        type: 'Autocomplete',
        name: 'year-autocomplete',
        multi: true,
        url: '/dashboard_autocomplete/' + getNid() + '/year/{{value}}',
        cardStyle: 'none',
        id: 'year-autocomplete',
        placeholder: 'Select years to compare'
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
        fetchData: {type: 'function', name: 'getCountyChartData'},
      },
      // {
      //   header: 'Arrests by county',
      //   type: 'Choropleth',
      //   settings: {
      //     colors:colorbrewer.OrRd[9],
      //     cssPath: '/sites/all/modules/react_dashboard/app/static/choropleth.css',
      //     showTooltip: {true},
      //     levels: 9, // number of Choropleth levels
      //     domainLower: 0, // specify domain range - this can also be overridden in the domainScale functionion()
      //     domainUpper: .15, // ibid.
      //     domainKey: 'id',
      //     domainMapKey: 'id',
      //     legendHeader: "Arrests by County",
      //     legendValFormat: '%', // format string for d3.format function
      //     domainField: 'count', // the data we are comparing
      //     legendValPrecision: 3, // Defaults to 2
      //     tooltip: {
      //       attr: 'count',
      //       label: 'Arrest'
      //     },
      //     mapFormat: 'topojson',
      //     mapDataUrl: '/sites/all/modules/react_dashboard/app/data/wi-counties.json',
      //     polygon: 'counties',
      //     mesh: 'states',
      //     projection: 'albersUsa',
      //     showGraticule: true,
      //     legendHeight : 400,
      //     legendMargins : {top: 40, right: 50, bottom: 40, left: 50},
      //     legendClassName : "test-legend-class",
      //     legendPosition : 'left',
      //     legendOffset : 90
      //   },
      //   cardStyle: 'card',
      //   fetchData: {type:'function', name: 'getArrestDataByCounty'}
      // },
    ],
    secondLeft: [
      {
        id: 'by_age',
        header:'By age group',
        type: 'GAChart',
        iconClass: 'fa fa-bar-chart',
        settings: {
          id:'by_age',
          type: 'pieChart',
          x: 'adult_or_juvenil',
          y: 'count_sum',
          height: 340,
          color:colorbrewer.Paired[8],
          noData: 'Loading...'
        },
        cardStyle: 'card',
        fetchData: {type: 'function', name: 'getAgeChartData'},

      }
    ],
    secondRight: [
      {
        id: 'by_description',
        header:'By type',
        type: 'GAChart',
        iconClass: 'fa fa-bar-chart',
        settings: {
          id:'by_description',
          type: 'pieChart',
          x: 'description',
          y: 'count_sum',
          height: 340,
          showLabels: false,
          noData: 'Loading...'
        },
        cardStyle: 'card',
        fetchData: {type: 'function', name: 'getDescriptionChartData'},
      }
    ],
    middleFirst: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#9F3E69',
        metric: 'getStateAVG',
        caption: 'Average',
        iconClass: 'fa fa-area-chart',
      }
    ],
    middleSecond: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#F3BA4F',
        metric: 'getStateTotal',
        caption: 'Total',
        iconClass: 'fa fa-line-chart',
      }
    ],
    middleThird: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#3EB1AE',
        metric: 'getStateMin',
        caption: 'Minimum',
        iconClass: 'fa fa-minus',
      }
    ],
    middleFourth: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#0B90B1',
        metric: 'getStateMax',
        caption: 'Maximum',
        iconClass: 'fa fa-plus',
        // fetchData: {type: 'function', name: 'getRandomMetric'}
      }
    ],
    middleLeft: [
      {
        id: 'by_category',
        header:'By category',
        type: 'GAChart',
        iconClass: 'fa fa-bar-chart',
        settings: {
          id:'by_age',
          type: 'discreteBarChart',
          x: 'category',
          y: 'count_sum',
          height: 340,
          noData: 'Loading...'
        },
        cardStyle: 'card',
        fetchData: {type: 'function', name: 'getCategoryChartData'},

      }
    ],
    middleRight: [
      {
        id: 'by_month',
        header:'By month',
        type: 'GAChart',
        iconClass: 'fa fa-bar-chart',
        settings: {
          id:'by_month',
          type: 'discreteBarChart',
          x: 'month',
          y: 'count_sum',
          height: 340,
          noData: 'Loading...'
        },
        cardStyle: 'card',
        fetchData: {type: 'function', name: 'getMonthChartData'},
      }
    ],
    middle: [
      {
        type: 'GATable',
        header: 'Data',
        fetchData: {
          type:'backend',
          backend: 'dkan',
          endpoint: 'http://dkan/node/12/api',
          id: 'da713535-5fca-41d1-a7f8-d0698014ee69'
        },
        cardStyle: 'table',
        settings: {
          table: {
            rowHeight: 40,
            width: 800,
            maxHeight: 700,
            headerHeight:40
          },
          columns: {
            flexGrow: 1,
            width: 150,
            overrides: {
              a1: {
                flexGrow: 0.5
              }
            }
          },
          cells: {
            height: 40,
            width: 500,
            overrides: {
              1: {
                height: 40
              }
            }
          }
        }
      }
    ],


  }
};
