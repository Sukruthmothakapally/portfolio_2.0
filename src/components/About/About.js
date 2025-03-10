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
    Founding engineer owning end-to-end development of 3 microservices with multi-agent system for an AI-driven MVP.  
    </li>  
    <li>  
    Contributing to a data orchestration pipeline (Graph/Vector DB), streamlining Protein synthesis and predictive analytics.   
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
                    AI Software Engineer
                  </span>
                  <br />
                  <em style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    Jan 2024 – Aug 2024
                  </em>
                  <ul className="role-description">
                  <li>
                  As part of founding team, collaborated directly with CEO in a 0→1 initiative to design and develop 4 microservices for the MVP using FastAPI/Node.js/AWS Lambda/Kafka/Docker, accelerating time-to-market by a quarter.  
                    </li>
                    <br />
                    <li>
                    Contributed to engineering a multi-agent AI system (RAG/LangChain/Selenium) for automating and personalizing email generation, lead acquisition, and campaign creation, driving 10+ customers and increasing sales conversions. 
                    </li>
                    <br />
                    <li>
                    Developed an AI chatbot (RAG/Cache/FAISS/WebSocket) serving as a Customer Onboarding Assistant, delivering real-time sales insights and slashing setup time from hours to minutes. 
                    </li>
                    <br />
                    <li>
                    led agile migration from monolith to microservices, integrating AWS services with CI/CD pipelines via GitHub Actions/Terraform, streamlining weekly release cycles. 
                    </li>
                    <br />
                    <li>
                    Designed 8 database schemas for sales-marketing workflows and led development of a weekly Airflow DAG that automated ETL for 50k+ leads from 10+ sources using web scraping and data ingestion, driving targeted customer personalization. 
                    </li>
                    <br />
                    <li>
                    Developed 2 dashboards using React/Next.js/TypeScript, implemented NextAuth.js with users RBAC, integrated Stripe, third-party APIs, and WebSocket alerts, improving security and user experience.
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
                    Co-designed and evaluated assignments for 40+ students in Data Structures & Algorithms and Data Science courses, covering Python, Java, Machine Learning, Agile methodologies, SDLC, and Object-Oriented Programming.
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
                    Wrote 50+ SSD firmware test cases and built a Python automation library, boosting test execution throughput by 15%. 
                </li>
                <li>
                    Re-engineered driver updates using Python/Shell parallel scripting, slashing deployment time by 30% for 1M+ users.
                </li>
                <li>
                    Optimized CI/CD pipelines (Jenkins/Git) with automated unit/integration tests, reducing driver build failures by 25%.
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
                      Developed 4 REST APIs (Express.js/MongoDB) using aggregation pipelines and indexing, enhancing latency by 10%.
                    </li>
                    <li>
                      Built real-time analytics dashboard (React/D3.js) with code-splitting and DOM optimization, reducing load time by 9%. 
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
                  Enhanced microservices with JWT authentication and session management, improving API security for shipment tracking. 
                    </li>
                    <li>
                  Implemented Redis caching and optimized SQL queries using indexing, reducing data retrieval time by 30%.
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
