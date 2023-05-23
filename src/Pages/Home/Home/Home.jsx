import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import HotProduct from "../HotProduct/HotProduct";
import PopularitySection from "../HotProduct/PopularitySection/PopularitySection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Craft Ease - Home page</title>
      </Helmet>
      <Banner></Banner>
      <PopularitySection></PopularitySection>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      {/* main  added here*/}
      <HotProduct></HotProduct>
    </div>
  );
};

export default Home;
