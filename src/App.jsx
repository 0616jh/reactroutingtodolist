import { useState } from "react";
import Header from "./components/Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
