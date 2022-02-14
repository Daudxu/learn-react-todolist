import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList'
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );