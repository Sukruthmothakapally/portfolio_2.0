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
      href="https://predicta.bio/"  
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
    Founding engineer owning backend development of AI-driven MVP for synthetic biology startup; architecting 3 multi-agent microservices predicting protein interactions and Airflow pipelines automating biodiverse data integrations.  
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
                    Designed and evaluated assignments for 40+ students in Data Structures & Algorithms and Data Science courses, covering Python and Java, Machine Learning, Agile methodologies, SDLC, and Object-Oriented Programming.
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
                        Part of founding team, owned 4 core microservices for the startup’s MVP (Python/Node.js, AWS Lambda/DynamoDB/S3), accelerating time-to-market by a quarter.
                    </li>
                    <li>
                        Engineered a multi-agent ‘AI Copilot’ (OpenAI, scikit-learn, and LangChain), personalizing and automating email generation, intent classification, and campaign creation, directly driving 70% revenue growth.
                    </li>
                    <li>
                        Developed RAG-based chatbot (OpenAI, FAISS) for real-time sales insights, cutting customer query resolution time by 35%.
                    </li>
                    <li>
                    Led migration of monolithic backend to a microservices architecture.
                    </li>
                    <li>
                        Designed schemas for 8 features and built Airflow DAGs to ETL 50K+ leads from 10+ sources for AI-driven personalization.
                    </li>
                    <li>
                    Designed interactive UI with React, Next.js, and TypeScript, boosting platform performance by 40%.
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
                    Automated Intel GPU/SSD driver deployments via C++ CLI tools and Ansible on Linux, configuring 10K+ enterprise systems.
                </li>
                <li>
                    Built Python framework with 50+ test cases for SSD firmware validation, improving system throughput by 15%.
                </li>
                <li>
                    Re-engineered driver updates using Python/Shell parallel scripting, slashing deployment time by 30% for 1M+ users.
                </li>
                <li>
                    Optimized CI/CD pipelines (Jenkins/Git) with automated unit/integration tests, reducing driver build failures by 25%.
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
                      Built 5+ APIs (Node.js/Express.js) enabling filtering of 1K+ workforce datasets for skill gap analysis, cutting latency by 40%.
                    </li>
                    <li>
                      Designed 2 React dashboards visualizing real-time skill metrics, adopted by 200+ HR users to optimize talent allocation.
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
                        Automated 500+ daily shipment status syncs via 30+ APIs (FedEx/DHL) using Python/Node.js, reducing manual tracking.
                    </li>
                    <li>
                        Optimized 15 DB queries and Dockerized app, cutting processing time by 30% with zero downtime on AWS ECS.
                    </li>

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
