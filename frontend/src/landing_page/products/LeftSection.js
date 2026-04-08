import React from 'react';
function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container  '>
            <div className='row mt-5 '>
                <div className='col-6 '>
                    <img src={imageUrl} alt='product image' />
                </div>
                <div className='col-6  mt-4 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"30px"}} >Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                    <a href={appStore} style={{marginLeft:"40px"}}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>

                </div>

            </div>
        </div>
     );
}

export default LeftSection;