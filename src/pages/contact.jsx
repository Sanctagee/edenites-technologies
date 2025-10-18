import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  padding-top: 6rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    color: #001F3F;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  
  p {
    color: #666;
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 15px 0 15px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  h3 {
    color: #001F3F;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    svg {
      color: #2ECC40;
    }
  }
  
  p {
    color: #666;
    line-height: 1.7;
    margin: 0.5rem 0;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 3rem;
  border-radius: 20px 0 20px 0;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  
  label {
    display: block;
    color: #001F3F;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 1rem 1.2rem;
    border: 2px solid #e1e5e9;
    border-radius: 8px 0 8px 0;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #2ECC40;
      border-radius: 0 8px 0 8px;
      box-shadow: 0 0 0 3px rgba(46, 204, 64, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 8px 0 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  justify-content: center;
  
  &:hover {
    background: #25a336;
    border-radius: 0 8px 0 8px;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(46, 204, 64, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: #001F3F;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #2ECC40;
      transform: translateY(-3px);
    }
  }
`;

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  if (loading) {
    return (
      <ContactContainer>
        <PageHeader>
          <Skeleton height={60} width="30%" style={{ margin: '0 auto 1.5rem' }} />
          <Skeleton height={24} count={2} style={{ margin: '0 auto', maxWidth: '600px' }} />
        </PageHeader>
        <ContactGrid>
          <div>
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} height={150} style={{ marginBottom: '2rem', borderRadius: '15px 0 15px 0' }} />
            ))}
          </div>
          <Skeleton height={500} style={{ borderRadius: '20px 0 20px 0' }} />
        </ContactGrid>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <PageHeader data-aos="fade-up">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us. We're here to answer any questions and help you 
          start your tech journey with Edenites Technologies.
        </p>
      </PageHeader>

      <ContactGrid>
        <ContactInfo>
          <InfoCard data-aos="fade-right">
            <h3>
              <FaMapMarkerAlt />
              Our Location
            </h3>
            <p>Accra, Ghana</p>
            <p>Digital Innovation Hub</p>
          </InfoCard>

          <InfoCard data-aos="fade-right" data-aos-delay="100">
            <h3>
              <FaEnvelope />
              Email Us
            </h3>
            <p>info@edenites.com</p>
            <p>support@edenites.com</p>
          </InfoCard>

          <InfoCard data-aos="fade-right" data-aos-delay="200">
            <h3>
              <FaPhone />
              Call Us
            </h3>
            <p>+233 123 456 789</p>
            <p>+233 987 654 321</p>
          </InfoCard>

          <InfoCard data-aos="fade-right" data-aos-delay="300">
            <h3>
              <FaClock />
              Business Hours
            </h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
          </InfoCard>

          <SocialLinks data-aos="fade-right" data-aos-delay="400">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit} data-aos="fade-left">
          <FormGroup>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="courses">Course Information</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help you..."
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;