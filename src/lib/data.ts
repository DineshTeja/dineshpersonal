import React from "react";
import climateneutral from "/public/climateneutral.png";
import anycheck from "/public/anychecklogo.png";
import polydata from "/public/polydatasmaller_web.png";
import commonwealth from "/public/commonwealthlogo.png";
import { DiCode } from "react-icons/di";
import { FaGithub, FaUniversity, FaVoteYea, FaYCombinator } from "react-icons/fa";
import { SiCocacola, SiWalmart } from "react-icons/si";
import { Education, Experience, Project, TinyTool, Movie } from "./types";
import { BsLinkedin } from "react-icons/bs";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/DineshTeja" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/in/dinesh-vasireddy/" },
  { Icon: FaXTwitter, href: "https://twitter.com/dineshtva" },
  { Icon: EnvelopeClosedIcon, href: "mailto:dineshvasireddy@college.harvard.edu" },
];

export const educationData: Education[] = [
  {
    company: "Harvard",
    location: "Cambridge, MA",
    description: "CS & Gov",
    icon: React.createElement(FaUniversity),
    date: "2023",
    src: "/harvard.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    company: "Z Fel lows",
    location: "San Francisco, CA",
    description: "https://www.zfellows.com/",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/z_fellows.jpeg",
    href: "https://www.zfellows.com/",
  },
]

export const tinyTools: TinyTool[] = [
  {
    name: "stack.wrld",
    description: "a beautiful tool to track all of your tech stacks with notion-like notetaking functionality.",
    href: "https://github.com/DineshTeja/stackwrld",
    demo: "https://stackwrld.com/",
  },
  {
    name: "subs.wrld",
    description: "one page tool for tracking your subscriptions.",
    href: "https://github.com/DineshTeja/subscriptions",
    demo: "https://subs.wrld.sh/",
  },
  {
    name: "groq70.wrld",
    description: "simple personal chat interface, using llama 3.1 70b.",
    href: "https://github.com/DineshTeja/groqinterface",
    demo: "https://groq70.wrld.sh/",
  },
  {
    name: "varsa.wrld",
    description: "open-source multilingual LLM playground",
    href: "https://github.com/DineshTeja/varsa",
    demo: "https://varsa.wrld.sh/",
  },
]

