import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="body-cont">
        <Header />

        <Switch>
          <Route exact path="/customer-login" component={Login} />
          <Route exact path="/expert-login" component={Login} />
          {/* <Route exact path="/" component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/search" component={Search} /> */}
        </Switch>
      </div>
      <Footer className="footer-cont" />
    </Router>
  );
}

export default App;
