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

const AboutImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <AboutTitle>About Us</AboutTitle>
        <AboutDescription>
          Yet to be worked upon
        </AboutDescription>
        <AboutImage/>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
