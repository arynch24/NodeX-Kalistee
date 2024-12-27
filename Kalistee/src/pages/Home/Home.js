import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
// import Marquee from "../../components/home/Marque/Marque";
import Marque2 from "../../components/home/Marque/Marque2";
import GsapAnim from "../../components/gsapAnim/GsapAnim";
import a1 from '../../components/gsapAnim/imgAnim/a1.png';
import a2 from '../../components/gsapAnim/imgAnim/a2.png';
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
        <Marque2 />
        <GsapAnim />

      </div>
    </div>
  );
};

export default Home;
