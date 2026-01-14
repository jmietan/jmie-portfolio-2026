import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoAmI />
      <Footer />
    </main>
  );
}
