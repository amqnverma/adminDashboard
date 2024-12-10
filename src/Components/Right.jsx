import React from "react";
import "./Right.css";
import {
  Calendar,
  Bell,
  MessageSquareDot,
  ChevronDown,
  ChartPie,
  MessageSquareDiff,
  ClipboardCheck,
  Check,
  Building2,
  Dot,
} from "lucide-react";

import jack from "../assets/jack.png";
import { useNavigate } from "react-router-dom";
const Right = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="right-container">
        <div className="icon-pack">
          <Calendar />
          <Bell />
          <MessageSquareDot />
          <img src={jack} alt="" />
          {/* <ChevronDown /> */}
          <button onClick={handleClick}>Login</button>
        </div>
        <div className="status-box">
          <h3>Formation Status</h3>
          <h4>in progress</h4>
          <hr />
          <span>
            <h5>Estimated processing</h5>
            <p>4-5 Business days</p>
          </span>
          <button>view status</button>
        </div>

        <div className="todo">
          <h3>Your to-do list</h3>
          <div className="todo-item">
            <div className="box">
              <ChartPie />
            </div>
            <div>
              <h5>Run Payroll</h5>
              <p>Mar 4 at 6:00 pm</p>
            </div>
          </div>
          <div className="todo-item">
            <div className="box">
              <MessageSquareDiff />
            </div>
            <div>
              <h5>Review time to spent</h5>
              <p>Mar 4 at 6:00 pm</p>
            </div>
          </div>
          <div className="todo-item">
            <div className="box">
              <ClipboardCheck />
            </div>
            <div>
              <h5>Sign board selection</h5>
              <p>Mar 4 at 6:00 pm</p>
            </div>
          </div>
          <div className="todo-item">
            <div className="box">
              <Check />
            </div>
            <div>
              <h5>Finish onboarding mahir</h5>
              <p>Mar 4 at 6:00 pm</p>
            </div>
          </div>
          <div className="todo-item">
            <div className="box">
              <Building2 />
            </div>
            <div>
              <h5>Run payroll</h5>
              <p>Mar 4 at 6:00 pm</p>
            </div>
          </div>
        </div>

        <div className="item">
          <Dot />
          <div className="item-text">
            <h4>Run payroll</h4>
            <p>Mar 4 at 6:00 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
