import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '/edenites-logo.png';
import { 
  FaBars, FaTimes, FaChevronDown, FaGraduationCap, FaLaptop, 
  FaVideo, FaInfoCircle, FaUserCircle, FaPhone, FaEnvelope,
  FaYoutube, FaLinkedin, FaFacebook, FaInstagram, FaTwitter,
  FaShoppingCart, FaGlobe, FaExternalLinkAlt
} from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Main container that holds both top header and main nav
const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  transform: ${props => props.$hidden ? 'translateY(-100%)' : 'translateY(0)'};
`;

const TopHeader = styled.div`
  background: #001F3F;
  color: white;
  padding: 0.5rem 2rem;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopHeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.8rem;
    font-weight: 500;
    
    &:hover {
      color: #2ECC40;
    }
  }
  
  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
    display: flex;
    align-items: center;
    
    &:hover {
      color: #2ECC40;
      transform: translateY(-2px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.8rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ccc;
    
    svg {
      color: #2ECC40;
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 1024px) {
    margin-top: 0.5rem;
  }
`;

const Nav = styled.nav`
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 31, 63, 0.95)')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(15px)' : 'blur(10px)')};
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid rgba(0,0,0,0.1)' : 'none')};
  
  @media (max-width: 768px) {
    padding: 1rem;
    background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 31, 63, 0.98)')};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  z-index: 1001;
  
  img {
    height: 45px;
    width: auto;
    transition: all 0.3s ease;
  }
  
  .logo-text {
    color: ${props => props.$scrolled ? '#001F3F' : 'white'};
    font-size: 1.8rem;
    font-weight: 800;
    transition: color 0.3s ease;
  }
  
  @media (max-width: 768px) {
    img {
      height: 35px;
    }
    
    .logo-text {
      font-size: 1.5rem;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
  
  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    left: ${props => props.$isOpen ? '0' : '-100%'};
    width: 85%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    transition: left 0.3s ease;
    gap: 0;
    box-shadow: ${props => props.$isOpen ? '5px 0 25px rgba(0,0,0,0.1)' : 'none'};
    z-index: 999;
  }
`;

const NavItem = styled.li`
  position: relative;
  
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$scrolled ? '#001F3F' : 'white'};
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  border-radius: 8px 0 8px 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  
  &:hover {
    color: #2ECC40;
    background: ${props => props.$scrolled ? 'rgba(46, 204, 64, 0.1)' : 'rgba(255,255,255,0.1)'};
  }
  
  @media (max-width: 968px) {
    color: #001F3F;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 1.1rem;
    width: 100%;
    justify-content: flex-start;
  }
`;

const DropdownNavLink = styled.div`
  color: ${props => props.$scrolled ? '#001F3F' : 'white'};
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  border-radius: 8px 0 8px 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  
  &:hover {
    color: #2ECC40;
    background: ${props => props.$scrolled ? 'rgba(46, 204, 64, 0.1)' : 'rgba(255,255,255,0.1)'};
  }
  
  @media (max-width: 968px) {
    color: #001F3F;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 1.1rem;
    width: 100%;
    justify-content: space-between;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 240px;
  border-radius: 12px 0 12px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  border: 1px solid rgba(0,0,0,0.1);
  
  @media (max-width: 968px) {
    position: static;
    background: #f8f9fa;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: ${props => props.$isOpen ? 'block' : 'none'};
    border-radius: 0;
    border: none;
    min-width: auto;
    animation: none;
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  color: #001F3F;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(46, 204, 64, 0.1);
    color: #2ECC40;
    padding-left: 2rem;
  }
  
  svg {
    font-size: 0.9rem;
    color: #2ECC40;
  }
  
  @media (max-width: 968px) {
    padding: 1rem 3rem;
  }
`;

const ExternalDropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  color: #001F3F;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(46, 204, 64, 0.1);
    color: #2ECC40;
    padding-left: 2rem;
  }
  
  svg {
    font-size: 0.9rem;
    color: #2ECC40;
  }
  
  .external-icon {
    margin-left: auto;
    opacity: 0.7;
    font-size: 0.7rem;
  }
  
  @media (max-width: 968px) {
    padding: 1rem 3rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$scrolled ? '#001F3F' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileAuthSection = styled.div`
  display: none;
  
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    margin-top: 1rem;
  }
