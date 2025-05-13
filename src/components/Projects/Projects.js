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
import image14 from "../../Assets/Projects/image14.png"; // New Image
import image15 from "../../Assets/Projects/image15.png";
import image20 from "../../Assets/Projects/image20.png";

import pic19 from "../../Assets/Projects/pic19.png"; // New Image
import pic09 from "../../Assets/Projects/pic09.png";
import pic08 from "../../Assets/Projects/pic08.png";
import pic28 from "../../Assets/Projects/pic28.jpg"; // New Image
import pic07 from "../../Assets/Projects/pic07.png";
import pic25 from "../../Assets/Projects/pic25.jpg";
import pic40 from "../../Assets/Projects/pic40.jpg";

import pic01 from "../../Assets/Projects/pic01.png"; // New Image
import pic05 from "../../Assets/Projects/pic05.png";
import pic16 from "../../Assets/Projects/pic16.png";
import pic17 from "../../Assets/Projects/pic17.png"; // New Image

import pic04 from "../../Assets/Projects/pic04.png";
import pic03 from "../../Assets/Projects/pic03.png";
import pic10 from "../../Assets/Projects/pic10.png"; 

import pic21 from "../../Assets/Projects/pic21.png";
import pic12 from "../../Assets/Projects/pic12.png";
import pic13 from "../../Assets/Projects/pic13.png"; 
import pic11 from "../../Assets/Projects/pic11.png";
import pic60 from "../../Assets/Projects/pic60.png";

