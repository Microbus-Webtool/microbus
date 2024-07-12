import React from "react";
import "../styles/Workshop.scss";
// import "../styles/event.scss";
const Workshop = () => {
  return (
    <div className="workshop">
      <div className="heading">
        <h6> Workshop </h6>
      </div>
      <div className="workshop-container">
        <div className="card-container">
          <div className="card-heading">
            VLSI Workshop{" "}
            {/* <img
              src="assets/new1.png"
              alt="new"
              width={60}
              className="new-image"
            /> */}
          </div>

          <div className="card-content">
            <div className="Upper-rectangle">
              <img
                src="assets/workshop/vlsi_workshop.jpeg"
                alt=""
                className="card-img"
              />
              <div className="Lower-rectangle">
                We are thrilled to announce an exclusive VLSI workshop hosted by
                Microbus, techno managerial society of NIT Kurukshetra in
                collaboration with Sumedha IT, a renowned VLSI institute,
                designed to spark innovation and creativity in all tech
                enthusiasts! Don't miss this golden opportunity to learn from
                the best and network with like-minded peers. Secure your spot
                now and take a leap towards enhancing your skills! 🚀
                <br />
                <a href="https://unstop.com/o/IsheKC9?lb=wIvsgVX&utm_medium=Share&utm_source=shortUrl">
                  Register Now !!!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-heading">
            Robotics and AI{" "}
            {/* <img
              src="assets/new1.png"
              alt="new"
              width={60}
              className="new-image"
            /> */}
          </div>

          <div className="card-content">
            <div className="Upper-rectangle">
              <img
                src="assets/workshop/myequation.jpeg"
                alt=""
                className="card-img"
              />
              <div className="Lower-rectangle">
                Microbus Society, NIT Kurukshetra in collaboration with My
                Equation, is thrilled to announce a 3-Day Workshop on Robotics
                and AI. Don't miss this unique opportunity to dive into the
                world of Artificial Intelligence and Machine Learning, gain
                hands-on experience, and earn prestigious certificates!
                <br />
                {/* <a href="https://forms.gle/zTstKCwEiagNAJYe6">
                  Register Now !!!
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-heading">IOT</div>
          <div className="card-content">
            <div className="Upper-rectangle">
              <img src="assets/workshop/iot2.jpg" alt="" className="card-img" />
              <div className="Lower-rectangle">
                Unleashing Creativity in the Our 'Internet of Things' workshop
                was a triumph of innovation, learning, and sheer FUN! From
                exploring the endless possibilities of IoT to crafting
                mind-blowing projects, our talented students transformed ideas
                into reality. Witnessing the joy on their faces as they
                conquered coding challenges and brought their loT visions to
                life was truly magical. Each student added a unique spark to the
                workshop, turning it into a vibrant tapestry of ideas and
                enthusiasm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workshop;

// {
//
// }
