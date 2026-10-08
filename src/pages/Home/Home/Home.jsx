import React from "react";
import Banner from "../Banner/Banner";
import Card from "../../../components/Card/Card";
import CardSection from "../../../components/Card/CardSection";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>

          <CardSection></CardSection>
          <Brands></Brands>
    </div>
  );
};

export default Home;
