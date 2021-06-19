import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import Home from "./components/Home/Home";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={UploadVideo} />
        <Route path="/:id" render={(routeProps) => <Home {...routeProps} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
