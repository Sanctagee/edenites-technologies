import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaEnvelope, FaCheck } from 'react-icons/fa';
import LoadingSpinner from '../components/UI/loadingSpinner';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 450px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #001F3F;
  }
`;

const Title = styled.h2`
  color: #001F3F;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const EmailHighlight = styled.span`
  color: #2ECC40;
  font-weight: 600;
`;

const CodeInputsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CodeInput = styled.input`
  width: 45px;
  height: 55px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #2ECC40;
    box-shadow: 0 0 0 3px rgba(46, 204, 64, 0.1);
    outline: none;
  }
  
  &::placeholder {
    color: #ccc;
  }
`;

const VerifyButton = styled.button`
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
  width: 100%;
  
  &:hover:not(:disabled) {
    background: #25a336;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(46, 204, 64, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ResendLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
  
  button {
    background: none;
    border: none;
    color: #2ECC40;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
      color: #25a336;
    }
    
    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const VerificationModal = ({ 
  isOpen, 
  onClose, 
  userEmail, 
  onVerificationSuccess 
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Focus first input when modal opens
      setCode(['', '', '', '', '', '']);
      setIsVerified(false);
      inputRefs.current[0]?.focus();
    }
  }, [isOpen]);

  const handleCodeChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Only allow numbers
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // Move to previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');
    if (verificationCode.length !== 6) {
      alert('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to verify code
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, assume success
      setIsVerified(true);
      setTimeout(() => {
        onVerificationSuccess();
        onClose();
      }, 2000);
      
    } catch (error) {
      alert('Verification failed. Please check the code and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // Simulate API call to resend code
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Verification code sent!');
    } catch (error) {
      alert('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>

        {isVerified ? (
          <SuccessMessage>
            <FaCheck />
            Email verified successfully! Redirecting...
          </SuccessMessage>
        ) : null}

        <Title>Verify Your Email</Title>
        <Description>
          We've sent a 6-digit verification code to{' '}
          <EmailHighlight>{userEmail}</EmailHighlight>
        </Description>

        <CodeInputsContainer>
          {code.map((digit, index) => (
            <CodeInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleCodeChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="0"
              disabled={isLoading || isVerified}
            />
          ))}
        </CodeInputsContainer>

        <VerifyButton 
          onClick={handleVerify}
          disabled={isLoading || isVerified || code.join('').length !== 6}
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              Verifying...
            </>
          ) : isVerified ? (
            <>
              <FaCheck />
              Verified!
            </>
          ) : (
            <>
              <FaEnvelope />
              Verify Email
            </>
          )}
        </VerifyButton>

        <ResendLink>
          Didn't receive the code?{' '}
          <button 
            onClick={handleResendCode}
            disabled={isResending || isVerified}
          >
            {isResending ? 'Sending...' : 'Resend Code'}
          </button>
        </ResendLink>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VerificationModal;