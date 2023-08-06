import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { englishBackEndData } from './english';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  eChartYAxis!: echarts.ECharts;
  eChart1!: echarts.ECharts;
  eChart2!: echarts.ECharts;
  eChart3!: echarts.ECharts;

  ngAfterViewInit(): void {
    // this.eChartYAxis = echarts.init(document.getElementById('yAxisChart')!);
    // this.eChartYAxis.setOption(this.yAxisOption);
  }

  ngOnInit(): void {
    const backEndData = englishBackEndData;
    console.log(
      `english.js loaded backEndData: ${JSON.stringify(backEndData)}`
    );

    this.eChart1 = echarts.init(document.getElementById('chart1')!);
    // this.eChart2 = echarts.init(document.getElementById('chart2')!);
    // this.eChart3 = echarts.init(document.getElementById('chart3')!);

    // MINI CHARTS
    this.eChart1.setOption( {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    });
    // this.eChart1.setOption({
    //   xAxis: [{}, {}, { data: '1' }],
    //   series: [
    //     {
    //       data: [53.1056, 22.98, 0.93, 0, 19.25, 3.72, 0],
    //     },
    //   ],
    // });
    // this.eChart3.setOption(this.miniChartOption);
    // this.eChart3.setOption({
    //   xAxis: [{}, {}, { data: '2' }],
    //   series: [
    //     {
    //       data: [46.1, 23.9, 0.93, 0, 22.36, 4.96, 0.93],
    //     },
    //   ],
    // });
    // this.eChart3.setOption(this.miniChartOption);
    // this.eChart3.setOption({
    //   xAxis: [{}, {}, { data: '3' }],
    // });
  }

  yAxisOption = {
    grid: {
      left: '95%',
      // right: "0%",
    },
    xAxis: [
      {
        show: false,
        // name: "Difference between mark awarded and correct mark",
        // nameLocation: "middle",
        // nameTextStyle: {
        //   padding: [15, 0, 0, 0],
        //   color: "black",
        //   fontSize: 14,
        //   fontWeight: "bold",
        // },
      },
    ],
    yAxis: {
      // z: -1,
      type: 'value',
      name: 'Difference Percentage of start-up scripts',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: [0, 0, 20, 0],
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
      },
      axisLabel: {
        show: true,
        formatter: '{value}%',
      },
      minorSplitLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      min: 0, // Minimum value of the Y-axis
      max: 30, // Maximum value of the Y-axis
      axisLine: {
        show: true,
        lineStyle: {
          color: 'black',
        },
      },
      axisTick: {
        show: true,
      },
    },
    series: [
      {
        data: [46.1, 23.9, 0.93, 0, 22.36, 4.96, 0.93],
      },
    ],
  } as echarts.EChartsOption;

  miniChartOption = {
    z: -2,
    grid: {
      left: '5%', // parent grid  + padding
      height: '71%',
      // bottom: "0%",
      top: '10%',
      with: '100%',
    },
    xAxis: [
      {
        z: -2,
        type: 'category',
        data: ['-1', '-2', '-3', '0', '1', '2', '3'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      // black line at the top
      {
        position: 'top',
        offset: 22,
        axisLine: {
          show: true, // Show the top axis line
          onZero: false, // Do not force the axis to start at zero
          lineStyle: {
            color: 'black', // Color of the top axis line
            width: 1, // Width of the top axis line
          },
        },
        axisTick: {
          show: false, // Hide the top axis tick marks
        },
        axisLabel: {
          show: false, // Hide the labels on the top axis
        },
      },
      {
        position: 'top',
        offset: 2,
        axisLine: {
          show: true,
          // color: "black",
          lineStyle: {
            color: 'black', // Color of the top axis line
            width: 1, // Width of the top axis line
          },
        },
        axisTick: {
          length: 20,
          interval: 0,
        },
        data: ['1'],
        axisLabel: {
          // fontWeight: "bolder",
          margin: 1,
        },
      },
    ],
    yAxis: {
      z: -2,
      axisLine: {
        show: false, // Show the top axis line
      },
      axisLabel: {
        show: false,
      },
      minorSplitLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.resizeCharts();
  }

  resizeCharts() {
    // this.eChartYAxis.resize();
    this.eChart1.resize();
    if (this.eChart2) {
      this.eChart2.resize();
    }
    if (this.eChart2) {
      this.eChart2.resize();
    }
  }
}
