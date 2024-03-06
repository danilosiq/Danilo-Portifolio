import React from 'react'
import "./Social.css"
import { BsInstagram, BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Social = () => {
  return (
    <div className='socialCamp'>
      <ul>
          <a href="https://www.instagram.com/daniloosiq/" target="blank">
            <li className='insta'>
              <BsInstagram/> 
            </li>
          </a>
          <a href="https://github.com/danilosiq" target="blank">
            <li className='git'>
              <BsGithub />
            </li>
          </a>
          <a href="https://wa.me/5541998761943" target="blank">
            <li className='whats'>
              <BsWhatsapp />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/danilo-siqueira-1a31a7234/" target='blank'>
            <li className='linkedin'> 
              <BsLinkedin />
            </li>
          </a>
        </ul>
    </div>
  )
}

export default Social
