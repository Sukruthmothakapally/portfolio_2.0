import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12} // Full width for the text
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              fontSize: "1.2em", // Increased font size for better readability
            }}
          >
            <h1 style={{ fontSize: "3em", paddingBottom: "30px" }}>
              Work<span className="purple"> Experience</span>
            </h1>
            <div className="about-content">
              <ul>
                {/* Graduate Teaching Assistant */}
                <li style={{ marginBottom: "30px" }}>
                  <strong style={{ fontSize: "1.8em" }}>
                    <a
                      href="https://www.northeastern.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                        zIndex: 1,  // Ensure link is on top
                        position: "relative",  // Fix for z-index stacking
                      }}
                    >
                      Northeastern University
                    </a>
                  </strong>
                  <br />
                  <span
                    className="purple"
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    Graduate Teaching Assistant
                  </span>
                  <br />
                  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    Jan 2023 – Dec 2024
                  </em>
                  <ul className="role-description">
                    <li>
                      Designed and graded assignments for 40+ students in Data
                      Structures and Algorithms, and Data Science, focusing on
                      Python, Machine Learning, and Object-Oriented Programming.
                    </li>
                  </ul>
                </li>

                {/* AI Software Engineer Intern */}
                <li style={{ marginBottom: "30px" }}>
                  <strong style={{ fontSize: "1.8em" }}>
                    <a
                      href="https://www.pipeiq.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                        zIndex: 1,  // Ensure link is on top
                        position: "relative",  // Fix for z-index stacking
                      }}
                    >
                      PipeIQ.ai
                    </a>
                  </strong>
                  <br />
                  <span
                    className="purple"
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    AI Software Engineer Intern
                  </span>
                  <br />
                  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    Jan 2024 – Aug 2024
                  </em>
                  <ul className="role-description">
                    <li>
                      Part of the founding engineering team, building
                      microservices using Python, Node.js, and AWS.
                    </li>
                    <li>
                      Built React and TypeScript-powered UI, developed ‘AI
                      Copilot’ with OpenAI and LangChain.
                    </li>
                    <li>
                      Integrated a RAG-based chatbot with FAISS and OpenAI
                      embeddings.
                    </li>
                  </ul>
                </li>

                {/* Infosys */}
                <li style={{ marginBottom: "30px" }}>
                  <strong style={{ fontSize: "1.8em" }}>
                    <a
                      href="https://www.infosys.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                        zIndex: 1,  // Ensure link is on top
                        position: "relative",  // Fix for z-index stacking
                      }}
                    >
                      Infosys
                    </a>
                  </strong>
                  <br />
                  <span
                    className="purple"
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    <strong
                    >
                      Systems Engineer (Client: Intel)
                    </strong>
                  </span>
                  <br />
                  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    Feb 2020 – June 2022
                  </em>
                  <ul className="role-description">
                    <li>
                      Focused on driver deployment and automated testing for
                      Intel SSDs, improving system performance by 15%.
                    </li>
                    <li>
                      Re-engineered workflows with CI/CD tools to cut update
                      time by 30%.
                    </li>
                    <li>
                      <strong
                        style={{
                          fontSize: "1.4em",
                          // Purple for roles
                        }}
                      >
                        <span className="purple">Full-Stack Developer Intern:</span>
                      </strong>{" "}
                      Developed a MERN-based employee skills analysis platform.
                    </li>
                  </ul>
                </li>

                {/* Software Developer Intern */}
                <li style={{ marginBottom: "30px" }}>
                  <strong style={{ fontSize: "1.8em" }}>
                    <a
                      href="https://www.bosch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                        zIndex: 1,  // Ensure link is on top
                        position: "relative",  // Fix for z-index stacking
                      }}
                    >
                      Bosch
                    </a>
                  </strong>
                  <br />
                  <span
                    className="purple"
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    Software Developer Intern
                  </span>
                  <br />
                  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    July 2018 – Aug 2018
                  </em>
                  <ul className="role-description">
                    <li>
                      Contributed to shipment tracking app by developing
                      backend services using Python and Node.js, improving
                      query performance by 30%.
                    </li>
                    <li>Deployed a Dockerized app on AWS.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Techstack />

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
