import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setIsSubmitting(false);
            setStatus('success');
            formRef.current?.reset(); 
            
            setTimeout(() => setStatus('idle'), 5000); 
          },
          (error) => {
            console.error('FAILED...', error.text);
            setIsSubmitting(false);
            setStatus('error');
          }
        );
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          I'm currently looking for new opportunities and my inbox is always open. 
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="user_name" className={styles.label}>Name</label>
            <input 
              type="text" 
              name="user_name" 
              id="user_name" 
              className={styles.input} 
              required 
              placeholder="John Doe"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="user_email" className={styles.label}>Email</label>
            <input 
              type="email" 
              name="user_email" 
              id="user_email" 
              className={styles.input} 
              required 
              placeholder="john@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea 
              name="message" 
              id="message" 
              className={styles.textarea} 
              required 
              placeholder="Hello! I'd like to discuss a project..."
            />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <div className={`${styles.statusMessage} ${styles.success}`}>
            Message sent successfully! I'll be in touch soon.
          </div>
        )}

        {status === 'error' && (
          <div className={`${styles.statusMessage} ${styles.error}`}>
            Oops! Something went wrong. Please try again later.
          </div>
        )}

      </div>
    </section>
  );
};

export default Contact;