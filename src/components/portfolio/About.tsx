import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

const SECTION_STYLE = "max-w-6xl mx-auto py-12";
const GRID_STYLE = "grid md:grid-cols-2 gap-8";
const TEXT_STYLE = "text-lg leading-relaxed";

const EducationSection = ({
  education,
}: {
  education: ApiDataInterface["education"];
}) => (
  <div className="space-y-6">
    <h3 className="font-semibold mb-3">Educação</h3>
    {education.length > 0 ? (
      education.map((edu, index) => (
        <div key={index} className="mt-2">
          <p className="font-medium">{edu.course}</p>
          <p className="text-muted-foreground">{edu.institution}</p>
          <p className="text-sm text-muted-foreground">
            {edu.startDate} - {edu.endDate}
          </p>
          {edu.description && (
            <p className="mt-1 text-sm whitespace-pre-line">
              {edu.description}
            </p>
          )}
        </div>
      ))
    ) : (
      <p className="text-sm text-muted-foreground">
        Nenhuma formação cadastrada no momento.
      </p>
    )}
  </div>
);

export default function About({ data }: { data: ApiDataInterface }) {
  const about = data.person?.about?.trim();
  const education = data.education || [];

  return (
    <section className={SECTION_STYLE} id="about">
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

      <div className={GRID_STYLE}>
        <div>
          <p className={TEXT_STYLE}>
            {about || "Ainda não há informações sobre mim."}
          </p>
        </div>

        <EducationSection education={education} />
      </div>
    </section>
  );
}
