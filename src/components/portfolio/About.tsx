import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function About({ data }: { data: ApiDataInterface }) {
  const about = data.person?.about?.trim();
  const techs = data.techs || [];
  const education = data.education || [];

  return (
    <section className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg leading-relaxed">
            {about ? about : "Ainda não há informações sobre mim."}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {techs.length > 0 ? (
                techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nenhuma habilidade cadastrada no momento.
                </p>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Educação</h3>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mt-2">
                  <p className="font-medium">{edu.course}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.description && (
                    <p className="mt-1 text-sm">{edu.description}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhuma formação cadastrada no momento.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
