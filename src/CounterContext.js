import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context (like creating a box to store data)
const CounterContext = createContext();

// Step 2: Create a custom hook to easily get data from context
export const useCounter = () => {
  // Get the data from the context
  const context = useContext(CounterContext);
  
  // If no context found, show error
  if (!context) {
    throw new Error('useCounter must be used inside CounterProvider');
  }
  
  // Return the data (counter and setCounter)
  return context;
};

// Step 3: Create a Provider component that holds the state
export const CounterProvider = ({ children }) => {
  // Create counter state (starts at 0)
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("John Doe");

  // Put counter and setCounter in an object to share
  const sharedData = {
    counter,        // current counter value
    setCounter      // function to update counter
  };

  // Provide the data to all child components
  return (
    <CounterContext.Provider value={sharedData}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
