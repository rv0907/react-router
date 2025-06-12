import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myimg from "../../assets/meimage.png";
import "./home.css";
const Home2 = () => {
  return (
    <>
      {/* === Introduction Section === */}
      <Container fluid className='home-about-section' id='about'>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1>
              Let me <span className='purple'>Introduce</span>
              <br />
              Myself
            </h1>

            <p>
              With my keen interest in problem solving, I have solved over{" "}
              <strong className='purple'>1000+ questions</strong> on platforms
              like{" "}
              <strong className='purple'>
                Codeforces, LeetCode, GFG, CodeChef.
              </strong>
            </p>

            <p>
              I am proficient in languages like{" "}
              <strong className='purple'>C++, JavaScript, Python.</strong>
            </p>

            <p>
              Most of my time is spent on LeetCode and Codeforces, but in my
              free time I love to hit the gym, write or listen to poetry.
            </p>

            <p>
              I’ve also developed strong interest in{" "}
              <strong className='purple'>Node.js, React.js, MongoDB</strong> for
              full-stack development.
            </p>
          </Col>
        </Row>
      </Container>

      {/* === Profile Image + Socials Section === */}
      <Container>
        <Row className='justify-content-center'>
          <Col md={6} className='text-center'>
            <Tilt>
              <img
                src={myimg}
                alt='My Avatar'
                style={{
                  width: "200px",
                  padding: "20px",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
                }}
              />
            </Tilt>
            <h1 className='mt-3'>
              <span className='purple'>Find me ON</span>
            </h1>
            <ul className='home-about social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/rv0907'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/sarthaksinghrudra/#'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/rudraveer-singh-779214257/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.facebook.com/profile.php?id=100088728744821'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home2;
