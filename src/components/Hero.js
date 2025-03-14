import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #EBE8DB;
  position: relative;
  overflow: hidden;
  padding: 0 120px;
  padding-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(235, 232, 219, 0.7) 0%,
      rgba(235, 232, 219, 0.9) 50%,
      rgba(235, 232, 219, 0.7) 100%
    );
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 80px 80px 0;
  }

  @media (max-width: 768px) {
    padding: 100px 40px 40px;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 100px 20px 40px;
  }
`;

const HeroContent = styled(motion.div)`
  color: #1a1a1a;
  z-index: 2;
  max-width: 600px;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 500px;
  height: 500px;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #000000;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 1px;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    gap: 0.3rem;
  }
`;

const TitleLine = styled(motion.div)`
  display: flex;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 1.5px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2.5rem;
  max-width: 550px;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    letter-spacing: 0.3px;
    line-height: 1.6;
    padding: 0;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 480px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #000000;
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    color: #333;
  }
`;

const CVButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #000000;
  color: #EBE8DB;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    background: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: auto;
    justify-content: flex-start;
    margin-top: 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#00000010 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  z-index: 1;
`;

const TextSpan = styled(motion.span)`
  display: inline-block;
  margin: 0 1px;
`;

const Hero = () => {
  const titleFirstLine = "Hi, I'm";
  const titleSecondLine = "Naveen Chinthala";
  const subtitleText = "Full Stack Developer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <HeroContainer>
      <BackgroundPattern />
      <HeroContent
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Title>
          <TitleLine>
            {titleFirstLine.split('').map((char, index) => (
              <TextSpan
                key={index}
                variants={letterVariants}
              >
                {char === ' ' ? '\u00A0' : char}
              </TextSpan>
            ))}
          </TitleLine>
          <TitleLine>
            {titleSecondLine.split('').map((char, index) => (
              <TextSpan
                key={index}
                variants={letterVariants}
              >
                {char === ' ' ? '\u00A0' : char}
              </TextSpan>
            ))}
          </TitleLine>
        </Title>
        <Subtitle>
          {subtitleText.split('').map((char, index) => (
            <TextSpan
              key={index}
              variants={letterVariants}
            >
              {char === ' ' ? '\u00A0' : char}
            </TextSpan>
          ))}
        </Subtitle>
        <Description
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            ease: "easeOut"
          }}
        >
       Building elegant, responsive web apps with clean code and exceptional user experiences.
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: "easeOut"
          }}
        >
          <SocialIcon 
            href="https://www.linkedin.com/in/chinthalanaveen/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon 
            href="https://github.com/chnaveen45" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialIcon>
          <CVButton
            as="a"
            href="/resume/Naveen.pdf"
            download="Naveen_Resume.pdf"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download CV
          </CVButton>
        </SocialLinks>
      </HeroContent>
      <ImageContainer
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <HeroImage 
          src="/images/man.png" 
          alt="Hero Illustration"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero; 