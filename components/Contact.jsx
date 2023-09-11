"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const [errorName, setErrorName] = useState("");
  const valideName = () => {
    if (!name) {
      setErrorName("Name is required");
      return false;
    } else {
      setErrorName("");
      return true;
    }
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [errorEmail, setErrorEmail] = useState("");
  const valideEmail = () => {
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setErrorEmail("Invalid email");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => setMessage(e.target.value);
  const [errorMessage, setErrorMessage] = useState("");
  const valideMessage = () => {
    if (!message) {
      setErrorMessage("Message is required");
      return false;
    } else if (message.length > 300) {
      setErrorMessage("Message is too long. 300 characters");
      return false;
    } else if (message.length < 5) {
      setErrorMessage("Message is too short");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let nameValid = valideName();
    let emailValid = valideEmail();
    let messageValid = valideMessage();

    if (nameValid && emailValid && messageValid) {
      setErrorMessage("");
      setErrorEmail("");
      setErrorName("");
      setName("");
      setMessage("");
      setEmail("");

      setMessageSent(true);
      emailjs.sendForm(
        "service_wr35b03",
        "template_vxpgbi9",
        form.current,
        "IkwH83ihR3Ig7mbPI"
      );
      e.target.reset();
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            name="user_name"
            onChange={handleNameChange}
            onBlur={valideName}
          />
        </label>
        {errorName && <div className={styles.error}>{errorName}</div>}
        <label>
          Email
          <input
            type="email"
            name="user_email"
            onChange={handleEmailChange}
            onBlur={valideEmail}
          />
        </label>
        {errorEmail && <div className={styles.error}>{errorEmail}</div>}
        <label>
          Message
          <textarea
            name="message"
            onChange={handleMessageChange}
            onBlur={valideMessage}
          />
        </label>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <input type="submit" value="Send" />
        {messageSent ? (
          <div style={{ color: "green" }}>
            Thank you! Your message was sent!
          </div>
        ) : null}
      </form>
    </>
  );
};
