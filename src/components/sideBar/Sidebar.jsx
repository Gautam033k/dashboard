import React from 'react';
import './sidebar.css';
import { sideBarData } from '../../Data/Data';
import { useState } from 'react';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <span>Board.</span>
        </div>
        <div className="menu">
          {sideBarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? 'menu__item active' : 'menu__item'
                }
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <div>
                  <item.icon />
                </div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="sidebar__footer">
          <div className="footbar__items">
            <span>Help</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
