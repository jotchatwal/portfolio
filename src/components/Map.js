import React from 'react';
import styled from 'styled-components';
import { PText } from './PText';
import MapImg from '../assets/images/map.png';

const MapStyle = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    background: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 250px;
    right: 12%;
    bottom: 15%;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 75% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export const Map = () => (
  <MapStyle>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">My Location</h3>
        <PText>OSHAWA, CANADA</PText>
        <a
          href="https://www.google.ca/maps/place/Oshawa,+ON/@43.9482385,-79.0431595,11z/data=!3m1!4b1!4m6!3m5!1s0x89d51d21ccd37533:0xdd8ceff2f844fcbf!8m2!3d43.8975974!4d-78.8635999!16zL20vMDE4bjFr?entry=ttu"
          target="_blank"
          rel="noreferrer"
          className="map__card__link"
        >
          Open in Google Map
        </a>
      </div>
    </div>
  </MapStyle>
);
