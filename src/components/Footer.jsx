import React from "react";
import "../styles/footer.scss";
// import Logo from 'public/assets/micro_logo_black.png'
// import Insta from "public/assets/insta.png";
// import Youtube from "public/assets/youtube.png";
// import Linkedin from "public/assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_material">
          <div className="footer_contact">
            <div className="footer_contact_details">
              <div className="footer_contact_details_logo">
                <img
                  src="/assets/microbus-logo.png"
                  className="footer_icon_logo"
                  alt="logo"
                />
              </div>
              <div className="footer_contact_contact">
                <h2>Managed by MICROBUS</h2>
                <h6>© 2024 Microbus. All rights reserved</h6>
              </div>
            </div>
          </div>
          <div className="footer_icon">
            <div className="footer_contact_details">
              <h4>Contact Us</h4>
              <div className="footer_contact_contact">
                <h6>+91-96713 50248</h6>
                <h6>+91-74193 05432</h6>
              </div>
            </div>
          </div>
          <div className="footer_handles">
            <div className="footer_contact_details">
              <h4>Follow Us</h4>
              <div className="footer_contact_contact">
                <a
                  href="https://www.instagram.com/microbus_nitkkr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#D4D4D4"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/microbusnitkkr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#D4D4D4"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/microbusnitkkr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="28"
                    height="28"
                    fill="#D4D4D4"
                    viewBox="0 0 256 256"
                  >
                    <g
                      // fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href="mailto:microbus@nitkkr.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="email"
                    width="29"
                    height="30"
                    fill="#D4D4D4"
                  >
                    <g>
                      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
