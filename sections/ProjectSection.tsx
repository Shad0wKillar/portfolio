import Image from "next/image";
import { useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import dotsImage from "public/projects/dots.webp";
import chefGenieImage from "public/projects/chefgenie.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  useScrollActive(sectionRef, "projects");

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Shad0wKillar"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Dots",
    type: "Environment Configuration",
    image: (
      <Image
        src={dotsImage}
        sizes="100vw"
        fill
        alt="Dots Configuration"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My personal Linux environment dotfiles and configuration setups.",
    tags: ["Linux", "Arch", "Hyprland", "Bash"],
    liveUrl: "https://github.com/Shad0wKillar/dots",
    codeUrl: "https://github.com/Shad0wKillar/dots",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/Shad0wKillar/dots",
  },
  {
    title: "ChefGenie",
    type: "AI Application",
    image: (
      <Image
        src={chefGenieImage}
        sizes="100vw"
        fill
        alt="ChefGenie App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "EfficientNet transfered learned on the 3 classes of Food101 (pizza, steak and sushi).",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    liveUrl: "https://github.com/Shad0wKillar/ChefGenie",
    codeUrl: "https://github.com/Shad0wKillar/ChefGenie",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/Shad0wKillar/ChefGenie",
  },
];

export default ProjectSection;
