import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/layout/navigation';
import Footer from './components/layout/footer';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Courses from './pages/courses';
import Contact from './pages/contact';
import About from './pages/about';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Add padding-top to account for fixed navigation height
const MainContent = styled.main`
  flex: 1;
  padding-top: 120px; /* Adjust based on your nav height */
  
  @media (max-width: 768px) {
    padding-top: 80px; /* Smaller padding for mobile */
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/auth" element={<Auth />} /> */}
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;