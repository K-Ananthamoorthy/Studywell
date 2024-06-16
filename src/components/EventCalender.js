import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: linear-gradient(to right, #000000, #000000);
  color: #f5f5f5;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  .nav-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
  }

  .nav-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #1e3c72;
      }
    }
  }
`;

const Main = styled.main`
  padding: 20px;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`;

const CalendarGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const Event = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from JSON file
    fetch('/assets/events.json')
      .then(response => response.json())
      .then(data => setEvents(data.events))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <>
      <Header>
        <h1>College Study Resources</h1>
        <Nav>
          <button className="nav-toggle">Menu</button>
          <ul className="nav-menu">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/branch/cse/cse.html">CSE</a></li>
            <li><a href="/branch/aiml/aiml.html">AIML</a></li>
            <li><a href="/branch/aids/aids.html">AIDS</a></li>
            <li><a href="/branch/ece/ece.html">ECE</a></li>
            <li><a href="/branch/mech/mech.html">MECH</a></li>
            <li><a href="/branch/civil/civil.html">CIVIL</a></li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Section className="calendar">
          <h2>Event Calendar</h2>
          <CalendarGrid>
            {events.map(event => (
              <Event key={event.id}>
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
              </Event>
            ))}
          </CalendarGrid>
        </Section>
      </Main>
    </>
  );
};

export default EventCalendar;
