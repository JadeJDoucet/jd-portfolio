import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import emailjs from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Text, Input, Textarea, Button } from '@mantine/core';

import styles from './Contact.module.css';
import globalStyles from '../../Global.module.css';

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
    <Container className={styles.contactContainer}>
      <Text className={globalStyles.heading}>Reach out</Text>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="text"
                id="name"
                required
              />
            )}
          />
          <p className={styles.error}>{formState.errors.name?.message}</p>

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                type="email"
                id="email"
                required
              />
            )}
          />
          <p className={styles.error}>{formState.errors.email?.message}</p>

          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea
                {...field}
                className={styles.input}
                id="message"
                required
              />
            )}
          />
          <p className={styles.error}>{formState.errors.message?.message}</p>

          <Button className={styles.button} type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
