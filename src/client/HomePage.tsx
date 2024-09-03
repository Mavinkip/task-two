import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  const location = useLocation();
  const { name, age } = location.state as { name: string; age: number };

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your age is: {age}</p>
    </div>
  );
};

export default HomePage;
