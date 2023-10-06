import React, { useRef } from 'react';
import { Container, Text, Input, Textarea, Button } from '@mantine/core';
import emailjs from 'emailjs-com'; // Import emailjs-com
import classes from './Contact.module.css';

import { object, string } from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const contactSchema = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  message: string().required('Message is required'),
});

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit, control, formState, reset } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    // Initialize emailjs
    emailjs.init(process.env.REACT_APP_EMAIL_KEY ?? '');

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID ?? '',
          process.env.REACT_APP_TEMPLATE_ID ?? '',
          formRef.current
        );

        // Reset the form and show a success message
        reset();
        // TODO: Show sent notification
      } catch (error) {
        console.error('FAILED...', error);
      }
    }
  };

  return (
    <Container className={classes.contactContainer}>
      <Text className={classes.heading}>Reach out</Text>
      <div className={classes.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                className={classes.input}
                type="text"
                id="name"
                required
              />
            )}
          />
          <p className={classes.error}>{formState.errors.name?.message}</p>

          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                className={classes.input}
                type="email"
                id="email"
                required
              />
            )}
          />
          <p className={classes.error}>{formState.errors.email?.message}</p>

          <label className={classes.label} htmlFor="message">
            Message
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea
                {...field}
                className={classes.input}
                id="message"
                required
              />
            )}
          />
          <p className={classes.error}>{formState.errors.message?.message}</p>

          <Button className={classes.button} type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
