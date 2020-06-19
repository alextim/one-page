import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getHeaderHeight } from '../../helpers/scrollWithOffset';

const ScrollToPosOnMount = () => {
  const { hash } = useLocation();
  useEffect(() => {
    let y = 0;
    if (hash) {
      const id = hash.substr(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = getHeaderHeight();
        y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
      }
    }
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [hash]);

  return null;
};

export default ScrollToPosOnMount;
