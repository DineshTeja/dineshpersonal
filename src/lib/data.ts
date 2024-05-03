import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineDatabase, AiOutlineCloudSync } from "react-icons/ai";
import { GiMagnifyingGlass, GiArtificialIntelligence } from "react-icons/gi";
import { DiCode } from 'react-icons/di';
import { MdOutlineSmartToy } from 'react-icons/md';
import climateneutral from "/public/climateneutral.png";
import anycheck from "/public/anychecklogo.png";
import polydata from "/public/polydatasmaller_web.png";
import commonwealth from "/public/commonwealthlogo.png";

export const reftbl = [
    { name: "Home",       ref: "#home" },
    { name: "About",      ref: "#about" },
    { name: "Skills",     ref: "#skills" },
    { name: "Projects",   ref: "#projects" },
    { name: "Experience", ref: "#experience" },
    { name: "Contact",    ref: "#contact" },
  ] as const;

export const experiencesData = [
  {
    title: "LLMs @ GovDash (YC W22)",
    location: "New York City, NY",
    description:
        "AI for GovCon. Internship.",
    icon: React.createElement(AiOutlineCloudSync),
    date: "May 2024 - Present",
  },
  {
    title: "Case Team Lead @ Harvard Data Analytics Group",
    location: "Cambridge, MA",
    description:
      "Managing high-volume consulting cases for Fortune 500 clients in aviation, beverages, etc. Employing advanced statistical methods, including Monte Carlo Risk Analysis, Market Segmentation Modelling, in Python/ R to analyze high-volume datasets and predict market risks and trends.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - Present",
  },
  {
    title: "Software Engineer @ Arkansas United",
    location: "Fayetteville, AR",
    description:
      "Developed and launched an online automated resources portal AUNow (2K+ National Users, 10+ Partners, 50K Visits, Largest in Arkansas). Created machine learning models for electoral analysis and social media listening to develop optimized technology-related policy proposals.",
    icon: React.createElement(DiCode),
    date: "October 2022 - June 2023",
  },
  {
    title: "Machine Learning Intern @ Datategy NextGen AI",
    location: "Paris, France",
    description:
      "Developed, optimized, and deployed three new machine learning algorithms, focused on financial analysis and data management, for Datategy’s PapAI Business AI Platform (20+ International Clients).",
    icon: React.createElement(GiArtificialIntelligence),
    date: "June 2022 - September 2022",
  },
  {
    title: "Software Engineering & Data Science Intern @ Walmart Global Tech",
    location: "Bentonville, AR",
    description:
      "Created and deployed a global E-Commerce Demand Forecasting Model (80% Accuracy, Used by 152K Merchants, Impacts 300M+ Users, Optimized Sales for 6.5M+ Products) of Walmart.com sales to optimize online Apparel sales.",
    icon: React.createElement(AiOutlineDatabase),
    date: "September 2021 - May 2022",
  },
  {
    title: "AI/ML Research Assistant @ University of Arkansas SEEDS Center",
    location: "Fayetteville, AR",
    description: "Conducted and led NSF-sponsored research advised by Prof. Qinghua Li at UARK’s Cybersecurity Center for Secure Evolvable Energy Delivery Systems (SEEDS) investigating the use of language learning models and machine learning algorithms (Doc2Vec, Fast.ai, Advanced BERT Models) to improve the Common Vulnerability Scoring System and effectively classify computer system vulnerabilities.",
    icon: React.createElement(MdOutlineSmartToy),
    date: "April 2021 - June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Commonwealth.ai",
    description:
      "Built a software tool that indexes and performs sentiment analysis on thousands of mainstream political articles daily, allows users to chat with articles via LLMs and RAG (contextualized using political publications and Twitter trends), and maintain day-to-day research threads.",
    tags: ["React", "Next.js", "Langchain", "Google Cloud", "Firebase", "LLMs"],
    imageUrl: commonwealth,
    url: "https://commonwealthai.netlify.app/",
  },
  {
    title: "AnyCheck",
    description:
      "Assembled an application utilizing a custom-trained large language model enhanced via relevant news articles, integrated speech recognition, and real-time analytical feedback, designed to enhance information accuracy through voice-activated claims submission and comprehensive PDF essay analysis.",
    tags: ["Flask", "Google Cloud", "Fast.ai", "LLMs", "BERT"],
    imageUrl: anycheck,
    url: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    title: "ClimateNeutral LLM",
    description:
    "Piloted a Custom LLM assistant (Used by 347 Brands) focused on generating comprehensive sustainability plans by analyzing business and sales data. Fine-tuned on international climate standards using transfer learning and domain adaptation.",
    tags: ["Flask", "Langchain", "Fast.ai", "BERT", "LLMs"],
    imageUrl: climateneutral,
    url: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    title: "PolyData Electoral Innovation",
    description:
      "Developed and distributed a collection of contract-bound AI-driven election analysis models focused on optimizing political campaign operations, interpreting electoral outcomes, and understanding voter behavior in local, state, and federal elections.",
    tags: ["React", "Python", "TensorFlow", "Google Cloud", "AWS", "D3.js"],
    imageUrl: polydata,
    url: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Python",
    "TensorFlow",
    "PyTorch",
    "NLP",
    "BERT",
    "Transformers",
    "Hugging Face",
    "Knowledge Graphs",
    "Prompt Engineering",
    "Docker"
] as const;
