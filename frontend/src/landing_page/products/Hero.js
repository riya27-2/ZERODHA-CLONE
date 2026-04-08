import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container text-center mt-5 mb-5 border-bottom'>
            <div className='row'>
                <h1>Technology</h1>
                <p style={{color:"gray",fontSize:"20px"}}>sleek , modern and intuitive trading platform</p>
                <p>check out our <Link to="">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
        </div>
     );
}

export default Hero;