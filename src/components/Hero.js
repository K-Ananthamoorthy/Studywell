import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background-image: url('/src/assets/hero-bg1.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 20px;

  @media only screen and (min-width: 768px) {
    padding: 150px 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const HeroTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: #5883d3;
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Welcome to Karo Padhai</HeroTitle>
        <HeroSubtitle>Discover a new way to learn</HeroSubtitle>
        <HeroButton href="/index.html">Get Started</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
