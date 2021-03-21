// import * as Highcharts from 'highcharts';
// import * as numeral from 'numeral';
import { toMoney } from './unaltered-shares';

export const NetWorthChartPlaceholderIrregularData = [
  {
    date: new Date('2021-01-06T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 1850000
  },
  {
    date: new Date('2021-01-07T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 3850005
  },
  {
    date: new Date('2021-01-12T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 1850010
  },
  {
    date: new Date('2021-01-20T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 235000
  },
  {
    date: new Date('2021-01-29T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 255000
  },
  {
    date: new Date('2021-02-05T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 205000
  },
  {
    date: new Date('2021-02-09T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 315000
  },
  {
    date: new Date('2021-03-13T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 275000
  },
  {
    date: new Date('2021-03-14T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 200000
  },
  {
    date: new Date('2021-03-15T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 285000
  },
  {
    date: new Date('2021-03-16T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 275000
  },
  {
    date: new Date('2021-03-17T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 265000
  },
  {
    date: new Date('2021-04-01T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 275000
  },
  {
    date: new Date('2021-04-09T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 280000
  },
  {
    date: new Date('2021-04-20T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 290000
  },
  {
    date: new Date('2021-05-21T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 200000
  },
  {
    date: new Date('2021-05-22T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 375000
  },
  {
    date: new Date('2021-07-23T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 365000
  },
  {
    date: new Date('2021-07-24T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 375000
  },
  {
    date: new Date('2021-07-25T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 385000
  },
  {
    date: new Date('2021-07-26T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 445000
  },
  {
    date: new Date('2021-08-27T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 480000
  },
  {
    date: new Date('2021-09-28T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 485000
  },
  {
    date: new Date('2021-10-29T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 1800000
  },
  {
    date: new Date('2021-10-30T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 1905000
  },
  {
    date: new Date('2021-11-30T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 2250000
  },
  {
    date: new Date('2021-12-25T11:18:31.628857').getTime(),
    liabilities: 12323,
    networth: 2850000
  }
  // {
  //   date: new Date('2021-12-26T11:18:31.628857').getTime(),
  //   liabilities: 12323,
  //   networth: 3800000
  // },
  // {
  //   date: new Date('2021-12-27T11:18:31.628857').getTime(),
  //   liabilities: 12323,
  //   networth: 3950000
  // },
  // {
  //   date: new Date('2022-12-30T11:18:31.628857').getTime(),
  //   liabilities: 12323,
  //   networth: 4008000
  // }
];

const mappedData = NetWorthChartPlaceholderIrregularData.map(item => {
  return {
    x: item.date,
    y: item.networth,
    liabilities: item.liabilities
  };
});

// console.log({ mappedData });

export const netWorthConfig = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'USD to EUR exchange rate over time'
  },
  // subtitle: {
  //   text: document.ontouchstart === undefined ?
  //     'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
  // },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    type: 'linear',
    softMin: 0,
    startOnTick: true,
    minPadding: 0.2,
    minRange: 50,
    title: {
      text: 'Exchange rate'
    },
    labels: {
      // format: '{value}'
      formatter: (payload: any) => {
        return toMoney(payload.value);
      }
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      lineColor: '#59DA93',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        // linearGradient: [0, 0, 0, 300],
        stops: [
          [0, '59da9357'],
          [1, '#59da9357']
        ]
      },
      marker: {
        radius: 2,
        fillColor: 'white',
        lineColor: '#59DA93'
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [
    {
      type: 'area',
      name: 'USD to EUR',
      data: mappedData
    }
  ]
};
