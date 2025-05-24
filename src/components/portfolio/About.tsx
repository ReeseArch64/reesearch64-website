import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

const SECTION_STYLE = "max-w-6xl mx-auto py-12";
const TEXT_STYLE = "text-lg leading-relaxed";

export default function About({ data }: { data: ApiDataInterface }) {
  const about = data.person?.about?.trim();

  return (
    <section className={SECTION_STYLE} id="about">
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
      <div>
        <p className={TEXT_STYLE}>
          {about || "Ainda não há informações sobre mim."}
        </p>
      </div>
    </section>
  );
}
