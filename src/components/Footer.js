import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #626976, #1c212a);
  color: #ecebeb;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Karo Padhai. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
