import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import Home from "./pages/Home/Home";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={UploadVideo} />
        <Route path="/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
