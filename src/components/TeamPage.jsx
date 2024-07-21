import React from "react";
import "../styles/TeamPage.scss";
import Card from "./Card";

const developers = [
  {
    image: "/assets/team/mrityunjay.jpg",
    name: "Mrityunjay",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/rahul-pant-266130217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instaURL: "https://www.instagram.com/rahulpant14?igsh=MTJsMHg5YnU2ZnNjbw==",
    githubURL: "",
  },
  {
    image: "/assets/team/aditya.jpg",
    name: "Aditya",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/raghav-garg-66356a220/",
    instaURL: "https://www.instagram.com/raghav_garg04/",
    githubURL: "https://github.com/Raghav0407",
  },
  {
    image: "/assets/team/himanshu.png",
    name: "Himanshu",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/suman-thakur-726447202/",
    instaURL: "https://www.instagram.com/swn_himanshu",
    githubURL: "",
  },
  {
    image: "/assets/team/saransh.jpg",
    name: "Saransh",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/suman-thakur-726447202/",
    instaURL: "https://www.instagram.com/swn_himanshu",
    githubURL: "",
  },
  {
    image: "/assets/team/raghav.jpg",
    name: "Raghav",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/punit-garg-b5a816200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instaURL: "https://www.instagram.com/puneetgarg9349/",
    githubURL: "",
  },
  {
    image: "/assets/team/rishika.jpeg",
    name: "Rishika",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/keshav-garg-773026221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instaURL: "https://instagram.com/keshavgarg0407?igshid=NGVhN2U2NjQ0Yg==",
    githubURL: "https://github.com/KarGitH",
  },
  {
    image: "/assets/team/dinesh.jpg",
    name: "Dinesh",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/gidijala-dinesh-surya/",
    instaURL: "https://www.instagram.com/roiyaru_ryuga/",
    githubURL: "",
  },

  // Add more developers as needed
];

const designers = [
  {
    image: "/assets/team/vidhisha.jpg",
    name: "Vidhisha",
    designation: "Social Media",
    linkedinURL: "https://www.linkedin.com/in/shatakshi-s-523a9121b",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/team/tanisha.jpeg",
    name: "Tanisha",
    designation: "Social Media",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/team/akhilesh.png",
    name: "Akhilesh",
    designation: "Social Media",
    linkedinURL: "https://www.linkedin.com/in/akhilesh-sangwan-2ab9b5232/",
    instaURL: "https://www.instagram.com/akhil02723?igsh=MW54Mzg3Nng1Zm9scA==",
    githubURL: "https://github.com/Akhilesh8783",
  },
  {
    image: "/assets/team/chirag.jpg",
    name: "Chirag",
    designation: "Social Media",
    linkedinURL: "https://www.linkedin.com/in/akhilesh-sangwan-2ab9b5232/",
    instaURL: "https://www.instagram.com/akhil02723?igsh=MW54Mzg3Nng1Zm9scA==",
    githubURL: "https://github.com/Akhilesh8783",
  },
  {
    image: "/assets/team/lokendar.jpg",
    name: "Lokendra",
    designation: "Social Media",
    linkedinURL: "https://www.linkedin.com/in/akhilesh-sangwan-2ab9b5232/",
    instaURL: "https://www.instagram.com/akhil02723?igsh=MW54Mzg3Nng1Zm9scA==",
    githubURL: "https://github.com/Akhilesh8783",
  },

];

const sponsers = [
  {
    image: "/assets/team/ashish.jpg",
    name: "Ashish",
    designation: "Designer",
    linkedinURL: "https://www.linkedin.com/in/ashish-singla-832890236/",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/team/sparsh.jpg",
    name: "Sparsh",
    designation: "Designer",
    linkedinURL: "https://www.linkedin.com/in/ashish-singla-832890236/",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/team/anshul.png",
    name: "Anshul",
    designation: "Designer",
    linkedinURL: "https://www.linkedin.com/in/ashish-singla-832890236/",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/team/aryan.jpg",
    name: "Aryan",
    designation: "Sponsy Lead",
    linkedinURL: "https://www.linkedin.com/in/ankit-yadav-15479a256",
    instaURL: "https://www.instagram.com/ankit47_47?igsh=ajhvbmJlZm5pcGQw",
    githubURL: "",
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div className="team">
      <h1 className="team-h1">TEAMS</h1>
      <div className="team-container">
        <h3 className="heading1">Developers</h3>
        <div className="allCards">
          {developers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              // designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Social Media</h3>
        <div className="allCards">
          {designers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              // designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Sponsy Team</h3>
        <div className="allCards">
          {sponsers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              // designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
