import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarPhone from "./components/Navbar/NavbarPhone";


function App() {
  return (
    <>
      <div className="separate">
        <Navbar />
        <NavbarPhone/>
        <Home />{" "}
      </div>
      <Footer />
    </>
  );
}

export default App;
