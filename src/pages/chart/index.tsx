import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import styled from 'styled-components';
// import { mockData, mockDataTwo, montlhy, randomDays } from './config/data';
// import * as moment from 'moment';
import {
  specificGrantNetValue,
  toMoney,
  unalteredSharesOptions
} from '../../config/unaltered-shares';
import { CustomTooltip } from 'components/CustomTooltip';
import { allGrantsNetValue, variationSharesOptions } from '../../config/variation-shares';
import { netWorthConfig } from '../../config/net-worth';

// const options: Highcharts.Options = {
//   title: { text: '' },
//   legend: {
//     enabled: true,
//     verticalAlign: 'top'
//   },
//   chart: {
//     marginBottom: 50,
//     marginTop: 50
//   },
//   // series: [
//   //   {
//   //     type: 'column',
//   //     data: montlhy
//   //     // pointStart: Date.UTC(2010, 0, 1),
//   //     // pointInterval: 24 * 3600 * 1000 // one day
//   //   }
//   // ],
//   series: [
//     {
//       name: 'Employees',
//       color: 'rgba(165,170,217,1)',
//       data: [150, 73, 20],
//       // pointPadding: 0.3,
//       // pointPlacement: -0.2,
//       type: 'column',
//       yAxis: 0
//     },
//     {
//       name: 'Net Equity value',
//       color: 'rgba(186,60,61,.9)',
//       data: [203.6, 198.8, 208.5],
//       // tooltip: {
//       //   valuePrefix: '$',
//       //   valueSuffix: ' M'
//       // },
//       // pointPadding: 0.4,
//       // pointPlacement: 0.2,
//       yAxis: 1,
//       type: 'column'
//       // visible: false,
//       // showInLegend: true
//     }
//   ],
//   plotOptions: {
//     column: {
//       stacking: 'percent'
//     }
//   },
//   // plotOptions: {
//   //   column: {
//   //     grouping: false,
//   //     shadow: false,
//   //     borderWidth: 0
//   //   }
//   // },
//   xAxis: {
//     type: 'datetime',
//     // dateTimeLabelFormats: {
//     //   year: '%Y'
//     // },
//     // currentDateIndicator: true,
//     crosshair: true,
//     plotLines: [
//       {
//         value: 2,
//         dashStyle: 'dash',
//         width: 1,
//         color: '#d33',
//         // zIndex: 1,
//         label: {
//           text: 'Today',
//           textAlign: 'center',
//           verticalAlign: 'top',
//           rotation: 0,
//           useHTML: true,
//           y: -10
//         }
//       }
//     ],
//     labels: {
//       // format: '{value}'
//       formatter: payload => {
//         console.log(payload);
//         return moment(payload.value).format('MMM YY');
//       }
//     }
//   },
//   yAxis: [
//     {
//       min: 0,
//       title: {
//         text: 'Employees'
//       }
//     },
//     {
//       min: 0,
//       title: {
//         text: 'Profit (millions)'
//       },
//       opposite: true,
//       labels: {
//         // format: '{value}'
//         formatter: ({ value }) => new Intl.NumberFormat('us-en').format(+value)
//       }
//     }
//   ]
// };

// const Container = styled.div`
//   width: 1000px;
//   display: flex;
//   margin: 0 auto;
// `;

// const LeftData = styled.div`
//   // width: 400px;
//   background: tomato;
// `;

// const ChartContainer = styled.div``;

const UnalteredConSharesConfiguration = {
  ...unalteredSharesOptions,
  tooltip: {
    formatter: function () {
      const html = ReactDOMServer.renderToString(<CustomTooltip {...this} />);

      console.log({ html });
      return html;
    }
  }
};

const VariationsSharesConfiguration = {
  ...variationSharesOptions,
  tooltip: {
    formatter: function () {
      const html = ReactDOMServer.renderToString(<CustomTooltip {...this} />);

      console.log({ html });
      return html;
    }
  }
};

// const tranding = { color: 'red' };
const Chart = () => {
  React.useEffect(() => {
    // Highcharts.chart('container-unaltered', UnalteredConSharesConfiguration);
    // Highcharts.chart('container-variation', VariationsSharesConfiguration);
    // Highcharts.chart('container-networth', netWorthConfig);
    Highcharts.setOptions({ colors: ['gold'] });
  }, []);

  return (
    <>
      {/* <Container>
        <LeftData>Lorem Ipsum</LeftData>
        <ChartContainer> */}

      <div
        style={{
          maxWidth: '800px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '100px'
        }}
      >
        <div>
          <h2>Chart of a specific grant</h2>
          <h3>Net Equity Value: {toMoney(specificGrantNetValue)}</h3>
        </div>
        <div style={{ width: '100%' }}>
          {/* <div id="container-unaltered" /> */}
          <HighchartsReact
            highcharts={Highcharts}
            options={UnalteredConSharesConfiguration}
          />
        </div>
      </div>

      <div style={{ maxWidth: '1000px', display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Chart with all grants</h2>
          <h3>Net Equity Value: {toMoney(allGrantsNetValue)}</h3>
        </div>
        <div style={{ width: '100%' }}>
          <div id="container-variation" />
          <HighchartsReact
            highcharts={Highcharts}
            options={VariationsSharesConfiguration}
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: '1000px',
          alignItems: 'center',
          display: 'none'
        }}
      >
        <div>
          <h2>Net Worth </h2>
          <h3>Net Worth Value: {toMoney(allGrantsNetValue)}</h3>
        </div>
        <div style={{ width: '100%' }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              ...netWorthConfig
              // colors: [
              //   tranding.color,
              //   tranding.color,
              //   tranding.color,
              //   tranding.color,
              //   tranding.color,
              //   tranding.color,
              //   tranding.color,
              //   tranding.color
              // ]
            }}
          />
        </div>
      </div>

      {/* <HighchartsReact highcharts={Highcharts} options={optionsTwo} />
        </ChartContainer>
      </Container> */}
    </>
  );
};
export default Chart;
