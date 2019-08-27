import React from 'react';

import './Accordion.css';

function Accordion({ items, onOpenIndexChange }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  React.useEffect(() => {
    if (typeof openIndex === 'number' && onOpenIndexChange) {
      onOpenIndexChange(openIndex);
    }
  }, [openIndex]);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => setOpenIndex(index)}
          >
            {item.title}
          </button>
          {index === openIndex && (
            <div className="accordion-content">{item.contents}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