export const experiencesData: Experience[] = [
  {
    title: "Engineering, AI",
    company: "Cartesia",
    location: "San Francisco, CA",
    description: "Productizing real-time multimodal intelligence. Incoming Summer 2025.",
    icon: React.createElement(FaYCombinator),
    date: "2025",
    src: "/cartesia.png",
    href: "https://www.cartesia.ai/",
    tags: [],
  },
  {
    title: "Engineering",
    company: "CoFrame",
    location: "San Francisco, CA",
    description: "Building living interfaces for the web. Automating performance marketing for enterprise (JPM, CapitalOne, NerdWallet).",
    icon: React.createElement(FaYCombinator),
    date: "2025",
    src: "/coframe.png",
    href: "https://www.coframe.com/",
    tags: ["Next.js", "Python","LangGraph", "MongoDB", "LLMs"],
  },
  {
    title: "Software Engineer",
    company: "GovDash (YC W22)",
    location: "New York, NY",
    description: "AI for GovCon.",
    icon: React.createElement(FaYCombinator),
    date: "2024-25",
    src: "/govdash.png",
    href: "https://govdash.com/",
    tags: ["Next.js", "Python", "LLMs", "Prisma", "Redis", "AWS", "PostgreSQL", "TRPC"],
  },
  {
    title: "Engineering",
    company: "Coca-Cola",
    location: "Cambridge, MA",
    description: "Led a case team to build a black box for market risk and success simulation in the Asia Pacific Operating Unit powered by neural networks, and deployed in production to drive business decisions for 200+ finance analysts.",
    icon: React.createElement(SiCocacola),
    date: "2024",
    src: "/cocacolalogo.png",
    href: "/",
    tags: ["Python", "PyTorch", "Keras", "Google Cloud", "Streamlit"],
  },
  {
    title: "Data Scientist",
    company: "SkyGrid",
    location: "Cambridge, MA",
    description: "Confidential.",
    icon: React.createElement(DiCode),
    date: "2023",
    src: "/skygrid.png",
    href: "/",
    tags: ["Python", "R", "Statistics"],
  },
  {
    title: "Software Engineer",
    company: "ClimateNeutral",
    location: "Cambridge, MA",
    description: "Piloted a Custom LLM assistant (Used by 347 Brands) focused on generating comprehensive sustainability plans by analyzing business and sales data. Fine-tuned on international climate standards using transfer learning and domain adaptation.",
    icon: React.createElement(DiCode),
    date: "2023",
    src: "/climateneutral.png",
    href: "/",
    tags: ["Python", "Flask", "LangChain & LangGraph", "Fast.ai", "OpenAI"],
  },
  {
    title: "Founder & CEO",
    company: "PolyData",
    location: "United States of America",
    description:
      "Developed and distributed a collection of contract-bound AI-driven election analysis models focused on optimizing political campaign operations, interpreting electoral outcomes, and understanding voter behavior in local, state, and federal elections. Bootstrapped and scaled to $70K ARR.",
    icon: React.createElement(FaVoteYea),
    date: "2021-23",
    src: "/polydatasmaller_web.png",
    href: "https://polydataelect.vercel.app/",
    tags: ["React", "Python", "TensorFlow", "Supabase", "Google Cloud", "AWS", "D3.js"],
  },
  {
    title: "ML Engineer",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    description:
      "Created and deployed a global E-Commerce Demand Forecasting Model (80% Accuracy, Used by 152K Merchants, Impacts 300M+ Users, Optimized Sales for 6.5M+ Products) of Walmart.com sales to optimize online Apparel sales.",
    icon: React.createElement(SiWalmart),
    date: "2021-22",
    src: "/walmartglobal.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
    tags: ["Python", "PyTorch", "Keras", "AWS", "Element"],
  },
] as const;

