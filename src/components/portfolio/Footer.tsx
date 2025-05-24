import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Footer({ data }: { data: ApiDataInterface }) {
  return (
    <footer className="max-w-6xl mx-auto py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {data.person.name}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
