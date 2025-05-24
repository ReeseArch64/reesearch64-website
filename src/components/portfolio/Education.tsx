import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

const SECTION_STYLE = "max-w-6xl mx-auto py-12";

export default function EducationSection({ data }: { data: ApiDataInterface["education"] }) {
  return (
    <section className={SECTION_STYLE} id="education">
      <h2 className="text-3xl font-bold mb-6">Educação</h2>
      <div className="space-y-6">
        {data.length > 0 ? (
          data.map((edu, index) => (
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
    </section>
  );
}
