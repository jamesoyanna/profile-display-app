import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Home from "./Views/Home";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
           
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
