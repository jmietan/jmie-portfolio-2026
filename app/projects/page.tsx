import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import projects from "../../data/project-data.json";

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
        <p className="mt-4 text-neutral-700">Selected projects and case studies.</p>

        <section className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden">
              <div className="h-100 bg-neutral-100 flex items-center justify-center">
                {p.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.thumbnail} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-neutral-400">Thumbnail</span>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-4 text-neutral-600">{p.description}</p>
                
                {p.roles && (
                  <p className="mt-4 text-sm text-neutral-500">
                    <span className="font-semibold">Roles:</span> {p.roles}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.tags?.map((t) => (
                    <span key={t} className="inline-block rounded-full bg-[#F26423] px-4 py-2 text-sm text-white">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
