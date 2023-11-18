import React from 'react'
import "../styles/home.scss";

const Home_Content = () => {
  return (
    <div id='about'>
      <div className="home">
        <div className="home_mid1">
          <div>
            <h3>WHO ARE WE ?</h3>
            <p>
              lorem GitHub Desktop Focus on what matters instead of fighting
              with Git. Whether you're new to Git or a seasoned user, GitHub
              Desktop simplifies your development workflow. lorem GitHub Desktop
              Focus on what matters instead of fighting with Git. Whether you're
              new to Git or a seasoned user, GitHub Desktop simplifies your
              development workflow.
            </p>
          </div>
          <div>
            <img src="/assets/globe.png"/>
          </div>
        </div>

        <div className="home_mid2">
          <div>
            <img src="/assets/globe.png"/>
          </div>
          <div>
           <h3 style={{ 
            textAlign: "left", 
            '@media (min-width: 1091px)': {
                textAlign: "end", 
            }
            }}>WHAT WE DO ?
            </h3>

            <p>
              lorem GitHub Desktop Focus on what matters instead of fighting
              with Git. Whether you're new to Git or a seasoned user, GitHub
              Desktop simplifies your development workflow. lorem GitHub Desktop
              Focus on what matters instead of fighting with Git. Whether you're
              new to Git or a seasoned user, GitHub Desktop simplifies your
              development workflow. lorem GitHub Desktop Focus on what matters
              instead of fighting with
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default Home_Content
