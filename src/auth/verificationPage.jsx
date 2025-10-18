// VerificationModal.jsx or VerificationPage.jsx
const VerificationModal = ({ email, isOpen, onClose, onVerificationComplete }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleVerify = async () => {
    setIsLoading(true);
    // Send verification code to backend
    // On success: onVerificationComplete()
    // On failure: show error
    setIsLoading(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div style={{ /* modal styles */ }}>
      <h3>Verify Your Email</h3>
      <p>We sent a 6-digit code to {email}</p>
      
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => {
              const newCode = [...code];
              newCode[index] = e.target.value;
              setCode(newCode);
            }}
            style={{ width: '40px', textAlign: 'center' }}
          />
        ))}
      </div>
      
      <button onClick={handleVerify} disabled={isLoading}>
        {isLoading ? 'Verifying...' : 'Verify Email'}
      </button>
      
      <button onClick={onClose}>Close</button>
    </div>
  );
};