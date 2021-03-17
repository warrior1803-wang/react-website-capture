import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="discription">
        <h2>High </h2>
        <span>quality</span> services
        <div className="cards">
          <div className="card">
            <div className="icon">
                <img src={clock} alt=""/>
                <h3>Efficient</h3>
            </div>
            <p>balabalabalal</p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={teamwork} alt=""/>
                <h3>Teamwork</h3>
            </div>
            <p>balabalabalal</p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={diaphragm} alt=""/>
                <h3>Efficient</h3>
            </div>
            <p>balabalabalal</p>
          </div>

          <div className="card">
            <div className="icon">
                <img src={clock} alt=""/>
                <h3>Efficient</h3>
            </div>
            <p>balabalabalal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