import pic61 from "../../Assets/Projects/fastapi.png";
import pic62 from "../../Assets/Projects/langgraph.png";
import pic63 from "../../Assets/Projects/prefect.png";
import pic64 from "../../Assets/Projects/whatsapp_multi_agent_ai_assistant.png";

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
  imgPath: pic64,
  title: (
    <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
      Multi-Agent and Multi-Modal AI Assistant on WhatsApp
    </span>
  ),
  description: (
    <>
      <strong>Tech Stack:</strong>
      <ul>
        <li><strong>Backend & Agents:</strong> FastAPI, LangGraph, LangChain, Python, Qdrant, SQLite</li>
        <li><strong>AI Models:</strong> GPT-4, Whisper, ElevenLabs, LLaVA, Groq, Together AI</li>
        <li><strong>Integrations:</strong> WhatsApp Business API, Gmail, Google Calendar & Tasks</li>
        <li><strong>DevOps & Infra:</strong> Docker, Prefect, Cron, Ngrok, Chainlit (Web UI)</li>
      </ul>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href="https://github.com/Sukruthmothakapally/Whatsapp-multiagent-assistant"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#9b59b6",
            fontWeight: "bold",
            fontSize: "24px",
            textDecoration: "underline",
            marginRight: "15px",
          }}
        >
          GitHub
        </a>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "black",
            marginRight: "15px",
          }}
        >
          |
        </span>
        <a
          href="https://youtu.be/AtpaKgERbXw?si=w6gF0SVKD6Sn-4DE"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#9b59b6",
            fontWeight: "bold",
            fontSize: "24px",
            textDecoration: "underline",
          }}
        >
          Demo
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
        A production-grade, asynchronous multi-agent AI assistant fully integrated with WhatsApp.
        The system uses <strong>LangGraph</strong> to define agent workflows as a directed graph, enabling modular, concurrent, and state-aware processing for real-time tasks.
        Supports text, voice, and image inputs with seamless automation of Gmail, Calendar, and Tasks.
      </p>
      <p>
        Scalable and fault-tolerant by design, the assistant handles full interaction cycles in WhatsApp—from daily briefings to image transcription—while <strong>Chainlit</strong> provides a web UI for testing/debugging.
      </p>

      <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
        Key Capabilities
      </h5>
      <ul>
        <li><strong>LangGraph-Driven Flow:</strong> Async execution with agent nodes for query classification, memory, media processing, and task routing.</li>
        <li><strong>Multi-Agent Intelligence:</strong> Dedicated agents for voice (STT/TTS), image (OCR/Gen), search, scheduling, and RAG-powered memory.</li>
        <li><strong>WhatsApp-Centric UX:</strong> All actions—email, calendar, tasks, summaries, news—done natively via WhatsApp.</li>
        <li><strong>Multi-Modal Support:</strong> Handles voice commands, image prompts, and text queries in real time.</li>
        <li><strong>Automated Daily Updates:</strong> Morning digest of emails, events, and tasks triggered by scheduled workflows.</li>
        <li><strong>Chainlit Web UI:</strong> Browser-based interface used for debugging and showcasing async flows.</li>
      </ul>

      <div style={{ marginTop: "20px" }}>
        <img
          src={pic61}
          alt="Architecture Overview"
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}
        />
        <img
          src={pic62}
          alt="LangGraph Flow"
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}
        />
        <img
          src={pic63}
          alt="WhatsApp Interaction"
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}
        />
        <img
          src={pic64}
          alt="Chainlit Debug UI"
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}
        />
      </div>
    </div>
  ),
},



    {
      imgPath: chatify,
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Full-Stack App: AI-based Personalized Job-Tracker
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
      marginRight: "15px", // Adding space between links
    }}
  >
    GitHub
  </a>
  <span
    style={{
      fontWeight: "bold", // Making the separator bold
      fontSize: "24px", // Matching the font size
      color: "black", // Non-purple color for the separator
      marginRight: "15px", // Adding space after the separator
    }}
  >
    |
  </span>
  <a
    href="https://www.youtube.com/watch?v=RJGbdhfayPg&ab_channel=sukruthKM"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#9b59b6", // Using the same color
      fontWeight: "bold",
      fontSize: "24px", // Same font size
      textDecoration: "underline",
    }}
  >
    Demo
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
          Full-Stack App: AI-powered StackOverflow
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
      fontSize: "24px", // Adjusting font size as per your requirement
      textDecoration: "underline",
      marginRight: "15px", // Adding space between links
    }}
  >
    GitHub
  </a>
  <span
    style={{
      fontWeight: "bold", // Making the separator bold
      fontSize: "24px", // Matching the font size
      color: "black", // Non-purple color for the separator
      marginRight: "15px", // Adding space after the separator
    }}
  >
    |
  </span>
  <a
    href="https://www.youtube.com/watch?v=_rBbGJGeZG0&ab_channel=SukruthGowda"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#9b59b6", // Using the same color
      fontWeight: "bold",
      fontSize: "24px", // Same font size
      textDecoration: "underline",
    }}
  >
    Demo
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
            <li><strong>Ask a Question:</strong> Users can ask any question from a category of their choice, enabling focused exploration. StackAI provides a customized AI solution by leveraging advanced AI models like OpenAI and Sentence Transformer which are meticulously fine-tuned. To enhance credibility, it also provides links to the three most related questions on Stack Overflow, creating a comprehensive response that developers can trust.</li>
            <li><strong>Deep Dive into Questions:</strong> Users can then select any question from Stack Overflow to view it's answer in a simplified manner. In cases where no accepted answer exists, StackAI generates a reliable response. For lengthy accepted answers, it provides concise summaries, ensuring up to the point crisp solutions.</li>
            <li><strong>Craft a Question:</strong> If the user still doesn't find a solution to their query, StackAI facilitates easy transition to Stack Overflow's human-driven community. It crafts well-structured questions in the same Stack Overflow format, simplifying the process of posting a question to seek human assistance.</li>
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
      imgPath: image14, // Placeholder for the project card image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Cloud Native Web App
        </span>
      ),
      description: (
        <>
          <strong>Tech Stack:</strong>
          <ul>
            <li><strong>Backend:</strong> Flask</li>
            <li><strong>Infrastructure:</strong> Terraform</li>
            <li><strong>Cloud Provider:</strong> AWS (EC2, S3, RDS, VPC, Route53)</li>
            <li><strong>Version Control:</strong> GIT</li>
            <li><strong>CI/CD:</strong> GitHub Actions</li>
            <li><strong>Testing Tools:</strong> Postman, JMeter, unittest</li>
            <li><strong>Database:</strong> PostgreSQL, later migrated to RDS</li>
          </ul>
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/Flask-AWS-Terraform-Packer-CICD"
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
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project Overview</h5>
          <p>
            This project is about developing and deploying a Flask-based REST API backend app using AWS services (EC2, S3, RDS, VPC, Route53). The project involved utilizing GIT for version control, GitHub Actions for CI/CD, Terraform for infrastructure as code, and Packer for creating Amazon Machine Images.
          </p>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>App Details</h5>
          <ul>
  <li><strong>Flask</strong> - was used to create a RESTful API that provides access to the app's data and functionality.</li>
  <li><strong>Terraform</strong> - was used to define and manage the AWS infrastructure required to run the app, including EC2 instances, S3 buckets, RDS databases, VPCs, and Route53 DNS records.</li>
  <li><strong>Packer</strong> - was used to build custom Amazon Machine Images (AMIs) that include all the dependencies and configuration required to run the app on EC2 instances.</li>
  <li><strong>AWS CLI, Zsh</strong> - AWS CLI and Zsh were used to interact with the AWS APIs and automate the deployment of the app to EC2 instances.</li>
  <li><strong>Postman</strong> - was used to test the app's RESTful API and ensure that it returns the expected results.</li>
  <li><strong>JMeter</strong> - was used to perform load testing on the app and measure its performance under heavy load.</li>
  <li><strong>unittest</strong> - was used to write and run unit tests for the app's code to ensure that it works as expected.</li>
  <li><strong>GitHub Actions</strong> - was used to automate the build, test, and deployment of the app whenever changes were pushed to the repository.</li>
  <li><strong>GIT</strong> - was used to track changes to the app's code and collaborate with other developers.</li>
  <li><strong>statsd</strong> - was used to collect and log metrics from the app, such as request rates, response times, and error rates.</li>
  <li><strong>boto3</strong> - was used to interact with S3 buckets from Python code and store/retrieve data from S3.</li>
  <li><strong>bcrypt</strong> - was used to securely hash user passwords and authenticate users when they log in to the app.</li>
  <li><strong>SQLAlchemy</strong> - was used to define the app's database schema and bootstrap the database with initial data.</li>
  <li><strong>VS Code</strong> - was used as the primary code editor for developing the app's code.</li>
  <li><strong>PostgreSQL</strong> - was used as the initial database for storing the app's data, later migrated to RDS.</li>
</ul>

          <div style={{ marginTop: "20px" }}>
            <img src={image20} alt="Image 13" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={image15} alt="Image 14" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          </div>
        </div>
      ),
    }, 
    {
      imgPath: pic60, // Title image for Project 2
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Custom LLM & GPT Fine-Tuning with Multi-Agent AI
        </span>
      ),
      description: (
        <>
          <strong>Tech Stack:</strong>
          <ul>
            <li><strong>Programming:</strong> Python</li>
            <li><strong>Libraries:</strong> PyTorch, TensorFlow</li>
            <li><strong>Concepts:</strong> LLM, RLHF, NLP, Deep Learning</li>
          </ul>
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/LLM-course-projects-combined---Northeastern-University"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9b59b6", // Using the same color
                fontWeight: "bold",
                fontSize: "24px", // Adjusting font size
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
            This project demonstrates the development and fine-tuning of a custom GPT-based Language Model, 
            integrating advanced techniques such as multi-agent orchestration, reinforcement learning, and alignment tuning. 
            The goal is to create a highly capable text generation system tailored for specific intents.
          </p>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>App Details</h5>
          <ul>
            <li><strong>Model Development:</strong> Built a scalable GPT-based LLM with features like multi-head attention, positional encodings, and tokenization, ensuring robust text generation capabilities tailored for instruction-based tasks.</li>
            <li><strong>Fine-Tuning Techniques:</strong> Applied LoRA for fine-tuning, using innovative techniques like instruction backtranslation and self-augmentation. This enabled alignment of the model's outputs with the intended user instructions.</li>
            <li><strong>Advanced Optimizations:</strong> Implemented Deep Policy Optimization (DPO), Reinforcement Learning with Human Feedback (RLHF), and multi-agent AI orchestration. These approaches improved dialogue quality, response adherence, and overall performance.</li>
          </ul>
        </div>
      ),
    },    
      
    {
      imgPath: pic40, // Placeholder for the project card image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          User Recommendation System
        </span>
      ),
      description: (
        <>
          <ul>
            <li><strong>Backend:</strong> FastAPI</li>
            <li><strong>Infrastructure:</strong> Docker, Terraform</li>
            <li><strong>Cloud Provider:</strong> GCP (CloudSQL, GCS bucket)</li>
            <li><strong>Data Pipeline:</strong> Airflow</li>
            <li><strong>Testing Tools:</strong> Postman</li>
            <li><strong>Database:</strong> Redis, CloudSQL (PostgreSQL)</li>
            <li><strong>AI Models:</strong> OpenAI, SBERT, LangChain</li>  
            <li><strong>Vector Store:</strong> Pinecone</li>
          </ul>
        
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/Big-Data-Systems-and-Intelligent-Analytics---Northeastern-University/tree/Sukruth-branch"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9b59b6",
                fontWeight: "bold",
                fontSize: "24px",
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
            A user recommendation app leveraging Machine Learning techniques such as OpenAI, SBERT, and LangChain LLM models that allows users to input queries, view summaries, ask questions, analyze images, get similar images, and create image clusters.
          </p>
          
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>App Details</h5>
          <ul>
            <li><strong>Redis:</strong> Stored hash keys of companies' earnings statement and its embeddings using OpenAI and SBert.</li>
            <li><strong>FastAPI:</strong> User registration, authentication, and login.</li>
            <li><strong>Streamlit:</strong> User interface where users can perform hybrid filtering and querying to get the result.</li>
            <li><strong>Airflow:</strong> Data pipeline automation using DAGs to retrieve data source from GitHub and load it into Redis.</li>
            <li><strong>Docker:</strong> To create a dockerized app of Redis, Streamlit, FastAPI, and Airflow.</li>
            <li><strong>Postman:</strong> To check the health of FastAPI endpoints and to send POST/GET requests.</li>
            <li><strong>OpenAI text-embedding-ada-002 model:</strong> Used to compute embeddings for each chunk of the earnings transcript and add them as a column in Redis.</li>
            <li><strong>SBERT sentence-transformers/all-MiniLM-L6-v2 model:</strong> Used to compute embeddings for each chunk of the earnings transcript and add them as a column in the database.</li>
            <li><strong>LangChain:</strong> Used for generative Q&A and summaries of the transcript.</li>
            <li><strong>CloudSQL Postgres database:</strong> Stores metadata of the transcript dataset.</li>
            <li><strong>GCS bucket:</strong> Used to store data from GitHub in a bucket.</li>
            <li><strong>Azure Computer Vision:</strong> For image analysis, clustering, getting similar images using an image or user input.</li>
            <li><strong>Pinecone:</strong> Used to store OpenAI embeddings for each chunk of the earnings transcript.</li>
          </ul>
    
          <div style={{ marginTop: "20px" }}>
            <img src={pic19} alt="Image 16" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic28} alt="Image 17" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic09} alt="Image 18" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic07} alt="Image 19" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic25} alt="Image 20" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic08} alt="Image 21" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          
          </div>
        </div>
      ),
    },
    
    {
      imgPath: pic01, // Placeholder for the project card image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Data Analysis and Visualization
        </span>
      ),
      description: (
        <>
          <ul>
      <li><strong>SQL Data Exploration:</strong> Explored and queryed the database to extract relevant insights.</li>
      <li><strong>Pivot Tables:</strong> Created pivot tables in Excel to analyze relationships between columns.</li>
      <li><strong>Exploratory Data Analysis (EDA):</strong> Performed data cleaning and statistical analysis using Python.</li>
      <li><strong>Data Visualization:</strong> Built interactive Tableau dashboards to visualize and analyze the statistics.</li>
    </ul>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/Tableau-Data-Analysis-and-Visualization"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9b59b6",
                fontWeight: "bold",
                fontSize: "24px",
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
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project-1 Details</h5>
          <h6 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "10px" }}>Overview</h6>
          <p>
            The aim of this project is to analyze the IPL data from 2008 to 2020 and gain insights into various aspects of the game, such as team performance, player performance, match outcomes, toss decisions, venues, seasons, etc. The project involves the following steps:
          </p>
          <ul>
            <li>
              <strong>Data Collection:</strong> The IPL data is collected from Kaggle. The data consists of two CSV files: matches.csv and balls.csv. The matches.csv file contains information about each match, such as date, venue, teams, toss, result, etc. The balls.csv file contains information about each ball delivered in each match, such as batsman, bowler, runs scored, wickets taken, etc.
            </li>
            <li>
              <strong>Exploratory Data Analysis:</strong> The IPL data is analyzed using Python to perform various statistical and graphical methods to explore and understand the data. The analysis involves finding patterns, trends, correlations, and insights from the data using statistics and correlation.
            </li>
            <li>
              <strong>Data Cleaning:</strong> The IPL data is cleaned using Python - Pandas and Numpy to remove or impute missing values, duplicates, errors, outliers, and inconsistent values.
            </li>
            <li>
              <strong>Data Visualization:</strong> The cleaned IPL dataset is visualized using Tableau to create interactive dashboards that communicate the findings clearly and effectively. The dashboards include various graphical representations of the data.
            </li>
          </ul>
          <img src={pic05} alt="Data Visualization 1" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project-2 Details</h5>
          <h6 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "10px" }}>Overview</h6>
          <p>
            The aim of this project is to analyze the sales data and gain insights into various aspects of the business, such as customer behavior, product performance, sales trends, etc. The project involves the following steps:
          </p>
          <ul>
            <li>
              <strong>SQL Data Exploration:</strong> The sales data is explored using SQL to perform various queries and joins to extract relevant information from multiple tables.
            </li>
            <li>
              <strong>Pivot Tables:</strong> The sales data is imported from a MySQL database into Excel and pivot tables are created to show relationships between columns and analyze the data.
            </li>
            <li>
              <strong>Data Visualization:</strong> The sales data is imported into Tableau from Excel and worksheets and dashboards are created to visualize the data with filters such as year and states.
            </li>
          </ul>
    
          <div style={{ marginTop: "20px" }}>
            
            <img src={pic16} alt="Data Visualization 2" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic17} alt="Data Visualization 2" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          </div>
        </div>
      ),
    },
    
    {
      imgPath: pic03, // Placeholder for the project card image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Machine Learning
        </span>
      ),
      description: (
        <>
          <ul>
            <li><strong>Exploratory Data Analysis</strong></li>
            <li><strong>Data Preprocessing</strong></li>
            <li><strong>Model Training</strong></li>
            <li><strong>Model Testing and Evaluation</strong></li>
          </ul>
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/Data-Analysis-and-Prediction-of-Wine-Color-and-Quality-"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9b59b6",
                fontWeight: "bold",
                fontSize: "24px",
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
            This project focuses on analyzing the chemical compositions of a wine dataset and performing multi-class classification to determine its type (red or white) and quality (low, medium, or high). Various supervised learning algorithms are used to achieve this.
          </p>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project Details</h5>
          <ul>
            <li><strong>Exploratory Data Analysis:</strong> The wine data is analyzed using Python to perform statistical and graphical methods, uncovering patterns, trends, and correlations.</li>
            <li><strong>Data Preprocessing:</strong> Data cleaning includes removing duplicates, errors, outliers, and normalizing and label-encoding the dataset for training.</li>
            <li><strong>Model Training and Testing:</strong> Machine learning models are trained and tested for binary classification (wine color) and multi-class classification (wine quality). Metrics such as accuracy, precision, recall, and F1-score are used for evaluation.</li>
            <li><strong>Model Selection and Hyperparameter Tuning:</strong> Best-performing models are fine-tuned using grid search and cross-validation to enhance their performance.</li>
          </ul>
    
          <div style={{ marginTop: "20px" }}>
            <img src={pic04} alt="Image 1" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic10} alt="Image 2" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          </div>
        </div>
      ),
    },
    {
      imgPath: pic21, // Placeholder for the project card image
      title: (
        <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '24px' }}>
          Deep Learning
        </span>
      ),
      description: (
        <>
          <ul>
            <li><strong>Data Preprocessing</strong></li>
            <li><strong>Model Training and Testing</strong></li>
            <li><strong>User Interface Development</strong></li>
            <li><strong>Model Deployment</strong></li>
          </ul>
    
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a
              href="https://github.com/Sukruthmothakapally/Hand-Written-Number-Recognition-using-JavaFX-and-TensorFlow/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9b59b6",
                fontWeight: "bold",
                fontSize: "24px",
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
            This project focuses on building a handwritten number recognition system using TensorFlow and JavaFX. It involves a deep learning model trained on the MNIST dataset and a user-friendly interface for interactive predictions.
          </p>
    
          <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>Project Details</h5>
          <ul>
            <li><strong>Data Preprocessing:</strong> The MNIST dataset is normalized and prepared for training using TensorFlow and Numpy, ensuring consistency in the data for effective learning.</li>
            <li><strong>Model Training and Testing:</strong> A deep learning model is built using TensorFlow, trained on the preprocessed dataset, and tested for its accuracy in recognizing handwritten digits.</li>
            <li><strong>User Interface Development:</strong> A JavaFX-based interface is designed to allow users to draw digits, which are then predicted by the trained TensorFlow model in real-time.</li>
            <li><strong>Model Deployment:</strong> The TensorFlow model and JavaFX interface are integrated into a standalone application that can run seamlessly on various platforms.</li>
          </ul>
    
          <div style={{ marginTop: "20px" }}>
            <img src={pic12} alt="Image 1" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic11} alt="Image 2" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
            <img src={pic13} alt="Image 3" style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
          </div>
        </div>
      ),
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