import React, { useState, useEffect } from 'react';

import { MenuItems } from './styled';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState('top');
  const [positions, setPositions] = useState({ top: 0 });

  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < menuItems.length; i++) {
      const { id } = menuItems[i];
      if (positions[id] >= curPos) {
        curSection = id;
      }
      if (curSection !== id) {
        break;
      }
    }
    if (curSection !== activeItem) {
      setActiveItem(curSection);
    }
  };

  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 100;
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const newPositions = { top: 0 };
    menuItems.forEach((item) => {
      newPositions[item.id] =
        document.getElementById(item.id).getBoundingClientRect().top + curScroll;
    });

    setPositions(newPositions);

    const lastSectionId = menuItems[menuItems.length - 1].id;
    let lastSectionPosition = newPositions[lastSectionId];
    const bottom = document.body.offsetHeight;
    if (viewPortHeight > bottom - lastSectionPosition) {
      lastSectionPosition = bottom - viewPortHeight - 100;
    }
    handleScroll();
  };

  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints);
    const root = document.getElementById('root');
    observer.observe(root, {
      childList: true,
      subtree: true,
    });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getAnchorPoints);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', getAnchorPoints);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuItems>
      {menuItems.map(({ id, title }) => (
        <MenuItem key={id} targetId={id} title={title} active={id === activeItem} />
      ))}
    </MenuItems>
  );
};

export default Menu;
