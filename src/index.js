import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/Home";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path = "/data">
          <Navbar />
          <Charts coinData={coinData} />
        </Route>
        <Route path = "/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
