import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

const SECTION_STYLE = "max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8";
const TEXT_STYLE = "text-lg leading-relaxed text-gray-800 dark:text-gray-200";

const formatAboutText = (text: string) => {
  if (!text) return text;

  const keywords = [
    "desenvolvedor",
    "developer",
    "engenheiro",
    "engineer",
    "especialista",
    "specialist",
    "tecnologia",
    "technology",
    "experiência",
    "experience",
    "habilidades",
    "skills",
    "projetos",
    "projects",
    "profissional",
    "professional",
  ];

  return text.split(" ").map((word, i) => {
    const cleanWord = word.replace(/[.,!?;:]/g, "");
    return keywords.includes(cleanWord.toLowerCase()) ? (
      <b key={i}>{word} </b>
    ) : (
      <span key={i}>{word} </span>
    );
  });
};

export default function About({ data }: { data: ApiDataInterface }) {
  const about = data.person?.about?.trim();
  const formattedAbout = about ? formatAboutText(about) : null;

  return (
    <section
      className={SECTION_STYLE}
      id="about"
      aria-labelledby="about-heading"
    >
      <h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        id="about-heading"
      >
        Sobre Mim
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <p className={TEXT_STYLE}>
          {formattedAbout || "Ainda não há informações sobre mim."}
        </p>
      </div>
    </section>
  );
}
