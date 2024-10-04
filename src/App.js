import React from "react";
import "./styles/scss/link.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
