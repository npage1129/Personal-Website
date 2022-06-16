import React from 'react'
import './About.css'
import me from './img/me.jpg'

function About () {
  return (
    
    <>

<div className = "box">
    <img  className = "fancy" src = "https://i.pinimg.com/564x/82/9b/61/829b617141460695390465398556676f.jpg"/>
   <img className= "me" src = {me}/>
   <img className = "fancy2" src = "https://i.pinimg.com/564x/82/9b/61/829b617141460695390465398556676f.jpg"/>
   </div>
    <div id= "about" className="about">
    
      <style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Raleway:wght@100&display=swap');
</style>
<div className="adjust">
      <h2 className="heading">About Me</h2>
      <p className="about-me">
      I am a software engineer who is adaptable and motivated. 
      I have a keen eye for details and love learning new languages. 
      I am new to the industry, but I am a quick learner and have always had a love for technology as a whole. 
      I am thrilled to have the opportunity to work in this industry. 
      I have drastically changed my career path going from adminstration work to software engineering. 
      In my previous roles I worked closely with staff to teach them and help them gain knowledge on new softwares we were rolling out into our company. 
      After much praise for my ability to quickly learn and utilize computer programs I realized I have a knack for understanding technology and how it works.
      I decided to look more into coding and realized that it was everything I had wanted in a career wrapped into one. 
      As I delve in to this new journey I am beyond excited to learn and grow working alongside a team of talented individuals.
      </p>
      </div>
      </div>
      
    
    
  </>

  )
}
export default About