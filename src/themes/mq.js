export const breakpoints = ['30rem', '48rem', '62rem', '80rem'];
/*
  600  37.5
  960  60
 1280  80
 1920 120
*/

const mq = {
  sm: `@media (min-width: ${breakpoints[0]})`,
  md: `@media (min-width: ${breakpoints[1]})`,
  lg: `@media (min-width: ${breakpoints[2]})`,
  xl: `@media (min-width: ${breakpoints[3]})`,
  md_max: `@media (max-width: ${breakpoints[1]})`,
};

export default mq;
