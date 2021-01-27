import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <p className="subtitle">SHOW NOW</p>
          </div>
        </div>
        {/* End Menu Item */}

        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <p className="subtitle">SHOW NOW</p>
          </div>
        </div>
        {/* End Menu Item */}

        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <p className="subtitle">SHOW NOW</p>
          </div>
        </div>
        {/* End Menu Item */}

        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <p className="subtitle">SHOW NOW</p>
          </div>
        </div>
        {/* End Menu Item */}

        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <p className="subtitle">SHOW NOW</p>
          </div>
        </div>
        {/* End Menu Item */}
      </div>
    </div>
  );
};

export default HomePage;
