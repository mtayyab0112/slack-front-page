import React from "react";
import "./App.css";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import GetstartedSection from "./components/GetstartedSection";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <FeatureSection />
      <GetstartedSection />
      <Footer />
    </>
  );
};

export default App;
