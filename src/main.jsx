import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Chart from "./Pages/Tab/Chart.jsx";
import Mail from "./Pages/Tab/Mail.jsx";
import Message from "./Pages/Tab/Message.jsx";
import Video from "./Pages/Tab/Video.jsx";
import Settings from "./Pages/Tab/Settings.jsx";
import Gift from "./Pages/Tab/Gift.jsx";
import People from "./Pages/Tab/People.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<App />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/video" element={<Video />} />
        <Route path="/people" element={<People />} />
        <Route path="/message" element={<Message />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
