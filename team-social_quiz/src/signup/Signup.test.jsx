import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RegistrationForm from './RegistrationForm';


describe('RegistrationForm', () => { // Updated component name
    it('renders input fields', () => {
      render(<RegistrationForm/>); // Updated component name
  
      // Check if the input fields are present
      expect(screen.getByLabelText('User Name:')).toBeInTheDocument();
      expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
      expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  
      // Check if the submit button is present
      expect(screen.getByText('Register')).toBeInTheDocument();
    });
  });
