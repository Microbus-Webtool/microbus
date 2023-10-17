import React from 'react'
import Wave from '../asserts/wave.png'
import Globe from '../asserts/globe.png'
import './styles/home.scss'

const Home = () => {
  return (
    <>
        <div className="home_container">
            <div className="container_details">
                <div className="wave">
                    <img src = {Wave} className = "footer_icon_wave" />
                </div>
                <div className="globe">
                    <img src = {Globe} className = "footer_icon_wave" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
