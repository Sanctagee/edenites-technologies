import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaLaptopCode, FaChartBar, FaShieldAlt, FaPython, FaPalette, FaUserGraduate, FaClock, FaLevelUpAlt, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CoursesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  padding-top: 6rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    color: #001F3F;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  
  p {
    color: #666;
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 20px 0 20px 0;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-12px);
    border-radius: 0 20px 0 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }
`;

const CourseHeader = styled.div`
  background: linear-gradient(135deg, #001F3F 0%, #2ECC40 100%);
  color: white;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  
  svg {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const CourseContent = styled.div`
  padding: 2.5rem 2rem;
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: #666;
    font-size: 0.95rem;
    font-weight: 600;
    
    svg {
      color: #2ECC40;
    }
  }
`;

const CourseDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

const CourseFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  
  li {
    padding: 0.8rem 0;
    color: #666;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 500;
    
    &:before {
      content: "✓";
      color: #2ECC40;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;

const CourseButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px 0 8px 0;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  
  &:hover {
    background: #25a336;
    border-radius: 0 8px 0 8px;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(46, 204, 64, 0.3);
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  
  .stars {
    color: #FFD700;
    display: flex;
    gap: 0.2rem;
  }
  
  .rating-text {
    color: #666;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const Courses = () => {
  const [loading, setLoading] = useState(true);

  const courses = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "150+ enrolled",
      rating: 4.9,
      description: "Master full-stack web development with modern technologies including HTML, CSS, JavaScript, React, Node.js, and databases. Build real-world projects and deploy them to production.",
      features: [
        "Frontend Development with React",
        "Backend Development with Node.js", 
        "Database Management (MongoDB & SQL)",
        "Deployment & DevOps",
        "Real-world Projects & Portfolio"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Data Analysis",
      duration: "4 months", 
      level: "Intermediate",
      students: "90+ enrolled",
      rating: 4.8,
      description: "Learn data analysis, visualization, and business intelligence tools to transform data into actionable insights. Work with real datasets and industry tools.",
      features: [
        "Data Visualization with Tableau",
        "Statistical Analysis with Python",
        "Python & Pandas Mastery",
        "Business Intelligence",
        "Real-world Case Studies"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      duration: "5 months",
      level: "Beginner to Intermediate", 
      students: "75+ enrolled",
      rating: 4.7,
      description: "Protect digital assets and understand network security fundamentals in this comprehensive cybersecurity course. Learn ethical hacking and defense strategies.",
      features: [
        "Network Security Fundamentals",
        "Ethical Hacking Techniques",
        "Risk Management & Assessment",
        "Security Tools & Technologies",
        "Practical Labs & Simulations"
      ]
    },
    {
      icon: <FaPython />,
      title: "Python Programming", 
      duration: "3 months",
      level: "Beginner",
      students: "200+ enrolled",
      rating: 4.9,
      description: "Start your programming journey with Python - the most versatile and beginner-friendly programming language. Build automation scripts and web applications.",
      features: [
        "Python Fundamentals & Syntax",
        "Object-Oriented Programming", 
        "Data Structures & Algorithms",
        "Web Development with Django",
        "Automation Scripts & Projects"
      ]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      duration: "4 months",
      level: "Beginner to Intermediate",
      students: "85+ enrolled", 
      rating: 4.8,
      description: "Design beautiful and user-friendly interfaces while understanding user experience principles. Create professional design portfolios.",
      features: [
        "Design Principles & Psychology",
        "Wireframing & Prototyping",
        "User Research & Testing",
        "Industry Design Tools",
        "Portfolio Building & Presentation"
      ]
    },
    {
      icon: <FaUserGraduate />,
      title: "Computer Basics",
      duration: "2 months", 
      level: "Absolute Beginner",
      students: "300+ enrolled",
      rating: 4.6,
      description: "Build digital literacy and computer appreciation skills essential for the modern workplace. Perfect for career starters and digital beginners.",
      features: [
        "Computer Fundamentals & Hardware",
        "Microsoft Office Suite Mastery",
        "Internet & Email Proficiency",
        "Digital Safety & Security", 
        "Basic Troubleshooting Skills"
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <CoursesContainer>
        <PageHeader>
          <Skeleton height={60} width="40%" style={{ margin: '0 auto 1.5rem' }} />
          <Skeleton height={24} count={3} style={{ margin: '0 auto', maxWidth: '700px' }} />
        </PageHeader>
        <CourseGrid>
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <Skeleton height={200} style={{ borderRadius: '20px 0 20px 0', marginBottom: '1rem' }} />
              <Skeleton height={300} style={{ borderRadius: '0 0 20px 0' }} />
            </div>
          ))}
        </CourseGrid>
      </CoursesContainer>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < Math.floor(rating) ? '#FFD700' : '#ddd'} />
    ));
  };

  return (
    <CoursesContainer>
      <PageHeader data-aos="fade-up">
        <h1>Our Courses</h1>
        <p>
          Transform your career with our hands-on, industry-relevant courses. 
          Learn from experienced instructors and join a community of tech enthusiasts.
        </p>
      </PageHeader>

      <CourseGrid>
        {courses.map((course, index) => (
          <CourseCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <CourseHeader>
              {course.icon}
              <h3>{course.title}</h3>
              <Rating>
                <div className="stars">
                  {renderStars(course.rating)}
                </div>
                <span className="rating-text">{course.rating} ({course.students.split('+')[0]}+)</span>
              </Rating>
            </CourseHeader>
            
            <CourseContent>
              <CourseInfo>
                <div>
                  <FaClock />
                  <span>{course.duration}</span>
                </div>
                <div>
                  <FaLevelUpAlt />
                  <span>{course.level}</span>
                </div>
                <div>
                  <FaUsers />
                  <span>{course.students}</span>
                </div>
              </CourseInfo>
              
              <CourseDescription>{course.description}</CourseDescription>
              
              <CourseFeatures>
                {course.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </CourseFeatures>
              
              <CourseButton>
                Enroll Now <FaArrowRight />
              </CourseButton>
            </CourseContent>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

export default Courses;