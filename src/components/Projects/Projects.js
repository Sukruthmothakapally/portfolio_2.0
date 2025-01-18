import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/image4.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import architectureDiagram from "../../Assets/Projects/architecture_diagram.png"; // New Image
import image1 from "../../Assets/Projects/image1.png"; // New Image
import image2 from "../../Assets/Projects/image2.png"; // New Image
import image3 from "../../Assets/Projects/image4.png"; // New Image
import image4 from "../../Assets/Projects/image7.png"; // New Image
import image5 from "../../Assets/Projects/image8.png"; // New Image
import image6 from "../../Assets/Projects/image9.png"; // New Image

import image29 from "../../Assets/Projects/pic29.jpg"; // New Image
import image30 from "../../Assets/Projects/pic30.jpg"; // New Image
import image31 from "../../Assets/Projects/pic31.jpg"; // New Image
import image32 from "../../Assets/Projects/pic32.jpg"; // New Image
import image33 from "../../Assets/Projects/pic33.jpg"; // New Image
import image34 from "../../Assets/Projects/pic34.jpg";
import image35 from "../../Assets/Projects/pic35.jpg";

function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const projects = [
    {
      imgPath: chatify,
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          AI-powered Personalized Job-Tracker
        </span>
      ),
      description: (
        <>
          <strong>Tech Stack:</strong>
          <ul>
            <li><strong>Backend & AI:</strong> FastAPI, Python, PostgreSQL (pgvector), OpenAI GPT-4, Prefect, Docker</li>
            <li><strong>Frontend:</strong> Chrome Extension (JavaScript, HTML, CSS)</li>
            <li><strong>Infrastructure & DevOps:</strong> AWS (EC2, RDS), GitHub Actions</li>
          </ul>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
  <a
    href="https://github.com/Sukruthmothakapally/Personalized-AI-jobtracker-chrome-extension"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#9b59b6", // Using the color you provided
      fontWeight: "bold",
      fontSize: "24px", // Adjusting font size as per your requirement
      textDecoration: "underline",
    }}
  >
    GitHub
  </a>
</div>
        </>
      ),
      details: (
        <div>
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
            Project Overview
          </h5>
          <p>
            A sophisticated Chrome extension integrated that helps users track their job applications intelligently. 
            The system automatically processes Outlook emails to maintain application records and provides real-time 
            notifications when users visit companies they've previously applied to.
          </p>
          <p>
            The solution is integrated with Gen-AI agents for natural language querying and data visualization.
          </p>

          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
            App Details
          </h5>
          <ul>
            <li><strong>Chrome Extension (Frontend):</strong> Real-time company website detection, dynamic popup UI for application status display, and a natural language query interface, providing an interactive data visualization dashboard.</li>
            <li><strong>FastAPI Backend:</strong> Features RESTful API endpoints: /check_url for company application status verification and /get_user_query for AI-powered query processing.</li>
            <li><strong>Multi-agent AI system:</strong> 
              <ul>
                <li>Agent 1: Query classification and routing.</li>
                <li>Agent 2: Vector similarity search for company-specific queries.</li>
                <li>Agent 3: Text-to-SQL/Graph conversion for analytics.</li>
              </ul>
            </li>
            <li><strong>Automated Data Pipeline:</strong> Utilizes a 24-hour Prefect scheduler for Outlook email data extraction, data cleaning and preprocessing, GPT-powered data processing, PostgreSQL data ingestion, and vector embedding generation.</li>
          </ul>

          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
            App Features
          </h5>
          <ul>
            <li><strong>Intelligent Company Detection:</strong> Automatic detection of company websites, real-time application status notifications, and detailed application history display.</li>
            <li><strong>AI-Powered Analytics:</strong> Natural language querying capability, company-specific application insights, statistical analysis and visualization, and vector similarity search for accurate company matching.</li>
            <li><strong>Automated Data Management:</strong> Automated email processing, intelligent data categorization, regular database updates, and vector embedding maintenance.</li>
          </ul>

          {/* Add the images here */}
          <div style={{ marginTop: "20px" }}>
            <img
              src={architectureDiagram}
              alt="Architecture Diagram"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image1}
              alt="Image 1"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image2}
              alt="Image 2"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image3}
              alt="Image 3"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image4}
              alt="Image 4"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image5}
              alt="Image 5"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <img
              src={image6}
              alt="Image 6"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
          </div>
        </div>
      ), 
    },
    {
      imgPath: image29,  // Placeholder for the second project image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          AI-Powered StackOverflow App
        </span>
      ),
      description: (
        <>
          <strong>Tech Stack:</strong>
          <ul>
            <li><strong>AI Models:</strong> OpenAI (text-davinci-003, gpt-3.5-turbo), SentenceTransformer</li>
            <li><strong>Backend:</strong> FastAPI</li>
            <li><strong>Frontend:</strong> Streamlit</li>
            <li><strong>Data Pipeline:</strong> Airflow, BigQuery</li>
            <li><strong>DevOps & Infra:</strong> Docker, Terraform, Google Cloud Platform (GCP)</li>
            <li><strong>Database:</strong> CloudSQL</li>
          </ul>
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
  <a
    href="https://github.com/Sukruthmothakapally/AI-Powered-StackOverflow-App"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#9b59b6", // Using the color you provided
      fontWeight: "bold",
      fontSize: "24px", // Adjusting font size as per your requiremen
      textDecoration: "underline",
    }}
  >
    GitHub
  </a>
