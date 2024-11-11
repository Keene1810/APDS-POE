import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Payment from './components/Payment';
import EmployeeLogin from './components/EmployeeLogin';  // Import employee login component
import EmployeeDashboard from './components/EmployeeDashboard';  // Import employee dashboard component

function App() {
  const styles = {
    container: {
      maxWidth: '100%',
      height: '100vh',
      margin: '0 auto',
      padding: '30px',
      textAlign: 'center',
      backgroundColor: '#C4DAD2',
      color: '#508D4E',
    },
    heading: {
      color: '#508D4E',
      marginBottom: '20px',
      fontSize: '32px',
    },
    paragraph: {
      fontSize: '20px',
      color: '#444',
      marginBottom: '30px',
    },
    link: {
      color: '#508D4E',
      textDecoration: 'none',
      margin: '0 10px',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to the Customer Portal</h1>
        <p style={styles.paragraph}>
          Please navigate to 
          <Link to="/register" style={styles.link}> Register</Link> 
          or 
          <Link to="/login" style={styles.link}> Login</Link>.
          or
          <Link to="/employee-login" style={styles.link}> Employee Login</Link>
        </p>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/employee-login" element={<EmployeeLogin />} /> {/* Employee login route */}
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} /> {/* Employee dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
