import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, About, Projects, Contacts, NotFoundPage } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
