import React from 'react';
import ReactDOM from 'react-dom';
import Timezones from './Timezones';

function App({ apiUrl }) {
  const path = window.location.pathname;
  return (
    <>
      <header>
        <h1>React Basics Cegeka Workshop</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/timezones">Timezones</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        {path === '/' && 'Welcome Cegeka!'}
        {path === '/timezones' && <Timezones apiUrl={apiUrl} />}
      </main>
    </>
  );
}

var mountNode = document.getElementById('root');
ReactDOM.render(<App apiUrl={process.env.REACT_APP_API_URL || '/api'} />, mountNode);
