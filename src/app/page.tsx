import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sebastien Kempf - Frontend Developer Portfolio",
  description: "Explore the portfolio of Sebastien Kempf, a senior frontend developer specializing in React.js, Next.js, and modern web technologies. View projects and professional experience.",
  openGraph: {
    title: "Sebastien Kempf - Frontend Developer Portfolio",
    description: "Explore the portfolio of Sebastien Kempf, a senior frontend developer specializing in React.js, Next.js, and modern web technologies.",
    type: "website",
  },
};

interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
}

interface Project {
  name: string;
  url?: string;
  description: string;
}

const experiencesData: Experience[] = [
  {
    title: "Freelance Web & Mobile Developer",
    company: "",
    period: "2020 - present",
  },
  {
    title: "Frontend Engineer",
    company: "Deezer",
    companyUrl: "https://www.deezer.com/",
    period: "2022 - present",
  },
  {
    title: "Software Engineer",
    company: "Liip",
    companyUrl: "https://www.liip.ch/",
    period: "2020 - 2021",
  },
];

const projectsData: Project[] = [
  {
    name: "Deezer Partners",
    url: "https://partners.deezer.com/",
    description:
      "New platform for partnership opportunities, solutions, and resources.",
  },
  {
    name: "VinoMemo",
    url: "https://vinomemo.app/",
    description:
      "Professional wine tasting notes app with structured WSET methodology, designed for wine professionals and enthusiasts",
  },
  {
    name: "TechPadawan",
    url: "https://blog.skempf.com/",
    description: "My blog where I talk about tech, web development and more",
  },
  {
    name: "VoisinSauveteurs",
    description: "Request urgent medical help from neighbours mobile app",
  },
  {
    name: "KIP",
    description: "Parking spot finder mobile app",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col p-8 pt-0 md:pt-8">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white dark:bg-zinc-950 px-4 py-2 text-purple-600 dark:text-purple-400 underline rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400">
        Skip to main content
      </a>
      <header className="" role="banner">
        <h1 className="pt-12 pb-6 text-2xl font-medium">Sebastien Kempf</h1>
        <p>
          I&apos;m a frontend developer and tech enthusiast passionate about
          crafting accessible, performant, and scalable web and mobile
          applications using modern technologies like React.js and Next.js.
        </p>
        <p>Explore my work and professional journey.</p>
      </header>
      <main id="main-content" className="flex-1" role="main">
        <section aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className="mt-8 mb-3 text-xl font-medium">Experiences</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          {experiencesData.map((exp) => (
            <li key={exp.title + exp.company}>
              {exp.title}
              {exp.company && " at "}
              {exp.companyUrl ? (
                <a
                  className="text-purple-600 underline decoration-1 underline-offset-2 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} (opens in new tab)`}
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
              {exp.period && ` / ${exp.period}`}
            </li>
          ))}
        </ul>
        </section>
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="mt-8 mb-3 text-xl font-medium">Projects</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          {projectsData.map((project) => (
            <li key={project.name}>
              {project.url ? (
                <a
                  className="text-purple-600 underline decoration-1 underline-offset-2 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} (opens in new tab)`}
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
              {project.description && ` - ${project.description}`}
            </li>
          ))}
        </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => {
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sebastienkempf/" },
    { name: "GitHub", url: "https://github.com/skmpf" },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/skempf.com",
    },
  ];

  return (
    <footer className="py-8" role="contentinfo">
      <nav aria-label="Social media links">
        <ul className="flex justify-center gap-4 tracking-tight">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 underline decoration-1 underline-offset-2 transition-colors duration-200 hover:text-purple-600 dark:text-neutral-400 dark:hover:text-purple-400"
                aria-label={`Visit my ${link.name} profile (opens in new tab)`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
