import React from "react";
import { Routes, Route } from "react-router-dom";
import Onlinetimesheet from "../Pages/Features/OnlineTimeSheet";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
import Projects from "../Pages/PrivatePages/Projects/Projects";
import Reports from "../Pages/Reports/Reports";
import Signup from "../Pages/Signup";
import Timecards from "../Pages/Features/Timecards"
import TerminalNavbar from "../Pages/TerminalNavbar/TerminalNavbar";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/featues/timecards" element={<Timecards/>}/>
        {/* featurespages */}
        <Route
          path="/features/attendancetracking"
          element={<Attendancetracking />}
        />
        <Route path="/features/onlinetimesheet" element={<Onlinetimesheet />} />

        {/* Private routes */}
        <Route path="/projects" element={<Projects />} />
        {/* Terminal Routes */}
        <Route path="/trackingtime/report" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
