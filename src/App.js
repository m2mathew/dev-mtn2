import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
// import HelloHook from './HelloHook';

function App() {
  // JSX - createElement takes the element, props, and children as arguments
  // return React.createElement('h1', { style: { color: 'hotpink' }}, 'hello, mom!')

  // We can pass in props here to make them available to the component being rendered
  return (
    <Hello name="ReactJS Dallas" date={new Date().toDateString()} />
    // <HelloHook name="ReactJS Dallas" date={new Date().toDateString()} />
  );
}

export default App;
