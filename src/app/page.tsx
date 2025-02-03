export default function Home() {
  return (
    <div className="max-w-2xl mx-auto min-h-full p-8 flex flex-col gap-4 lg:gap-8 text-gray-900 bg-white">
      <header>
        <h1 className="font-medium pt-14 pb-6">Sebastien Kempf</h1>
        <p>
          I&#39;m a frontend developer and tech enthusiast. I love building
          accessible, performant, and scalable web and mobile applications.
        </p>
      </header>
      <main className="flex-1">
        <h2>Experiences</h2>
        <ul>
          <li>
            Frontend Engineer at{" "}
            <a
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
              href="https://www.liip.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liip
            </a>{" "}
            - 2020 - 2021
          </li>
        </ul>
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://vinomemo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VinoMemo
            </a>{" "}
            - Write down your wine tasting notes quickly and easily
          </li>
        </ul>
        <ul>
          <li>
            VoisinSauveteurs - Request urgent medical help from neighbours
            mobile app
          </li>
        </ul>
        <ul>
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
      url: "https://bsky.app/profile/techpadawan.bsky.social",
    },
  ];

  return (
    <footer className="flex justify-center gap-2 lg:gap-4 text-neutral-400 tracking-tight">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </footer>
  );
};
