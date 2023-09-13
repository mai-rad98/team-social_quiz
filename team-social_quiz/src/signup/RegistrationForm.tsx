import React, { useState } from 'react';
import './Signup.css'

interface FormData {
  username: string;
  fullName: string;
  password: string;
}

const initialFormData: FormData = {
username: '',
fullName: '',
password: '',
};

const RegistrationForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);


  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
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
    
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
