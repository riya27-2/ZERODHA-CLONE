import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid p-5  ' style={{backgroundColor:"#4c94ec",color:"white",height:"430px"}}>
            <div className='row' style={{marginLeft:"100px"}}>
                <div className='col-6  fs-4'>
                    <p>support portal</p>
                </div>
                <div className='col-6  fs-4 ml-3' >
                    <a href="#" style={{color:"white"}}>Track Tickets</a>
                </div>
                <div className='col-6 mt-4  '>
                    <h3>Search for an answer or browse help topics <br/>
                    to create a ticket</h3>
                </div>
                <div className='col-6 ml-5 mt-4 '>
                    <h4 className='ml-5'>Featured</h4>
                    <p className='ml-5'>1.<a href="#" style={{color:"white"}}>current Takeovers and Delisting - january 2024</a></p>
                    <p>2.<a href="#"  style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></p>


                </div>
                <div className='col-6'>
                    <div class="box-p">
                        <p>Eg: how do i activate F&O,why is my order getting rejected...</p>
                    </div>
                    <div className='mt-1'>
                    <a style={{textDecoration:"underline"}}>Track account opening</a>&nbsp;&nbsp;  <a style={{textDecoration:"underline"}}>Track segment activation</a>&nbsp;&nbsp; <a style={{textDecoration:"underline"}}>Intradax</a><br/><a style={{textDecoration:"underline"}}>margins</a>&nbsp;&nbsp; <a style={{textDecoration:"underline"}}>Kite user manual</a>
                </div>
                </div>


            </div>
        </div>
     );
}

export default Hero;