import * as numeral from 'numeral';
import * as moment from 'moment';

export const specificGrantNetValue = 11000450.45;

export const { format: toMoney } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const unvestedShares = [
  [new Date('2021-01-01').getTime(), 50000],
  [new Date('2021-02-01').getTime(), 50000],
  [new Date('2021-03-01').getTime(), 40000],
  [new Date('2021-04-01').getTime(), 38000],
  [new Date('2021-05-01').getTime(), 36000],
  [new Date('2021-06-01').getTime(), 34000],
  [new Date('2021-07-01').getTime(), 32000],
  [new Date('2021-08-01').getTime(), 30000],
  [new Date('2021-09-01').getTime(), 28000],
  [new Date('2021-10-01').getTime(), 26000],
  [new Date('2021-11-01').getTime(), 24000],
  [new Date('2021-12-01').getTime(), 22000],
  [new Date('2022-01-01').getTime(), 20000],
  [new Date('2022-02-01').getTime(), 18000],
  [new Date('2022-03-01').getTime(), 15000],
  [new Date('2022-04-01').getTime(), 10000],
  [new Date('2022-05-01').getTime(), 8000],
  [new Date('2022-06-01').getTime(), 5000],
  [new Date('2022-07-01').getTime(), 1000],
  [new Date('2022-08-01').getTime(), 0]
];

export const vestedShares = [
  [new Date('2021-01-01').getTime(), 0],
  [new Date('2021-02-01').getTime(), 0],
  [new Date('2021-03-01').getTime(), 10000],
  [new Date('2021-04-01').getTime(), 12000],
  [new Date('2021-05-01').getTime(), 14000],
  [new Date('2021-06-01').getTime(), 16000],
  [new Date('2021-07-01').getTime(), 18000],
  [new Date('2021-08-01').getTime(), 20000],
  [new Date('2021-09-01').getTime(), 22000],
  [new Date('2021-10-01').getTime(), 24000],
  [new Date('2021-11-01').getTime(), 26000],
  [new Date('2021-12-01').getTime(), 28000],
  [new Date('2022-01-01').getTime(), 30000],
  [new Date('2022-02-01').getTime(), 32000],
  [new Date('2022-03-01').getTime(), 35000],
  [new Date('2022-04-01').getTime(), 40000],
  [new Date('2022-05-01').getTime(), 42000],
  [new Date('2022-06-01').getTime(), 45000],
  [new Date('2022-07-01').getTime(), 49000],
  [new Date('2022-08-01').getTime(), 50000]
];

export const unalteredSharesOptions = {
  annotations: [
    {
      labels: [
        {
          point: 'max',
          text: 'Max'
        },
        {
          point: 'min',
          text: 'Min',
          backgroundColor: 'white'
        }
      ]
    }
  ],
  legend: {
    enabled: true,
    verticalAlign: 'top',
    align: 'left'
  },
  chart: {
    type: 'column',
    marginTop: 120
  },
  xAxis: {
    type: 'datetime',
    // dateTimeLabelFormats: {
    //   // don't display the dummy year
    //   day: '%e. %b'
    // },
    labels: {
      formatter: payload => {
        console.log(payload);

        return moment(payload.value).format('MMM YY');
      }
    },
    crosshair: true,
    plotLines: [
      {
        dashStyle: 'ShortDash',
        width: 2,
        color: 'rgb(217 217 217)',
        value: new Date().getTime(),
        zIndex: 5,
        label: {
          text: 'Today',
          style: {
            color: 'rgb(30 30 30)',
            fontWeight: 'bold'
          },
          textAlign: 'center',
          verticalAlign: 'top',
          rotation: 0,
          useHTML: true,
          y: 15,
          x: 20
        }
      }
    ]
  },
  yAxis: [
    {
      min: 0,
      title: {
        text: 'Number of shares',
        align: 'high',
        offset: -45,
        rotation: 0,
        y: -22
      },
      labels: {
        // format: '{value}'
        formatter: payload => {
          console.log(payload);

          return new Intl.NumberFormat('us-en').format(+payload.value);
        }
      }
    },
    {
      min: 0,
      title: {
        text: 'Net equity value',
        align: 'high',
        offset: -50,
        rotation: 0,
        y: -22
      },
      opposite: true,
      labels: {
        // format: '{value}'
        formatter: payload => {
          console.log(payload);

          return numeral(payload.value).format('0a');
        }
      }
    }
  ],
  plotOptions: {
    column: {
      stacking: 'normal'
    },
    series: {
      borderRadius: 5,
      // pointWidth: 15,
      pointPadding: 0.05,
      pointStart: new Date('2021-01-01').getTime()
    }
  },
  series: [
    {
      color: 'rgb(233 238 242)',
      name: 'Unvested',
      states: {
        hover: {
          color: 'darkgrey'
        }
      },
      data: unvestedShares,
      stack: 0
    },
    {
      color: 'rgb(124, 181, 236)',
      name: 'Vesting',
      data: vestedShares,
      stack: 0
    },
    {
      name: 'Net equity value',
      data: [[new Date('2021-01-01').getTime(), specificGrantNetValue]],
      type: 'scatter',
      // tooltip: {
      //   valuePrefix: '$',
      //   valueSuffix: ' M'
      // },
      // pointPadding: 0.3,
      // pointPlacement: 0.2,
      yAxis: 1,
      // stack: 0
      // pointPlacement: -1
      opacity: 0,
      enableMouseTracking: false,
      showInLegend: false
    }
  ]
};

// series: [
//   {
//     name: 'Unvested',
//     data: [
//       {
//         // name: 'Point 1',
//         color: 'rgb(224 224 224)',
//         y: [50000, 65000],
//         x: new Date('2021-01-01').getTime()
//       },
//       {
//         // name: 'Point 2',
//         color: 'rgb(224 224 224)',
//         y: [40000, 65000],
//         x: new Date('2021-02-01').getTime()
//       }
//     ],
//     stack: 0
//   },
//   {
//     name: 'Vesting',
//     data: [
//       {
//         // name: 'Point 1',
//         color: 'rgb(124, 181, 236)',
//         y: [0, 65000],
//         x: new Date('2021-02-01').getTime()
//       },
//       {
//         // name: 'Point 2',
//         color: 'rgb(124, 181, 236)',
//         y: [10000, 65000],
//         x: new Date('2021-02-01').getTime()
//       }
//     ],
//     stack: 0
//   }
// ]
