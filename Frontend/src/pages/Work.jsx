
import { Link } from 'react-router-dom'

const capabilities = [
  {
    number: '01',
    title: 'AI & Agentic Automation',
    description:
      'Explore how AI-powered systems can support multi-step tasks, decision workflows, and business operations.',
    tags: ['Agentic AI', 'LLM Integration', 'Automation'],
  },
  {
    number: '02',
    title: 'Process & Workflow Automation',
    description:
      'Identify opportunities to streamline repetitive processes and connect tasks across business workflows.',
    tags: ['Workflow Design', 'RPA', 'Process Automation'],
  },
  {
    number: '03',
    title: 'Data & Web Solutions',
    description:
      'Build solutions around web data collection, analytics, and software applications tailored to business needs.',
    tags: ['Web Scraping', 'Analytics', 'Development'],
  },
]

function Work() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* Hero */}
      <section
        className="relative"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8590C]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#E8590C]">
              <span className="h-2 w-2 rounded-full bg-[#E8590C]" />
              Our Work & Approach
            </div>

            <h1 className="max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Ideas into solutions.
              <span className="block text-[#E8590C]">
                Work that moves business forward.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Discover the technology areas we work across, from intelligent
              automation and AI-powered solutions to data and software
              development. We focus on understanding the problem before
              designing the solution.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
              >
                Explore our services
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-3.5 text-sm font-semibold transition hover:border-[#E8590C] hover:text-[#E8590C]"
              >
                Explore our work
              </a>
            </div>
          </div>

          {/* Decorative capability visual — not a live dashboard */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#E8590C]/[0.06] blur-2xl" />

            <div className="relative rounded-[1.75rem] border border-black/[0.08] bg-white p-5 shadow-[0_25px_80px_rgba(17,17,17,0.08)] sm:p-7">
              <div className="flex items-center justify-between border-b border-black/[0.08] pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#777777]">
                    Solution framework
                  </p>
                  <h2 className="mt-2 font-serif text-2xl">
                    From challenge to solution
                  </h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-xl text-[#E8590C]">
                  ↗
                </div>
              </div>

              <div className="space-y-3 py-6">
                {[
                  {
                    step: '01',
                    title: 'Understand',
                    detail: 'Business goals & challenges',
                    width: 'w-full',
                  },
                  {
                    step: '02',
                    title: 'Design',
                    detail: 'Technology & solution planning',
                    width: 'w-[88%]',
                  },
                  {
                    step: '03',
                    title: 'Build',
                    detail: 'Develop & integrate',
                    width: 'w-[76%]',
                  },
                  {
                    step: '04',
                    title: 'Improve',
                    detail: 'Evaluate & refine',
                    width: 'w-[64%]',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`relative ${item.width} rounded-2xl border border-black/[0.07] bg-[#F8F8F8] p-4 transition hover:border-[#E8590C]/40`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-xs font-bold text-[#E8590C]">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-[#777777] sm:text-sm">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="border-t border-black/[0.08] pt-4 text-xs leading-6 text-[#777777]">
                Our general approach to solution development. This illustration
                is conceptual and does not represent a specific client project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section
        id="case-studies"
        className="scroll-mt-24 bg-[#F7F7F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Case studies
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Real stories deserve real results.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#555555] sm:text-lg">
              We want every case study to tell a meaningful story: the
              challenge, the solution, and the outcomes. Our verified case
              studies will be featured here as they become available.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_20px_70px_rgba(17,17,17,0.05)]">
            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#111111] p-8">
                <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#E8590C]/30 blur-3xl" />
                <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#F5A16C]/20 blur-3xl" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.07] text-4xl text-[#F5A16C]">
                    <span aria-hidden="true">✳</span>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    ZestBotz Solutions
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">
                    The next success story
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="w-fit rounded-full bg-[#E8590C]/10 px-3 py-1.5 text-xs font-semibold text-[#E8590C]">
                  Coming soon
                </span>

                <h3 className="mt-5 font-serif text-2xl leading-snug sm:text-3xl">
                  We’re preparing our case studies.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#555555] sm:text-base">
                  This space will feature approved project stories, including
                  the business challenges addressed, solutions developed, and
                  measurable outcomes where verified data is available.
                </p>

                <div className="mt-7">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition hover:gap-3"
                  >
                    Discuss a project with us
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability areas */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
                Areas of expertise
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                The capabilities behind our work.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#555555]">
              Explore the solution areas we offer. These describe our
              capabilities, not claimed client engagements or project results.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="group flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_18px_50px_rgba(232,89,12,0.08)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#E8590C]/70">
                    {capability.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#E8590C]/40 group-hover:bg-[#E8590C]/10">
                    <span
                      aria-hidden="true"
                      className="text-lg transition group-hover:text-[#E8590C]"
                    >
                      ↗
                    </span>
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl leading-snug">
                  {capability.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555] sm:text-base">
                  {capability.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-xs font-medium text-[#555555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:border-[#E8590C] hover:text-[#E8590C]"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-[#F7F7F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              How we approach projects
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Start with the problem. Build with purpose.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#555555]">
              Good technology begins with understanding the people, processes,
              and goals involved. Our approach emphasizes clarity, relevant
              technology choices, and solutions aligned with the problem being
              solved.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#E8590C] transition hover:gap-3"
            >
              Get to know ZestBotz
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '01',
                title: 'Understand the requirements',
                description:
                  'Identify the business need, existing workflow, and desired outcome.',
              },
              {
                number: '02',
                title: 'Choose the right approach',
                description:
                  'Evaluate suitable automation, AI, data, or software solutions.',
              },
              {
                number: '03',
                title: 'Develop and refine',
                description:
                  'Build toward the agreed requirements and refine based on feedback.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-2xl border border-black/[0.07] bg-white p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-sm font-bold text-[#E8590C]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#666666]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(232,89,12,0.24), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.14), transparent 36%), #111111',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A16C]">
            Have a challenge in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
            Your next project could start with a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Tell us what you are trying to solve. Let’s explore whether AI,
            automation, data, or software can help.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f36a1b]"
          >
            Let’s talk
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Work
