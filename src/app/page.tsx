"use client";

import { useState, useEffect } from "react";

import { getData } from "@/lib/getData";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import TechStack from "@/components/portfolio/TechStack";
import EducationSection from "@/components/portfolio/Education";
import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export default function Portfolio() {
  const [data, setData] = useState<ApiDataInterface>({} as ApiDataInterface);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result: ApiDataInterface = await getData();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">Error: {error.message}</div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans">
      <Header data={data} />
      <About data={data} />
      <EducationSection
        data={Array.isArray(data.education) ? data.education : []}
      />
      <Projects data={data} />
      <TechStack data={data.techs ?? {}} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}
