import React from 'react';

function Counter(props) {
  const [count, setCount] = React.useState(props.initialCount);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment} style={{ fontSize: 24 }}>
      Counter: {count}
    </button>
  );
}

export default Counter;
