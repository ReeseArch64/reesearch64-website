interface IProps {
  github: string
  name: string
}

export default function Footer({ github, name }: IProps) {
  return (
    <footer className="max-w-6xl mx-auto py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} <a href={github} target="_blank">{name}.</a> Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