`;

const AuthButton = styled(Link)`
  background: ${props => props.primary ? '#2ECC40' : 'transparent'};
  color: ${props => props.primary ? 'white' : (props.$scrolled ? '#001F3F' : 'white')};
  border: ${props => props.primary ? 'none' : `2px solid ${props.$scrolled ? '#001F3F' : 'white'}`};
  padding: 0.7rem 1.8rem;
  border-radius: 10px 0 10px 0;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  text-align: center;
  
  &:hover {
    background: ${props => props.primary ? '#25a336' : (props.$scrolled ? '#001F3F' : 'white')};
    color: ${props => props.primary ? 'white' : (props.$scrolled ? 'white' : '#001F3F')};
    border-radius: 0 10px 0 10px;
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? '0 10px 25px rgba(46, 204, 64, 0.3)' : 'none'};
  }
  
  @media (max-width: 968px) {
    width: 100%;
    color: #001F3F;
    border: 2px solid #2ECC40;
  }
`;

const MobileAuthButton = styled(AuthButton)`
  @media (max-width: 968px) {
    display: block;
    background: #2ECC40;
    color: white;
    border: none;
    
    &:hover {
      background: #25a336;
      color: white;
    }
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide nav based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      
      // Change nav background based on scroll position
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const dropdowns = {
    admissions: [
      { icon: <FaGraduationCap />, label: 'Apply Now', path: '/apply' },
      { icon: <FaUserCircle />, label: 'Requirements', path: '/admissions/requirements' },
      { icon: <FaInfoCircle />, label: 'Admission Process', path: '/admissions/process' },
      { icon: <FaLaptop />, label: 'Free Bootcamp', path: '/free-bootcamp' }
    ],
    services: [
      { icon: <FaLaptop />, label: 'Web Development', path: '/services/web-development' },
      { icon: <FaVideo />, label: 'Digital Marketing', path: '/services/digital-marketing' },
      { icon: <FaGraduationCap />, label: 'IT Training', path: '/services/training' },
      { icon: <FaUserCircle />, label: 'Consulting', path: '/services/consulting' }
    ],
    tutorials: [
      { icon: <FaVideo />, label: 'Video Courses', path: '/tutorials/videos' },
      { icon: <FaLaptop />, label: 'Live Sessions', path: '/tutorials/live' },
      { icon: <FaGraduationCap />, label: 'Documentation', path: '/tutorials/docs' }
    ],
    about: [
      { icon: <FaInfoCircle />, label: 'Our Story', path: '/about' },
      { icon: <FaUserCircle />, label: 'Our Team', path: '/about/team' },
      { icon: <FaGraduationCap />, label: 'Careers', path: '/about/careers' },
      { icon: <FaEnvelope />, label: 'Contact Us', path: '/contact' }
    ],
    websites: [
      { 
        icon: <FaGlobe />, 
        label: 'Cormatris', 
        url: 'https://cormatris.org',
        external: true
      },
      { 
        icon: <FaShoppingCart />, 
        label: 'Edenites Store', 
        url: 'https://edenites.store',
        external: true
      },
      // You can add more websites here in the future
      { 
        icon: <FaGraduationCap />, 
        label: 'Student Portal', 
        url: '/student-portal',
        external: false
      }
    ]
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavigationWrapper $hidden={navHidden} ref={navRef}>
      <TopHeader>
        <TopHeaderContent>
          <QuickLinks>
            <a href="/student-portal">Student Portal</a>
            <a href="/courses">Our Courses</a>
          </QuickLinks>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <SocialLinks>
              <a href="https://youtube.com/edenites" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com/company/edenites" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/edenites" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/edenites" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/edenites" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaTwitter />
              </a>
            </SocialLinks>

            <ContactInfo>
              <div>
                <FaPhone />
                <span>+1 (774) 381-0578</span>
              </div>
            </ContactInfo>
          </div>
        </TopHeaderContent>
      </TopHeader>

      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo to="/" $scrolled={scrolled} onClick={closeAllMenus}>
            {loading ? (
              <Skeleton width={45} height={45} circle />
            ) : (
              <>
                <img src={logo} alt="Edenites Technologies" />
              </>
            )}
          </Logo>

          <MobileMenuButton 
            $scrolled={scrolled} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>

          <NavLinks $isOpen={isMenuOpen}>
            {/* Admissions Dropdown */}
            <NavItem
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown('admissions')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown(null)}
            >
              <DropdownNavLink 
                $scrolled={scrolled}
                onClick={() => handleDropdownToggle('admissions')}
              >
                Admissions <FaChevronDown size={12} />
              </DropdownNavLink>
              <Dropdown $isOpen={openDropdown === 'admissions'}>
                {dropdowns.admissions.map((item, index) => (
                  <DropdownItem 
                    key={index} 
                    to={item.path}
                    onClick={closeAllMenus}
                  >
                    {item.icon}
                    {item.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            </NavItem>

            {/* Services Dropdown */}
            <NavItem
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown('services')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown(null)}
            >
              <DropdownNavLink 
                $scrolled={scrolled}
                onClick={() => handleDropdownToggle('services')}
              >
                Services <FaChevronDown size={12} />
              </DropdownNavLink>
              <Dropdown $isOpen={openDropdown === 'services'}>
                {dropdowns.services.map((item, index) => (
                  <DropdownItem 
                    key={index} 
                    to={item.path}
                    onClick={closeAllMenus}
                  >
                    {item.icon}
                    {item.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            </NavItem>

            {/* Video Tutorials Dropdown */}
            <NavItem
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown('tutorials')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown(null)}
            >
              <DropdownNavLink 
                $scrolled={scrolled}
                onClick={() => handleDropdownToggle('tutorials')}
              >
                Video Tutorials <FaChevronDown size={12} />
              </DropdownNavLink>
              <Dropdown $isOpen={openDropdown === 'tutorials'}>
                {dropdowns.tutorials.map((item, index) => (
                  <DropdownItem 
                    key={index} 
                    to={item.path}
                    onClick={closeAllMenus}
                  >
                    {item.icon}
                    {item.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            </NavItem>

            {/* About Us Dropdown */}
            <NavItem
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown('about')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown(null)}
            >
              <DropdownNavLink 
                $scrolled={scrolled}
                onClick={() => handleDropdownToggle('about')}
              >
                About Us <FaChevronDown size={12} />
              </DropdownNavLink>
              <Dropdown $isOpen={openDropdown === 'about'}>
                {dropdowns.about.map((item, index) => (
                  <DropdownItem 
                    key={index} 
                    to={item.path}
                    onClick={closeAllMenus}
                  >
                    {item.icon}
                    {item.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            </NavItem>

            {/* Our Websites Dropdown */}
            <NavItem
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown('websites')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setOpenDropdown(null)}
            >
              <DropdownNavLink 
                $scrolled={scrolled}
                onClick={() => handleDropdownToggle('websites')}
              >
                Our Websites <FaChevronDown size={12} />
              </DropdownNavLink>
              <Dropdown $isOpen={openDropdown === 'websites'}>
                {dropdowns.websites.map((item, index) => (
                  item.external ? (
                    <ExternalDropdownItem 
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                    >
                      {item.icon}
                      {item.label}
                      <FaExternalLinkAlt className="external-icon" />
                    </ExternalDropdownItem>
                  ) : (
                    <DropdownItem 
                      key={index}
                      to={item.url}
                      onClick={closeAllMenus}
                    >
                      {item.icon}
                      {item.label}
                    </DropdownItem>
                  )
                ))}
              </Dropdown>
            </NavItem>

            {/* Mobile Auth Section */}
            <MobileAuthSection>
              <MobileAuthButton 
                to="/auth"
                primary 
                $scrolled={scrolled}
                onClick={closeAllMenus}
              >
                Get Started
              </MobileAuthButton>
            </MobileAuthSection>
          </NavLinks>

          {/* Desktop Auth Section */}
          <AuthSection>
            <AuthButton 
              to="/auth"
              primary 
              $scrolled={scrolled}
            >
              Get Started
            </AuthButton>
          </AuthSection>
        </NavContainer>
      </Nav>
    </NavigationWrapper>
  );
};

export default Navigation;