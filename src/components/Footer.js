import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import { PText } from './PText';

const FooterStyle = styled.div`
  padding: 3rem;
  background: var(--deep-dark);
  position: relative;
  .footer__box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    margin-left: 40px;
    margin-right: 0;
  }
  .footer__logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 10px;
    bottom: 18px;
  }
  .footer__social {
    display: flex;
    gap: 3rem;
  }
  .footer__social {
    a {
      width: 2rem;
    }
  }
  .para {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    .footer__logo {
      width: 35px;
      height: 35px;
      left: 1rem;
      bottom: 10px;
    }
    .footer__box {
      margin-left: 4rem;
    }
    .footer__col1__title {
      font-size: 1rem;
    }
    .para {
      font-size: 0.8rem;
    }
    .footer__social {
      a {
        width: 1.4rem;
      }
    }
  }
`;

export const Footer = () => (
  <FooterStyle>
    <div className="footer__box">
      <div className="footer__content">
        <h3 className="footer__col1__title">Harjot Singh</h3>
        <PText>Copyright &copy; 2020</PText>
      </div>
      <div className="footer__social">
        <a
          href="https://www.instagram.com/jatin_sharma56/"
          target="_blank"
          rel="noreferer noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-sharma-787a5b163"
          target="_blank"
          rel="noreferer noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </FooterStyle>
);
