import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaRocket, FaUsers, FaGraduationCap, FaAward, FaLightbulb, FaHandshake, FaStar, FaGlobeAfrica } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  padding-top: 6rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px 0 20px 0;
  text-align: center;
  margin-bottom: 4rem;
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

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    position: relative;
  }
  
  p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
    opacity: 0.9;
    position: relative;
  }
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 5rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MissionSection = styled.div`
  h2 {
    color: #001F3F;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 800;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 15px 0 15px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  svg {
    font-size: 3rem;
    color: #2ECC40;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #001F3F;
    font-size: 2.5rem;
    margin: 0;
    font-weight: 800;
  }
  
  p {
    color: #666;
    margin: 0.8rem 0 0 0;
    font-weight: 600;
  }
`;

const ValuesSection = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #001F3F;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 15px 0 15px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  border-top: 4px solid #2ECC40;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  svg {
    font-size: 3rem;
    color: #2ECC40;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #001F3F;
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
  
  p {
    color: #666;
    line-height: 1.7;
  }
`;

const VisionSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 2rem;
  border-radius: 20px 0 20px 0;
  text-align: center;
  margin-bottom: 4rem;
`;

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AboutContainer>
        <Skeleton height={300} style={{ marginBottom: '4rem', borderRadius: '20px 0 20px 0' }} />
        <ContentSection>
          <div>
            <Skeleton height={50} width="60%" style={{ marginBottom: '2rem' }} />
            <Skeleton height={20} count={4} style={{ marginBottom: '1rem' }} />
          </div>
          <StatsSection>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={150} style={{ borderRadius: '15px 0 15px 0' }} />
            ))}
          </StatsSection>
        </ContentSection>
      </AboutContainer>
    );
  }

  return (
    <AboutContainer>
      <HeroSection data-aos="fade-up">
        <h1>About Edenites Technologies</h1>
        <p>
          We are the Pan-African Tech Company - a vibrant community of innovators, 
          creators, and dreamers dedicated to transforming Africa through technology 
          education and digital empowerment.
        </p>
      </HeroSection>

      <ContentSection>
        <MissionSection data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>
            To bridge the digital skills gap in Africa by providing accessible, 
            high-quality technology education that empowers individuals and 
            transforms communities.
          </p>
          <p>
            We believe that every African deserves the opportunity to thrive in 
            the digital economy, and we're committed to making that vision a 
            reality through innovative learning solutions.
          </p>
        </MissionSection>

        <StatsSection data-aos="fade-left" data-aos-delay="200">
          <StatCard>
            <FaUsers />
            <h3>500+</h3>
            <p>Students Trained</p>
          </StatCard>
          <StatCard>
            <FaGraduationCap />
            <h3>15+</h3>
            <p>Expert Instructors</p>
          </StatCard>
          <StatCard>
            <FaRocket />
            <h3>6</h3>
            <p>Courses Offered</p>
          </StatCard>
          <StatCard>
            <FaAward />
            <h3>95%</h3>
            <p>Success Rate</p>
          </StatCard>
        </StatsSection>
      </ContentSection>

      <VisionSection data-aos="fade-up">
        <SectionTitle>Our Vision</SectionTitle>
        <SectionSubtitle>
          To create a future where every African has the digital skills and opportunities 
          to innovate, create, and lead in the global technology landscape.
        </SectionSubtitle>
        <FaGlobeAfrica size={80} color="#2ECC40" />
      </VisionSection>

      <ValuesSection>
        <SectionTitle data-aos="fade-up">Our Values</SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
          The principles that guide everything we do at Edenites Technologies
        </SectionSubtitle>
        <ValuesGrid>
          <ValueCard data-aos="fade-up" data-aos-delay="100">
            <FaRocket />
            <h3>Innovation</h3>
            <p>
              We embrace cutting-edge technologies and teaching methodologies 
              to deliver exceptional learning experiences that drive progress.
            </p>
          </ValueCard>
          <ValueCard data-aos="fade-up" data-aos-delay="200">
            <FaUsers />
            <h3>Community</h3>
            <p>
              We believe in the power of community and collaboration to drive 
              meaningful change and support sustainable growth across Africa.
            </p>
          </ValueCard>
          <ValueCard data-aos="fade-up" data-aos-delay="300">
            <FaStar />
            <h3>Excellence</h3>
            <p>
              We are committed to maintaining the highest standards in our 
              curriculum, instruction, and student support services.
            </p>
          </ValueCard>
          <ValueCard data-aos="fade-up" data-aos-delay="400">
            <FaLightbulb />
            <h3>Empowerment</h3>
            <p>
              We empower individuals with practical, market-relevant skills that 
              lead to real-world success and meaningful career advancement.
            </p>
          </ValueCard>
          <ValueCard data-aos="fade-up" data-aos-delay="500">
            <FaHandshake />
            <h3>Integrity</h3>
            <p>
              We operate with transparency, honesty, and ethical practices in 
              all our interactions and business operations.
            </p>
          </ValueCard>
          <ValueCard data-aos="fade-up" data-aos-delay="600">
            <FaGlobeAfrica />
            <h3>Pan-African Spirit</h3>
            <p>
              We celebrate African diversity while building bridges that connect 
              talent and opportunities across the continent.
            </p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
    </AboutContainer>
  );
};

export default About;