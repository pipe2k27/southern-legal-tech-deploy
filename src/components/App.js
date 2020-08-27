import React from "react";
import Navbar from "./Navbar";
import TextBanner1 from "./text-banner1";
import Footer from "./Footer.js";
import Steps from "./Steps.js";
import Create from "./Create.js";

import "./css/styles.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <TextBanner1 />
        <Steps />
      </Route>
      <Route path="/create-document">
        <Create />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
