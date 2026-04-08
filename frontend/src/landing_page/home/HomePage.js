import React from 'react';
import Awards from './Awards';
import Stat from './Stat';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stat/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
      );
}

export default HomePage;