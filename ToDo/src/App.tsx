import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MainPage } from './MainPage';
import { TodoPage } from './TodoPage';
import './App.css'

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const todoItems = JSON.parse(localStorage.getItem('todoItems') || "");

  return (
    <div>
      <MainPage isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
      {isAuthorized ? <TodoPage todos={todoItems} /> : null}
    </div>
  );
}

export default App;