import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './schedule.css';

const Schedule = () => {
  return (
    <div className="pie__chart">
      <div className="schedule__heading">
        <div>
          <h4>Today's schedule</h4>
        </div>
        <div className="seaall">
          See All <i className="fa-solid fa-greater-than"></i>
        </div>
      </div>

      <div className="schedule1__container">
        <div className="line__container"></div>
        <div>
          <span>Meeting with suppliers from kuta bali</span>
          <p>14:00 - 15:00</p>
          <p>at Sunset Toad,Kuta,Bali</p>
        </div>
      </div>
      <div className="schedule2__container">
        <div className="line__container"></div>
        <div>
          <span>check operation at Giga factory 1</span>
          <p>18:00 - 20:00</p>
          <p>at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
