"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SectionTitle } from "@/components/primitives/SectionTitle";
import { enterpriseProjects, personalProjects } from "@/data/projects";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <SectionLabel num="06" />
      <SectionTitle>PROJECTS.</SectionTitle>

      {/* Enterprise Experience (Tekion) */}
      <div className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-sm font-bold tracking-widest text-terminal-signal">
            // 01. ENTERPRISE EXPERIENCE (TEKION)
          </span>
          <div className="flex-1 border-t border-terminal-border" />
        </div>
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {enterpriseProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <ProjectCard {...project} index={index} prefix="ENT" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Personal & Open Source Projects */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-sm font-bold tracking-widest text-terminal-signal">
            // 02. PERSONAL & OPEN SOURCE PROJECTS
          </span>
          <div className="flex-1 border-t border-terminal-border" />
        </div>
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <ProjectCard {...project} index={index} prefix="PROJ" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
