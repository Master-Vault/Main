import React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App/>);
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

//import styles from './stylesheets/styles.css';

// render(<App />, document.getElementById('root'));
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

