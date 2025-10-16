import styled from 'styled-components';
import { FaLaptopCode, FaChartBar, FaShieldAlt, FaPython, FaPalette, FaUserGraduate } from 'react-icons/fa';

const PageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #001F3F 0%, #2ECC40 100%);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 80vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  max-width: 800px;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  background-color: #2ECC40;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  
  &:hover {
    background-color: #25a336;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const CoursesSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #001F3F;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const CourseCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #2ECC40;
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2.5rem;
    color: #2ECC40;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #001F3F;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    
    svg {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const Home = () => {
  const courses = [
    { icon: <FaLaptopCode />, title: "Web Development", desc: "Full-stack development with modern technologies" },
    { icon: <FaChartBar />, title: "Data Analysis", desc: "Data visualization, analysis, and business intelligence" },
    { icon: <FaShieldAlt />, title: "Cyber Security", desc: "Network protection and security fundamentals" },
    { icon: <FaPython />, title: "Python Programming", desc: "Python fundamentals and advanced programming" },
    { icon: <FaPalette />, title: "UI/UX Design", desc: "User experience and interface design principles" },
    { icon: <FaUserGraduate />, title: "Computer Basics", desc: "Digital literacy and computer appreciation" }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle data-aos="fade-down">
          The Pan-African Tech Company
        </HeroTitle>
        <HeroSubtitle data-aos="fade-up" data-aos-delay="200">
          Not just a tech company—we're a community of innovators, creators, and dreamers 
          transforming Africa through technology education.
        </HeroSubtitle>
        <CTAButton data-aos="zoom-in" data-aos-delay="400">
          Start Learning Today
        </CTAButton>
      </HeroSection>

      <CoursesSection>
        <SectionTitle data-aos="fade-up">Our Courses</SectionTitle>
        <CourseGrid>
          {courses.map((course, index) => (
            <CourseCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {course.icon}
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </CourseCard>
          ))}
        </CourseGrid>
      </CoursesSection>
    </PageContainer>
  );
};

export default Home;