import { useState } from 'react';
import './App.css';
import Sidebar from './components/sideBar/Sidebar';
import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className="parent__container">
        {/* one */}

        <div className="side__bar">
          <Sidebar />
        </div>
        {/* two */}
        {/* <div className="home__container"></div> */}
        <MainDash />
      </div>
    </div>
  );
}

export default App;
{
  /* <div className="navbar"></div>
          <div className="card_container"></div>
          <div className="chart__container"></div>
          <div className="footer__container">
            <div className="footer__chart"></div>
            <div className="footer__info"></div>
          </div> */
}
