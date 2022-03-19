import React from "react";
import { Brand, Navbar, CTA } from "./componenets";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
