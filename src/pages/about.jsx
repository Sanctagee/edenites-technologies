import styled from 'styled-components';
import { FaRocket, FaUsers, FaGraduationCap, FaAward } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #001F3F 0%, #2ECC40 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionSection = styled.div`
  h2 {
    color: #001F3F;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  svg {
    font-size: 2.5rem;
    color: #2ECC40;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #001F3F;
    font-size: 2rem;
    margin: 0;
  }
  
  p {
    color: #666;
    margin: 0.5rem 0 0 0;
  }
`;

const ValuesSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #001F3F;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  border-top: 4px solid #2ECC40;
  
  svg {
    font-size: 2.5rem;
    color: #2ECC40;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #001F3F;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <h1>About Edenites Technologies</h1>
        <p>
          We are the Pan-African Tech Company - a vibrant community of innovators, 
          creators, and dreamers dedicated to transforming Africa through technology 
          education and digital empowerment.
        </p>
      </HeroSection>

      <ContentSection>
        <MissionSection>
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

        <StatsSection>
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

      <ValuesSection>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <FaRocket />
            <h3>Innovation</h3>
            <p>
              We embrace cutting-edge technologies and teaching methodologies 
              to deliver exceptional learning experiences.
            </p>
          </ValueCard>
          <ValueCard>
            <FaUsers />
            <h3>Community</h3>
            <p>
              We believe in the power of community and collaboration to drive 
              meaningful change and support growth.
            </p>
          </ValueCard>
          <ValueCard>
            <FaGraduationCap />
            <h3>Excellence</h3>
            <p>
              We are committed to maintaining the highest standards in our 
              curriculum, instruction, and student support.
            </p>
          </ValueCard>
          <ValueCard>
            <FaAward />
            <h3>Empowerment</h3>
            <p>
              We empower individuals with practical skills that lead to 
              real-world success and career advancement.
            </p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
    </AboutContainer>
  );
};

export default About;