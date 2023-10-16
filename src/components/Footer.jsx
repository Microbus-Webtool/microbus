import React from 'react'
import './styles/footer.scss'
import Logo from './asserts/micro_logo_black.png'
import Insta from './asserts/insta.png'
import Youtube from './asserts/youtube.png'
import Linkedin from './asserts/linkedin.png'

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_material">
          <div className="footer_contact">
            <div className="footer_contact_details">
              <h4>Contact Us</h4>
              <div className="footer_contact_contact">  
                <h6>+91-96547687098</h6>
                <h6>+91-98689059959</h6>
              </div>
            </div>
          </div>
          <div className="footer_icon">
            <div className="footer_contact_details">
                <div className="footer_contact_details_logo">
                  <img src = {Logo} className = "footer_icon_logo" />  
                </div>
                <div className="footer_contact_contact">  
                  <h6>Managed by MICROBUS</h6>
                  <h6>©   2023 Microbus. All rights reserved</h6>
                </div>
              </div>
            </div>
          <div className="footer_handles">
          <div className="footer_contact_details">
              <h4>Follow Us</h4>
              <div className="footer_contact_contact">  
                <h6><img src = {Insta } className = "footer_icon_insta" />microbus.nitkkr/</h6>
                <h6><img src = {Youtube } className = "footer_icon_insta" />microbus.nitkkr/</h6>
                <h6><img src = {Linkedin } className = "footer_icon_insta" />microbus.nitkkr/</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer