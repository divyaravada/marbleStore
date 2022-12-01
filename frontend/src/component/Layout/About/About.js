import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://linkedin.com/in/veera-ravada-517ab6227";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dae1kxaqa/image/upload/v1669887506/divya_pgzys4.jpg"
              alt="Founder"
            />
            <Typography>Veera RAVADA</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>This is a Final Project at WBS Coding School.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Career Profiles</Typography>
            <a
              href="https://linkedin.com/in/veera-ravada-517ab6227"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/divyaravada" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
