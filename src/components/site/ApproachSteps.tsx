const STEPS = [
  { n: "01", title: "Understand", text: "Research the product, audience and market." },
  { n: "02", title: "Position", text: "Turn technical complexity into clear, compelling messaging." },
  { n: "03", title: "Create", text: "Develop content that sounds human, not just technical." },
  {
    n: "04",
    title: "Distribute",
    text: "Build consistent, compounding visibility across the right channels.",
  },
];

// Heights grow per step so the four blocks read as a staircase.
const HEIGHTS = ["md:h-[18rem]", "md:h-[24rem]", "md:h-[30rem]", "md:h-[36rem]"];
const INDENTS = ["ml-[18%]", "ml-[12%]", "ml-[6%]", "ml-0"];

export function ApproachSteps() {
  return (
    <ol className="grid gap-3 md:grid-cols-4 md:items-end md:gap-0">
      {STEPS.map((step, i) => {
        const last = i === STEPS.length - 1;
        return (
          <li
            key={step.n}
            className={`group relative flex min-h-[13rem] flex-col justify-between border p-6 transition-colors md:ml-0 md:min-h-0 md:border-l-0 md:first:border-l ${INDENTS[i]} ${HEIGHTS[i]} ${
              last
                ? "border-primary bg-primary text-primary-foreground"
                : "hatch border-border hover:bg-card"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className={`eyebrow ${last ? "" : "text-primary"}`}>{step.n}</span>
              <span
                aria-hidden
                className={`size-3 border ${last ? "border-primary-foreground" : "border-foreground/40"}`}
              />
            </div>
            <div>
              <h3 className="display text-3xl md:text-[2.4rem]">{step.title}</h3>
              <p
                className={`eyebrow mt-4 max-w-[16rem] ${last ? "opacity-80" : "text-muted-foreground"}`}
              >
                {step.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
