import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaLaptopCode, FaChartBar, FaShieldAlt, FaPython, FaPalette, FaUserGraduate, FaArrowRight, FaPlay } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 31, 63, 0.85) 0%,
      rgba(0, 31, 63, 0.7) 50%,
      rgba(46, 204, 64, 0.3) 100%
    );
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
`;

const TextContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px 0 20px 0;
  padding: 4rem 3rem;
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    margin: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 968px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1.3rem 2.8rem;
  font-size: 1.2rem;
  border-radius: 12px 0 12px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: #25a336;
    transform: translateY(-3px);
    border-radius: 0 12px 0 12px;
    box-shadow: 0 15px 30px rgba(46, 204, 64, 0.4);
  }
  
  @media (max-width: 480px) {
    padding: 1.1rem 2rem;
    font-size: 1.1rem;
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid #2ECC40;
  color: #2ECC40;
  
  &:hover {
    background: #2ECC40;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(46, 204, 64, 0.4);
  }
`;

const SlideDots = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 3;
`;

const Dot = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? '#2ECC40' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2ECC40;
    transform: scale(1.3);
  }
`;

const CoursesSection = styled.section`
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #001F3F;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CourseCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 15px 0 15px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-left: 4px solid #2ECC40;
  transition: all 0.3s ease;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-10px);
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
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Students learning technology"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Coding and programming"
    },
    {
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "African tech innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Collaborative learning"
    }
  ];

  const courses = [
    { icon: <FaLaptopCode />, title: "Web Development", desc: "Full-stack development with modern technologies" },
    { icon: <FaChartBar />, title: "Data Analysis", desc: "Data visualization, analysis, and business intelligence" },
    { icon: <FaShieldAlt />, title: "Cyber Security", desc: "Network protection and security fundamentals" },
    { icon: <FaPython />, title: "Python Programming", desc: "Python fundamentals and advanced programming" },
    { icon: <FaPalette />, title: "UI/UX Design", desc: "User experience and interface design principles" },
    { icon: <FaUserGraduate />, title: "Computer Basics", desc: "Digital literacy and computer appreciation" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (loading) {
    return (
      <PageContainer>
        <HeroSection>
          <Skeleton height="100vh" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
          <HeroContent>
            <Skeleton height={80} width="70%" style={{ margin: '0 auto 2rem' }} />
            <Skeleton height={24} count={3} style={{ margin: '0 auto 3rem', maxWidth: '800px' }} />
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Skeleton height={56} width={200} />
              <Skeleton height={56} width={200} />
            </div>
          </HeroContent>
        </HeroSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroBackground>
          {slides.map((slide, index) => (
            <SlideImage
              key={index}
              $src={slide.image}
              $active={index === currentSlide}
            />
          ))}
        </HeroBackground>

        <HeroContent>
          <TextContainer data-aos="fade-up" data-aos-delay="200">
            <HeroTitle>
              Welcome To Edenites Technologies
            </HeroTitle>
            <HeroSubtitle>
              Where we Empower Your Digital Journey with Innovative Tech Solutions! 
              Join our community of innovators, creators, and dreamers transforming 
              Africa through technology education.
            </HeroSubtitle>
            <CTAContainer>
              <PrimaryButton data-aos="zoom-in" data-aos-delay="400">
                View Our Courses <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton data-aos="zoom-in" data-aos-delay="600">
                Watch Demo <FaPlay />
              </SecondaryButton>
            </CTAContainer>
          </TextContainer>
        </HeroContent>

        <SlideDots>
          {slides.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideDots>
      </HeroSection>

      <CoursesSection>
        <SectionTitle data-aos="fade-up">Our Courses</SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Transform your career with our industry-relevant courses designed for the modern workforce.
        </SectionSubtitle>
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