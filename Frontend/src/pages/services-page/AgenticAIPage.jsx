
import { Link } from 'react-router-dom'

const BRAND = {
  orange: '#E8590C',
  black: '#111111',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#555555',
}

const capabilities = [
  {
    number: '01',
    title: 'AI Agents for Everyday Tasks',
    text: 'Build agents for specific business tasks, from sorting requests to preparing drafts and summaries.',
    icon: 'target',
  },
  {
    number: '02',
    title: 'Connected Tools & Data',
    text: 'Connect agents with relevant business tools, documents, and data to support useful workflows.',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Human Approval & Control',
    text: 'Add review steps and approval checkpoints so your team remains in control of important actions.',
    icon: 'shield',
  },
  {
    number: '04',
    title: 'Workflow Automation',
    text: 'Coordinate multiple steps in a process to reduce repetitive work and unnecessary handoffs.',
    icon: 'workflow',
  },
  {
    number: '05',
    title: 'Business Integrations',
    text: 'Connect solutions with existing applications and systems wherever the requirements allow.',
    icon: 'plug',
  },
  {
    number: '06',
    title: 'Testing & Improvement',
    text: 'Test workflows, review outputs, and refine the solution as your business requirements evolve.',
    icon: 'chart',
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'Understand your process, business goals, and the tasks that take up valuable time.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Define the agent responsibilities, required tools, data access, and approval steps.',
  },
  {
    number: '03',
    title: 'Build & Test',
    text: 'Develop the solution and test it against relevant scenarios and business requirements.',
  },
  {
    number: '04',
    title: 'Deploy & Improve',
    text: 'Launch the solution, review its performance, and make improvements as needed.',
  },
]

const useCases = [
  'Research and information gathering',
  'Sorting incoming requests',
  'Drafting emails and summaries',
  'Invoice and document processing',
  'Internal knowledge assistance',
  'Routine data entry and reconciliation',
]

