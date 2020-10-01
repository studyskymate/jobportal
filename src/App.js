import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './app/components/Counter/Counter';
import TodoApp from './app/components/todo/TodoApp';

function App() {
  return (
    <div className="App">
     Job Portal
     <LearningComponent />
    </div>
  );
}


const LearningComponent= ()=>{
  return(
    <div>
      Learning Component
      <Counter />
      <TodoApp />
    </div>
  )
}

export default App;
