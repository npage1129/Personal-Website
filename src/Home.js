import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'

function Home() {
    return(
            <div className = "full">
                <Header />
            <div>
                <About />
            <div>
              <Projects />  
            </div>
            </div>
            </div>


    )
}
export default Home