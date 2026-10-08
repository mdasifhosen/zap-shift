import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../../../components/Card/Card';
import CardSection from '../../../components/Card/CardSection';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Card></Card>
        <div>
          <CardSection></CardSection>
        </div>
      </div>
    );
};

export default Home;