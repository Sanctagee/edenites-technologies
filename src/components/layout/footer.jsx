import styled from 'styled-components';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaHandshake,
  FaChevronRight,
  FaPaperPlane
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232ECC40' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #2ECC40;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  
  p {
    line-height: 1.7;
    color: #ccc;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const CompanyInfo = styled(FooterSection)`
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.3rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: #2ECC40;
      transform: translateX(5px);
    }
    
    svg {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: #ccc;
  
  svg {
    color: #2ECC40;
    font-size: 1.1rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  span {
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2ECC40 !important;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #25a336 !important;
    transform: translateX(3px);
  }
  
  .external-icon {
    font-size: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    color: #ccc;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    
    &:hover {
      color: #2ECC40;
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.2);
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px 0 12px 0;
  margin-top: 1rem;
  
  h4 {
    color: #2ECC40;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #ccc;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  
  input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px 0 6px 0;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    
    &::placeholder {
      color: #ccc;
    }
    
    &:focus {
      outline: none;
      border-color: #2ECC40;
    }
  }
  
  button {
    background: #2ECC40;
    color: white;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 6px 0 6px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #25a336;
      border-radius: 0 6px 0 6px;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  color: #ccc;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    
    a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.9rem;
      
      &:hover {
        color: #2ECC40;
      }
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <h3>
            <FaGraduationCap />
            Edenites Technologies
          </h3>
          <p>
            The Pan-African Tech Company - A vibrant community of innovators, 
            creators, and dreamers transforming Africa through technology 
            education and digital empowerment.
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

          <NewsletterSection>
            <h4>Stay Updated</h4>
            <p>Get the latest news and course updates</p>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit">
                <FaPaperPlane />
              </button>
            </NewsletterForm>
          </NewsletterSection>
        </CompanyInfo>
        
        <FooterSection>
          <h3>
            <FaLaptopCode />
            Quick Links
          </h3>
          <FooterLinks>
            <a href="/">
              <FaChevronRight />
              Home
            </a>
            <a href="/courses">
              <FaChevronRight />
              Our Courses
            </a>
            <a href="/about">
              <FaChevronRight />
              About Us
            </a>
            <a href="/contact">
              <FaChevronRight />
              Contact
            </a>
            <a href="/student-portal">
              <FaChevronRight />
              Student Portal
            </a>
            <a href="/free-bootcamp">
              <FaChevronRight />
              Free Bootcamp
            </a>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>
            <FaUsers />
            Resources
          </h3>
          <FooterLinks>
            <a href="/tutorials/videos">
              <FaChevronRight />
              Video Tutorials
            </a>
            <a href="/tutorials/live">
              <FaChevronRight />
              Live Sessions
            </a>
            <a href="/tutorials/docs">
              <FaChevronRight />
              Documentation
            </a>
            <a href="/blog">
              <FaChevronRight />
              Blog
            </a>
            <a href="/resources">
              <FaChevronRight />
              Free Resources
            </a>
            <a href="/faq">
              <FaChevronRight />
              FAQ
            </a>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>
            <FaHandshake />
            Connect
          </h3>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>
                <strong>21 Afikpo Road</strong><br />
                Abakaliki, Ebonyi State<br />
                Nigeria
              </span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>
                <a href="mailto:info@edenitestechnologies.com" style={{color: '#ccc', textDecoration: 'none'}}>
                  info@edenitestechnologies.com
                </a>
              </span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>
                <a href="tel:+2348158550401" style={{color: '#ccc', textDecoration: 'none'}}>
                  +234 815 855 0401
                </a>
                <br />
                <a href="tel:+2347061335767" style={{color: '#ccc', textDecoration: 'none'}}>
                  +234 706 133 5767
                </a>
              </span>
            </ContactItem>
          </ContactInfo>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ color: '#2ECC40', marginBottom: '1rem', fontSize: '1rem' }}>Our Network</h4>
            <FooterLinks>
              <ExternalLink href="https://cormatris.org" target="_blank" rel="noopener noreferrer">
                Cormatris <FaExternalLinkAlt className="external-icon" />
              </ExternalLink>
              <ExternalLink href="https://edenites.store" target="_blank" rel="noopener noreferrer">
                Edenites Store <FaExternalLinkAlt className="external-icon" />
              </ExternalLink>
            </FooterLinks>
          </div>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/sitemap">Sitemap</a>
          <a href="/careers">Careers</a>
        </div>
        © {currentYear} Edenites Technologies. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;