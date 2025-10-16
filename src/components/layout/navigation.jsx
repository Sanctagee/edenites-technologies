import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaTachometerAlt, FaEnvelope, FaInfoCircle, FaGraduationCap, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Nav = styled.nav`
  background-color: #001F3F;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  color: #2ECC40;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${props => props.$isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #001F3F;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    transition: left 0.3s ease;
    gap: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#2ECC40' : 'white'};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  padding: 0.5rem 0;
  
  &:hover {
    color: #2ECC40;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    width: 100%;
    border-bottom: 1px solid rgba(46, 204, 64, 0.1);
    font-size: 1.1rem;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <FaGraduationCap />
        Edenites Technologies
      </Logo>
      
      <MenuToggle onClick={toggleMenu}>
        <FaBars />
      </MenuToggle>
      
      <NavItems $isOpen={isMenuOpen}>
        <NavLink to="/" $isActive={location.pathname === '/'} onClick={() => setIsMenuOpen(false)}>
          <FaHome />
          Home
        </NavLink>
        <NavLink to="/courses" $isActive={location.pathname === '/courses'} onClick={() => setIsMenuOpen(false)}>
          <FaBook />
          Courses
        </NavLink>
        <NavLink to="/dashboard" $isActive={location.pathname === '/dashboard'} onClick={() => setIsMenuOpen(false)}>
          <FaTachometerAlt />
          Dashboard
        </NavLink>
        <NavLink to="/about" $isActive={location.pathname === '/about'} onClick={() => setIsMenuOpen(false)}>
          <FaInfoCircle />
          About
        </NavLink>
        <NavLink to="/contact" $isActive={location.pathname === '/contact'} onClick={() => setIsMenuOpen(false)}>
          <FaEnvelope />
          Contact
        </NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navigation;