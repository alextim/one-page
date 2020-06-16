import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';

const Footer = () => (
  <footer id="footer">
    <Container>
      <Link to="/privacy">Privacy</Link>
    </Container>
  </footer>
);

export default Footer;
