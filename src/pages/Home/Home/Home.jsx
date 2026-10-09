import React from "react";
import Banner from "../Banner/Banner";
import Card from "../../../components/Card/Card";
import CardSection from "../../../components/Card/CardSection";
import Brands from "../Brands/Brands";
import FeaturesCard from "../../Features/FeaturesCard";
import BannerSection from "../Banner/BannerSection";
import Reviews from "../Reviews/Reviews";

const reviewsPromise=fetch('/reviews.json').then(res=>res.json())


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>

      <CardSection></CardSection>
      <Brands></Brands>
      <FeaturesCard></FeaturesCard>
      <BannerSection></BannerSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
