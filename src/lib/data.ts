import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineDatabase, AiOutlineCloudSync } from "react-icons/ai";
import { GiMagnifyingGlass, GiArtificialIntelligence } from "react-icons/gi";
import { DiCode } from "react-icons/di";
import { MdOutlineSmartToy } from "react-icons/md";
import climateneutral from "/public/climateneutral.png";
import anycheck from "/public/anychecklogo.png";
import polydata from "/public/polydatasmaller_web.png";
import commonwealth from "/public/commonwealthlogo.png";
import {
  FileTextIcon,
  InputIcon,
  GlobeIcon,
  CalendarIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { FaUniversity, FaVoteYea, FaYCombinator } from "react-icons/fa";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SiCocacola, SiWalmart } from "react-icons/si";

export const reftbl = [
  { name: "Home", ref: "#home" },
  { name: "About", ref: "#about" },
  { name: "Skills", ref: "#skills" },
  { name: "Projects", ref: "#projects" },
  { name: "Experience", ref: "#experience" },
  { name: "Contact", ref: "#contact" },
] as const;

export const educationData = [
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
    company: "Z Fellows",
    location: "San Francisco, CA",
    description: "https://www.zfellows.com/",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/z_fellows.jpeg",
    href: "https://www.zfellows.com/",
  },
]

export const experiencesData = [
  {
    title: "Engineering",
    company: "CoFrame",
    location: "San Francisco, CA",
    description: "Building living interfaces. Winter 2025.",
    icon: React.createElement(FaYCombinator),
    date: "2025",
    src: "/coframe.png",
    href: "https://www.coframe.com/",
    tags: ["Next.js", "Python", "OpenAI", "Anthropic"],
  },
  {
    title: "Software Engineer",
    company: "GovDash (YC W22)",
    location: "New York, NY",
    description: "AI for GovCon.",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/govdash.png",
    href: "https://govdash.com/",
    tags: ["Next.js", "Python", "OpenAI", "Anthropic", "Prisma", "Redis", "AWS", "PostgreSQL", "TRPC"],
  },
  {
    title: "Head of Engineering",
    company: "Arkansas United",
    location: "Fayetteville, AR",
    description:
      "Developed and launched an online automated resources portal AUNow (2K+ National Users, 10+ Partners, 50K Visits, Largest in Arkansas). Created machine learning models for electoral analysis and social media listening to develop optimized technology-related policy proposals.",
    icon: React.createElement(DiCode),
    date: "2022 - 2023",
    src: "/arkansasunited.png",
    href: "https://www.arkansasunited.org/",
    tags: ["Next.js", "Python", "Firebase", "Render"],
  },
  {
    title: "Founder & CEO",
    company: "PolyData",
    location: "Bentonville, AR",
    description:
      "Developed and distributed a collection of contract-bound AI-driven election analysis models focused on optimizing political campaign operations, interpreting electoral outcomes, and understanding voter behavior in local, state, and federal elections. Bootstrapped and scaled to $70K ARR.",
    icon: React.createElement(FaVoteYea),
    date: "2021 - 2023",
    src: "/polydatasmaller_web.png",
    href: "https://polydataelect.com/",
    tags: ["React", "Python", "TensorFlow", "Supabase", "Google Cloud", "AWS", "D3.js"],
  },
  {
    title: "ML Engineer",
    company: "Datategy",
    location: "Paris, France",
    description:
      "Developed, optimized, and deployed three new machine learning algorithms, focused on financial analysis and data management, for Datategy's PapAI Business AI Platform (20+ International Clients).",
    icon: React.createElement(GiArtificialIntelligence),
    date: "2022",
    src: "/datategy.png",
    href: "https://www.datategy.net/",
    tags: ["Python", "PyTorch", "TensorFlow", "Keras", "AWS"],
  },
  {
    title: "ML Research",
    company: "University of Arkansas",
    location: "Fayetteville, AR",
    description:
      "Conducted and led NSF-sponsored research advised by Prof. Qinghua Li at UARK's Cybersecurity Center for Secure Evolvable Energy Delivery Systems (SEEDS) investigating the use of language learning models and machine learning algorithms (Doc2Vec, Fast.ai, Advanced BERT Models) to improve the Common Vulnerability Scoring System and effectively classify computer system vulnerabilities.",
    icon: React.createElement(FaUniversity),
    date: "2021 - 2023",
    src: "/uark.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
    tags: ["Python", "Flask", "Fast.ai", "BERT", "Doc2Vec"],
  },
  {
    title: "ML Engineer",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    description:
      "Created and deployed a global E-Commerce Demand Forecasting Model (80% Accuracy, Used by 152K Merchants, Impacts 300M+ Users, Optimized Sales for 6.5M+ Products) of Walmart.com sales to optimize online Apparel sales.",
    icon: React.createElement(SiWalmart),
    date: "2021 - 2022",
    src: "/walmart.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
    tags: ["Python", "PyTorch", "Keras", "AWS", "Element"],
  },
] as const;

