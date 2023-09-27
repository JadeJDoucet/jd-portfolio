import React, { useState } from 'react';
import { Container, Text, Input, Textarea, Button } from '@mantine/core';
import classes from './Contact.module.css';

const Contact: React.FC = () => {
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
    // Add logic here to handle form submission
    console.log(formData);
  };

  return (
    <Container className={classes.contactContainer}>
      <Text className={classes.heading}>Reach out</Text>
      <div className={classes.contactForm}>
        <form onSubmit={handleSubmit}>
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
