"use client";
import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData: {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}[] = [
  {
    id: 1,
    title: "Nextjs Governor Sindh website",
    description: "Multipage website",
    image: "./images/myprojects/1.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Figma to Nextjs website",
    description: "UI/UX website",
    image: "/images/myprojects/2.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PanaCloud website",
    description: "Company website with HTML And CSS",
    image: "/images/myprojects/3.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ResumeBuilder website",
    description: "Dynamic Resume Builder website",
    image: "/images/myprojects/4.png",
    tag: ["All", "web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio with HTML website",
    description: "portfolio with HTML And CSS",
    image: "/images/myprojects/5.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Portfolio with Nextjs website",
    description: "Portfolio with Tailwindcss and Nextjs",
    image: "/images/myprojects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTabChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
};

const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  
  return (
    <>
      <h2 id="projects" className="text-center text-4xl font-bold text-white mb-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTabChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl} imgUrl={project.image}  />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
