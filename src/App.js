import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import Footer from "../src/components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;