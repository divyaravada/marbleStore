import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:divya.ravada@gmail.com">
        <Button>Contact: divya.ravada@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
