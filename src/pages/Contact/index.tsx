import clsx from 'clsx';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Text, Input, Textarea, Button } from '@mantine/core';
import { Turnstile } from '@marsidev/react-turnstile';

import styles from './Contact.module.css';
import globalStyles from '../../Global.module.css';

const contactSchema = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  message: string().required('Message is required'),
  turnstileToken: string().required('Please complete the captcha'),
});

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control, formState, reset, setValue } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async () => {
    if (isLoading) return;

    setIsLoading(true);
    // Initialize emailjs
    emailjs.init(process.env.REACT_APP_EMAIL_KEY ?? '');

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID ?? '',
          process.env.REACT_APP_TEMPLATE_ID ?? '',
          formRef.current
        );

        // Reset the form and show success message
        reset();
        setIsFlipped(true);
      } catch (error) {
        console.error('FAILED...', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleReset = () => {
    setIsFlipped(false);
  };

  return (
    <Container className={clsx(styles.contactContainer, globalStyles.pageContainer)}>
      <Text className={globalStyles.heading}>Reach out</Text>
      <div className={`${styles.contactForm} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.formSide}>
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

            <Controller
              name="turnstileToken"
              control={control}
              defaultValue=""
              render={() => (
                <div style={{ marginBottom: '20px' }}>
                  <Turnstile
                    siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY ?? ''}
                    onSuccess={(token) => setValue('turnstileToken', token)}
                  />
                  {formState.errors.turnstileToken && (
                    <p className={styles.error}>
                      {formState.errors.turnstileToken.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Button className={styles.button} type="submit" loading={isLoading}>
              Send Message
            </Button>
          </form>
        </div>
        <div className={styles.successSide}>
          <Text size="xl" mb={20}>
            Message Sent Successfully! 🚀
          </Text>
          <Text mb={30}>
            Thank you for reaching out. I'll get back to you as soon as possible.
          </Text>
          <Button onClick={handleReset} className={styles.button}>
            Send Another Message
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
