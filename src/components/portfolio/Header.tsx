import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { PersonInterface } from "@/interfaces/ApiDataInterface";

interface IProps {
  data: PersonInterface;
  avatar: string;
}

export default function Header({ avatar, data }: IProps) {
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const profileImages = [
    "https://i.pinimg.com/originals/4a/c2/ed/4ac2edeb6368422e2410c53741e116e8.gif",
    "https://i.pinimg.com/originals/7f/40/cf/7f40cf8004e3840757aefeb985a609ea.gif",
    "https://i.pinimg.com/originals/ce/c7/ab/cec7ab4a8c1dfb64ae814a25fade3002.gif",
    avatar
  ];

  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

  return (
    <header
      className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center gap-8"
      role="banner"
      aria-label="Cabeçalho com informações da pessoa"
    >
      <div
        className="rounded-full p-[3px]"
        style={{
          background: `conic-gradient(
            from 180deg at top left,
            red,
            orange,
            yellow,
            lime,
            green,
            turquoise,
            cyan,
            blue,
            indigo,
            violet,
            pink,
            red
          )`,
        }}
        aria-hidden="true"
      >
        <Avatar className="h-32 w-32 border-4 border-background">
          <AvatarImage
            src={randomImage}
            alt={`Foto de perfil de ${data.name}`}
          />
          <AvatarFallback aria-hidden="true">{initials}</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-center md:text-left">
        <h1
          className="text-4xl font-bold tracking-tight"
          tabIndex={0}
          aria-label={`Nome: ${data.name}`}
        >
          {data.name}
        </h1>

        <p
          className="text-xl text-muted-foreground mt-2"
          tabIndex={0}
          aria-label={`Cargo: ${data.role}, Nível: ${data.level}`}
        >
          {data.role} - {data.level}
        </p>

        <p
          className="text-muted-foreground mt-1"
          tabIndex={0}
          aria-label={`Localização: ${data.location}`}
        >
          {data.location}
        </p>

        <p
          className="text-muted-foreground mt-2"
          tabIndex={0}
          aria-label={`Idiomas: ${data.languages.join(", ")}`}
        >
          <strong>Idiomas:</strong> {data.languages.join(", ")}
        </p>

        <nav
          className="flex gap-4 mt-6 justify-center md:justify-start"
          aria-label="Navegação principal"
        >
          <Button asChild>
            <a href="#contact" aria-label="Ir para a seção de contato">
              Contato
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects" aria-label="Ir para a seção de projetos">
              Projetos
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
