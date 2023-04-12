import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './piechart.css';

const PieChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'basic-pie',
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      // position: 'top',
      labels: {
        style: {
          fontSize: '160px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          color: '#333333',
          textTransform: 'uppercase',
          margin: '5px',
          height: '400px',
        },
      },
    },

    colors: ['#98D89E', '#F6DC7D', '#EE8484'],

    labels: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  });
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        const data = response.data.Countries.slice(0, 3).map((country) => {
          return {
            x: country.Country,
            y: country.TotalConfirmed,
          };
        });

        setOptions({ ...options, labels: data.map((d) => d.x) });
        setSeries(data.map((d) => d.y));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pie__chart">
      <div className="pie__chart__title">
        <div>
          <h4>Top Products</h4>
        </div>
        <div>
          <span className="pie__year">
            May-jun 2021{' '}
            <i className="fa-solid fa-greater-than fa-rotate-90"></i>
          </span>
        </div>
      </div>
      <Chart
        options={options}
        series={series}
        type="pie"
        width="310"
        className="pie__design"
      />
    </div>
  );
};

export default PieChart;
