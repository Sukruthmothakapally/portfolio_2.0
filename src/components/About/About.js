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
                {/* AI Software Engineer */}  
<li style={{ marginBottom: "30px" }}>  
  <strong style={{ fontSize: "1.8em" }}>  
    <a  
      href="https://www.predictabio.com"  
      target="_blank"  
      rel="noopener noreferrer"  
      style={{  
        color: "inherit",  
        textDecoration: "underline",  
        zIndex: 1,  
        position: "relative",  
      }}  
    >  
      PredictaBio Innovations  
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
    AI Software Engineer  
  </span>  
  <br />  
  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>  
    Feb 2025 – Present  
  </em>  
  <ul className="role-description">  
    <li>  
    Founding team lead, owning backend product development for a protein synthesis startup; Architecting multi-agent AI microservices, automated data pipelines, and graph + vector DBs for ML-driven predictive modeling and POCs.  
    </li>  
  </ul>  
</li>  
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
                      Part of Startup's founding engineering team, taking ownership of multiple
                      microservices using Python, Node.js, and AWS.
                    </li>
                    <li>
                    Designed interactive UI with React, Next.js, and TypeScript, boosting platform performance by 40%.
                    </li>
                    <li>
                   Engineered a multi-agent AI interface, 'AI Copilot' with OpenAI, LangChain, and scikit-learn, automating workflows and driving revenue.
                    </li>
                    <li>
                    Integrated RAG-based chatbot with FAISS and OpenAI embeddings, enhancing customer engagement.
                    </li>
                    <li>
                    Led migration to a microservices architecture with Docker, Terraform, and CI/CD pipelines.
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
                    Developed driver deployment solutions in C++ on Linux, improving performance by 15% through automation.
                    </li>
                    <li>
                    Built automated testing frameworks in Python for SSD firmware, enhancing reliability and reducing production issues.
                    </li>
                    <li>
                    Optimized CI/CD pipelines with Jenkins and Git, cutting driver update time by 30% for 1M+ users. 
                    </li>
                    <li>
                    Conducted root cause analysis using SQL, resolving key performance bottlenecks in driver workflows.  
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
                      Contributed to developing a MERN-based employee skills analysis platform, improving employee skill mapping and accessibility.
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
