import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectInterface } from "@/interfaces/ApiDataInterface";
import {
  ProjectsType,
  ProjectsCategories,
} from "@/interfaces/ApiDataInterface";

// Obtem só as chaves dos enums (string[], ex: ["FRONTEND", "BACKEND"])
const projectTypes = Object.keys(ProjectsType).filter(
  (key) => isNaN(Number(key))
) as (keyof typeof ProjectsType)[];

const projectCategories = Object.keys(ProjectsCategories).filter(
  (key) => isNaN(Number(key))
) as (keyof typeof ProjectsCategories)[];

interface IProps {
  data: ProjectInterface[];
}

export default function Projects({ data }: IProps) {
  const projects = Array.isArray(data) ? data : [];

  const [selectedType, setSelectedType] = useState<keyof typeof ProjectsType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof ProjectsCategories | null>(null);

  const filteredProjects = projects.filter((project) => {
    // Como project.type e project.categories são strings, converto para enum para comparar
    const projectTypeEnumValue = ProjectsType[project.type as unknown as keyof typeof ProjectsType];
    const matchesType = selectedType !== null ? projectTypeEnumValue === ProjectsType[selectedType] : true;

    const matchesCategory =
      selectedCategory !== null
        ? project.categories.some(
          (cat) =>
            ProjectsCategories[cat as keyof typeof ProjectsCategories] ===
            ProjectsCategories[selectedCategory]
        )
        : true;

    return matchesType && matchesCategory;
  });

  // Função para exibir nomes mais amigáveis (ex: "ADMIN_PANEL" -> "Admin Panel")
  const formatLabel = (label: string) =>
    label
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div>
          <h3 className="font-semibold mb-2 text-center">Tipo</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              onClick={() => setSelectedType(null)}
            >
              Todos
            </Button>
            {projectTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
              >
                {formatLabel(type)}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-center">Categoria</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-xl">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Button>
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {formatLabel(category)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista filtrada */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
        <p className="text-muted-foreground text-center">
          Nenhum projeto disponível para os filtros selecionados.
        </p>
      )}
    </section>
  );
}
