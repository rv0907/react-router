import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homelogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Home2 from "./Home2";
export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col md={7} className='home-content'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There ! {""}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>
              <h1 className='heading-name'>
                I'M <strong className='main-name'>Rudraveer Singh (RV)</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 50 }}>
              <img
                src={homelogo}
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </section>
    </>
  );
}
