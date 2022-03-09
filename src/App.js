import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Button from "./components/Button";
import Home from "./screens/Home/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./screens/Login/Login";
import Chart from "./screens/Chart/Chart";

// CSS files
import "./CSS/Common.css";
import "./CSS/chart.css";
import "./CSS/gridlayout.css";
import "./CSS/rnd.css";
import Grid from "./screens/Grid/Grid";
import RndLayout from "./screens/Rnd/Rnd";
import CustomDraggable from "./screens/CustomDraggable/CustomDraggable";
import ReactDnd from "./screens/ReactDnd/ReactDnd";
import MyChart from "./screens/MyChart/MyChart";

const App = () => {
  console.log("hello");

  console.log("new");
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Login />
        <Home /> */}

        {/* <Grid /> */}
        {/* <RndLayout /> */}

        {/* <CustomDraggable /> */}

        {/* <ReactDnd /> */}

        <Chart />

        {/* <MyChart /> */}
      </Provider>
    </div>
  );
};

export default App;
