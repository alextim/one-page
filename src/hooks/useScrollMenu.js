import { useState, useEffect } from 'react';

const useScrollMenu = (menuData, top) => {
  const [activeItem, setActiveItem] = useState('top');
  const [positions, setPositions] = useState({ top });
  const menuItems = menuData.filter((item) => item.targetId);

  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < menuItems.length; i++) {
      const { targetId } = menuItems[i];
      const el = document.getElementById(targetId);
      if (!el) {
        break;
      }
      const elPos = el.getBoundingClientRect().top + curPos;
      console.warn(targetId, curPos, elPos);
      if (elPos >= curPos) {
        curSection = targetId;
      }
      if (curSection !== targetId) {
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

    const newPositions = { top: positions.top };

    menuItems.forEach((item) => {
      const id = item.targetId;
      const el = document.getElementById(id);
      if (el) {
        newPositions[id] = el.getBoundingClientRect().top + curScroll;
      }
    });

    setPositions(newPositions);

    const lastSectionId = menuItems[menuItems.length - 1].targetId;
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

  return { activeItem };
};

export default useScrollMenu;
