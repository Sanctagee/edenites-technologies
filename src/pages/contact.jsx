import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaDirections } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 80vh;
  padding-top: 6rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 5rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    color: #001F3F;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    
    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.3rem;
    }
  }
  
  p {
    color: #666;
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
  border-left: 4px solid #2ECC40;
  
  &:hover {
    transform: translateY(-8px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
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
    margin: 0.8rem 0;
    font-size: 1rem;
  }
  
  .contact-link {
    color: #2ECC40;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: #25a336;
      text-decoration: underline;
    }
  }
`;

const SocialSection = styled.div`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  padding: 2.5rem 2rem;
  border-radius: 15px 0 15px 0;
  color: white;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  
  p {
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    padding: 0.8rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    
    &:hover {
      color: #2ECC40;
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContactForm = styled.form`
  background: white;
  padding: 3rem;
  border-radius: 20px 0 20px 0;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  animation: ${slideIn} 0.8s ease-out 0.4s both;
  border-left: 4px solid #2ECC40;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  
  label {
    display: block;
    color: #001F3F;
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 1rem 1.2rem;
    border: 2px solid #e1e5e9;
    border-radius: 8px 0 8px 0;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #2ECC40;
      border-radius: 0 8px 0 8px;
      box-shadow: 0 0 0 3px rgba(46, 204, 64, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 140px;
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

const MapSection = styled.div`
  background: white;
  border-radius: 20px 0 20px 0;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  overflow: hidden;
  animation: ${slideIn} 0.8s ease-out 0.6s both;
  border-left: 4px solid #2ECC40;
`;

const MapHeader = styled.div`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const DirectionsButton = styled.a`
  background: #2ECC40;
  color: white;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px 0 8px 0;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #25a336;
    border-radius: 0 8px 0 8px;
    transform: translateY(-2px);
  }
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ActionCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px 0 15px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid #2ECC40;
  
  &:hover {
    transform: translateY(-5px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  h4 {
    color: #001F3F;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .action-button {
    background: #2ECC40;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px 0 8px 0;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    
    &:hover {
      background: #25a336;
      border-radius: 0 8px 0 8px;
      transform: translateY(-2px);
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
      alert('Message sent successfully! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  // Google Maps embed URL for 21 Afikpo Road, Abakaliki, Nigeria
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.432321179225!2d8.101258474820647!3d5.414333334922196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f2b5d13c16f0b%3A0x7c1c4b3b3b3b3b3b!2s21%20Afikpo%20Rd%2C%20Abakaliki%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890";

  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=21+Afikpo+Road,+Abakaliki,+Nigeria";

  if (loading) {
    return (
      <ContactContainer>
        <PageHeader>
          <Skeleton height={60} width="30%" style={{ margin: '0 auto 1.5rem' }} />
          <Skeleton height={24} count={2} style={{ margin: '0 auto', maxWidth: '600px' }} />
        </PageHeader>
        <ContactGrid>
          <div>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} height={150} style={{ marginBottom: '2rem', borderRadius: '15px 0 15px 0' }} />
            ))}
          </div>
          <div>
            <Skeleton height={500} style={{ borderRadius: '20px 0 20px 0', marginBottom: '2rem' }} />
            <Skeleton height={400} style={{ borderRadius: '20px 0 20px 0' }} />
          </div>
        </ContactGrid>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <PageHeader data-aos="fade-up">
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you. Whether you're interested in our courses, 
          need technical support, or want to discuss partnerships, our team is 
          here to help you succeed in your tech journey.
        </p>
      </PageHeader>

      <ContactGrid>
        <LeftColumn>
          <ContactInfo>
            <InfoCard data-aos="fade-right">
              <h3>
                <FaMapMarkerAlt />
                Our Location
              </h3>
              <p><strong>21 Afikpo Road</strong></p>
              <p>Abakaliki, Ebonyi State</p>
              <p>Nigeria</p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                Visit our digital innovation hub for in-person consultations and training sessions
              </p>
            </InfoCard>

            <InfoCard data-aos="fade-right" data-aos-delay="100">
              <h3>
                <FaEnvelope />
                Email Us
              </h3>
              <p>
                <a href="mailto:info@edenitestechnologies.com" className="contact-link">
                  info@edenitestechnologies.com
                </a>
              </p>
              <p>
                <a href="mailto:support@edenites.com" className="contact-link">
                  support@edenitestech.com
                </a>
              </p>
              <p>
                <a href="mailto:admissions@edenites.com" className="contact-link">
                  admissions@edenitestech.com
                </a>
              </p>
            </InfoCard>

            <InfoCard data-aos="fade-right" data-aos-delay="200">
              <h3>
                <FaPhone />
                Call Us
              </h3>
              <p>
                <a href="tel:+2348158550401" className="contact-link">
                  +234 815 855 0401
                </a>
              </p>
              <p>
                <a href="tel:+2347061335767" className="contact-link">
                  +234 706 133 5767
                </a>
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                Available Monday - Saturday, 8:00 AM - 6:00 PM
              </p>
            </InfoCard>

            <InfoCard data-aos="fade-right" data-aos-delay="300">
              <h3>
                <FaClock />
                Business Hours
              </h3>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                Online support available 24/7 for enrolled students
              </p>
            </InfoCard>
          </ContactInfo>

          <SocialSection data-aos="fade-right" data-aos-delay="400">
            <h3>Connect With Us</h3>
            <p>
              Follow us on social media to stay updated with the latest news, 
              course offerings, and tech insights from Edenites Technologies.
            </p>
            <SocialLinks>
              <a href="https://www.youtube.com/@edenitestechnologies" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com/company/edenitestechnologies" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/edenites.tech" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/edenitestechnologies" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/edenitestech" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaTwitter />
              </a>
            </SocialLinks>
          </SocialSection>
        </LeftColumn>

        <RightColumn>
          <ContactForm onSubmit={handleSubmit} data-aos="fade-left">
            <h3 style={{ color: '#001F3F', marginBottom: '2rem', fontSize: '1.5rem', textAlign: 'center' }}>
              Send Us a Message
            </h3>
            
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
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
              <label htmlFor="email">Email Address *</label>
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
              <label htmlFor="subject">Subject *</label>
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
                <option value="admissions">Admissions</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
                <option value="other">Other</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message *</label>
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
              {isSubmitting ? 'Sending Message...' : 'Send Message'} <FaPaperPlane />
            </SubmitButton>
          </ContactForm>

          <MapSection data-aos="fade-left" data-aos-delay="200">
            <MapHeader>
              <h3>
                <FaMapMarkerAlt />
                Find Us Here
              </h3>
              <DirectionsButton href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <FaDirections />
                Get Directions
              </DirectionsButton>
            </MapHeader>
            <MapContainer>
              <iframe 
                src={mapUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edenites Technologies Location"
              ></iframe>
            </MapContainer>
          </MapSection>
        </RightColumn>
      </ContactGrid>

      <QuickActions data-aos="fade-up" data-aos-delay="400">
        <ActionCard>
          <h4>Book a Consultation</h4>
          <p>Schedule a one-on-one session with our experts to discuss your learning goals</p>
          <a href="/consultation" className="action-button">
            Schedule Now
          </a>
        </ActionCard>
        
        <ActionCard>
          <h4>View Our Courses</h4>
          <p>Explore our comprehensive tech courses designed for all skill levels</p>
          <a href="/courses" className="action-button">
            Browse Courses
          </a>
        </ActionCard>
        
        <ActionCard>
          <h4>Student Portal</h4>
          <p>Access learning materials, assignments, and track your progress</p>
          <a href="/student-portal" className="action-button">
            Login to Portal
          </a>
        </ActionCard>
        
        <ActionCard>
          <h4>Free Resources</h4>
          <p>Download free learning materials and watch tutorial videos</p>
          <a href="/resources" className="action-button">
            Get Resources
          </a>
        </ActionCard>
      </QuickActions>
    </ContactContainer>
  );
};

export default Contact;