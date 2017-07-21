import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact page</h1>
      <div>
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
          <Icon name="google plus" /> Google Plus
        </Button>
        <Button color="vk">
          <Icon name="vk" /> VK
        </Button>
        <Button color="linkedin">
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
        <Button color="youtube">
          <Icon name="youtube" /> YouTube
        </Button>
      </div>
      <div>
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="twitter" icon="twitter" />
        <Button circular color="linkedin" icon="linkedin" />
        <Button circular color="google plus" icon="google plus" />
      </div>
    </div>
  );
};

export default Contact;
