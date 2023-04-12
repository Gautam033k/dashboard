import React from 'react';
import './navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import AVATAR from '../../assets/avatar.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Dashboard</h3>
      <div>
        <div>
          <div className="search__container">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
            <i className="fa-regular fa-bell fa-lg"></i>
            <div className="avatar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
