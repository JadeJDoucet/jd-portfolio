import React, { useRef, useState } from 'react';
import { Container, Text, Input, Textarea, Button } from '@mantine/core';
import emailjs from 'emailjs-com'; // Import emailjs-com
import classes from './Contact.module.css';

// import { object, string } from 'yup';

// const contactSchema = object({
//   name: string().required(),
//   email: string().email().required(),
//   message: string().required(),
// });

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: process.env isnt working properly???
    emailjs.init(process.env.REACT_APP_EMAIL_KEY ?? '');

    // Send the email using emailjs-com
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID ?? '',
          process.env.REACT_APP_TEMPLATE_ID ?? '',
          formRef.current
        )
        .then(
          () => {
            setFormData({
              name: '',
              email: '',
              message: '',
            });
            // TODO: Show sent notification
          },
          (error) => console.log('FAILED...', error)
        );
    }
  };

  return (
    <Container className={classes.contactContainer}>
      <Text className={classes.heading}>Reach out</Text>
      <div className={classes.contactForm}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <Input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <Input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className={classes.label} htmlFor="message">
            Message
          </label>
          <Textarea
            className={classes.input}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button className={classes.button} type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
