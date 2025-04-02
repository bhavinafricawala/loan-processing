import "./App.css";
import LoanApplication from "./Components/LoanApplication";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" />
          <Route path="/financial" />
          <Route path="/loan" />
          <Route path="/upload" />
          <Route path="/review" />
        </Routes>
      </Router>
      <LoanApplication />
    </React.Fragment>
  );
}

export default App;
