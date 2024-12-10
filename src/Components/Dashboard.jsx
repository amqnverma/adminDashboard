import React from "react";
import "./Dashboard.css";
import jack from "../assets/jack.png";
import tom from "../assets/tom.png";
import gerard from "../assets/gerard.png";
import simon from "../assets/simon.png";
import graph from "../assets/graph.png";
import {
  Landmark,
  EllipsisVertical,
  Wallet,
  CreditCard,
  History,
} from "lucide-react";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <h3>Good morning, Aman!</h3>
        <div className="bank-balance-container">
          <div className="bank-balance">
            <div className="bank-icon">
              <Landmark />
              <EllipsisVertical className="menu-icon" />
            </div>
            <h4>$143,624</h4>
            <p>
              Your bank
              <br />
              Balance
            </p>
          </div>

          <div className="bank-balance">
            <div className="bank-icon">
              <Wallet />
              <EllipsisVertical className="menu-icon" />
            </div>
            <h4>$143,624</h4>
            <p>
              Your bank
              <br />
              Balance
            </p>
          </div>

          <div className="bank-balance">
            <div className="bank-icon">
              <History />
              <EllipsisVertical className="menu-icon" />
            </div>
            <h4>7</h4>
            <p>
              Employess
              <br />
              working today
            </p>
          </div>

          <div className="bank-balance">
            <div className="bank-icon">
              <CreditCard />
              <EllipsisVertical className="menu-icon" />
            </div>
            <h4>$143,624</h4>
            <p>
              This week's
              <br />
              card spending
            </p>
          </div>
        </div>

        {/* Client box */}
        <div className="client-container">
          <div className="client-box">
            <div className="client">
              <h3>Clients</h3>
              <div className="flex-div">
                <p>54</p>
                <span>+ 18.5%</span>
              </div>
            </div>

            <div className="client">
              <h3>invoice outdoor</h3>
              <div className="flex-div">
                <p>7</p>
                <span>- 11.5%</span>
              </div>
            </div>
          </div>

          <div className="graph">
            <img src={graph} alt="" />
          </div>
        </div>

        {/* recent emails */}
        <div className="email-box">
          <div className="email">
            <img src={jack} alt="" />
            <p>Jack</p>
            <p>Meeting Started</p>
            <p>12.30 PM</p>
          </div>
          <div className="email">
            <img src={gerard} alt="" />
            <p>Steve</p>
            <p>Meeting Started</p>
            <p>12.30 PM</p>
          </div>
          <div className="email">
            <img src={simon} alt="" />
            <p>Tony</p>
            <p>Meeting Started</p>
            <p>12.30 PM</p>
          </div>
          <div className="email">
            <img src={tom} alt="" />
            <p>Tom</p>
            <p>Meeting Started</p>
            <p>12.30 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
