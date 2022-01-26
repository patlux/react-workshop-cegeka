import React from 'react';
import ReactDOM from 'react-dom';

const pathname = window.location.pathname;

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  if (pathname !== '/timezones') {
    return <Timezones />;
  }

  return <Greeting firstName="Patrick" name="Wozniak" />;
}

function Greeting(props) {
  return (
    <h1>
      Hallo {props.firstName} {props.name}!
    </h1>
  );
}

function Timezones() {
  return <h2>Timezones</h2>;
}
