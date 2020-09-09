import React, { useState } from "react";
import Button from "../prebuilt/Button";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  width: 100%;
  height: 200px;
  margin-bottom: 1em;
  padding: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.form};
`;

const Input = styled.input`
  background: ${({ theme }) => theme.form};
  width: 100%;
  border: none;
  color: grey;

  font-family: "Montserrat";
  font-size: 20px;
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
          value={message}
          autoFocus={false}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form>
      <Button
        onClick={handleSubmit}
        style={{ fontSize: 25, fontFamily: "Montserrat" }}
      >
        Submit
      </Button>
    </>
  );
}
