import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sebastien Kempf - Web Developer",
  description:
    "Sebastien Kempf, a senior web developer specializing in React.js, Next.js, and modern web technologies. View projects and professional experience.",
  keywords: [
    "Sebastien Kempf",
    "Web Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Mobile Development",
    "Freelance Developer",
  ],
  authors: [{ name: "Sebastien Kempf" }],
  creator: "Sebastien Kempf",
  openGraph: {
    title: "Sebastien Kempf - Software Engineer",
    description:
      "Senior web developer specializing in React.js, Next.js, and modern web technologies.",
    url: "https://skempf.com",
    siteName: "Sebastien Kempf Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Sebastien Kempf - Software Engineer",
    description:
      "Senior web developer specializing in React.js, Next.js, and modern web technologies.",
    creator: "@skempf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  links?: { name: string; url: string }[];
  description: string;
}

interface Link {
  name: string;
  url: string;
}

const experiences: Experience[] = [
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

const projects: Project[] = [
  {
    name: "VinoMemo",
    links: [
      { name: "iOS App", url: "https://apps.apple.com/us/app/vinomemo/id6754691185" },
      { name: "Web App", url: "https://vinomemo.app" },
    ],
    description:
      "Professional wine tasting notes app using WSET methodology - free for WSET Level 2, with offline support and cross-platform sync",
  },
  {
    name: "Deezer Partners",
    url: "https://partners.deezer.com/",
    description:
      "New platform for partnership opportunities, solutions, and resources.",
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

const socialLinks: Link[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sebastienkempf/" },
  { name: "GitHub", url: "https://github.com/skmpf" },
  { name: "Bluesky", url: "https://bsky.app/profile/skempf.com" },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col p-8 pt-0 md:pt-8">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header role="banner">
        <h1 className="pt-12 pb-6 text-2xl font-medium">Sebastien Kempf</h1>
        <p>
          I&apos;m a web developer and tech enthusiast passionate about crafting
          accessible, performant, and scalable web and mobile applications using
          modern technologies like React.js and Next.js.
        </p>
        <p>Explore my work and professional journey.</p>
      </header>
      <main id="main-content" className="flex-1" role="main">
        <section aria-labelledby="experiences-heading">
          <h2
            id="experiences-heading"
            className="mt-8 mb-3 text-xl font-medium"
          >
            Experiences
          </h2>
          <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
            {experiences.map((exp) => (
              <li key={exp.title + exp.company}>
                {exp.title}
                {exp.company && " at "}
                {exp.companyUrl ? (
                  <a
                    className="link"
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
          <h2 id="projects-heading" className="mt-8 mb-3 text-xl font-medium">
            Projects
          </h2>
          <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
            {projects.map((project) => (
              <li key={project.name}>
                {project.links ? (
                  <>
                    {project.name} (
                    {project.links.map((link, index) => (
                      <span key={link.name}>
                        <a
                          className="link"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} ${link.name} (opens in new tab)`}
                        >
                          {link.name}
                        </a>
                        {index < project.links!.length - 1 && ", "}
                      </span>
                    ))}
                    )
                  </>
                ) : project.url ? (
                  <a
                    className="link"
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
  return (
    <footer className="mt-8 py-8" role="contentinfo">
      <div className="mb-4 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          Available for freelance projects —{" "}
          <a
            href="https://cal.com/kempf/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Schedule a 30-minute call (opens in new tab)"
          >
            let&apos;s talk
          </a>
        </p>
      </div>
      <nav aria-label="Social media links">
        <ul className="flex justify-center gap-4 tracking-tight">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-neutral-600 dark:text-neutral-400"
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
