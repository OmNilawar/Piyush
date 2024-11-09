import React from 'react';
import customerSupportImage from '../assets/baiChaPhoto.png';

const CustomerSupport = () => {
  return (
    <div className='p-5 m-5 shadow-xl flex gap-10 rounded-xl'>
      <div>
        <img 
          src={customerSupportImage} 
          alt="CustomerSupportImage" 
          className='rounded-xl w-[600px] h-[450px]'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='text-5xl text-blue-500 mb-6'>
          <p>Find Out More</p>
          <p>Reasons To Stay</p>
        </div>
        <form className='flex flex-col gap-4'>
          <input 
            type="text" 
            placeholder="Full Name" 
            className='border border-gray-300 rounded p-3'
          />
          <input 
            type="text" 
            placeholder="Mobile no." 
            className='border border-gray-300 rounded p-3'
          />
          <input 
            type="text" 
            placeholder="City" 
            className='border border-gray-300 rounded p-3'
          />
          <div className='flex items-center'>
            <input 
              type="checkbox" 
              id="terms" 
              className='mr-2'
            />
            <label htmlFor="terms" className='text-gray-500 text-sm'>
              Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings
            </label>
          </div>
          <button 
            type="submit" 
            className='w-[200px] bg-blue-500 text-white py-3 rounded-xl text-lg mt-4 m-auto'
          >
            Enquire Now
          </button>
        </form>
        <p className='text-center mt-4 text-sm text-gray-500'>
          Already Have An Account? <a href="#" className='text-blue-500'>Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
