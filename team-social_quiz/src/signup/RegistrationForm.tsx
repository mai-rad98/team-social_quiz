import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

interface FormData {
  username: string;
  fullName: string;
  password: string;
}

const initialFormData: FormData = {
  username: '',
  fullName: '',
  password: ''
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isRegistering, setIsRegistering] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const storedData: FormData = JSON.parse(storedUser);
      if (storedData.username === formData.username && storedData.password === formData.password) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('User not found. Please register first.');
    }
  };
  const handleRegistration = () => {
    // Store user data in local storage or send it to your server
    localStorage.setItem('user', JSON.stringify(formData));

    alert('Registration successful. You can now log in.');
    setFormData(initialFormData);
    setIsRegistering(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setFormData(initialFormData);
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoggedIn) {
      // If the user is logged in, handle logout
      handleLogout();
    } else if (isRegistering) {
      // If on registration form, attempt registration
      handleRegistration();
    } else {
      // If on login form, attempt login
      handleLogin();

      // Redirect to the dashboard page after successful login
    }

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container">
      <h2>{isLoggedIn ? 'Logged In' : isRegistering ? 'Registration' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {isLoggedIn ? 'Logout' : isRegistering ? 'Register' : 'Login'}
        </button>
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Switch to Login' : 'Registration'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
