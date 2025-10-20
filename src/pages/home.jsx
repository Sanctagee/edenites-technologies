import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { 
  FaLaptopCode, FaChartBar, FaShieldAlt, FaPython, FaPalette, 
  FaUserGraduate, FaArrowRight, FaPlay, FaArrowUp, FaQuoteLeft,
  FaStar, FaGraduationCap, FaUsers, FaHandshake, FaNewspaper,
  FaQuestionCircle, FaChevronLeft, FaChevronRight, FaChevronDown
} from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
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

// Common Section Styles
const Section = styled.section`
  padding: 6rem 1rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
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
`;

// Courses Section
const CoursesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const CourseCard = styled(Card)`
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

// Stats Section
const StatsSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
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
    margin-bottom: 1rem;
  }

  .number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #001F3F;
    display: block;
    line-height: 1;
  }

  .label {
    color: #666;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }
`;

// Testimonials Section
const TestimonialsSection = styled(Section)`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const WhiteSectionTitle = styled(SectionTitle)`
  color: white;
`;

const WhiteSectionSubtitle = styled(SectionSubtitle)`
  color: rgba(255, 255, 255, 0.9);
`;

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const TestimonialsSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.$slideIndex * -100}%);
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const TestimonialCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-left: 4px solid #2ECC40;
  text-align: left;
  position: relative;

  .quote-icon {
    font-size: 2rem;
    color: #2ECC40;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  .testimonial-text {
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .student-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .student-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2ECC40;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .student-details {
    flex: 1;
  }

  .student-name {
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  .student-role {
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .stars {
    color: #2ECC40;
    margin-top: 0.5rem;
  }
`;

const TestimonialNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2ECC40;
    transform: scale(1.1);
  }
`;

// Partners Section
const PartnersSection = styled(Section)`
  background: white;
  overflow: hidden;
`;

const PartnersContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  
  &:hover .partners-track {
    animation-play-state: paused;
  }
`;

const PartnersTrack = styled.div`
  display: flex;
  gap: 4rem;
  animation: ${marquee} 30s linear infinite;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    gap: 2rem;
    animation-duration: 20s;
  }
`;

const PartnerLogo = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 80px;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 60px;
    padding: 0.5rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

// CTA Section
const CTASection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const CTAText = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: #001F3F;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.3rem;
    margin-bottom: 3rem;
    color: #666;
    line-height: 1.6;
  }
`;

const CTAImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 968px) {
    order: -1;
  }
  
  .cta-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px 0 20px 0;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    
    &:hover {
      border-radius: 0 20px 0 20px;
      transform: translateY(-5px);
    }
    
    @media (max-width: 968px) {
      max-width: 300px;
    }
  }
`;

// FAQs Section
const FAQsSection = styled(Section)`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px 0 15px 0;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-radius: 0 15px 0 15px;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2ECC40;
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FAQAnswer = styled.div`
  padding: 0 2rem 2rem 2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-out;
