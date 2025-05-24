import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Footer({ data }: { data: ApiDataInterface }) {
  return (
    <footer className="max-w-6xl mx-auto py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} <a href={data.socialMedia.github} target="_blank">{data.person.name}.</a> Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
