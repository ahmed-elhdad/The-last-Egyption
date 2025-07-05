// Home.jsx
import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Nav from "./components/2-nav";
import Hero from "./components/3-hero";
import Header from "./components/1-header";
import { useEffect, useState } from "react";
import Kings from "./components/4-Kings";
import Museums from "./components/5-Museums";
import Maabed from "./components/6-Maabed";
import Images from "./components/7-Images";
import Footer from "./components/8-Footer";
import ButtonToTop from "./components/9-buttonToTop";
export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Nav />
      <Hero />
      <Kings />
      <Museums />
      <Maabed />
      <Images />
      <Footer />
      <ButtonToTop />
    </div>
  );
}
