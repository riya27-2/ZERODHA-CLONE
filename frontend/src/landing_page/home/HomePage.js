import React from 'react';
import Awards from './Awards';
import Stat from './Stat';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <>
        <Hero/>
        <Awards/>
        <Stat/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
      );
}

export default HomePage;