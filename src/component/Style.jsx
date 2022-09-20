import React, {Fragment} from 'react';

const Style = () => {
    return(
        <Fragment>
        <div className='w-full h-10 '></div>
        <div className="w-full grid md:grid-cols-3  bg-red-200 pt-20 py-4">
            <div className=' ml-6  '>
                
                <h3 className="font-semibold  text-2xl md:text-3xl ">We Style your Soul with Elegant Accessories</h3>
                <p className='pt-2'>Cute accessories always help bring out your outfit and pull it all together</p>
                
                <div className='py-10'>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className='md:col-span-2'>
                <div className='grid pt-6 md:grid-cols-2 md:pt-0'>
                    <div className='flex flex-col ml-10'>
                        <div className='flex gap-x-4'>
                            <div className='w-6 h-5 bg-red-900 mt-2'></div>
                            <div>
                                <h4 className='text-xl font-bold'>Best Craftmen</h4>
                                <p className='text-sm'>Our designers are recognised as the best</p>
                                <p className='text-sm'>worldwide when it comes to making accessories</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 mt-6'>
                            <div className='w-6 h-5 bg-red-900 mt-2'></div>
                            <div>
                                <h4 className='text-xl font-bold'>Skilled Designers</h4>
                                <p className='text-sm'>Our designers are recognised as the best </p>
                                <p className='text-sm pb-6 md:b-0'>worldwide when it comes to making accessories</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-10 '>
                    <div className='flex gap-x-4'>
                        <div className='w-6 h-5 bg-red-900 mt-2'></div>
                        <div>
                            <h4 className='text-xl font-bold'>Top Fashionistas</h4>
                            <p className='text-sm'>Our Fashionistas are recognised as the best </p>
                            <p className='text-sm'>worldwide when it comes to making accessories</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 mt-6'>
                        <div className='flex gap-x-4'>
                        <div className='w-6 h-5 bg-red-900 mt-2'></div>
                        <div>
                            <h4 className='text-xl font-bold'>Talented Miners</h4>
                            <p className='text-sm'> Our miners are recognised as the best </p>
                            <p className='text-sm'>worldwide when it comes to making accessories</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        
        </Fragment>
    )
}

export default Style;