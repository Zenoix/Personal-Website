import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, About, Projects, Contacts, NotFoundPage } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
