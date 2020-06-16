export const getHeaderHeight = () => {
  const header = document.getElementById('header');
  return header ? header.getBoundingClientRect().height : 56; // 3.5rem, 16 * 3.5 = 56;
};

const scrollWidthOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight();
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollWidthOffset;
