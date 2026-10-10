import { PageShell } from "@/components/layout/PageShell";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NavBar } from "@/components/navigation/NavBar";
import { ContactSection, type GithubProfile } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProficiencySection } from "@/components/sections/ProficiencySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const fallbackGithub: GithubProfile = {
  avatar_url: "https://avatars.githubusercontent.com/u/15996863?v=4",
  bio: "Senior Software Engineer with 6.5+ years of experience in Payments, Healthcare and Engineering.",
  location: "Bangalore, India",
  html_url: "https://github.com/tdvkiran",
  login: "tdvkiran",
};

async function getGithubProfile(): Promise<GithubProfile> {
  try {
    const res = await fetch("https://api.github.com/users/tdvkiran", {
      headers: { Accept: "application/vnd.github.v3+json" },
      cache: "force-cache",
    });

    if (!res.ok) return fallbackGithub;

    const data = (await res.json()) as Partial<GithubProfile>;
    return {
      avatar_url: data.avatar_url || fallbackGithub.avatar_url,
      bio: data.bio ?? fallbackGithub.bio,
      location: data.location ?? fallbackGithub.location,
      html_url: data.html_url || fallbackGithub.html_url,
      login: data.login || fallbackGithub.login,
    };
  } catch {
    return fallbackGithub;
  }
}

export default async function Home() {
  const github = await getGithubProfile();

  return (
    <PageShell>
      <NavBar />
      <HeroSection />
      <SectionWrapper id="skills" num="02">
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper id="proficiency" num="03">
        <ProficiencySection />
      </SectionWrapper>
      <SectionWrapper id="education" num="04">
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper id="experience" num="05">
        <ExperienceSection />
      </SectionWrapper>
      {/* <SectionWrapper id="testimonials" num="07">
        <TestimonialsSection />
      </SectionWrapper> */}
      <SectionWrapper id="projects" num="06">
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper id="contact" num="07">
        <ContactSection github={github} />
      </SectionWrapper>
    </PageShell>
  );
}
