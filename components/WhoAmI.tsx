import Image from "next/image";

const thumbs = ["/thumb-1.svg", "/thumb-2.svg", "/thumb-3.svg", "/thumb-4.svg"];

export default function WhoAmI() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 md:py-12">
        <h2 className="text-4xl font-bold text-neutral-700">Who Am I ?</h2>

        <div className="mt-10 space-y-4 text-m leading-7 text-neutral-700 md:text-[18px]">
          <p>
            I’m a Web Designer and Developer who loves building clean, modern, responsive
            websites and apps using HTML, CSS, Bootstrap, Tailwind, JavaScript, PHP, and React/Next.js.
            I enjoy creating WordPress sites that are fast, accessible, and mobile-friendly, and I love
            connecting front-end experiences with back-end features through REST APIs. I also deploy
            projects on Linux servers (AWS EC2, LightSail) so they’re stable and scalable.
          </p>

          <p>
            I’m a graduate of NAIT’s DMIT Web Design and Development program, and I hold a BS in Information
            Technology from the Philippines. Before focusing heavily on web work, I built a strong technical
            foundation through 20+ years in IT, specializing in server support, troubleshooting, and technical operations.
          </p>

          <p>
            These days, I’m also expanding into QA Automation, because I enjoy improving user experience through
            testing and making systems more reliable. Outside of work, I love yoga practicing, going to the gym,
            exploring new places, attending events or IT workshops, taking photos, cooking, hiking, or painting in watercolor.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {thumbs.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image src={src} alt="Gallery thumbnail" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
