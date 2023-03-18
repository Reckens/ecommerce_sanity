import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Netfly Store Todos los derechos reservados.</p>
      <p className="icons">      
      <a href="https://www.instagram.com/netflylat/" target="_blank"><AiFillInstagram /></a>        
      <a><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer