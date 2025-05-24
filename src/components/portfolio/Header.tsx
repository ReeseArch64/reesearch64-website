import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Header({ data }: { data: ApiDataInterface }) {
  return (
    <header className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center gap-8">
      <Avatar className="h-32 w-32">
        <AvatarImage src={data.avatar} alt="Profile" />
        <AvatarFallback>
          {data.person.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight">
          {data.person.name}
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          {data.person.role} - {data.person.level}
        </p>
        <p className="text-muted-foreground mt-1">{data.person.location}</p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <Button asChild>
            <a href="#contact">Contato</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">Projetos</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
