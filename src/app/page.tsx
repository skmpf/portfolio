export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col p-8 pt-0 md:pt-8">
      <header className="">
        <h1 className="pt-12 pb-6 font-medium">Sebastien Kempf</h1>
        <p>
          I&#39;m a frontend developer and tech enthusiast. I love building
          accessible, performant, and scalable web and mobile applications.
        </p>
      </header>
      <main className="flex-1">
        <h2 className="mt-8 mb-3 font-medium">Experiences</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          <li>
            Frontend Engineer at{" "}
            <a
              className="text-purple-500 hover:text-purple-700"
              href="https://www.deezer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deezer
            </a>{" "}
            - 2022 - present
          </li>
          <li>
            Software Engineer at{" "}
            <a
              className="text-purple-500 hover:text-purple-700"
              href="https://www.liip.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liip
            </a>{" "}
            - 2020 - 2021
          </li>
          <li>Freelance Web & Mobile Developer - 2020 - present</li>
        </ul>
        <h2 className="mt-8 mb-3 font-medium">Projects</h2>
        <ul className="mb-4 list-inside list-disc space-y-1 md:mb-8">
          <li>
            <a
              className="text-purple-500 hover:text-purple-700"
              href="https://vinomemo.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VinoMemo
            </a>{" "}
            - Write down your wine tasting notes quickly and easily
          </li>
          <li>
            <a
              className="text-purple-500 hover:text-purple-700"
              href="https://blog.skempf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TechPadawan
            </a>{" "}
            - My blog where I talk about tech, web development and more
          </li>
          <li>
            VoisinSauveteurs - Request urgent medical help from neighbours
            mobile app
          </li>
          <li>KIP - Parking spot finder mobile app</li>
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
      url: "https://bsky.app/profile/sebastienkempf.bsky.social",
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
