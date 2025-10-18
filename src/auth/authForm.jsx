import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaCheck, FaArrowRight } from 'react-icons/fa';
import LoadingSpinner from '../components/UI/loadingSpinner';
import VerificationModal from './verificationModal';


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 31, 63, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const LeftSection = styled.div`
  background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 200px; 
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  padding: 3rem;
  opacity: ${props => props.$active ? 1 : 0};
  transform: translateX(${props => props.$active ? '0' : '100%'});
  transition: all 0.5s ease-in-out;
  
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    
    @media (max-width: 968px) {
      font-size: 1.8rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

const SlideDotsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const SlideDots = styled.div`
  display: flex;
  gap: 0.8rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
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
    background: ${props => props.$active ? '#2ECC40' : 'rgba(255,255,255,0.7)'};
    transform: scale(1.2);
  }
`;

const RightSection = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 500px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.$active ? '#001F3F' : '#666'};
  border-bottom: 3px solid ${props => props.$active ? '#2ECC40' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #001F3F;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: ${props => props.$loading ? 0.6 : 1};
  pointer-events: ${props => props.$loading ? 'none' : 'all'};
  transition: opacity 0.3s ease;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #001F3F;
  font-size: 0.9rem;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #2ECC40;
    box-shadow: 0 0 0 3px rgba(46, 204, 64, 0.1);
  }
  
  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 1rem;
    padding: 0 0.5rem;
    
    &::placeholder {
      color: #999;
    }
  }
  
  svg {
    color: #666;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  
  input {
    accent-color: #2ECC40;
  }
`;

const PasswordRequirements = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #2ECC40;
  
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: #001F3F;
  }
  
  ul {
    margin: 0;
    padding-left: 1.2rem;
    font-size: 0.8rem;
    color: #666;
  }
  
  li {
    margin-bottom: 0.2rem;
  }
`;

const SubmitButton = styled.button`
  background: #2ECC40;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    background: #25a336;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(46, 204, 64, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const AuthLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
  
  a {
    color: #2ECC40;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-radius: 20px;
`;

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false); 
  const [registeredEmail, setRegisteredEmail] = useState(''); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });

  const slides = [
    {
      title: "Learn Without Limits",
      content: "Start, switch, or advance your career with our expert-led courses. Join thousands of students transforming their lives through technology education."
    },
    {
      title: "Expert-Led Courses",
      content: "Learn from industry professionals with real-world experience. Our curriculum is designed to get you job-ready in months, not years."
    },
    {
      title: "Join Our Community",
      content: "Connect with like-minded learners, get mentorship from experts, and build projects that showcase your skills to employers."
    },
    {
      title: "Career Transformation",
      content: "85% of our graduates land tech jobs within 6 months. Let us help you start your journey to a rewarding career in technology."
    }
  ];

  const passwordRequirements = [
    "At least 8 characters",
    "Has a special character",
    "Contains a number", 
    "Contains uppercase letter"
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleTabSwitch = (tab) => {
    if (tab === activeTab) return;
    
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ADD THIS MISSING FUNCTION
  const handleVerificationSuccess = () => {
    console.log('User verified successfully!');
    alert('Account created successfully! You can now login.');
    setActiveTab('login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (activeTab === 'signup') {
        console.log('Signup data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // ADD THIS: Show verification modal after successful signup
        setRegisteredEmail(formData.email);
        setShowVerification(true);
        
      } else {
        console.log('Login data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
        // For login, you would redirect to dashboard
        // navigate('/dashboard');
      }
      
    } catch (error) {
      console.error('Auth error:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  
  };

  return (
    <AuthContainer>
      <AuthCard>
        <LeftSection>
          {slides.map((slide, index) => (
            <SlideContent key={index} $active={index === currentSlide}>
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
              </div>
            </SlideContent>
          ))}
          
          <SlideDotsContainer>
            <SlideDots>
              {slides.map((_, index) => (
                <Dot
                  key={index}
                  $active={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </SlideDots>
          </SlideDotsContainer>
        </LeftSection>

        <RightSection>
          {isLoading && (
            <LoadingOverlay>
              <LoadingSpinner />
            </LoadingOverlay>
          )}
          
          <TabContainer>
            <Tab 
              $active={activeTab === 'login'} 
              onClick={() => handleTabSwitch('login')}
              disabled={isLoading}
            >
              Login
            </Tab>
            <Tab 
              $active={activeTab === 'signup'} 
              onClick={() => handleTabSwitch('signup')}
              disabled={isLoading}
            >
              Sign Up
            </Tab>
          </TabContainer>

          {activeTab === 'login' ? (
            <Form onSubmit={handleSubmit} $loading={isLoading}>
              <h3 style={{ color: '#001F3F', marginBottom: '2rem' }}>
                Welcome back! Please enter your details
              </h3>
              
              <InputGroup>
                <Label>Email</Label>
                <Input>
                  <FaEnvelope />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <Input>
                  <FaLock />
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <CheckboxGroup>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </CheckboxGroup>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'} 
                {!isLoading && <FaArrowRight />}
              </SubmitButton>

              <AuthLink>
                New to Edenites Technologies?{' '}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabSwitch('signup');
                  }}
                >
                  Sign Up
                </a>
              </AuthLink>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit} $loading={isLoading}>
              <h3 style={{ color: '#001F3F', marginBottom: '2rem' }}>
                Start your learning journey with us today
              </h3>
              
              <InputGroup>
                <Label>Full Name</Label>
                <Input>
                  <FaUser />
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Your full name" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <InputGroup>
                <Label>Email</Label>
                <Input>
                  <FaEnvelope />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <Input>
                  <FaLock />
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Create password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <InputGroup>
                <Label>Confirm Password</Label>
                <Input>
                  <FaLock />
                  <input 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm password" 
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </Input>
              </InputGroup>

              <PasswordRequirements>
                <h4>Password Requirements:</h4>
                <ul>
                  {passwordRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </PasswordRequirements>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Create Account'}
                {!isLoading && <FaCheck />}
              </SubmitButton>

              <AuthLink>
                Already have an account?{' '}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabSwitch('login');
                  }}
                >
                  Login
                </a>
              </AuthLink>
            </Form>
          )}
        </RightSection>
      </AuthCard>

       {/* Add the Verification Modal here */}
      <VerificationModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        userEmail={registeredEmail}
        onVerificationSuccess={handleVerificationSuccess}
      />
    </AuthContainer>
  );
};

export default AuthForm;