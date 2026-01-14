import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-4 text-neutral-700">Whether you’re looking for a web developer, designer, or someone to support your next digital project, I’d love to help. Send me a message and let’s talk.</p>

        <div className="mt-8">
          <ContactForm />
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
