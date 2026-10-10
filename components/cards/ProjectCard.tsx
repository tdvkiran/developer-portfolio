import { Icon } from "@iconify/react";
import { ExternalLink } from "lucide-react";

import { BrutalCard } from "@/components/primitives/BrutalCard";
import { GlitchText } from "@/components/primitives/GlitchText";

interface ProjectCardProps {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  linkText?: string;
  tag?: string;
  index: number;
  prefix?: string;
}

export function ProjectCard({
  name,
  desc,
  github,
  link,
  linkText,
  tag,
  index,
  prefix = "PROJ",
}: ProjectCardProps) {
  const projectId = `[${prefix}_${String(index + 1).padStart(3, "0")}]`;

  return (
    <BrutalCard className="flex h-full flex-col">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-xs text-terminal-signal">
          {projectId}
        </p>
        {tag && (
          <span className="border border-terminal-signal/30 bg-terminal-signal/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-terminal-signal">
            {tag}
          </span>
        )}
      </div>
      <h3 className="mb-1 font-mono text-xl font-bold text-terminal-text">
        <GlitchText>{name}</GlitchText>
      </h3>
      <div className="my-3 border-t border-terminal-border" />
      <p className="flex-1 text-sm leading-relaxed text-terminal-soft">
        {desc}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-dim transition-colors hover:border-terminal-signal hover:text-terminal-signal"
          >
            <Icon icon="mdi:github" width={14} height={14} aria-hidden />
            GITHUB
          </a>
        ) : null}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-dim transition-colors hover:border-terminal-signal hover:text-terminal-signal"
          >
            <ExternalLink size={14} aria-hidden />
            {linkText || "LIVE DEMO"}
          </a>
        ) : null}
      </div>
    </BrutalCard>
  );
}
