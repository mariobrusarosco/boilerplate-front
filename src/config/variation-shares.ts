import numeral from 'numeral';
import moment from 'moment';

export const allGrantsNetValue = 11000450.45;

export const { format: toMoney } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const unvestedShares = [
  [new Date('2018-01-01').getTime(), 50000],
  [new Date('2018-02-01').getTime(), 50000],
  [new Date('2018-03-01').getTime(), 50000],
  [new Date('2018-04-01').getTime(), 50000],
  [new Date('2018-05-01').getTime(), 50000],
  [new Date('2018-06-01').getTime(), 50000],
  [new Date('2018-07-01').getTime(), 50000],
  [new Date('2018-08-01').getTime(), 50000],
  [new Date('2018-09-01').getTime(), 50000],
  [new Date('2018-10-01').getTime(), 40000],
  [new Date('2018-11-01').getTime(), 39500],
  [new Date('2018-12-01').getTime(), 38000],

  [new Date('2019-01-01').getTime(), 37500],
  [new Date('2019-02-01').getTime(), 36000],
  [new Date('2019-03-01').getTime(), 35000],
  [new Date('2019-04-01').getTime(), 34000],
  [new Date('2019-05-01').getTime(), 33000],
  [new Date('2019-06-01').getTime(), 32000],
  [new Date('2019-07-01').getTime(), 31000],
  [new Date('2019-08-01').getTime(), 30000],
  [new Date('2019-09-01').getTime(), 28000],
  [new Date('2019-10-01').getTime(), 26000],
  [new Date('2019-11-01').getTime(), 24000],
  [new Date('2019-12-01').getTime(), 22000],

  [new Date('2020-01-01').getTime(), 21000],
  [new Date('2020-02-01').getTime(), 20000],
  [new Date('2020-03-01').getTime(), 19000],
  [new Date('2020-04-01').getTime(), 18000],
  [new Date('2020-05-01').getTime(), 17000],
  [new Date('2020-06-01').getTime(), 16000],
  [new Date('2020-07-01').getTime(), 16000],
  [new Date('2020-08-01').getTime(), 16000],
  [new Date('2020-09-01').getTime(), 16000],
  [new Date('2020-10-01').getTime(), 16000],
  [new Date('2020-11-01').getTime(), 36000],
  [new Date('2020-12-01').getTime(), 36000],

  [new Date('2021-01-01').getTime(), 36000],
  [new Date('2021-02-01').getTime(), 36000],
  [new Date('2021-03-01').getTime(), 36000],
  [new Date('2021-04-01').getTime(), 36000],
  [new Date('2021-05-01').getTime(), 36000],
  [new Date('2021-06-01').getTime(), 36000],
  [new Date('2021-07-01').getTime(), 34000],
  [new Date('2021-08-01').getTime(), 32000],
  [new Date('2021-09-01').getTime(), 30000],
  [new Date('2021-10-01').getTime(), 28000],
  [new Date('2021-11-01').getTime(), 26000],
  [new Date('2021-12-01').getTime(), 32000],

  [new Date('2022-01-01').getTime(), 30000],
  [new Date('2022-02-01').getTime(), 28000],
  [new Date('2022-03-01').getTime(), 26000],
  [new Date('2022-04-01').getTime(), 24000],
  [new Date('2022-05-01').getTime(), 22000],
  [new Date('2022-06-01').getTime(), 20000],
  [new Date('2022-07-01').getTime(), 18000],
  [new Date('2022-08-01').getTime(), 16000],
  [new Date('2022-09-01').getTime(), 14000],
  [new Date('2022-10-01').getTime(), 12000],
  [new Date('2022-11-01').getTime(), 10000],
  [new Date('2022-12-01').getTime(), 8000],

  [new Date('2023-01-01').getTime(), 6000],
  [new Date('2023-02-01').getTime(), 4000],
  [new Date('2023-03-01').getTime(), 2000],
  [new Date('2023-04-01').getTime(), 0],
  [new Date('2023-05-01').getTime(), 0],
  [new Date('2023-06-01').getTime(), 0],
  [new Date('2023-07-01').getTime(), 0],
  [new Date('2023-08-01').getTime(), 0],
  [new Date('2023-09-01').getTime(), 0],
  [new Date('2023-10-01').getTime(), 0],
  [new Date('2023-11-01').getTime(), 0],
  [new Date('2023-12-01').getTime(), 0]
];

