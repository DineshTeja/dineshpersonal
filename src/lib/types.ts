import React from "react";

export type Movie = {
    title: string;
    year: number;
    director: string;
    genre: string;
    rating: number;
    posterUrl: string;
  }

export type Project = {
    name: string;
    tagline: string;
    description: string;
    href: string;
    tags: string[];
    src: string;
    date: string;
    links?: { name: string; href: string }[];
  }
  
export type Experience = {
    title: string;
    company: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    date: string;
    src: string;
    href: string;
    tags: string[];
  }

export type Education = {
    company: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    date: string;
    src: string;
    href: string;
  }

export type TinyTool = {
    name: string;
    description: string;
    href: string;
    demo: string;
  }