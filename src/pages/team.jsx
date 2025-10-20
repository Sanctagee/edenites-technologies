import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaChevronLeft, FaChevronRight, FaPython, FaJs, FaDatabase, FaChartBar, FaCode, FaNetworkWired, FaLaptop, FaUsers } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 80vh;
  padding-top: 6rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    padding-top: 5rem;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  padding: 3rem 1rem;
  border-radius: 20px 0 20px 0;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    margin-bottom: 2rem;
    border-radius: 15px 0 15px 0;
  }

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
`;

const HeroSlideshow = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1s ease-in-out;
  border-radius: 15px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 31, 63, 0.7) 0%, rgba(0, 51, 102, 0.5) 100%);
    border-radius: 15px;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  z-index: 2;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const SlideNav = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 3;

  @media (max-width: 480px) {
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(46, 204, 64, 0.8);
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const SlideDots = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? '#2ECC40' : 'rgba(255,255,255,0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2ECC40;
    transform: scale(1.2);
  }
`;

const SectionTitle = styled.h2`
  color: #001F3F;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 15px 0 15px 0;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    border-radius: 0 15px 0 15px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    
    .team-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .team-overlay {
      opacity: ${props => props.$active ? 1 : 0};
      transform: ${props => props.$active ? 'translateY(0)' : 'translateY(100%)'};
    }
  }
`;

const TeamImage = styled.div`
  height: 220px;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const TeamInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: #001F3F;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .position {
    color: #2ECC40;
    font-weight: 600;
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }
  
  .bio {
    color: #666;
    line-height: 1.5;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .skill {
    background: #f8f9fa;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    color: #001F3F;
    border: 1px solid #e9ecef;
  }
`;

const TeamOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 31, 63, 0.95) 0%, rgba(46, 204, 64, 0.85) 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  text-align: center;
  
  h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    line-height: 1.5;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    
    h4 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: white;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #001F3F;
      transform: translateY(-2px);
    }
  }
`;

const CTAButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:hover {
    background: #25a336;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(46, 204, 64, 0.3);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const SkillIcon = styled.span`
  margin-right: 0.3rem;
  font-size: 0.9rem;
