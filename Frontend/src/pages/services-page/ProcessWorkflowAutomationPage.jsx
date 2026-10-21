
import { Link } from 'react-router-dom'

const benefits = [
  {
    number: '01',
    title: 'Process Review',
    text: 'A review of your current process.',
    icon: 'review',
  },
  {
    number: '02',
    title: 'Software Robots',
    text: 'Software robots (RPA) for repeat tasks.',
    icon: 'robot',
  },
  {
    number: '03',
    title: 'Automated Actions',
    text: 'Automatic approvals, alerts and reminders.',
    icon: 'bell',
  },
  {
    number: '04',
    title: 'Process Tracking',
    text: 'Tracking, so you can see how it is running.',
    icon: 'tracking',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'Review your current process and identify tasks that repeat every day.',
  },
  {
    number: '02',
    title: 'Plan',
    text: 'Choose the tasks to automate and define how the workflow should run.',
  },
  {
    number: '03',
    title: 'Automate',
    text: 'Set up software robots, approvals, alerts and reminders where needed.',
  },
  {
    number: '04',
    title: 'Track & Improve',
    text: 'Review how the workflow runs and make adjustments as needed.',
  },
]

const useCases = [
  'Data entry',
  'Report making',
  'Document handling',
  'Moving data between systems',
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

function ServiceIcon({ name }) {
  const paths = {
    review: (
      <>
        <path d="M8 4h8l3 3v13H5V4h3Z" />
        <path d="M9 11h6M9 15h6M9 7h2" />
      </>
    ),
    robot: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="3" />
        <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
        <path d="M10 21h4" />
      </>
    ),
    tracking: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 15v-3M12 15V8M17 15v-5" />
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

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
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
    ['01', 'Identify repeat tasks'],
    ['02', 'Set up automation'],
    ['03', 'Track the workflow'],
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
              Example automated workflow
            </p>
            <p className="mt-1 text-xs text-[#777777]">
              A simple view of the process
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
            <ServiceIcon name="tracking" />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="rounded-2xl bg-[#F5F5F5] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
              Repetitive task
            </p>
            <p className="mt-2 text-sm leading-6 text-[#111111]">
              A routine task that takes time when handled manually.
            </p>
          </div>

          <div className="ml-7 h-7 w-px bg-[#E8590C]/40" />

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

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#E8590C]/20 bg-[#E8590C]/[0.05] p-4">
            <span className="mt-0.5 text-[#E8590C]">
              <ServiceIcon name="review" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Workflow visibility
              </p>
              <p className="mt-1 text-xs leading-5 text-[#555555]">
                Track the process to see how it is running.
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#E8590C] via-[#F5A16C] to-[#E8590C]" />
      </div>
    </div>
  )
}

export function ProcessWorkflowAutomationPage() {
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
              PROCESS & WORKFLOW AUTOMATION
            </div>

            <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Let software handle the{' '}
              <span className="relative inline-block text-[#E8590C]">
                repeat work.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E8590C]/25"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Let software handle repeat tasks like data entry, reports and
              approvals, so your team can focus on real work.
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
              {['Built around your process', 'Less repetitive work'].map(
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

      {/* Introduction */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8590C]">
            About this service
          </p>
          <p className="max-w-3xl text-base leading-7 text-[#555555]">
            Many teams spend hours on tasks that repeat every day, like typing
            data, making reports or sending approvals. We find these tasks and
            set up software to do them for you. The work gets done faster and
            with fewer mistakes.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="what-you-get"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <SectionHeading
          eyebrow="What you get"
          title="Practical automation for everyday work."
          description="We focus on repeat tasks and workflows that can be made easier to manage."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_40px_-25px_rgba(232,89,12,0.35)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors group-hover:bg-[#E8590C] group-hover:text-white">
                  <ServiceIcon name={item.icon} />
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
            title="From repetitive tasks to a clearer workflow."
            description="We review how your work gets done and identify practical opportunities for automation."
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
              eyebrow="Good for"
              title="Where can workflow automation help?"
              description="Routine tasks that follow repeatable steps can be useful starting points for automation."
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
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8590C]/10 text-xs font-bold text-[#E8590C]">
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
              Ready to make repetitive work simpler?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us about the tasks or processes your team wants to make
              easier. We'll discuss a practical approach for your business.
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
