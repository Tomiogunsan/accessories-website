import React from 'react';
import main from '../images/jel1.jpg';
import mainTwo from '../images/main4.jpg';
import mainThree from '../images/main3.jpg';


const Hero = () => {
    return(
        <div className='w-full  mx-auto  grid md:grid-cols-2 gap-4 px-4 bg-orange-100 '>
            <div className='ml-6 flex flex-col py-28'>
                <h3 >Beauty, Classy & Elegant</h3>
                <h1 className="font-bold text-4xl py-1 ">Modern Accessories</h1>
                <p >Accessories are like vitamins to fashion.</p>
                <p >Accessories make everything better</p>
                
                <div className='py-10'>
                    <button>Explore Store</button>
                </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-none gap-y-2 gap-x-4 mr-10 md: mt-10 '>
                
               <div></div>
                <img className='w-full object-cover row-span-3 ' src={mainTwo} alt='/' />
                 <div></div>
                <img className=' w-full object-cover row-span-4 md:mt-12' src={mainThree} alt='/' />
                <img className=' w-full  row-span-4 md:mt-40 ' src={main} alt='/' />
                <div></div>
                
           </div>
        </div>
    )
}

export default Hero;