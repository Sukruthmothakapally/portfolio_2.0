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
          <ul>
            <li>
              I'm an experienced software engineer with a Master's in <span className="purple"><em>Computer Software Engineering</em></span> from Northeastern University.
            </li>
            <br />
            <li>
              I've worked at 2 <span className="purple"><em>AI startups</em></span> as part of the founding team, taking AI-driven <span className="purple"><em>SAAS</em></span> products from <span className="purple"><em>0→1</em></span> and helping drive revenue.
            </li>
            <br />
            <li>
              I thrive in <span className="purple"><em>multi-hat responsibilities</em></span>, working directly with leadership, including the <span className="purple"><em>CEO</em></span> - to turn ideas into solid <span className="purple"><em>MVPs</em></span>.
            </li>
            <br />
            <li>
              My core strength is backend development with <span className="purple"><em>microservices</em></span>, using <span className="purple"><em>Python</em></span> and <span className="purple"><em>Java</em></span> frameworks.
            </li>
            <br />
            <li>
             In the <span className="purple"><em>AI</em></span> space, I've built <span className="purple"><em>multi-agent systems</em></span>, designed <span className="purple"><em>RAG-based architectures</em></span>, fine-tuned <span className="purple"><em>LLMs</em></span>, worked on prompt engineering, and used frameworks like <span className="purple"><em>LangChain</em></span>, LangGraph, and Autogen. 
            </li>
            <br />
            <li>
              I've built scalable <span className="purple"><em>AWS & GCP native</em></span> full-stack apps, set up <span className="purple"><em>CI/CD pipelines</em></span>, and handled <span className="purple"><em>data engineering</em></span> workflows.
            </li>
            <br />
            <li>
              For the frontend, I sometimes work with <span className="purple"><em>React</em></span>, <span className="purple"><em>JavaScript</em></span>, and <span className="purple"><em>TypeScript</em></span>. Not my main focus, but I can get things up and running when needed.
            </li>
          </ul>
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
