import Image from "next/image";

type OrbitItem = {
  text: string;
  className?: string;
  radius: string;      // e.g. "190px"
  orbitDur: string;    // e.g. "34s"
  driftDur: string;    // e.g. "10s"
  startRot: string;    // e.g. "20deg" - initial angle
  driftType: "driftA" | "driftB";
  side?: "left" | "right";
};

const orbitItems: OrbitItem[] = [
  { text: "front-end", radius: "260px", orbitDur: "38s", driftDur: "7s", startRot: "-30deg", driftType: "driftA", side: "left" },
  { text: "designer",  radius: "225px", orbitDur: "44s", driftDur: "8s", startRot: "120deg", driftType: "driftB", side: "left" },
  { text: "back-end",  radius: "270px", orbitDur: "52s", driftDur: "7s", startRot: "40deg",  driftType: "driftA", side: "right" },
  { text: "QA Tester", radius: "235px", orbitDur: "60s", driftDur: "8s", startRot: "-150deg",driftType: "driftB", side: "right" },
];

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-x-hidden">
      <div className="mx-auto w-full max-w-5xl px-6 pb-0 pt-6">
        <div className="relative mt-2 overflow-x-hidden">
     

        <div className="relative grid items-center gap-0 px-6 py-0 grid-cols-1 lg:grid-cols-[1fr_min(80vw,560px)_1fr] lg:px-10 lg:py-0">
          {/* Mobile labels - Above portrait */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 lg:hidden">
            {orbitItems.map((item) => (
              <div
                key={item.text}
                className="text-2xl font-semibold tracking-tight text-neutral-900"
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Left labels column (desktop) */}
          <div className="hidden lg:flex flex-col justify-center items-end pr-6 pointer-events-none lg:col-start-1">
            {orbitItems
              .filter((it) => it.side === "left")
              .map((item, idx) => (
                <div key={item.text} className="w-full pointer-events-auto">
                  <div
                    className={`orbit-label ${item.driftType === 'driftA' ? 'driftLargeA' : 'driftLargeB'} text-3xl font-semibold tracking-tight text-neutral-900 text-center lg:text-right lg:text-4xl`}
                    style={{ ["--driftDur" as any]: item.driftDur, transform: 'none' } as React.CSSProperties}
                  >
                    {item.text}
                  </div>
                  {idx < 1 && <div className="h-16" />}
                  {idx >= 1 && <div className="h-10" />}
                </div>
              ))}
          </div>

          {/* Portrait + orbit (center column) */}
          <div
            className="relative mx-auto w-full flex items-center justify-center lg:col-start-2 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/hero-bg-logos.png')" }}
          >
            <div className="relative z-10 w-full px-6 pb-6 lg:pb-0">
              <img
                src="/hero-img-jmietan.png"
                alt="Portrait artwork"
                className="block w-full max-w-[min(520px,80vw)] mx-auto h-auto max-h-[60vh] object-contain"
              />
            </div>
            {/* keep orbiter container for any floating orbit visuals if needed */}
          </div>

          {/* Right labels column (desktop) */}
          <div className="hidden lg:flex flex-col justify-center items-start pl-6 pointer-events-none lg:col-start-3">
            {orbitItems
              .filter((it) => it.side === "right")
              .map((item, idx) => (
                <div key={item.text} className="w-full pointer-events-auto">
                  <div
                    className={`orbit-label ${item.driftType === 'driftA' ? 'driftLargeA' : 'driftLargeB'} text-3xl font-semibold tracking-tight text-neutral-900 text-center lg:text-left lg:text-4xl`}
                    style={{ ["--driftDur" as any]: item.driftDur, transform: 'none' } as React.CSSProperties}
                  >
                    {item.text}
                  </div>
                  {idx < 1 && <div className="h-16" />}
                  {idx >= 1 && <div className="h-10" />}
                </div>
              ))}
          </div>
        </div>
        {/* thin divider below hero */}
        <div className="border-t border-neutral-200" />
      </div>
    </div>
    </section>
  );
}
