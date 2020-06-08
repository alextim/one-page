const scrollWidthOffset = (el) => {
  let yOffset;
  const header = document.getElementById('header');
  if (header) {
    yOffset = header.getBoundingClientRect().height;
  } else {
    yOffset = 56;
  }

  const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default scrollWidthOffset;
