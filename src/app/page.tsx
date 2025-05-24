import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center gap-8">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/profile.jpg" alt="Profile" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">João Pedro</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Desenvolvedor Front-end
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Button variant="default" asChild>
              <a href="#contact">Contato</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">Projetos</a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed">
              Sou um desenvolvedor front-end apaixonado por criar interfaces
              bonitas e funcionais. Com 5 anos de experiência, especializei-me
              em React, Next.js e design de UI/UX.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Quando não estou codando, gosto de fotografar, viajar e aprender
              sobre design.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Habilidades</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                  UI/UX
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Educação</h3>
              <p className="mt-2">
                Ciência da Computação - Universidade XYZ (2018)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Image
                src="/project1.jpg"
                alt="E-commerce Website"
                width={400}
                height={200}
                className="rounded-t-lg w-full h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Loja Online</CardTitle>
              <CardDescription className="mt-2">
                Plataforma de e-commerce com carrinho de compras e checkout.
              </CardDescription>
              <Button variant="link" className="px-0 mt-4" asChild>
                <a href="#" target="_blank">
                  Ver projeto
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Image
                src="/project2.jpg"
                alt="Task Management App"
                width={400}
                height={200}
                className="rounded-t-lg w-full h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Gerenciador de Tarefas</CardTitle>
              <CardDescription className="mt-2">
                Aplicativo para organização pessoal com sincronização em nuvem.
              </CardDescription>
              <Button variant="link" className="px-0 mt-4" asChild>
                <a href="#" target="_blank">
                  Ver projeto
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Image
                src="/project3.jpg"
                alt="Portfolio Website"
                width={400}
                height={200}
                className="rounded-t-lg w-full h-auto"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Site de Portfolio</CardTitle>
              <CardDescription className="mt-2">
                Website para artistas exibirem seus trabalhos e receberem
                encomendas.
              </CardDescription>
              <Button variant="link" className="px-0 mt-4" asChild>
                <a href="#" target="_blank">
                  Ver projeto
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Contato</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6">
              Interessado em trabalhar juntos? Entre em contato!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image src="/email.svg" alt="Email" width={24} height={24} />
                <span>joao@exemplo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/phone.svg" alt="Phone" width={24} height={24} />
                <span>(11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
                <a href="#" target="_blank" className="hover:underline">
                  linkedin.com/in/joaopedro
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                <a href="#" target="_blank" className="hover:underline">
                  github.com/joaopedro
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-8 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} João Pedro. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
