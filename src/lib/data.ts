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

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "GovDash (YC W22)",
    location: "New York City, NY",
    description: "AI for GovCon.",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/govdash.png",
    href: "https://govdash.com/",
  },
  // {
  //   title: "Case Team Lead @ Harvard Data Analytics Group",
  //   location: "Cambridge, MA",
  //   description:
  //     "Managing high-volume consulting cases for Fortune 500 clients in aviation, beverages, etc. Employing advanced statistical methods, including Monte Carlo Risk Analysis, Market Segmentation Modelling, in Python/ R to analyze high-volume datasets and predict market risks and trends.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "October 2023 - Present",
  // },
  {
    title: "Software Engineer",
    company: "Arkansas United",
    location: "Fayetteville, AR",
    description:
      "Developed and launched an online automated resources portal AUNow (2K+ National Users, 10+ Partners, 50K Visits, Largest in Arkansas). Created machine learning models for electoral analysis and social media listening to develop optimized technology-related policy proposals.",
    icon: React.createElement(DiCode),
    date: "2022 - 2023",
    src: "/arkansasunited.png",
    href: "https://www.arkansasunited.org/",
  },
  {
    title: "Machine Learning",
    company: "Datategy NextGen AI",
    location: "Paris, France",
    description:
      "Developed, optimized, and deployed three new machine learning algorithms, focused on financial analysis and data management, for Datategy’s PapAI Business AI Platform (20+ International Clients).",
    icon: React.createElement(GiArtificialIntelligence),
    date: "2022",
    src: "/datategy.png",
    href: "https://www.datategy.net/",
  },
  {
    title: "AI/ML Research",
    company: "University of Arkansas",
    location: "Fayetteville, AR",
    description:
      "Conducted and led NSF-sponsored research advised by Prof. Qinghua Li at UARK’s Cybersecurity Center for Secure Evolvable Energy Delivery Systems (SEEDS) investigating the use of language learning models and machine learning algorithms (Doc2Vec, Fast.ai, Advanced BERT Models) to improve the Common Vulnerability Scoring System and effectively classify computer system vulnerabilities.",
    icon: React.createElement(FaUniversity),
    date: "2021 - 2023",
    src: "/uark.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    title: "Software Engineer",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    description:
      "Created and deployed a global E-Commerce Demand Forecasting Model (80% Accuracy, Used by 152K Merchants, Impacts 300M+ Users, Optimized Sales for 6.5M+ Products) of Walmart.com sales to optimize online Apparel sales.",
    icon: React.createElement(SiWalmart),
    date: "2021 - 2022",
    src: "/walmart.png",
    href: "https://www.linkedin.com/in/dinesh-vasireddy/",
  },
  {
    title: "Founder & CEO",
    company: "PolyData",
    location: "Bentonville, AR",
    description:
      "Developed and distributed a collection of contract-bound AI-driven election analysis models focused on optimizing political campaign operations, interpreting electoral outcomes, and understanding voter behavior in local, state, and federal elections.",
    icon: React.createElement(FaVoteYea),
    date: "2021 - 2022",
    src: "/polydatasmaller_web.png",
    href: "https://polydataelect.com/",
  }
] as const;