`;

// Scroll to Top Button
const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #2ECC40;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 5px 20px rgba(46, 204, 64, 0.4);
  
  &:hover {
    background: #25a336;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(46, 204, 64, 0.6);
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const testimonialIntervalRef = useRef(null);
  
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

  const testimonials = [
    {
      name: "Prosper Junior",
      role: "Web Developer",
      text: "Edenites Technologies is one of the best IT Company. They are reliable, trusted and dedicated. Give them a try today!",
      avatar: "PJ",
      rating: 5
    },
    {
      name: "Akam Vitalis",
      role: "Digital Marketing Specialist",
      text: "Their mode of operation is superb especially when it comes in teaching and offering digital solutions to their clients. I do recommend them.",
      avatar: "AV",
      rating: 5
    },
    {
      name: "Duru Uchenna",
      role: "Information Systems Student",
      text: "As an information system student with Edenites Technologies, I have learnt a lot and I must recommend them for their awesome services.",
      avatar: "DU",
      rating: 5
    },
    {
      name: "Samson Njoku",
      role: "Web Development Student",
      text: "The company was recommended for me when I wanted to create a website for my business. I gave it a try and their services were great!",
      avatar: "SN",
      rating: 5
    },
    {
      name: "Henry Ifeanyi",
      role: "Software Development Student",
      text: "The one-on-one mentorship and attention to details at Edenites Technologies is exceptional. They truly care about student success.",
      avatar: "HI",
      rating: 5
    },
    {
      name: "Claire Chiamaka",
      role: "Data Analysis Student",
      text: "I'm impressed by the constant support and resourcefulness shown by the company. The learning materials are comprehensive and up-to-date.",
      avatar: "CC",
      rating: 5
    },
    {
      name: "Sochima",
      role: "Nurse & Online Student",
      text: "As a nurse taking free online classes, I appreciate how Edenites makes quality tech education accessible to everyone. Truly transformative!",
      avatar: "SC",
      rating: 5
    }
  ];

  const stats = [
    { icon: <FaGraduationCap />, number: "5,000+", label: "Students Trained" },
    { icon: <FaUsers />, number: "15+", label: "Expert Instructors" },
    { icon: <FaLaptopCode />, number: "6", label: "Courses Offered" },
    { icon: <FaHandshake />, number: "50+", label: "Partner Companies" }
  ];

  const partners = [
    { name: "Partner 1", logo: "/partners/partner1.png" },
    { name: "Partner 2", logo: "/partners/partner2.png" },
    { name: "Partner 3", logo: "/partners/partner3.png" },
    { name: "Partner 4", logo: "/partners/partner4.png" },
    { name: "Partner 5", logo: "/partners/partner5.png" },
    { name: "Partner 6", logo: "/partners/partner6.png" }
  ];

  const faqs = [
    {
      question: "What programming languages do you teach?",
      answer: "We teach a wide range of programming languages including JavaScript, Python, HTML/CSS, React, Node.js, and more. Our curriculum is designed to cover both frontend and backend technologies."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We have a dedicated career services team that helps with resume building, interview preparation, and connecting our graduates with our partner companies for job opportunities."
    },
    {
      question: "Are the courses suitable for complete beginners?",
      answer: "Absolutely! We offer courses for all skill levels, from complete beginners to advanced developers. Our Computer Basics course is specifically designed for those new to technology."
    },
    {
      question: "What is the duration of your courses?",
      answer: "Course durations vary from 4 weeks for basic courses to 6 months for comprehensive programs. We offer flexible schedules including part-time and full-time options."
    },
    {
      question: "Do you offer certificate upon completion?",
      answer: "Yes, all our courses come with a certificate of completion that is recognized by our industry partners. We also provide project portfolios for our students."
    }
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

  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCourses = () => {
    window.location.href = '/courses';
  };

  const handleWatchDemo = () => {
    window.location.href = 'https://youtu.be/HkkS6iVdqSY?si=IxA3RuhFPuQ5UmnV';
  };

  const handleGetStarted = () => {
    window.location.href = '/auth';
  };

  const nextTestimonial = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#2ECC40" : "#ccc"} />
    ));
  };

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
              <PrimaryButton 
                data-aos="zoom-in" 
                data-aos-delay="400"
                onClick={handleViewCourses}
              >
                View Our Courses <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton 
                data-aos="zoom-in" 
                data-aos-delay="600"
                onClick={handleWatchDemo}
              >
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

      {/* Stats Section */}
      <StatsSection>
        <SectionTitle data-aos="fade-up">Our Impact</SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Join thousands of students who have transformed their careers through our programs
        </SectionSubtitle>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {stat.icon}
              <span className="number">{stat.number}</span>
              <div className="label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* Courses Section */}
      <CoursesSection>
        <SectionTitle data-aos="fade-up">Our Courses</SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Transform your career with our industry-relevant courses designed for the modern workforce.
        </SectionSubtitle>
        <Grid>
          {courses.map((course, index) => (
            <CourseCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {course.icon}
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </CourseCard>
          ))}
        </Grid>
      </CoursesSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <WhiteSectionTitle data-aos="fade-up">What Our Students Say</WhiteSectionTitle>
        <WhiteSectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Don't just take our word for it - hear from our successful students and clients
        </WhiteSectionSubtitle>
        <TestimonialsContainer data-aos="fade-up">
          <TestimonialsSlider $slideIndex={testimonialSlide}>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide key={index}>
                <TestimonialCard>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="student-info">
                    <div className="student-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="student-details">
                      <div className="student-name">{testimonial.name}</div>
                      <div className="student-role">{testimonial.role}</div>
                    </div>
                  </div>
                </TestimonialCard>
              </TestimonialSlide>
            ))}
          </TestimonialsSlider>
          <TestimonialNav>
            <NavButton onClick={prevTestimonial}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={nextTestimonial}>
              <FaChevronRight />
            </NavButton>
          </TestimonialNav>
        </TestimonialsContainer>
      </TestimonialsSection>

      {/* Partners Section */}
      <PartnersSection>
        <SectionTitle data-aos="fade-up">Our Partners & Associates</SectionTitle>
        <SectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Collaborating with leading organizations to deliver exceptional technology education
        </SectionSubtitle>
        <PartnersContainer data-aos="fade-up">
          <PartnersTrack className="partners-track">
            {partners.map((partner, index) => (
              <PartnerLogo key={index}>
                {/* Replace with actual partner logos */}
                <div className="partner-placeholder" style={{ 
                  color: '#001F3F', 
                  fontWeight: '700', 
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  {partner.name}
                </div>
              </PartnerLogo>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerLogo key={`duplicate-${index}`}>
                <div className="partner-placeholder" style={{ 
                  color: '#001F3F', 
                  fontWeight: '700', 
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  {partner.name}
                </div>
              </PartnerLogo>
            ))}
          </PartnersTrack>
        </PartnersContainer>
      </PartnersSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent data-aos="fade-up">
          <CTAText>
            <h2>Ready to Start Your Tech Journey?</h2>
            <p>
              Join thousands of students who have transformed their careers with our 
              industry-leading technology courses. Start your journey today and become 
              part of Africa's digital revolution. Our expert instructors and comprehensive 
              curriculum will guide you every step of the way.
            </p>
            <PrimaryButton onClick={handleGetStarted}>
              Get Started Today <FaArrowRight />
            </PrimaryButton>
          </CTAText>
          <CTAImage>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Smiling student"
              className="cta-image"
            />
          </CTAImage>
        </CTAContent>
      </CTASection>

      {/* FAQs Section */}
      <FAQsSection>
        <WhiteSectionTitle data-aos="fade-up">Frequently Asked Questions</WhiteSectionTitle>
        <WhiteSectionSubtitle data-aos="fade-up" data-aos-delay="200">
          Find answers to common questions about our programs and services
        </WhiteSectionSubtitle>
        <FAQContainer data-aos="fade-up">
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion 
                $isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FaChevronDown />
              </FAQQuestion>
              <FAQAnswer $isOpen={openFAQ === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQsSection>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <ScrollToTop onClick={scrollToTop} data-aos="fade-up">
          <FaArrowUp />
        </ScrollToTop>
      )}
    </PageContainer>
  );
};

export default Home;