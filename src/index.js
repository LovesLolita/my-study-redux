import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TodoList from './TodoList'


// ReactDOM.render(<TodoList />,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoList />
);

