import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {  FaEnvelope, } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: #EBE8DB;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000000;
  position: relative;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background: #000000;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ContactInfo = styled.div`
  padding: 20px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #000000;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #000000;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #000000;
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background: ${props => props.isError ? '#ffe6e6' : '#e6ffe6'};
  color: ${props => props.isError ? '#cc0000' : '#006600'};
`;

const ContactDetails = styled.div`
  margin-top: 30px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #555;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: #000;
    transform: translateX(3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });

    try {
      console.log('Sending data to server:', formData);
      const API_URL = "https://portfolio-backend-swart-eight.vercel.app/" ;
      const response = await fetch(`${API_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus({
        submitting: false,
        message: 'Message sent successfully!',
        error: false
      });

      // Clear form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        message: error.message || 'Failed to connect to server. Please try again later.',
        error: true
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          Get In Touch
        </SectionTitle>
        <ContactContent>
          <ContactInfo>
            <ContactText>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop a message!
            </ContactText>
            <ContactDetails>
              <ContactItem href="mailto:chinthalanaveen504@gmail.com">
                <FaEnvelope />
                <span>chinthalanaveen504@gmail.com</span>
              </ContactItem>
              {/* <ContactItem href="tel:+1234567890">
                <FaPhone />
                <span>+91 9494603115</span>
              </ContactItem> */}
            </ContactDetails>
           
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Get in Touch</FormTitle>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <SubmitButton
              type="submit"
              disabled={status.submitting}
              whileTap={{ scale: 0.95 }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.message && (
              <Message isError={status.error}>
                {status.message}
              </Message>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 