import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  background-color: #f8f9fa;
  text-align: center;
  padding: 50px 20px;

  @media only screen and (min-width: 768px) {
    padding: 80px 20px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  background-color: #fff;
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (min-width: 768px) {
    flex: 0 0 calc(33.33% - 40px);
    max-width: calc(33.33% - 40px);
  }
`;

const FeatureIcon = styled.i`
  font-size: 48px;
  margin-bottom: 20px;
  color: #1e3c72;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <h2>Our Features</h2>
      <FeaturesContainer>
        <Feature>
          <FeatureIcon className="fa fa-book"></FeatureIcon>
          <FeatureTitle>Study Materials</FeatureTitle>
          <FeatureDescription>Access a wide range of study materials.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon className="fa fa-calendar"></FeatureIcon>
          <FeatureTitle>Event Calendar</FeatureTitle>
          <FeatureDescription>Stay updated with upcoming events and deadlines.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon className="fa fa-upload"></FeatureIcon>
          <FeatureTitle>Contribute</FeatureTitle>
          <FeatureDescription>Upload study materials and help others.</FeatureDescription>
        </Feature>
      </FeaturesContainer>
    </FeaturesWrapper>
  );
};

export default Features;
