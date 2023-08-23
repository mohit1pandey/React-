import React, { useState } from 'react';

function DeclarativeExample() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleText = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isHidden ? 'Show' : 'Hide'}
      </button>
      {isHidden ? null : <p>This is some content.</p>}
    </div>
  );
}

export default DeclarativeExample;
