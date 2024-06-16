import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: #d3e2f7;
  padding: 50px 20px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 80px 20px;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const AboutDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;


const Aboutbutton = styled.a`
  display: inline-block;
  background-color: #5883d3;
  color: #fff;
  padding: 6px 12px; 
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
  }
`;
const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <AboutTitle>About Us</AboutTitle>
        <AboutDescription>
          Yet to be worked upon
        </AboutDescription>
        <Aboutbutton href='/'>Click</Aboutbutton>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
