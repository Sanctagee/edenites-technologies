import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #001F3F;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #2ECC40;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  
  p {
    line-height: 1.7;
    color: #ccc;
    font-size: 1rem;
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
    
    &:hover {
      color: #2ECC40;
      transform: translateX(5px);
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
  align-items: center;
  gap: 1rem;
  color: #ccc;
  
  svg {
    color: #2ECC40;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2ECC40 !important;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: #25a336 !important;
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
    
    &:hover {
      color: #2ECC40;
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  color: #ccc;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Edenites Technologies</h3>
          <p>
            The Pan-African Tech Company - A community of innovators, creators, 
            and dreamers transforming Africa through technology education.
          </p>
          <SocialLinks>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <a href="/courses">Our Courses</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/dashboard">Student Portal</a>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Our Network</h3>
          <FooterLinks>
            <ExternalLink href="https://cormatris.org" target="_blank" rel="noopener noreferrer">
              Cormatris <FaExternalLinkAlt size={12} />
            </ExternalLink>
            <ExternalLink href="https://edenites.store" target="_blank" rel="noopener noreferrer">
              Edenites Store <FaExternalLinkAlt size={12} />
            </ExternalLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              <span>info@edenitestechnologies.com</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+1 (774) 381-0578</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Abakaliki, Nigeria</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        © {currentYear} Edenites Technologies. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;