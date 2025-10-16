import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #001F3F;
  color: white;
  padding: 3rem 2rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #2ECC40;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    color: #ccc;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2ECC40;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #2ECC40;
  padding-top: 2rem;
  text-align: center;
  color: #ccc;
`;

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Edenites Technologies</h3>
          <p>
            The Pan-African Tech Company - A community of innovators, 
            creators, and dreamers transforming Africa through technology education.
          </p>
          <SocialLinks>
            <SocialLink href="#"><FaFacebook /></SocialLink>
            <SocialLink href="#"><FaTwitter /></SocialLink>
            <SocialLink href="#"><FaLinkedin /></SocialLink>
            <SocialLink href="#"><FaInstagram /></SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <p>
            <a href="/courses" style={{color: '#ccc', textDecoration: 'none'}}>Our Courses</a><br/>
            <a href="/about" style={{color: '#ccc', textDecoration: 'none'}}>About Us</a><br/>
            <a href="/contact" style={{color: '#ccc', textDecoration: 'none'}}>Contact</a><br/>
            <a href="/dashboard" style={{color: '#ccc', textDecoration: 'none'}}>Student Portal</a>
          </p>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <p>
            Email: info@edenites.com<br/>
            Phone: +233 123 456 789<br/>
            Address: Accra, Ghana
          </p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {currentYear} Edenites Technologies. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;