`;

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Meet Our Team",
      subtitle: "Passionate educators, innovative developers, and dedicated professionals working together to transform technology education in Africa."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Expert Leadership",
      subtitle: "Led by industry professionals with years of combined experience in technology and education across Africa."
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Diverse Expertise",
      subtitle: "Our team brings together diverse skills in development, data analysis, networking, and digital marketing."
    }
  ];

  const teamMembers = [
    {
      name: "Blaise Onyibe",
      position: "CEO & Founder",
      bio: "Data Analysis expert and technology education advocate with extensive experience in digital transformation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Leading our vision for technology education in Africa. Specializes in data-driven decision making and strategic planning for educational technology initiatives.",
      skills: ["Data Analysis", "Leadership", "Strategy"],
      icons: [<FaChartBar key="chart" />]
    },
    {
      name: "Chijindu Njoku",
      position: "General Manager",
      bio: "Networking Engineer with expertise in IT infrastructure and educational technology systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Manages our technical operations and infrastructure. Ensures smooth delivery of all our educational programs and technical services.",
      skills: ["Networking", "IT Management", "Systems"],
      icons: [<FaNetworkWired key="network" />]
    },
    {
      name: "Gabriel Chikwendu",
      position: "Lead Instructor & Frontend Developer",
      bio: "Tech Instructor specializing in Frontend Development and Data Analysis training.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Passionate educator with expertise in React, JavaScript, and data visualization. Dedicated to making complex concepts accessible to all learners.",
      skills: ["React", "JavaScript", "Data Analysis", "Teaching"],
      icons: [<FaCode key="code" />, <FaChartBar key="chart" />]
    },
    {
      name: "Victory Eze",
      position: "Data Analyst & Instructor",
      bio: "Data Analysis specialist who teaches and mentors students in data science and analytics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Expert in data analysis tools and techniques. Mentors students through practical data projects and real-world case studies.",
      skills: ["Python", "Data Visualization", "Mentoring"],
      icons: [<FaPython key="python" />, <FaChartBar key="chart" />]
    },
    {
      name: "Emmanuel Chibuzor",
      position: "Full Stack Developer",
      bio: "Full Stack Developer proficient in Python, JavaScript, and Database Management.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Builds robust web applications and manages database systems. Expertise in creating scalable solutions for educational platforms.",
      skills: ["Python", "JavaScript", "Database", "Full Stack"],
      icons: [<FaPython key="python" />, <FaJs key="js" />, <FaDatabase key="db" />]
    },
    {
      name: "Bene Yougee",
      position: "Social Media Manager",
      bio: "Manages our digital presence and community engagement across all platforms.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Grows our online community and creates engaging content that connects with students and technology enthusiasts across Africa.",
      skills: ["Social Media", "Community", "Content Creation"],
      icons: [<FaUsers key="users" />]
    },
    {
      name: "Jude Orji",
      position: "Logistics Manager & Computer Instructor",
      bio: "Manages operations and teaches Basic Computer Knowledge to beginners.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      overlay: "Ensures smooth operations and introduces students to fundamental computer skills. Passionate about digital literacy for all.",
      skills: ["Logistics", "Computer Basics", "Mentoring"],
      icons: [<FaLaptop key="laptop" />]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleCardClick = (index) => {
    if (window.innerWidth <= 768) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const handleViewPositions = () => {
    // Navigate to careers page - you'll need to create this page
    navigate('/about/careers');
    // Alternatively, you can link to an external careers page:
    // window.open('https://edenites-technologies.com/careers', '_blank');
  };

  if (loading) {
    return (
      <TeamContainer>
        <Skeleton height={400} style={{ marginBottom: '4rem', borderRadius: '20px 0 20px 0' }} />
        <SectionTitle>
          <Skeleton width={300} style={{ margin: '0 auto 1rem' }} />
        </SectionTitle>
        <SectionSubtitle>
          <Skeleton width={500} height={20} style={{ margin: '0 auto 4rem' }} />
        </SectionSubtitle>
        <TeamGrid>
          {[...Array(7)].map((_, i) => (
            <div key={i}>
              <Skeleton height={200} style={{ borderRadius: '15px 0 0 0' }} />
              <div style={{ padding: '1.5rem' }}>
                <Skeleton height={24} width="80%" style={{ marginBottom: '0.5rem' }} />
                <Skeleton height={20} width="60%" style={{ marginBottom: '0.8rem' }} />
                <Skeleton height={16} count={2} />
              </div>
            </div>
          ))}
        </TeamGrid>
      </TeamContainer>
    );
  }

  return (
    <TeamContainer>
      <HeroSection data-aos="fade-up">
        <HeroSlideshow>
          {heroSlides.map((slide, index) => (
            <Slide 
              key={index} 
              $image={slide.image} 
              $active={index === currentSlide}
            />
          ))}
          <SlideContent>
            <h1>{heroSlides[currentSlide].title}</h1>
            <p>{heroSlides[currentSlide].subtitle}</p>
          </SlideContent>
          <SlideNav>
            <NavButton onClick={prevSlide}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={nextSlide}>
              <FaChevronRight />
            </NavButton>
          </SlideNav>
        </HeroSlideshow>
        <SlideDots>
          {heroSlides.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideDots>
      </HeroSection>

      <SectionTitle data-aos="fade-up">Our Team</SectionTitle>
      <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
        Meet the passionate individuals driving innovation and transforming technology education across Africa. 
        Each member brings unique expertise to create comprehensive learning experiences.
      </SectionSubtitle>

      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={(index % 3) * 100}
            $active={activeCard === index}
            onClick={() => handleCardClick(index)}
          >
            <TeamImage $image={member.image} />
            <TeamInfo>
              <h3>{member.name}</h3>
              <div className="position">{member.position}</div>
              <p className="bio">{member.bio}</p>
              <div className="skills">
                {member.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill">
                    {member.icons[skillIndex] && <SkillIcon>{member.icons[skillIndex]}</SkillIcon>}
                    {skill}
                  </span>
                ))}
              </div>
            </TeamInfo>
            <TeamOverlay className="team-overlay">
              <h4>{member.name}</h4>
              <p>{member.overlay}</p>
              <SocialLinks>
                <a href="#" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Email">
                  <FaEnvelope />
                </a>
              </SocialLinks>
            </TeamOverlay>
          </TeamCard>
        ))}
      </TeamGrid>

      <div style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
        padding: '3rem 2rem', 
        borderRadius: '20px 0 20px 0', 
        textAlign: 'center' 
      }} data-aos="fade-up">
        <SectionTitle>Join Our Mission</SectionTitle>
        <SectionSubtitle>
          We're always looking for passionate individuals to join our mission of 
          transforming technology education in Africa. Bring your skills and help us 
          create lasting impact across the continent.
        </SectionSubtitle>
        <CTAButton onClick={handleViewPositions}>
          View Open Positions
        </CTAButton>
      </div>
    </TeamContainer>
  );
};

export default Team;