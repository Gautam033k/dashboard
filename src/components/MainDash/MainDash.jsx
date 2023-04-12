import React from 'react';
import Cards from '../Cards/Cards';
import LineChart from '../chart/LineChart';
import PieChart from '../chart/PieChart';
import Navbar from '../navbar/Navbar';
import Schedule from '../shedule/Schedule';
import './maindash.css';

const MainDash = () => {
  return (
    <div className="maindash">
      <Navbar />
      <Cards />
      <LineChart />
      <div className="footer__container">
        <PieChart />
        <Schedule />
      </div>
    </div>
  );
};

export default MainDash;