export const projectData: Project[] = [
  {
    name: "Supernova", 
    tagline: "AI Influencer Ad-maker for Tiktok",
    description: "Co-developed Supernova, an AI-powered platform that creates TikTok-style ads from just a product link, winning 2nd Place at Stanford Tree Hacks. The system generates realistic short-form content for major brands in under 3 minutes by combining HeyGen and SyncLabs for video generation, Runway for B-roll, Cartesia for voiceovers, and custom market research pipelines powered by Perplexity, Groq, and Deepseek.",
    href: "https://supernova0.vercel.app/",
    tags: ["OpenAI", "Next.js", "HeyGen", "SyncLabs", "Runway", "Cartesia", "Perplexity", "Groq"],
    src: "/supernova.png",
    date: "2025",
    links: [
      {
        name: "Try it out!",
        href: "https://supernova0.vercel.app/",
      },
      
    ]
  },
  {
    name: "SpiceX", 
    tagline: "Explanation framework for LLMs centered around bias-probing",
    description: "Co-developed SPICE-X, a framework that identifies and explains biases in large language models by combining global and contrastive explanation techniques. It analyzes how model outputs shift across demographic attributes, providing actionable insights for bias detection and mitigation in critical domains like healthcare and finance.",
    href: "https://spicexbias.vercel.app/",
    tags: ["Python", "OpenAI", "Next.js", "PyTorch"],
    src: "/spicex.png",
    date: "2024",
  },
  {
    name: "Lightspeed",
    tagline: "AI platform that helps political organizations create winning ads faster.",
    description:
    "I'm currently bootstrapping and building Lightspeed, a single AI workflow for political media monitoring, PR, & advertising teams. Lightspeed allows political organizations to make smarter political ads faster and cheaper through real-time insights, social listening, AI ad creation, targeted messaging, and more.",
    href: "https://lightspeedads.netlify.app/",
    tags: ["Next.js", "Python", "OpenAI", "Perplexity", "Supabase"],
    src: "/lightspeed.png",
    date: "2024",
    links: [
      {
        name: "Check it out!",
        href: "https://lightspeedads.netlify.app/",
      },
    ]
  },
  {
    name: "Aria",
    tagline: "conversational video AI for healthcare intelligence",
    description: "Co-built Aria, the first realtime (and human-like) video conversational AI for healthcare intelligence. Aria helps patients ask healthcare questions, receive medical recommendations backed by PubMed and MedlineHealth, and find physician from a network of 100,000+ doctors. Early design partner for Anam.ai, a state-of-the-art AI conversational video API.",
    href: "https://ariamed.vercel.app/",
    tags: ["Next.js", "Python", "OpenAI", "Groq", "Llama", "Supabase", "Anam.ai"],
    src: "/aria.png",
    date: "2024",
    links: [
      {
        name: "Try it out!",
        href: "https://ariamed.vercel.app/",
      },
      {
        name: "Github",
        href: "https://github.com/DineshTeja/aria",
      }, 
      {
        name: "Devpost",
        href: "https://devpost.com/software/aria-sc10g2",
      }
    ]
  },
  {
    name: "Rally AI",
    tagline: "AI personas for political video ads",
    description:
    "Co-built Rally AI, an AI platform that generates personalized political ads featuring candidate personas. Rally scrapes local news and economic data using Firecrawl and Perplexity, then stores curated insights in a Supabase database. GPT4o-mini crafts speeches in the politician's style, while Cartesia.ai's Sonic text-to-speech creates voice narration. Pexels provides B-roll footage, and SyncLabs lip-syncs the narration to existing footage of the candidate. The final ad integrates stock footage and voice to match relevant voter concerns. Rally AI won 2nd Place Overall and Best Design at PennApps 2024.",
    href: "https://rally-ai.vercel.app/",
    tags: ["Next.js", "Firecrawl", "OpenAI", "Perplexity", "Cartesia.ai", "SyncLabs", "Llama"],
    src: "/rally.png",
    date: "2024",
    links: [
      {
        name: "Try it out!",
        href: "https://rally-ai.vercel.app/",
      },
    ]
  },
  {
    name: "Commonwealth.ai",
    tagline: "Political research and structured data engine",
    description:
    "Built a political research engine that indexes articles, enables semantic search, and extracts structured data using LLMs and RAG. 2150+ users (a few paid), 12000+ articles indexed, and 15 campaign users on our first product.",
    href: "https://commonwealthai.netlify.app/",
    tags: ["React", "Next.js", "Supabase", "OpenAI", "Deno", "LLMs"],
    src: "/commonwealthlogo.png",
    date: "2024",
  },
  {
    name: "AccesSOS",
    tagline: "Translation tool for globalizing web products",
    description:
      "Led a team of software engineers to build a translation database tool for AccesSOS' devs to easily convert their websites into multiple languages. The tool is built with React, Next.js, and Supabase.",
    href: "/",
    tags: ["React", "Next.js", "Supabase", "Google Cloud", "Python"],
    src: "/accessos.png",
    date: "2024",
  },
  {
    name: "Resilience Week 2023",
    tagline: "LLMs, Cybersecurity, & Defense (IEEE published)",
    description:
      "Conducted and led NSF-sponsored research advised by Prof. Qinghua Li at UARK's Cybersecurity Center for Secure Evolvable Energy Delivery Systems (SEEDS) investigating the use of language learning models and machine learning algorithms (Doc2Vec, Fast.ai, Advanced BERT Models) to improve the Common Vulnerability Scoring System and effectively classify computer system vulnerabilities. Accepted for publication by Defense TechConnect for Resilience Week 2023 in Washington D.C.",
    href: "https://ieeexplore.ieee.org/document/10284627",
    tags: ["Python", "Flask", "Google Cloud", "Fast.ai", "LLMs", "BERT"],
    src: "/rweek.png",
    date: "2023",
    links: [
      {
        name: "Publication",
        href: "https://ieeexplore.ieee.org/document/10284627",
      },
    ]
  },
  {
    name: "Arkansas United",
    tagline: "Automated resources portal for Arkansas United",
    description: "Developed and launched an online automated resources portal AUNow (2K+ National Users, 10+ Partners, 50K Visits, Largest in Arkansas). Created machine learning models for electoral analysis and social media listening to develop optimized technology-related policy proposals.",
    href: "https://www.arkansasunited.org/",
    tags: ["Next.js", "Python", "Firebase", "Render"],
    src: "/arkansasunited.png",
    date: "2023",
  },
  {
    name: "Datategy",
    tagline: "ML algorithms for financial analysis",
    description:
      "Developed, optimized, and deployed three new machine learning algorithms, focused on financial analysis and data management, for Datategy's PapAI Business AI Platform (20+ International Clients).",
    href: "https://www.datategy.net/",
    tags: ["Python", "PyTorch", "TensorFlow", "Keras", "AWS"],
    src: "/datategy.png",
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Commonwealth.ai",
    description:
      "Built a political research engine that indexes and performs sentiment analysis on political articles to create an efficient standard and verifiable structure for news articles, enables semantic search via LLMs and RAG, facilitates instant LLM-powered structured list creation, bulk data extraction on a granular level, and supports research thread management. We're creating a high-speed pipeline for extracting structured data from the treasure trove that is news media.",
    tags: ["React", "Next.js", "Supabase", "OpenAI", "Deno", "LLMs"],
    imageUrl: commonwealth,
    url: "https://commonwealthai.netlify.app/",
  },
  {
    title: "AnyCheck",
    description:
      "Assembled an application utilizing a custom-trained large language model enhanced via relevant news articles, integrated speech recognition, and real-time analytical feedback, designed to enhance information accuracy through voice-activated claims submission and comprehensive PDF essay analysis.",
    tags: ["Flask", "Google Cloud", "Fast.ai", "BERT", "LLMs"],
    imageUrl: anycheck,
    url: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    title: "ClimateNeutral LLM",
    description:
      "Piloted a Custom LLM assistant (Used by 347 Brands) focused on generating comprehensive sustainability plans by analyzing business and sales data. Fine-tuned on international climate standards using transfer learning and domain adaptation.",
    tags: ["Flask", "Langchain", "Fast.ai", "LLMs"],
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

export const favoriteMovies: Movie[] = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
    posterUrl: "/posters/shawshank.png",
    rating: 9.5,
  },
  {
    title: "Rocky",
    year: 1976,
    director: "John G. Avildsen",
    genre: "Sports Drama",
    posterUrl: "/posters/rocky.png",
    rating: 9.0,
  },
  {
    title: "Logan",
    year: 2017,
    director: "James Mangold",
    genre: "Superhero Drama",
    posterUrl: "/posters/logan.png",
    rating: 8.5,
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    director: "Gabriele Muccino",
    genre: "Biographical Drama",
    posterUrl: "/posters/pursuit.png",
    rating: 8.5,
  },
  {
    title: "KGF: Chapter 2",
    year: 2022,
    director: "Prashanth Neel",
    genre: "Action Drama",
    posterUrl: "/posters/kgf2.png",
    rating: 9.0,
  },
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    director: "S. S. Rajamouli",
    genre: "Epic Action",
    posterUrl: "/posters/baahubali.png",
    rating: 9.0,
  },
  {
    title: "Jersey",
    year: 2019,
    director: "Gowtam Tinnanuri",
    genre: "Sports Drama",
    posterUrl: "/posters/jersey.png",
    rating: 8.5,
  },
  {
    title: "Pokiri",
    year: 2006,
    director: "Puri Jagannadh",
    genre: "Action Thriller",
    posterUrl: "/posters/pokiri.png",
    rating: 8.5,
  },
] as const;