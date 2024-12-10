import React, { useState } from "react";
import "./Sidebar.css";
import {
  HousePlus,
  ChartNoAxesColumn,
  MailPlus,
  Video,
  Users,
  MessageSquareDot,
  Gift,
  Settings,
  Heading1,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  if (active === 1) {
    navigate("/");
  } else if (active === 2) {
    navigate("/chart");
  } else if (active === 3) {
    navigate("/mail");
  } else if (active === 4) {
    navigate("/video");
  } else if (active === 5) {
    navigate("/people");
  } else if (active === 6) {
    navigate("/message");
  } else if (active === 7) {
    navigate("/gift");
  } else if (active === 8) {
    navigate("/settings");
  }

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="icon">
            <p>dappr</p>
            <HousePlus
              onClick={() => setActive(1)}
              className={`icon-hover ${active === 1 ? "house" : ""}`}
            />
            <ChartNoAxesColumn
              onClick={() => setActive(2)}
              className={`icon-hover ${active === 2 ? "house" : ""}`}
            />
            <MailPlus
              onClick={() => setActive(3)}
              className={`icon-hover ${active === 3 ? "house" : ""}`}
            />
            <Video
              onClick={() => setActive(4)}
              className={`icon-hover ${active === 4 ? "house" : ""}`}
              active={active}
            />
            <Users
              onClick={() => setActive(5)}
              className={`icon-hover ${active === 5 ? "house" : ""}`}
            />
            <MessageSquareDot
              onClick={() => setActive(6)}
              className={`icon-hover ${active === 6 ? "house" : ""}`}
            />
            <Gift
              onClick={() => setActive(7)}
              className={`icon-hover ${active === 7 ? "house" : ""}`}
            />
          </div>
          <Settings
            onClick={() => setActive(8)}
            className={`icon-hover ${active === 8 ? "house" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
