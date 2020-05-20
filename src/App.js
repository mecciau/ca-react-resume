import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Resume">
      <Header name="Sophie Alpert" title="programmer" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