export const vestedShares = [
  [new Date('2018-01-01').getTime(), 0],
  [new Date('2018-02-01').getTime(), 0],
  [new Date('2018-03-01').getTime(), 0],
  [new Date('2018-04-01').getTime(), 0],
  [new Date('2018-05-01').getTime(), 0],
  [new Date('2018-06-01').getTime(), 0],
  [new Date('2018-07-01').getTime(), 0],
  [new Date('2018-08-01').getTime(), 0],
  [new Date('2018-09-01').getTime(), 0],
  [new Date('2018-10-01').getTime(), 10000],
  [new Date('2018-11-01').getTime(), 10500],
  [new Date('2018-12-01').getTime(), 12000],

  [new Date('2019-01-01').getTime(), 12500],
  [new Date('2019-02-01').getTime(), 14000],
  [new Date('2019-03-01').getTime(), 15000],
  [new Date('2019-04-01').getTime(), 16000],
  [new Date('2019-05-01').getTime(), 17500],
  [new Date('2019-06-01').getTime(), 18000],
  [new Date('2019-07-01').getTime(), 19000],
  [new Date('2019-08-01').getTime(), 20000],
  [new Date('2019-09-01').getTime(), 22000],
  [new Date('2019-10-01').getTime(), 24000],
  [new Date('2019-11-01').getTime(), 26000],
  [new Date('2019-12-01').getTime(), 28000],

  [new Date('2020-01-01').getTime(), 29000],
  [new Date('2020-02-01').getTime(), 30000],
  [new Date('2020-03-01').getTime(), 31000],
  [new Date('2020-04-01').getTime(), 32000],
  [new Date('2020-05-01').getTime(), 33000],
  [new Date('2020-06-01').getTime(), 34000],
  [new Date('2020-07-01').getTime(), 34000],
  [new Date('2020-08-01').getTime(), 34000],
  [new Date('2020-09-01').getTime(), 34000],
  [new Date('2020-10-01').getTime(), 34000],
  [new Date('2020-11-01').getTime(), 34000],
  [new Date('2020-12-01').getTime(), 34000],

  [new Date('2021-01-01').getTime(), 34000],
  [new Date('2021-02-01').getTime(), 34000],
  [new Date('2021-03-01').getTime(), 34000],
  [new Date('2021-04-01').getTime(), 34000],
  [new Date('2021-05-01').getTime(), 34000],
  [new Date('2021-06-01').getTime(), 34000],
  [new Date('2021-07-01').getTime(), 36000],
  [new Date('2021-08-01').getTime(), 38000],
  [new Date('2021-09-01').getTime(), 40000],
  [new Date('2021-10-01').getTime(), 42000],
  [new Date('2021-11-01').getTime(), 44000],
  [new Date('2021-12-01').getTime(), 68000],

  [new Date('2022-01-01').getTime(), 70000],
  [new Date('2022-02-01').getTime(), 72000],
  [new Date('2022-03-01').getTime(), 74000],
  [new Date('2022-04-01').getTime(), 76000],
  [new Date('2022-05-01').getTime(), 78000],
  [new Date('2022-06-01').getTime(), 80000],
  [new Date('2022-07-01').getTime(), 82000],
  [new Date('2022-08-01').getTime(), 84000],
  [new Date('2022-09-01').getTime(), 86000],
  [new Date('2022-10-01').getTime(), 88000],
  [new Date('2022-11-01').getTime(), 90000],
  [new Date('2022-12-01').getTime(), 92000],

  [new Date('2023-01-01').getTime(), 94000],
  [new Date('2023-02-01').getTime(), 96000],
  [new Date('2023-03-01').getTime(), 98000],
  [new Date('2023-04-01').getTime(), 100000],
  [new Date('2023-05-01').getTime(), 100000],
  [new Date('2023-06-01').getTime(), 100000],
  [new Date('2023-07-01').getTime(), 100000],
  [new Date('2023-08-01').getTime(), 100000],
  [new Date('2023-09-01').getTime(), 100000],
  [new Date('2023-10-01').getTime(), 100000],
  [new Date('2023-11-01').getTime(), 100000],
  [new Date('2023-12-01').getTime(), 100000]
];

export const variationSharesOptions = {
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
    //   // day: '%e. %b',
    //   month: "%b /  '%y",
    //   year: '%b %Y%Y%Y'
    // },
    labels: {
      formatter: (payload: any) => {
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
        formatter: (payload: any) => {
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
        formatter: (payload: any) => {
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
      pointPadding: 0.05,
      // pointWidth: 5,
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
      data: [[new Date('2021-01-01').getTime(), allGrantsNetValue]],
      type: 'scatter',
      yAxis: 1,
      opacity: 0,
      enableMouseTracking: false,
      showInLegend: false
    }
  ]
};
