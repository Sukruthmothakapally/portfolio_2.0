import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sukruth_dp.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm an experienced software engineer, with a Masters in <span className="purple"><em>Computer Software Engineering</em></span> from Northeastern University.
            <br />
            <br />
            Most recently, I worked at a <span className="purple"><em>Gen-AI startup</em></span> as part of the founding engineering team, where I built end-to-end <span className="purple"><em>SAAS</em></span> products and <span className="purple"><em>AI-driven solutions</em></span>.
            <br />
            <br />
            My primary focus is on backend development using <span className="purple"><em>microservices</em></span>, with expertise in <span className="purple"><em>Python</em></span>, <span className="purple"><em>Java</em></span>, and <span className="purple"><em>JavaScript</em></span> frameworks.
            <br />
            <br />
            In the <span className="purple"><em>AI</em></span> space, I have experience developing <span className="purple"><em>multi-agent</em></span> systems, designing <span className="purple"><em>RAG</em></span>-based architectures, fine-tuning <span className="purple"><em>LLMs</em></span>, and working on prompt engineering.
            <br />
            <br />
            I've also built few scalable <span className="purple"><em>AWS</em></span> native <span className="purple"><em>full-stack apps</em></span> leveraging <span className="purple"><em>CI/CD</em></span> pipelines, and for the frontend, I mainly work with <span className="purple"><em>React</em></span>, <span className="purple"><em>JavaScript</em></span>, and <span className="purple"><em>TypeScript</em></span>.
          </p>

          </Col>

          <Col md={4} className="myAvtar">
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{ width: '70%', height: 'auto' }} // Adjusted width and auto height
            />
          </Tilt>
        </Col>
        </Row>
        <Row>
  <Col md={12} className="home-about-social">
    <h1>To know more about my work</h1>
    <p>Let's connect</p>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Sukruthmothakapally"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/sukruthkm/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>

      {/* Plain text email */}
      <li className="social-icons">
        <span className="email-text">sukruth0402@gmail.com</span>
      </li>
    </ul>
  </Col>
</Row>


      </Container>
    </Container>
  );
}
export default Home2;
