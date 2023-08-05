import React from 'react'
import { BsTwitter,BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const FooterSection = () => {
  return (
    <div className='w-screen bg-[#FF72AC] py-3 border-t-2 border-[#000] flex justify-around flex-wrap' >
        <span className='flex items-center'>Follow Us  <a href="https://twitter.com/realbrandopt" target="_blank"><BsTwitter className='ms-5'/></a> <a target="_blank" href="https://www.instagram.com/brandoptreal"> <BsInstagram className='ms-5'/></a></span>
        <span  className='flex items-center'>contact@brandopt.in</span>
    </div>
  )
}

export default FooterSection