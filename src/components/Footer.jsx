import React, { useState } from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {

  const [contacts, setContact] = useState([
    {
      icon: "icon-phone.svg", text: "+201158924239"
    },
    {
      icon: "icon-email.svg", text: "mansourmahmoud77a@gmail.com"
    },
  ])

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ])

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ])

  return <section className='bg-[#0c1524] pt-[300px] md:pt-[200px] pb-[100px]'>
    <div className='container'>

      <a href="/">
        <img src="/src/assets/images/logo.svg"
          alt="logp-img"
          className='w-[175px] h-[66px] object-contain' />
      </a>
      <div className='mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]'>
        <div className='flex gap-[15px] w-[340px] max-w-full'>
          <img src="/src/assets/images/icon-location.svg"
            alt="location-icon"
            className='w-[18px] h-[18px] object-contain' />
          <p className='font-normal text-sm tracking-[0.8px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iusto eos nam, aperiam numquam libero quas blanditiis animi eligendi recusandae error perferendis unde consequatur.
          </p>
        </div>

        <div>
          {contacts.map((contact, index)=>(
            <div className='flex gap-[15px] mb-[15px] last-of-type:mb-0 items-center' key={index}>
              <img className='w-[18px] h-[18px]' src={`/src/assets/images/${contact.icon}`} alt="icon" />
              <p>{contact.text}</p>
            </div>
          ))}
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
          {links.map((link, index)=>(
            <li key={index}><a href={`/${link.toLowerCase()}`} className='hover:text-primary transition-colors duration-200 text-base'>{link}</a></li>
          ))}
        </ul>

        <ul className='flex gap-[15px] w-full justify-center md:w-auto'>
            {socialIcons.map((icon, index)=>(
              <li key={index}>
                <a href="" className='group'>
                  <div className='w-[40px] h-[40px] element-center border border-white rounded-full'>
                  {icon === "facebook" ? <FaFacebookF className='group-hover:text-primary transition-colors duration-200'/> : icon === "twitter" ? <FaTwitter className='group-hover:text-primary transition-colors duration-200'/> : <FaInstagram className='group-hover:text-primary transition-colors duration-200'/>}
                  </div>  
                </a>
              </li>
            ))}
        </ul>

      </div>

    </div>
  </section>
}

export default Footer