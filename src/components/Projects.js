import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 70vh;
  background: #18230F;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #F7F7F7;
  position: relative;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background: #FFFFFF;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    max-width: 450px;
    margin: 25px auto 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: center;
    padding: 10px;
    background: white;
    transition: all 0.4s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
    &:before {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    height: 400px;
  }

  &:first-of-type {
    ${ProjectImage} {
      img {
        object-fit: cover;
        padding: 0;
      }
    }
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.45;
  margin-bottom: 12px;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const TechTag = styled.span`
  background: #f3f3f3;
  color: #444;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #000000;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 3px 8px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 4px 0;

  &:hover {
    color: #000;
    transform: translateX(2px);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Website",
      description: "A modern portfolio website built with React.js, featuring responsive design and interactive elements.",
      image: "/images/vt.png",
      tech: ["React", "CSS","Node.js","Express.js","MongoDB","Github"],
      github: "https://github.com/chnaveen45/Vishwasri-Website",
      live: "https://vishcom.net/"
    },
    {
      title: "Mobile App",
      description: "A React Native mobile app with intuitive UI/UX and seamless navigation for service management.",
      image: "/images/app.jpg",
      tech: ["React-Native", "Github"],
      github: "https://github.com/vishwasri-technologies/vt-app/tree/finally",
      
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          Projects
        </SectionTitle>
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} variants={itemVariants}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 