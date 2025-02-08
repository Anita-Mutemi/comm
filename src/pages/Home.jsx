import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import GamificationRewards from "../components/GamificationRewards";
import VoiceSearch from "../components/VoiceSearch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedProducts />
      <Categories />
      <GamificationRewards />
      <VoiceSearch />
      <Footer />
    </div>
  );
};

export default Home;