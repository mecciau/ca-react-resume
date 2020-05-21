import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data.json";
import LangSelect from "./components/LangSelect";

const App = () => {
  const [lang, setLang] = React.useState("en");
  return (
    <div className="Resume">
      <LangSelect setLang={setLang} />
      <Header name={data[lang].name} title={data[lang].title} />
      <Main data={data[lang]} />
      <Footer data={data[lang]} />
    </div>
  );
};

export default App;
