import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './app/components/Counter/Counter';
import TodoApp from './app/components/todo/TodoApp';
import MyForms from './app/components/MyForms';
import MyFormObject from './app/components/MyFormObject';

function App() {
  return (
    <div className="App">
      Job Portal
      <LearningComponent />
    </div>
  );
}


const LearningComponent = () => {
  return (
    <div>
     <h1> Learning Component </h1>
      
      <MyFormObject />
    </div>
  )
}

export default App;
