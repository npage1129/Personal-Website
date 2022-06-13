import React from 'react'
import './Header.css'
import logo from './logo.png'

function Header () {
  return (
    <div className = "container">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="name">Nicole Page</h1>
        <h2 className="about">About Me</h2>
        <h2 className ="projects">Projects</h2>
    </div>
  
  )
}
export default Header