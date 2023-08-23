import React, { useRef } from 'react';

function ImperativeExample() {
  const paragraphRef = useRef(null);
  //initiaise the ref obj
  const toggleText = () => {
    const paragraph = paragraphRef.current;
    if (paragraph) {
      paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      <button onClick={toggleText}>Toggle</button>
      <p ref={paragraphRef}>This is some content.</p>
    </div>
  );
}

export default ImperativeExample;
