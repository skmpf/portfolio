import {
  siteUrl,
  siteTitleDefault,
  siteDescriptionShared,
} from "./metadata-constants";

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
    description: "Write down your wine tasting notes quickly and easily",
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
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteTitleDefault,
    url: siteUrl,
    jobTitle: "Frontend Developer",
    description: siteDescriptionShared,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Université de Technologie de Troyes",
      },
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    sameAs: [
      "https://www.linkedin.com/in/sebastienkempf/",
      "https://github.com/skmpf",
      "https://bsky.app/profile/skempf.com",
      "https://blog.skempf.com",
    ],
  };

  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col p-8 pt-0 md:pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <header className="">
        <h1 className="pt-12 pb-6 font-medium">Sebastien Kempf</h1>
        <p>
          I&apos;m a frontend developer and tech enthusiast passionate about
          crafting accessible, performant, and scalable web and mobile
          applications using modern technologies like React.js and Next.js.
        </p>
        <p>Explore my work and professional journey.</p>
      </header>
      <main className="flex-1">
        <h2 className="mt-8 mb-3 font-medium">Experiences</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          {experiencesData.map((exp) => (
            <li key={exp.title + exp.company}>
              {exp.title}
              {exp.company && " at "}
              {exp.companyUrl ? (
                <a
                  className="text-purple-500 hover:text-purple-700"
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
        <h2 className="mt-8 mb-3 font-medium">Projects</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          {projectsData.map((project) => (
            <li key={project.name}>
              {project.url ? (
                <a
                  className="text-purple-500 hover:text-purple-700"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
    <footer className="flex justify-center gap-2 tracking-tight text-neutral-400">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-purple-500"
        >
          {link.name}
        </a>
      ))}
    </footer>
  );
};
