import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Contact({ data }: { data: ApiDataInterface }) {
  const contact = data.contact || {};
  const social = data.socialMedia || {};

  const hasContact = contact.email || contact.phone;
  const hasSocial = social.linkedin || social.github;

  return (
    <section id="contact" className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">
            Interessado em trabalhar juntos? Entre em contato!
          </p>

          {hasContact ? (
            <div className="space-y-4">
              {contact.email && (
                <div className="flex items-center gap-4">
                  <Image src="/email.svg" alt="Email" width={24} height={24} />
                  <span>{contact.email}</span>
                </div>
              )}
              {contact.phone && (
                <div className="flex items-center gap-4">
                  <Image src="/phone.svg" alt="Phone" width={24} height={24} />
                  <span>{contact.phone}</span>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nenhuma informação de contato disponível no momento.
            </p>
          )}

          <div className="mt-8 space-y-4">
            <h3 className="font-semibold">Redes Sociais</h3>
            {hasSocial ? (
              <>
                {social?.linkedin && (
                  <div className="flex items-center gap-4">
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                )}
                {social.github && (
                  <div className="flex items-center gap-4">
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhuma rede social cadastrada no momento.
              </p>
            )}
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
                required
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
                required
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
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
