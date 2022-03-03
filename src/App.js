import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Button from "./components/Button";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
