import React from 'react';

function Greeting(props) {
  return (
    <h1>
      Hallo {props.firstName} {props.name}!
    </h1>
  );
}

export default Greeting;
