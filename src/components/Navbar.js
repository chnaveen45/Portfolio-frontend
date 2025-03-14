import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.scrolled ? 'rgba(235, 232, 219, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 0 20px;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
`;

const LogoSVG = styled(motion.svg)`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 0 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #000000;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-weight: 500;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #000000;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #000000;
  }

  &:hover:after {
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  width: 35px;
  height: 35px;
  position: relative;
  cursor: pointer;
  z-index: 1001;
  padding: 5px;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  span {
    width: 100%;
    height: 3px;
    background: #000000;
    transition: all 0.3s ease;
    position: relative;
    border-radius: 3px;

    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(235, 232, 219, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  z-index: 999;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transform-origin: top;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: #000000;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1.2rem;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 12px;
  letter-spacing: 1px;
  font-weight: 500;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #000000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const svgVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Updated to match new navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        scrolled={scrolled}
      >
        <NavContainer>
          <Logo
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => scrollToSection('home')}
            whileTap={{ scale: 0.95 }}
          >
            <LogoSVG
              viewBox="0 0 100 100"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Background Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="#000000"
                strokeWidth="2"
                fill="none"
                variants={pathVariants}
              />
              
              {/* Left Code Bracket */}
              <motion.path
                d="M35 30 L20 50 L35 70"
                fill="none"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
              />
              
              {/* Right Code Bracket */}
              <motion.path
                d="M65 30 L80 50 L65 70"
                fill="none"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
              />
              
              {/* Center Slash */}
              <motion.path
                d="M45 35 L55 65"
                fill="none"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                variants={pathVariants}
              />
            </LogoSVG>
          </Logo>
          <NavLinks>
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </NavLinks>
          <HamburgerButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            isOpen={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </NavContainer>
      </Nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <MobileNavLink
              onClick={() => scrollToSection('home')}
              variants={menuItemVariants}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              onClick={() => scrollToSection('about')}
              variants={menuItemVariants}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              onClick={() => scrollToSection('projects')}
              variants={menuItemVariants}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              onClick={() => scrollToSection('contact')}
              variants={menuItemVariants}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 