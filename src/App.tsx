import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Reports from "./pages/Reports"; 

import Dashboard from "./pages/DashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
