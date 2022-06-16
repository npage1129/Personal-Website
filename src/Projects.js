import React from 'react'
import './Projects.css'
import Cocktails4U from './img/Cocktails4U.jpeg';
import Thrifted from './img/Thrifted.jpeg';
import HotSpot from './img/HotSpot.jpeg';

function Projects () {

  return (
    <div>
    <div className="text">My Projects</div>
    
    <div className= "envelope"> 
    <div id="projects" className ="Cocktails4U">
        <img className="project1" src ={Cocktails4U} alt="project-1"></img>
    <div>
        <p className="description1">This application has a search feature that allows the user to search for a specific cocktail. If you reload the page the random cocktail changes. The user is able to navigate to different pages as well as view each of our social media links.</p>
        <button onClick={()=>{window.location.href=('https://github.com/npage1129/Phase-2-Project')}} className="github1" >Github Repository</button>
        </div>
    <div className="Thrifted-Threads">
    <img className="project2" src ={Thrifted} alt="project-2"></img>
    <div>
        <p className="description2">A website where the user is  able to view clothes within several different categories, login, logout, and  navigate to different pages. Utilizes all operations of CRUD. </p>
        <button onClick={()=>{window.location.href=('https://github.com/npage1129/thrifted_threads')}} className="github2" >Github Repository</button>
        </div>
        <div className="HotSpot">
    <img className="project3" src ={HotSpot} alt="project-3"></img>
    <div>
        <p className="description3">A social media website where the user is  able to sign up, login, logout, delete their account, add posts, view posts only created by them, view posts by all users, add comments, and edit posts.</p>
        <button onClick={()=>{window.location.href=('https://github.com/npage1129/HotSpot-Work')}} className="github3" >Github Repository</button>
        </div>
        </div>

    </div>
    </div>
    
   
   </div>
   </div>
  )
}
export default Projects