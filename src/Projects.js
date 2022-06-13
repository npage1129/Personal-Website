import React from 'react'
import './Projects.css'
import Cocktails4U from './img/Cocktails4U.jpeg'

function Projects () {
  return (
    <div>
    <div className="text">My Projects</div>
    
    <div className= "envelope"> 
    <div className ="Cocktails4U">
        <img className="project1" src ={Cocktails4U}></img>
    </div>
    
   
   </div>
   </div>
  )
}
export default Projects