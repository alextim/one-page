const scrollWidthOffset = (el) => {
  const yOffset = -56;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollWidthOffset;
