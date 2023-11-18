import React from "react";
import "../styles/TeamPage.scss";
import Card from "./Card";
import { useEffect } from "react";

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
  // Add more team members as needed
];

const TeamPage = () => {

  useEffect(() => {
    // Add a class to the body tag
    document.body.classList.add("team-body");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("team-body");
    };
  }, []);

  return (
    <div>

      <h1 className="main-heading">TEAMS</h1>
      <div className="team-container">
        <h3 className="heading1">Developers</h3>
        <div className="allCards">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Designers</h3>
        <div className="allCards">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Content Writers</h3>
        <div className="allCards">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default TeamPage;
