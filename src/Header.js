import React from 'react'
import './Header.css'
import logo from './logo.png'
import About from './About'
import Projects from './Projects'


function Header () {
  return (
    <div className = "container">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="name">Nicole Page</h1>
        <a href="#about" className ="about">About Me</a>
        <a href="#projects" className ="projects">Projects</a>
    </div>
  
  )
}
export default Header