import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //returns some awesome values
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0'
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'/>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((item) => {
              const {id, url, text} = item
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })
            }
          </ul>
        </div>
        <ul className='social-icons'>
          {
            social.map((item) => {
              const {id, url, icon} = item
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>  
      </div>
    </nav>
  )
};

export default Navbar;