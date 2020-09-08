import React, { useState } from "react";
import Button from "../prebuilt/Button";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  width: 100%;
  height: 200px;
  margin-bottom: 0.5em;
  border: solid 1px;
  padding: 5px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  color: grey;
  font-family: "Montserrat";
  &:focus {
    outline: none;
  }
`;

export default function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/message", {
        message: message,
      })
      .then((response) => {
        console.log(response);
        setMessage("Thank you for your feedback!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="message"
          placeholder="Enter your comments here"
          value={message}
          autoFocus={false}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
