import React from 'react'
import './Projects.css'
import Cocktails4U from './img/Cocktails4U.jpeg';


function Projects () {

  return (
    <div>
    <div className="text">My Projects</div>
    
    <div className= "envelope"> 
    <div className ="Cocktails4U">
        <img className="project1" src ={Cocktails4U} alt="project-1"></img>
    <div>
        <p className="description1">This application has a search feature that allows the user to search for a specific cocktail. If you reload the page the random cocktail changes. The user is able to navigate to different pages as well as view each of our social media links.</p>
        <button onClick={()=>{window.location.href=('https://github.com/npage1129/Phase-2-Project')}} className="github1" >Github Repository</button>
        </div>
    <div className="Thrifted-Threads">


    </div>
    </div>
    
   
   </div>
   </div>
  )
}
export default Projects