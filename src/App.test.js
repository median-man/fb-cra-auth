import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText(/welcome to react/i)).toBeInTheDocument();
});
