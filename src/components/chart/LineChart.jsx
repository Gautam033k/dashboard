import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import './linechart.css';

function LineChart() {
  const [data, setData] = useState({ male: [], female: [] });

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=60').then((response) => {
      const usersByAge = response.data.results.reduce(
        (acc, user) => {
          const age = user.dob.age;
          const gender = user.gender === 'male' ? 'male' : 'female';
          acc[gender][age] = (acc[gender][age] || 0) + 1;
          return acc;
        },
        { male: {}, female: {} }
      );
      const chartData = {
        male: Object.entries(usersByAge.male).map(([age, count]) => ({
          x: age,
          y: count * 90,
        })),
        female: Object.entries(usersByAge.female).map(([age, count]) => ({
          x: age,
          y: count * 110,
        })),
      };
      setData(chartData);
    });
  }, []);

  const chartOptions = {
    chart: {
      id: 'user-chart',
      type: 'area',
      height: '200',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00E396', '#FF4560'],
    dataLabels: {
      enabled: false,
      style: {
        fontSize: '20px',
        // Set the font size to a smaller value
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 0,
    //     stops: [0, 90, 100],
    //   },
    // },
    xaxis: {
      type: 'numeric',
      tickAmount: 2,
      labels: {
        formatter: (value) => {
          return parseInt(value);
        },
      },
    },

    yaxis: {
      tickAmount: 6,
      axisTicks: {
        height: 200, // Set the height to a smaller value
      },
    },
    legend: {
      position: 'top',
    },
  };

  const chartSeries = [
    {
      name: 'Male',
      data: data.male,
    },
    {
      name: 'Female',
      data: data.female,
    },
  ];

  return (
    <div className="linechart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={280}
        width={1100}
      />
    </div>
  );
}

export default LineChart;
