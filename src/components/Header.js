import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #000000, #000000);
  color: #f5f5f5;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: #f5f5f5;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1e3c72;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    ul {
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      display: ${props => (props.isOpen ? 'flex' : 'none')}; /* Toggle visibility */
    }

    li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const NavToggle = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <Navigation isOpen={isOpen}>
        <h1>Karo Padhai</h1>
        <NavToggle onClick={toggleMenu}>Menu</NavToggle>
        <ul className="nav-menu">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/branch/cse/cse.html">CSE</a></li>
          <li><a href="/branch/aiml/aiml.html">AIML</a></li>
          <li><a href="/branch/aids/aids.html">AIDS</a></li>
          <li><a href="/branch/ec/ece.html">ECE</a></li>
          <li><a href="/branch/mech/mech.html">MECH</a></li>
          <li><a href="/branch/civil/civil.html">CIVIL</a></li>
          <li><a href="/branch/basic_science/basic_01.html">BASIC SCIENCE</a></li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
