import React from 'react'
import './Header.css'

function Header () {
  return (
    <div className = "container">
        <img src="https://lh3.googleusercontent.com/Wwmg988TqpekaPR_xqF_eJgq4w3LZqFLfEkSKjXnVK94mp5Zzk1DdrTumfKBWd50SzRe9F5DdSgzVVU3kZnDJM98NlOIYJh3XM-M08znfgRn2YWqs-0v5JsUSY7Z3Ujfz11f2IRo47E=w2400" className="logo"></img>
        <h1 className="name">Nicole Page</h1>
        <h2 className="about">About Me</h2>
        <h2 className ="projects">Projects</h2>
    </div>
  
  )
}
export default Header