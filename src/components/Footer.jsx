import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
   return(
    <div className='bg-[#175593] pt-20 pb-20 pr-5 pl-5 text-white text-sm font-thin flex justify-around'>
        <div className='flex flex-col gap-3'>
            <p className='text-4xl font-semibold'>Let's Keep in touch!</p>
            <p>Request a CodingPro institute enquiry!</p>
            <div className='relative w-full'>
                <input 
                    className='w-full px-4 py-2 pr-12 rounded-3xl text-black outline-none bg-transparent border border-white' 
                    type="text" 
                    placeholder='Institute name'
                />
                <button className='w-20 absolute right-[1px] top-[2%] rounded-r-full p-2 text-black bg-white'>
                ➜
                </button>
            </div>
            <p>Create Account</p>
            <p>Sign in</p>
            <p className='font-semibold'>+91 93809246</p>
            <p className='font-semibold'>codingjr.in@gmail.com</p>
            <p className='font-semibold'>AIC-BHU, Varanasi, 421004</p>
        </div>
        <div  className='flex flex-col gap-3'>
            <p className='font-semibold text-xl'>Courses</p>
            <p>Campus Training <br /> Program</p>
            <p>Professional Training <br /> Program</p>
            <p>B.Tech</p>
            <p>B.Des</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-xl font-semibold'>Company</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Our Team</p>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
            <p>FAQ</p>
        </div>
        <div className='flex flex-col gap-3 text-3xl'>
            <p className='text-lg font-semibold text-center'>Follow Us</p>
            <div className='flex gap-3'>
                <FaInstagram className='cursor-pointer'/>
                <FaFacebookF className='cursor-pointer' />
                <FaLinkedinIn className='cursor-pointer' />
            </div>
        </div>
    </div>
   );
};

export default Footer;