import Header from "@/components/Header";
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
    <main className="flex min-h-screen flex-col items-center container">
      <Header />
    </main>
  );
}
