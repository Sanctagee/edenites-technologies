import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: #001F3F;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #001F3F;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  
  h3 {
    color: #001F3F;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    color: #2ECC40;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  div {
    h4 {
      margin: 0 0 0.3rem 0;
      color: #001F3F;
    }
    
    p {
      margin: 0;
      color: #666;
      line-height: 1.5;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #001F3F;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2ECC40;
    transform: translateY(-2px);
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  h2 {
    color: #001F3F;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #001F3F;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #eee;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #2ECC40;
    }
  }
  
  textarea {
    height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #25a336;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <ContactContainer>
      <PageHeader>
        <h1>Contact Us</h1>
        <p>Get in touch with us. We'd love to hear from you and answer any questions you may have.</p>
      </PageHeader>

      <ContactGrid>
        <ContactInfo>
          <h2>Get In Touch</h2>
          
          <InfoCard>
            <h3>Contact Information</h3>
            <InfoItem>
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+233 123 456 789</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@edenites.com</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>Accra, Ghana</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FaClock />
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br/>
                   Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </InfoItem>
          </InfoCard>

          <SocialLinks>
            <SocialLink href="#">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="#">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          <FormGroup>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;