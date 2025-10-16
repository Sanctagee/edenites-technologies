import styled from 'styled-components';
import { FaUsers, FaBook, FaChartLine, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const DashboardHeader = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #2ECC40;

  h1 {
    color: #001F3F;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    
    h1 {
      font-size: 1.3rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #2ECC40;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 1.5rem;
    color: #2ECC40;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.5rem;
    
    svg {
      font-size: 1.3rem;
    }
  }
`;

const StatContent = styled.div`
  h3 {
    color: #001F3F;
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  p {
    font-size: 1.5rem;
    color: #2ECC40;
    margin: 0;
    font-weight: bold;
  }
  
  @media (max-width: 480px) {
    h3 {
      font-size: 0.7rem;
    }
    
    p {
      font-size: 1.3rem;
    }
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QuickActions = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: #001F3F;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
`;

const ActionButton = styled.button`
  background-color: ${props => props.primary ? '#2ECC40' : '#001F3F'};
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 0.9rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

const RecentActivity = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: #001F3F;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: #2ECC40;
    font-size: 1rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  div {
    p {
      margin: 0 0 0.2rem 0;
      font-weight: bold;
      font-size: 0.9rem;
    }
    
    small {
      color: #666;
      font-size: 0.8rem;
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProgressSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: #001F3F;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProgressBar = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 8px;
  margin: 0.8rem 0;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background: #2ECC40;
  height: 100%;
  width: ${props => props.percentage}%;
  border-radius: 10px;
`;

const Dashboard = () => {
  const activities = [
    { icon: <FaCheckCircle />, text: "Completed Web Development Module 3", time: "2 hours ago" },
    { icon: <FaBook />, text: "Started Data Analysis Course", time: "1 day ago" },
    { icon: <FaExclamationTriangle />, text: "Assignment due in 2 days", time: "2 days ago" },
    { icon: <FaClock />, text: "Spent 5 hours learning this week", time: "3 days ago" }
  ];

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Student Dashboard</h1>
        <p>Welcome back! Here's your learning overview and progress.</p>
      </DashboardHeader>

      <StatsGrid>
        <StatCard>
          <FaBook />
          <StatContent>
            <h3>Active Courses</h3>
            <p>3</p>
          </StatContent>
        </StatCard>
        <StatCard>
          <FaChartLine />
          <StatContent>
            <h3>Overall Progress</h3>
            <p>65%</p>
          </StatContent>
        </StatCard>
        <StatCard>
          <FaUsers />
          <StatContent>
            <h3>Assignments</h3>
            <p>2</p>
          </StatContent>
        </StatCard>
        <StatCard>
          <FaClock />
          <StatContent>
            <h3>Study Hours</h3>
            <p>24</p>
          </StatContent>
        </StatCard>
      </StatsGrid>

      <DashboardGrid>
        <MainSection>
          <QuickActions>
            <h3>Quick Actions</h3>
            <ActionButtons>
              <ActionButton primary>Continue Learning</ActionButton>
              <ActionButton>View Assignments</ActionButton>
              <ActionButton>Course Materials</ActionButton>
              <ActionButton>Progress Report</ActionButton>
            </ActionButtons>
          </QuickActions>

          <RecentActivity>
            <h3>Recent Activity</h3>
            {activities.map((activity, index) => (
              <ActivityItem key={index}>
                {activity.icon}
                <div>
                  <p>{activity.text}</p>
                  <small>{activity.time}</small>
                </div>
              </ActivityItem>
            ))}
          </RecentActivity>
        </MainSection>

        <Sidebar>
          <ProgressSection>
            <h3>Course Progress</h3>
            <div>
              <p style={{margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem'}}>Web Development</p>
              <ProgressBar>
                <ProgressFill percentage={75} />
              </ProgressBar>
              <small style={{fontSize: '0.8rem'}}>75% completed</small>
            </div>
            <div style={{marginTop: '1rem'}}>
              <p style={{margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem'}}>Data Analysis</p>
              <ProgressBar>
                <ProgressFill percentage={45} />
              </ProgressBar>
              <small style={{fontSize: '0.8rem'}}>45% completed</small>
            </div>
            <div style={{marginTop: '1rem'}}>
              <p style={{margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem'}}>UI/UX Design</p>
              <ProgressBar>
                <ProgressFill percentage={20} />
              </ProgressBar>
              <small style={{fontSize: '0.8rem'}}>20% completed</small>
            </div>
          </ProgressSection>
        </Sidebar>
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default Dashboard;