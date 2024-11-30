import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import TranscationHistory from "./Components/TransactionHistory/TranscationHistory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<UserDashboard />} />
        <Route path="transaction-history" element={<TranscationHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
