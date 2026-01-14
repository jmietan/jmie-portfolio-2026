import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-4 text-neutral-700">Coming soon.</p>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
