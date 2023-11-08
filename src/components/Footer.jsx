import React from 'react'
import '../styles/footer.scss'
// import Logo from 'public/assets/micro_logo_black.png'
// import Insta from "public/assets/insta.png";
// import Youtube from "public/assets/youtube.png";
// import Linkedin from "public/assets/linkedin.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_container">
        <div className="footer_material">
          <div className="footer_contact">
            <div className="footer_contact_details">
              <div className="footer_contact_details_logo">
                <img
                  src="/assets/micro_logo_black.png"
                  className="footer_icon_logo"
                  alt="logo"
                />
              </div>
              <div className="footer_contact_contact">
                <h2>Managed by MICROBUS</h2>
                <h6>© 2023 Microbus. All rights reserved</h6>
              </div>
            </div>
          </div>
          <div className="footer_icon">
            <div className="footer_contact_details">
              <h4>Contact Us</h4>
              <div className="footer_contact_contact">
                <h6>+91-96547687098</h6>
                <h6>+91-98689059959</h6>
              </div>
            </div>
          </div>
          <div className="footer_handles">
            <div className="footer_contact_details">
              <h4>Follow Us</h4>
              <div className="footer_contact_contact">
                <h6>
                  <img
                    src="/assets/insta.png"
                    className="footer_icon_insta"
                    alt="insta"
                  />
                  microbus.nitkkr/
                </h6>
                <h6>
                  <img
                    src="/assets/youtube.png"
                    className="footer_icon_insta"
                    alt="youtube"
                  />
                  microbus.nitkkr/
                </h6>
                <h6>
                  <img
                    src="/assets/linkedin.png"
                    className="footer_icon_insta"
                    alt="LinkedIn"
                  />
                  microbus.nitkkr/
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer