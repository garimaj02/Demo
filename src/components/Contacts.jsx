import React from 'react'
import {FaInstagramSquare} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <>
    <div className="container contact">
      <h1>Contact Me</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000">
        <a href="mailto:garimajoshi804@gmail.com" target="_blank" className="items">
          <SiGmail className='icons'/>
        </a>
        <a href="https://github.com/garimaj02" target="_blank" className="items">
          <FaGithubSquare className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank" className="items">
          <CiFacebook className='icons'/>
        </a>
        <a href="https://www.linkedin.com/in/garima-joshi-4b824424a/" target="_blank" className="items">
          <CiLinkedin className='icons'/>
        </a>
        <a href="https://www.google.com" target="_blank" className="items">
          <FaInstagramSquare className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contacts