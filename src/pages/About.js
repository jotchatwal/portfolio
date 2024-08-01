import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { PText } from '../components/PText';
import MyCv from '../assets/data_resume.pdf';
import AboutImg from '../assets/images/mk_About2.jpg';
import { AboutPageBottom } from '../components/AboutPageBottom';
import {
  educationContent,
  mySkillsContent,
  experiences,
} from '../assets/data/myInfo';
import { AboutPageProgressBar } from '../components/AboutPageProgressBar';
import { ContactBanner } from '../components/ContactBanner';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
      min-height: 430px;
      border-radius: 12px;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;

export const About = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'About | Harjot Singh';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);
  return (
    <AboutStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hello, <span>this is Harjot Singh.</span>
            </p>
            <h2 className="about__heading">Analyst II at Wipro, India</h2>
            <div className="about__info">
              <PText>
                Analyst with 4 years of experience in capturing, manipulating,
                visualizing data to drive business insights and decision making
                Adept at receiving and monitoring data from multiple streams,
                including SQL and API. Skilled in leveraging advanced analytics
                techniques and data visualization tools to interpret complex
                data sets and present actionable insights to stakeholders Proven
                ability to enhance data accuracy, streamline processes, and
                support strategic initiatives through meticulous data management
                and analysis
              </PText>
            </div>
            <Button btnLink={MyCv} btnText="Download CV" target="_blank" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="AboutImage" />
          </div>
        </div>
        <div className="bottom-section">
          <AboutPageProgressBar
            heading="MY SKILLS"
            progressBarItems={mySkillsContent}
          />
          <AboutPageBottom
            heading="EDUCATION"
            infoContents={educationContent}
          />

          <AboutPageBottom heading="EXPERIENCES" infoContents={experiences} />
        </div>
        <ContactBanner />
      </div>
    </AboutStyle>
  );
};
