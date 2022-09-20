import React, {Fragment} from 'react'

const Form = () =>{
    return(
        <Fragment>
            <div className='w-full h-10'></div>
        <div className=' bg-red-200 pt-6 xl:ml-6 mx-auto'>
            <h3 className='text-center font-semibold  text-2xl'>Contact Us</h3>
            
            <div className='flex flex-col ml-10 '>
            <label htmlFor='name'>Name</label>
            <input type='text'/>
            </div>

            <div className='flex flex-col ml-10'>
            <label htmlFor='email'>Email</label>
            <input type='text'/>
            </div>

            <div className='flex flex-col ml-10'>
            <label htmlFor='name'>Message</label>
            <textarea type='text' />
            </div>

            <div className='py-8 ml-10'>
                <button className=' text-sm'>Send Message</button>
                </div>
        </div>
        </Fragment>
    )
}

export default Form