type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  tags: string[];
  src: string;
  date: string;
  links?: { name: string; href: string }[];
}

export const projectData: Project[] = [
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
    name: "Varsa",
    tagline: "Open-source multilingual LLM playground",
    description:
      "Built a multilingual LLM playground that allows users to fine-tune and test models in multiple languages. The playground supports a wide range of models and tasks, and allows users to easily switch between languages and models.",
    href: "https://varsa.vercel.app/",
    tags: ["Next.js", "Supabase", "Python", "Various LLMs"],
    src: "/varsa.png",
    date: "2024",
    links: [
      {
        name: "Use it now!",
        href: "https://varsa.vercel.app/",
      },
    ]
  },
  {
    name: "Coca-Cola",
    tagline: "Market risk and success simulation system",
    description:
      "Led a case team to build a black box for market risk and success simulation in the Asia Pacific Operating Unit powered by neural networks, and deployed in production to drive business decisions for 200+ finance analysts.",
    href: "/",
    tags: ["Python", "PyTorch", "Keras", "Google Cloud", "Streamlit"],
    src: "/cocacolalogo.png",
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
    name: "SkyGrid",
    tagline: "Market segmentation modeling system",
    description: "Confidential.",
    href: "/",
    tags: ["Python", "R", "Statistics"],
    src: "/skygrid.png",
    date: "2023",
  },
  {
    name: "ClimateNeutral",
    tagline: "Corporate sustainability assistant",
    description:
      "Piloted a Custom LLM assistant (Used by 347 Brands) focused on generating comprehensive sustainability plans by analyzing business and sales data. Fine-tuned on international climate standards using transfer learning and domain adaptation.",
    href: "/",
    tags: ["Python", "Flask", "LangChain/LangGraph", "Fast.ai", "OpenAI"],
    src: "/climateneutral.png",
    date: "2023",
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
  "Docker",
] as const;


export const favoriteMovies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
    posterUrl: "/shawshank_redemption_poster.jpg",
    rating: 9.5,
  },
  {
    title: "Rocky",
    year: 1976,
    director: "John G. Avildsen",
    genre: "Sports Drama",
    posterUrl: "/rocky_poster.jpg",
    rating: 9.0,
  },
  {
    title: "Logan",
    year: 2017,
    director: "James Mangold",
    genre: "Superhero Drama",
    posterUrl: "/logan_poster.jpg",
    rating: 8.5,
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    director: "Gabriele Muccino",
    genre: "Biographical Drama",
    posterUrl: "/pursuit_of_happyness_poster.jpg",
    rating: 8.5,
  },
  {
    title: "KGF: Chapter 1",
    year: 2018,
    director: "Prashanth Neel",
    genre: "Action Drama",
    posterUrl: "/kgf_poster.jpg",
    rating: 9.0,
  },
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    director: "S. S. Rajamouli",
    genre: "Epic Action",
    posterUrl: "/baahubali_poster.jpg",
    rating: 9.0,
  },
  {
    title: "Jersey",
    year: 2019,
    director: "Gowtam Tinnanuri",
    genre: "Sports Drama",
    posterUrl: "/jersey_poster.jpg",
    rating: 8.5,
  },
  {
    title: "Pokiri",
    year: 2006,
    director: "Puri Jagannadh",
    genre: "Action Thriller",
    posterUrl: "/pokiri_poster.jpg",
    rating: 8.5,
  },
] as const;