</div>
        </>
      ),
      details: (
        <div>
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project Overview</h5>
          <p>
            StackAI is designed to enhance the experience of developers by leveraging AI models to assist with questions on Stack Overflow. With the advent of AI, StackAI provides a sophisticated layer of assistance that not only offers AI-powered answers but also connects users with human-curated solutions.
          </p>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>App Details</h5>
          <ul>
            <li><strong>Ask a Question:</strong> Users can ask a question from any category, and StackAI will provide a customized AI response, including links to the most relevant questions on Stack Overflow.</li>
            <li><strong>Deep Dive into Questions:</strong> Allows users to select a question from Stack Overflow, view its answer in a simplified format, or generate a new response if no accepted answer is available.</li>
            <li><strong>Craft a Question:</strong> If the solution is still unclear, StackAI helps users create a well-structured question to post on Stack Overflow.</li>
          </ul>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Tech Stack</h5>
          <ul>
            <li><strong>OpenAI:</strong> AI models including text-davinci-003 and gpt-3.5-turbo.</li>
            <li><strong>SentenceTransformer:</strong> Used for semantic textual similarity.</li>
            <li><strong>Airflow:</strong> Orchestrates data pipeline automation.</li>
            <li><strong>FastAPI:</strong> Backend API framework for handling requests.</li>
            <li><strong>Streamlit:</strong> Frontend interface for easy interaction.</li>
            <li><strong>Docker & Terraform:</strong> For containerization and infrastructure management on GCP.</li>
          </ul>
    
          <div style={{ marginTop: "20px" }}>
            <img src={image35} alt="Image 7" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image30} alt="Image 8" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image31} alt="Image 9" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image32} alt="Image 7" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image33} alt="Image 8" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image34} alt="Image 9" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          </div>
        </div>
      ),
    },
    {
      imgPath: editor,
      title: "Editor.io",
      description:
        "Online code and markdown editor build with React.js. Online Editor which supports HTML, CSS, and JS code with instant view of the website. Online markdown editor for building README files.",
    },
    {
      imgPath: leaf,
      title: "Plant AI",
      description:
        "Used the plant disease dataset from Kaggle and trained an image classifier model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves.",
    },
    {
      imgPath: suicide,
      title: "Ai For Social Good",
      description:
        "Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention.",
    },
    {
      imgPath: emotion,
      title: "Face Recognition and Emotion Detection",
      description:
        "Trained a CNN classifier using 'FER-2013 dataset' with Keras and TensorFlow backend. The classifier successfully predicted various types of human emotions.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Here are some <strong className="purple">Projects</strong> I've worked on recently
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col
              md={4}
              className="project-card"
              key={index}
              onClick={() => handleShow(project)}
              style={{ cursor: "pointer" }}
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Project Details */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg" // Increase size of modal (large)
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
            {selectedProject.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "1rem" }}>
          <img
            src={selectedProject.imgPath}
            alt={selectedProject.title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
          />
          {selectedProject.details}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;