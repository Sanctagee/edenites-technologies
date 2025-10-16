import styled from 'styled-components';
import { FaLaptopCode, FaChartBar, FaShieldAlt, FaPython, FaPalette, FaUserGraduate, FaClock, FaLevelUpAlt, FaUsers } from 'react-icons/fa';

const CoursesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: #001F3F;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  }
`;

const CourseHeader = styled.div`
  background: linear-gradient(135deg, #001F3F 0%, #2ECC40 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const CourseContent = styled.div`
  padding: 2rem;
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.9rem;
  }
`;

const CourseDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CourseFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    padding: 0.5rem 0;
    color: #666;
    
    &:before {
      content: "✓ ";
      color: #2ECC40;
      font-weight: bold;
    }
  }
`;

const CourseButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background: #25a336;
    transform: translateY(-2px);
  }
`;

const Courses = () => {
  const courses = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "150+ enrolled",
      description: "Master full-stack web development with modern technologies including HTML, CSS, JavaScript, React, Node.js, and databases.",
      features: [
        "Frontend Development",
        "Backend Development", 
        "Database Management",
        "Deployment & DevOps",
        "Real-world Projects"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Data Analysis",
      duration: "4 months", 
      level: "Intermediate",
      students: "90+ enrolled",
      description: "Learn data analysis, visualization, and business intelligence tools to transform data into actionable insights.",
      features: [
        "Data Visualization",
        "Statistical Analysis",
        "Python & Pandas",
        "Business Intelligence",
        "Case Studies"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      duration: "5 months",
      level: "Beginner to Intermediate", 
      students: "75+ enrolled",
      description: "Protect digital assets and understand network security fundamentals in this comprehensive cybersecurity course.",
      features: [
        "Network Security",
        "Ethical Hacking",
        "Risk Management",
        "Security Tools",
        "Practical Labs"
      ]
    },
    {
      icon: <FaPython />,
      title: "Python Programming", 
      duration: "3 months",
      level: "Beginner",
      students: "200+ enrolled",
      description: "Start your programming journey with Python - the most versatile and beginner-friendly programming language.",
      features: [
        "Python Fundamentals",
        "Object-Oriented Programming", 
        "Data Structures",
        "Web Development",
        "Automation Scripts"
      ]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      duration: "4 months",
      level: "Beginner to Intermediate",
      students: "85+ enrolled", 
      description: "Design beautiful and user-friendly interfaces while understanding user experience principles.",
      features: [
        "Design Principles",
        "Wireframing & Prototyping",
        "User Research",
        "Design Tools",
        "Portfolio Building"
      ]
    },
    {
      icon: <FaUserGraduate />,
      title: "Computer Basics",
      duration: "2 months", 
      level: "Absolute Beginner",
      students: "300+ enrolled",
      description: "Build digital literacy and computer appreciation skills essential for the modern workplace.",
      features: [
        "Computer Fundamentals",
        "Microsoft Office Suite",
        "Internet & Email",
        "Digital Safety", 
        "Basic Troubleshooting"
      ]
    }
  ];

  return (
    <CoursesContainer>
      <PageHeader>
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
              
              <CourseButton>Enroll Now</CourseButton>
            </CourseContent>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

export default Courses;