import React from 'react';
import './navbar.css';

const Navbar = ({tabs, activeTab, setActiveTab}) => {
  return (
    <div className="navbar">
      {tabs.map((tab, i) => (
        <div
          key={tab}
          onClick={() => setActiveTab(i)}
          className={`tab${i === activeTab ? ' active' : ''}`}>
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
