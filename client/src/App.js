import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Footer from "./components/Footer"; 
import Landing from "./components/Landing";
import CardDetail from "./components/CardDetail";
import Create from "./components/Create";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/Home" component={Navbar} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route
        exact
        path="/CardDetail/:id"
        render={({ match }) => <CardDetail id={match.params.id} />}
      />
      <Route path="/Home" component={Footer} />

    
    </div>
  );
}

export default App;
