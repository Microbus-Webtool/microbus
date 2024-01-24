import React from 'react'
import '../styles/postholder.scss'
import "../styles/TeamPage.scss";
import Postcard from "./Postcard";
const teamMembers = [
    {
      image: "/assets/slider/image2.png",
      name: "John Doe",
      designation: "Developer",
    },
    {
      image: "/assets/slider/image2.png",
      name: "Jane Doe",
      designation: "Designer",
    },
    {
      image: "/assets/slider/image2.png",
      name: "Jane Doe",
      designation: "Designer",
    },
    {
      image: "/assets/slider/image2.png",
      name: "Jane Doe",
      designation: "Designer",
    },
    {
      image: "/assets/slider/image2.png",
      name: "Jane Doe",
      designation: "Designer",
    },
  ];

const Postholder = () => {
  return (
    <div>
        <div className='main'>
            <div className='heading'>POSTHOLDERS</div>
            <div className='card-grp'>
                {teamMembers.map((member, index) => (
                  <Postcard
                    key={index}
                    image={member.image}
                    name={member.name}
                  />
                ))}        
            </div>
        </div>
    </div>
  )
}

export default Postholder