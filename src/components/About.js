import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

const AboutSection = styled.section`
  min-height: 100vh;
  background: #ffffff;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
`;

const ContentWrapper = styled(motion.div)`
  text-align: left;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: #000000;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: #000000;
  }

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: #f8f8f8;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: #000000;
  }
`;

const SkillInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #000000;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#00000008 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
  z-index: 0;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AboutSection id="about">
      <BackgroundPattern />
      <Container>
        <ContentWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>About Me</Title>
          <Description variants={itemVariants}>
            Passionate about modern web technologies, I bring expertise in both
            frontend and backend development. With strong problem-solving
            skills, I create responsive, user-friendly applications using the
            latest tools and best practices.
          </Description>
          <SkillsGrid variants={containerVariants}>
            <SkillCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <FaLaptopCode />
              <SkillInfo>
                <h3>Frontend Development</h3>
                <p> HTML5, CSS3, React.js, JavaScript, React-Native </p>
              </SkillInfo>
            </SkillCard>
            <SkillCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <FaServer />
              <SkillInfo>
                <h3>Backend Development</h3>
                <p>
                  {" "}
                  Node.js, Express.js, RESTful APIs, and server architecture
                </p>
              </SkillInfo>
            </SkillCard>
            <SkillCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <FaDatabase />
              <SkillInfo>
                <h3>Database Management</h3>
                <p>MongoDB, database design</p>
              </SkillInfo>
            </SkillCard>
            <SkillCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <FaCode />
              <SkillInfo>
                <h3>Clean Code & Best Practices</h3>
                <p>
                  Version control with Git, and modern development workflows
                </p>
              </SkillInfo>
            </SkillCard>
          </SkillsGrid>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
