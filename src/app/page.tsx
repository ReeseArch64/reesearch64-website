import { getData } from "@/lib/getData";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import TechStack from "@/components/portfolio/TechStack";

export default async function Portfolio() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans">
      <Header data={data} />
      <About data={data} />
      <Projects data={data} />
      <TechStack techs={data.techs} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}
