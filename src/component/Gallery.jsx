import React, { Fragment } from 'react';
import gal from '../images/jel8.jpg';
import galTwo from '../images/jel6.jpg';
import galThree from '../images/jel3.jpg';
import galFour from '../images/jel5.jpg';
import galSix from '../images/jel9.jpg';
import galS from '../images/jel7.jpg';

const Gallery = () => {
    return(
       <Fragment>
        <div className='text-center py-14'>
            <h3 className='font-semibold  text-2xl md:text-3xl'>Our Gallery</h3>
            <p>Explore rare modern accessories from our top collections</p>
        </div>

        <div className='grid md:grid-cols-3 grid-rows-none gap-2 md:gap-4 rounded-md  mx-auto max-w-[1240px] h-full'>
        <img className='md:col-span-2 md:row-span-2 w-full h-full rounded-md object-cover' src={gal} alt='/'/>
        <img className='w-full h-full rounded-md object-cover' src={galTwo} alt='/'/>
        <img className='w-full h-full rounded-md object-cover' src={galThree} alt='/'/>
        <img className='w-full h-full rounded-md object-cover' src={galFour} alt='/'/>
        <img className='w-full h-full rounded-md object-cover md:col-span-2 md:row-span-2' src={galSix} alt='/'/>
        <img className='w-full h-full rounded-md object-cover' src={galS} alt='/'/>
      

        </div>
       </Fragment>
    )
}

export default Gallery;