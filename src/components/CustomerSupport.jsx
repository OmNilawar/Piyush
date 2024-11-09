import React from 'react'
import customerSupportImage from '../assets/baiChaPhoto.png';

const CustomerSupport = () => {
  return (
    <div className='p-5 m-5 border border-black flex gap-10'>
        <div>
            <img src={customerSupportImage} 
            alt="CustomerSupportImage" 
            className='rounded-xl w-[550px] h-[500px]'/>
        </div>
        <div>
            <div  className='text-5xl text-blue-500'>
                <p>Find Out More </p>
                <p>Reasons to Stay</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerSupport;