export const features = [
  {
    Icon: FileTextIcon,
    name: "Commonwealth.ai",
    tagline: "political research and structured data engine",
    description:
    "Built a political research engine that indexes articles, enables semantic search, and extracts structured data using LLMs and RAG. 2150+ users, 12000+ articles indexed, and 15 campaign users on our first product.",
    href: "https://commonwealthai.netlify.app/",
    cta: "Take a look!",
    background: React.createElement(Image, {
      src: "/commonwealthlogo.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    tags: ["React", "Next.js", "Supabase", "OpenAI", "Deno", "LLMs"],
    src: "/commonwealthlogo.png",
    date: "2024",
  },
  {
    Icon: FileTextIcon,
    name: "Varsa",
    tagline: "open-source multilingual LLM playground",
    description:
      "Built a multilingual LLM playground that allows users to fine-tune and test models in multiple languages. The playground supports a wide range of models and tasks, and allows users to easily switch between languages and models.",
    href: "https://varsa.vercel.app/",
    cta: "Take a look!",
    background: React.createElement(Image, {
      src: "/varsa.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    tags: ["Next.js", "Supabase", "Various LLMs"],
    src: "/varsa.png",
    date: "2024",
  },
  {
    Icon: SiCocacola,
    name: "Coca-Cola Black Box",
    tagline: "market risk and success simulation system",
    description:
      "Led a case team to build a black box for market risk and success simulation in the Asia Pacific Operating Unit powered by neural networks, and deployed in production to drive business decisions for 200+ finance analysts.",
    href: "/",
    cta: "Reach out to learn more!",
    background: React.createElement(Image, {
      src: "/cocacolalogo.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    tags: ["PyTorch", "Keras", "Google Cloud", "Streamlit", "Python"],
    src: "/cocacolalogo.png",
    date: "2024",
  },
  {
    Icon: SiCocacola,
    name: "AccesSOS",
    tagline: "translation tool for globalizing web products.",
    description:
      "Led a team of software engineers to build a translation database tool for AccesSOS' devs to easily convert their websites into multiple languages. The tool is built with React, Next.js, and Supabase.",
    href: "/",
    cta: "Reach out to learn more!",
    background: React.createElement(Image, {
      src: "/accessos.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    tags: ["React", "Next.js", "Supabase", "Google Cloud", "Python"],
    src: "/accessos.png",
    date: "2024",
  },
  {
    Icon: InputIcon,
    name: "Resilience Week 2023",
    tagline: "a solid paper on LLMs & Cybersecurity (IEEE published)",
    description:
      "Conducted and led NSF-sponsored research advised by Prof. Qinghua Li at UARK's Cybersecurity Center for Secure Evolvable Energy Delivery Systems (SEEDS) investigating the use of language learning models and machine learning algorithms (Doc2Vec, Fast.ai, Advanced BERT Models) to improve the Common Vulnerability Scoring System and effectively classify computer system vulnerabilities. Accepted for publication by TechConnect for Resilience Week 2023 in Washington D.C.",
    href: "https://ieeexplore.ieee.org/document/10284627",
    cta: "View IEEE Publication",
    background: React.createElement(Image, {
      src: "/rweek.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    tags: ["Flask", "Google Cloud", "Fast.ai", "LLMs", "BERT"],
    src: "/rweek.png",
    date: "2023",
  },
  {
    Icon: SiCocacola,
    name: "SkyGrid",
    tagline: "market seg modeling system.",
    description: "Confidential.",
    // "Developed a market segmentation modeling system using Monte Carlo Risk Analysis and advanced statistical methods in Python/R. Analyzed high-volume datasets to predict market risks, trends, and generate business recommendations for improving high-value sales channels.",
    href: "/",
    cta: "Reach out to learn more!",
    background: React.createElement(Image, {
      src: "/skygrid.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    tags: ["Python", "R","Statistics"],
    src: "/skygrid.png",
    date: "2024",
  },
  {
    Icon: GlobeIcon,
    name: "ClimateNeutral LLM",
    tagline: "a corporate sustainability assistant",
    description:
      "Piloted a Custom LLM assistant (Used by 347 Brands) focused on generating comprehensive sustainability plans by analyzing business and sales data. Fine-tuned on international climate standards using transfer learning and domain adaptation.",
    href: "/",
    cta: "Reach out to learn more!",
    background: React.createElement(Image, {
      src: "/climateneutral.png",
      alt: "Background",
      layout: "fill",
      objectFit: "cover",
      className: "absolute -right-20 -top-20 opacity-60",
    }),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    tags: ["Flask", "Langchain", "Fast.ai", "LLMs"],
    src: "/climateneutral.png",
    date: "2023",
  },
  // {
  //   Icon: FaVoteYea,
  //   name: "PolyData Electoral Innovation",
  //   description:
  //     "Developed and distributed a collection of contract-bound AI-driven election analysis models focused on optimizing political campaign operations, interpreting electoral outcomes, and understanding voter behavior in local, state, and federal elections.",
  //   href: "https://polydataelect.com/",
  //   cta: "Take a look!",
  //   background: React.createElement(Image, {
  //     src: "/polydatasmaller_web.png",
  //     alt: "Background",
  //     layout: "fill",
  //     objectFit: "cover",
  //     className: "absolute -right-20 -top-20 opacity-60",
  //   }),
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  //   tags: ["React", "Python", "TensorFlow", "Google Cloud", "AWS", "D3.js"],
  // },
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
  },
  {
    title: "Rocky",
    year: 1976,
    director: "John G. Avildsen",
    genre: "Sports Drama",
    posterUrl: "/rocky_poster.jpg",
  },
  {
    title: "Logan",
    year: 2017,
    director: "James Mangold",
    genre: "Superhero Drama",
    posterUrl: "/logan_poster.jpg",
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    director: "Gabriele Muccino",
    genre: "Biographical Drama",
    posterUrl: "/pursuit_of_happyness_poster.jpg",
  },
  {
    title: "KGF: Chapter 1",
    year: 2018,
    director: "Prashanth Neel",
    genre: "Action Drama",
    posterUrl: "/kgf_poster.jpg",
  },
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    director: "S. S. Rajamouli",
    genre: "Epic Action",
    posterUrl: "/baahubali_poster.jpg",
  },
  {
    title: "Jersey",
    year: 2019,
    director: "Gowtam Tinnanuri",
    genre: "Sports Drama",
    posterUrl: "/jersey_poster.jpg",
  },
  {
    title: "Pokiri",
    year: 2006,
    director: "Puri Jagannadh",
    genre: "Action Thriller",
    posterUrl: "/pokiri_poster.jpg",
  },
] as const;