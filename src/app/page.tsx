import About from "@/components/About";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Carlos Silva | Front-End Developer",
    description: "",
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/"
    }
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-[88px] items-center container">
      <Hero />
      <About />
    </main>
  );
}