const benefits = [
  {
    title: 'Start with the problem',
    text: 'Focus on a real business need instead of adding AI without a clear purpose.',
  },
  {
    title: 'Keep people involved',
    text: 'Include human review wherever decisions or sensitive actions require it.',
  },
  {
    title: 'Fit your workflow',
    text: 'Shape the solution around your existing processes, tools, and requirements.',
  },
]

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="m5 12 4 4L19 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CapabilityIcon({ name }) {
  const paths = {
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m12 12 7-7m-3 0h3v3" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
        <path d="M10 6.5h4a2 2 0 0 1 2 2V14M14 17.5h-4a2 2 0 0 1-2-2V10" />
      </>
    ),
    plug: (
      <>
        <path d="M9 7V3m6 4V3M7 7h10v4a5 5 0 0 1-10 0V7Zm5 9v5" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 5-7" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E8590C]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-[#555555] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function WorkflowPreview() {
  const steps = [
    ['01', 'Understand the request'],
    ['02', 'Gather relevant information'],
    ['03', 'Prepare a useful result'],
  ]

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[36px] bg-[#E8590C]/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_80px_-35px_rgba(17,17,17,0.3)]">
        <div className="flex items-center justify-between border-b border-black/[0.07] px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-[#111111]">
              Example agent workflow
            </p>
            <p className="mt-1 text-xs text-[#777777]">
              A practical, human-guided process
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
            <CapabilityIcon name="workflow" />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="rounded-2xl bg-[#F5F5F5] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
              Business request
            </p>
            <p className="mt-2 text-sm leading-6 text-[#111111]">
              Gather information, organize it, and prepare a response for review.
            </p>
          </div>

          <div className="ml-7 h-7 w-px bg-[#E8590C]/40" />

          <div className="space-y-0">
            {steps.map(([number, title], index) => (
              <div key={number}>
                <div className="flex items-center gap-4 rounded-xl border border-black/[0.08] bg-white p-4 transition-colors hover:border-[#E8590C]/40">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8590C]/10 text-xs font-bold text-[#E8590C]">
                    {number}
                  </span>
                  <span className="text-sm font-medium text-[#222222]">
                    {title}
                  </span>
                  {index === 2 && (
                    <span className="ml-auto text-[#E8590C]">
                      <CheckIcon />
                    </span>
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="ml-7 h-5 w-px bg-[#E8590C]/40" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#E8590C]/20 bg-[#E8590C]/[0.05] p-4">
            <span className="mt-0.5 text-[#E8590C]">
              <CapabilityIcon name="shield" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Human review
              </p>
              <p className="mt-1 text-xs leading-5 text-[#555555]">
                A person reviews the result before sensitive actions are taken.
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#E8590C] via-[#F5A16C] to-[#E8590C]" />
      </div>
    </div>
  )
}

export function AgenticAIPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8590C]/20 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-[#E8590C]">
              <span className="h-2 w-2 rounded-full bg-[#E8590C]" />
              AGENTIC AI SOLUTIONS
            </div>

            <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              AI agents that do more than{' '}
              <span className="relative inline-block text-[#E8590C]">
                answer questions.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E8590C]/25"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              We build AI agents for specific business tasks. They can work
              with relevant tools and data, prepare useful outputs, and follow
              approval steps that keep your team in control.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/book-a-call"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E8590C] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#c94b09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8590C]"
              >
                Discuss your workflow
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#E8590C] hover:text-[#E8590C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8590C]"
              >
                Explore services
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#555555]">
              {['Built around your needs', 'Human-guided workflows'].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="text-[#E8590C]">
                      <CheckIcon />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <WorkflowPreview />
        </div>
      </section>

      {/* Introduction strip */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8590C]">
            From task to solution
          </p>
          <p className="max-w-3xl text-base leading-7 text-[#555555]">
            Agentic AI can go beyond answering a prompt. Depending on the task,
            an agent can gather information, use connected tools, prepare an
            output, and request human approval when needed.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="What we build"
          title="Practical AI agents for real business needs."
          description="Solutions shaped around your tasks, tools, and requirements—not technology for its own sake."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_40px_-25px_rgba(232,89,12,0.35)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors group-hover:bg-[#E8590C] group-hover:text-white">
                  <CapabilityIcon name={item.icon} />
                </div>

                <span className="font-serif text-lg text-[#E8590C]/50">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                {item.text}
              </p>

              <div className="mt-6 h-px w-10 bg-[#E8590C]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#E8590C]" />
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[#F5F5F5]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-0 h-80 w-80 rounded-full bg-[#E8590C]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Our approach"
            title="From your first conversation to a working solution."
            description="A clear process helps us choose the right approach and build around your business requirements."
          />

          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <li key={step.number} className="relative">
                {index < process.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-12 top-6 hidden h-px w-[calc(100%-2rem)] bg-[#E8590C]/25 lg:block"
                  />
                )}

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#E8590C]/30 bg-white font-serif text-sm font-semibold text-[#E8590C]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-[#555555]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Possible use cases"
              title="Where can AI agents help?"
              description="The right starting point depends on your workflow. Here are examples of tasks that may benefit from an agent-based approach."
            />

            <Link
              to="/book-a-call"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] hover:text-[#c94b09]"
            >
              Discuss your requirements
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/[0.08] bg-white p-4 transition-colors hover:border-[#E8590C]/40 hover:bg-[#E8590C]/[0.025] sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8590C]/10 text-xs font-bold text-[#E8590C]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="text-sm font-medium leading-6 text-[#333333]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Designed with purpose"
            title="Useful technology. Clear human control."
            description="AI should support the way your team works. We focus on the business problem, appropriate controls, and a solution that fits your needs."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 sm:p-7"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8590C]/10 text-[#E8590C]">
                  <CheckIcon />
                </span>

                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#111111] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#E8590C]/25 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#E8590C]/15 blur-[90px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A16C]">
              Let's get started
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Have a workflow that could work smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us about the task, process, or challenge you want to solve.
              We'll discuss a practical approach for your business.
            </p>

            <Link
              to="/book-a-call"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E8590C] px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Talk to us
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
