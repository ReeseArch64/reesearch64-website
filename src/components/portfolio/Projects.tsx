import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Projects({ data }: { data: ApiDataInterface }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      {data.projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={project.image || "/project-default.jpg"}
                  alt={project.name || `Projeto ${index + 1}`}
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-auto"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.name}</CardTitle>
                {project.description && (
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                )}
                {project.demoLink && (
                  <Button variant="link" className="px-0 mt-4" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver projeto
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          Nenhum projeto disponível no momento.
        </p>
      )}
    </section>
  );
}
