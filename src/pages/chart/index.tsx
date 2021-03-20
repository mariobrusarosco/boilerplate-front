import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import { mockData, mockDataTwo, montlhy, randomDays } from './data';
import * as moment from 'moment';

const CustomTooltip = props => {
  console.log({ props });

  return (
    <div>
      <p>
        The value for <b>{new Date(props.x).toUTCString()}</b>
      </p>

      <p>
        is <b>{props.y}</b>, in series
      </p>
    </div>
  );
};

const options: Highcharts.Options = {
  title: { text: '' },
  legend: {
    enabled: true,
    verticalAlign: 'top'
  },
  chart: {
    marginBottom: 50,
    marginTop: 50
  },
  // series: [
  //   {
  //     type: 'column',
  //     data: montlhy
  //     // pointStart: Date.UTC(2010, 0, 1),
  //     // pointInterval: 24 * 3600 * 1000 // one day
  //   }
  // ],
  series: [
    {
      name: 'Employees',
      color: 'rgba(165,170,217,1)',
      data: [150, 73, 20],
      // pointPadding: 0.3,
      // pointPlacement: -0.2,
      type: 'column',
      yAxis: 0
    },
    {
      name: 'Net Equity value',
      color: 'rgba(186,60,61,.9)',
      data: [203.6, 198.8, 208.5],
      // tooltip: {
      //   valuePrefix: '$',
      //   valueSuffix: ' M'
      // },
      // pointPadding: 0.4,
      // pointPlacement: 0.2,
      yAxis: 1,
      type: 'column'
      // visible: false,
      // showInLegend: true
    }
  ],
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  // plotOptions: {
  //   column: {
  //     grouping: false,
  //     shadow: false,
  //     borderWidth: 0
  //   }
  // },
  xAxis: {
    type: 'datetime',
    // dateTimeLabelFormats: {
    //   year: '%Y'
    // },
    // currentDateIndicator: true,
    crosshair: true,
    plotLines: [
      {
        value: 2,
        dashStyle: 'dash',
        width: 1,
        color: '#d33',
        // zIndex: 1,
        label: {
          text: 'Today',
          textAlign: 'center',
          verticalAlign: 'top',
          rotation: 0,
          useHTML: true,
          y: -10
        }
      }
    ],
    labels: {
      // format: '{value}'
      formatter: payload => {
        console.log(payload);
        return moment(payload.value).format('MMM YY');
      }
    }
  },
  yAxis: [
    {
      min: 0,
      title: {
        text: 'Employees'
      }
    },
    {
      min: 0,
      title: {
        text: 'Profit (millions)'
      },
      opposite: true,
      labels: {
        // format: '{value}'
        formatter: ({ value }) => new Intl.NumberFormat('us-en').format(+value)
      }
    }
  ]
};

const optionsTwo = {
  tooltip: {
    formatter: function () {
      console.log(ReactDOMServer);
      const html = ReactDOMServer.renderToString(<CustomTooltip {...this} />, this);
      // console.log(this, { html });

      return html;
    }
  },
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
    // marginBottom: 50,
    marginTop: 120
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      // don't display the dummy year
      day: '%e. %b'
    },
    crosshair: true,
    plotLines: [
      {
        dashStyle: 'ShortDash',
        width: 2,
        color: 'rgb(217 217 217)',
        value: Date.UTC(1970, 10, 1),
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
      // opposite: true,
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
        offset: -35,
        rotation: 0,
        y: -22
      },
      opposite: true
      // labels: {
      //   // format: '{value}'
      //   formatter: ({ value }) => new Intl.NumberFormat('us-en').format(+value)
      // }
    }
  ],
  plotOptions: {
    column: {
      stacking: 'normal'
    },
    series: {
      borderRadius: 5,
      pointWidth: 10,
      pointPadding: 0.05,
      states: {
        inactive: {
          enabled: false
        }
      }
    }
  },

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
  series: [
    {
      color: 'rgb(233 238 242)',
      name: 'Unvested',
      data: [
        [Date.UTC(1970, 1, 1), 50000],
        [Date.UTC(1970, 2, 1), 50000],
        [Date.UTC(1970, 3, 1), 40000],
        [Date.UTC(1970, 4, 1), 38000],
        [Date.UTC(1970, 5, 1), 36000],
        [Date.UTC(1970, 6, 1), 34000],
        [Date.UTC(1970, 7, 1), 32000],
        [Date.UTC(1970, 8, 1), 30000],
        [Date.UTC(1970, 9, 1), 28000],
        [Date.UTC(1970, 10, 1), 26000],
        [Date.UTC(1970, 11, 1), 24000],
        [Date.UTC(1970, 12, 1), 22000],
        [Date.UTC(1971, 1, 1), 20000],
        [Date.UTC(1971, 2, 1), 18000],
        [Date.UTC(1971, 3, 1), 15000],
        [Date.UTC(1971, 4, 1), 10000],
        [Date.UTC(1971, 5, 1), 8000],
        [Date.UTC(1971, 6, 1), 5000],
        [Date.UTC(1971, 7, 1), 1000],
        [Date.UTC(1971, 8, 1), 0]
      ],
      stack: 0
    },
    {
      color: 'rgb(124, 181, 236)',
      name: 'Vesting',
      data: [
        [Date.UTC(1970, 1, 1), 0],
        [Date.UTC(1970, 2, 1), 0],
        [Date.UTC(1970, 3, 1), 10000],
        [Date.UTC(1970, 4, 1), 12000],
        [Date.UTC(1970, 5, 1), 14000],
        [Date.UTC(1970, 6, 1), 16000],
        [Date.UTC(1970, 7, 1), 18000],
        [Date.UTC(1970, 8, 1), 20000],
        [Date.UTC(1970, 9, 1), 22000],
        [Date.UTC(1970, 10, 1), 24000],
        [Date.UTC(1970, 11, 1), 26000],
        [Date.UTC(1970, 12, 1), 28000],
        [Date.UTC(1971, 1, 1), 30000],
        [Date.UTC(1971, 2, 1), 32000],
        [Date.UTC(1971, 3, 1), 35000],
        [Date.UTC(1971, 4, 1), 40000],
        [Date.UTC(1971, 5, 1), 42000],
        [Date.UTC(1971, 6, 1), 45000],
        [Date.UTC(1971, 7, 1), 49000],
        [Date.UTC(1971, 8, 1), 50000]
      ],
      stack: 0
    },
    {
      name: 'Net equity value',
      // color: 'red',
      data: [70000.5],
      // tooltip: {
      //   valuePrefix: '$',
      //   valueSuffix: ' M'
      // },
      // pointPadding: 0.3,
      // pointPlacement: 0.2,
      yAxis: 1,
      // stack: 0,
      opacity: 0,
      enableMouseTracking: false,
      showInLegend: false
      // states: {
      //   select: {
      //     enabled: false
      //   }
      // }
      // visible: false
    }
  ]
};

const Container = styled.div`
  width: 1000px;
  display: flex;
  margin: 0 auto;
`;

const LeftData = styled.div`
  // width: 400px;
  background: tomato;
`;

const ChartContainer = styled.div``;

const Chart = () => {
  // React.useEffect(() => {
  //   Highcharts.chart('container', optionsTwo);
  // }, []);

  return (
    <Container>
      {/* <LeftData>Lorem Ipsum</LeftData> */}
      <ChartContainer>
        {/* <div id="container" /> */}
        <HighchartsReact highcharts={Highcharts} options={optionsTwo} />
      </ChartContainer>
    </Container>
  );
};
export default Chart;
