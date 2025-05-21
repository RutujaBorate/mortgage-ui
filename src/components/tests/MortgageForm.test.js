import MortgageForm from "../MortgageForm";
import { render , screen } from '@testing-library/react'

test('renders martgageForm inputs', () => {
  render(<MortgageForm onSubmit={()=>{}}/>)

  expect(screen.getByPlaceholderText(/property address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/transaction date/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/entered by/i)).toBeInTheDocument();
})
// MortgageForm.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import MortgageForm from '../MortgageForm';

test('renders mortgage form inputs', () => {
  render(<MortgageForm onSubmit={() => {}} />);
  
  expect(screen.getByPlaceholderText(/property address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/transaction date/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/entered by/i)).toBeInTheDocument();
});

test('submit button triggers onSubmit', () => {
  const mockSubmit = jest.fn();
  render(<MortgageForm onSubmit={mockSubmit} />);

  const submitBtn = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitBtn);

  expect(mockSubmit).not.toHaveBeenCalled(); // not called due to empty required fields
});
