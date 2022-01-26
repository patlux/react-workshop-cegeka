import React from 'react';

function Accordion(props) {
  const [revealed, setRevealed] = React.useState(false);

  function showContent() {
    setRevealed(!revealed);
  }

  return (
    <div>
      <button onClick={showContent}>{props.title}</button>
      <br />
      {revealed && props.children}
    </div>
  );
}

export default Accordion;
