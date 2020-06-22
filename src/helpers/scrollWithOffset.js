export const getHeaderHeight = () => {
  const header = document.getElementById('header');
  return header ? header.getBoundingClientRect().height : 56; // 3.5rem, 16 * 3.5 = 56;
};

const scrollWidthOffset = (el) => {
  const yOffset = getHeaderHeight();
  const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export const scrollToPos = (hash) => {
  let y = 0;
  if (hash) {
    const id = hash.substr(1);
    console.warn('id=', id);
    const el = document.getElementById(id);
    if (el) {
      console.warn('FOUND');
      const yOffset = getHeaderHeight();
      y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    }
  }
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollWidthOffset;
