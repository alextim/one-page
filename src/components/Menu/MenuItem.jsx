import React, { useState, useEffect } from 'react';

const MenuItem = ({ targetId, title, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => setAnchorTarget(document.getElementById(targetId)), [targetId]);

  const handleClick = (e) => {
    e.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li>
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        style={{ color: active ? 'red' : 'black' }}
        aria-label={`Scroll to ${title}`}
      >
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
