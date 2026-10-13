
import { Link } from 'react-router-dom'

const capabilities = [
  {
    number: '01',
    title: 'Data Integration',
    text: 'Bring information from different sources into one place so your team can work with a more complete view.',
    icon: 'database',
  },
  {
    number: '02',
    title: 'Data Cleaning & Preparation',
    text: 'Organize inconsistent data into a cleaner, more useful format for reporting and analysis.',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Interactive Dashboards',
    text: 'Present business information through clear dashboards that help your team explore and understand its data.',
    icon: 'dashboard',
  },
  {
    number: '04',
    title: 'KPI Tracking',
    text: 'Bring important business indicators into one view so your team can follow progress against its goals.',
    icon: 'target',
  },
  {
    number: '05',
    title: 'Automated Reporting',
    text: 'Reduce repetitive reporting work with reports prepared and delivered on a schedule that fits your needs.',
    icon: 'clock',
  },
  {
    number: '06',
    title: 'Data Visualization',
    text: 'Present complex information in clear visual formats that make patterns and business trends easier to understand.',
    icon: 'chart',
  },
]

const process = [
  {
    number: '01',
    title: 'Connect',
    text: 'Identify the data sources your team uses and understand what information matters.',
  },
  {
    number: '02',
    title: 'Organize',
    text: 'Bring relevant data together, clean it, and prepare it for analysis.',
  },
  {
    number: '03',
    title: 'Visualize',
    text: 'Build dashboards and reports around your business questions and requirements.',
  },
  {
    number: '04',
    title: 'Improve',
    text: 'Review reports with your team and refine them as your needs change.',
  },
]

const useCases = [
  'Sales performance reporting',
  'Finance and expense reporting',
  'Business operations tracking',
  'KPI and goal monitoring',
  'Data from multiple sources',
  'Scheduled business reports',
]

const benefits = [
  {
    title: 'See the bigger picture',
    text: 'Bring information from different sources together to understand what is happening across your business.',
  },
  {
    title: 'Spend less time reporting',
    text: 'Reduce repetitive manual work with organized data and reporting workflows that fit your process.',
  },
  {
    title: 'Make informed decisions',
    text: 'Give your team clearer information to review business performance and decide what to do next.',
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

function AnalyticsIcon({ name, className = 'h-6 w-6' }) {
  const paths = {
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    dashboard: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 5-7" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5M4 17v-5h5" />
        <path d="M5.6 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.4-3" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
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

/*
 * Illustrative workflow only.
 * No sample financial values, fabricated metrics, or chart data.
 */
function AnalyticsWorkflowPreview() {
  const sources = [
    { name: 'Sales data', icon: 'database' },
    { name: 'Finance data', icon: 'file' },
    { name: 'Operations', icon: 'layers' },
  ]

  const outputs = [
    {
      title: 'Business overview',
      text: 'A consolidated view of relevant business information.',
      icon: 'dashboard',
    },
    {
      title: 'Performance reports',
      text: 'Reports organized around your selected indicators.',
      icon: 'file',
    },
    {
      title: 'Visual insights',
      text: 'Data visualizations based on your actual data.',
      icon: 'chart',
    },
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
              From data to insight
            </p>
            <p className="mt-1 text-xs text-[#777777]">
              An illustrative analytics workflow
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
            <AnalyticsIcon name="dashboard" />
          </div>
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
              01 — Connect your sources
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {sources.map((source) => (
                <div
                  key={source.name}
                  className="min-w-0 rounded-xl border border-black/[0.08] bg-white p-3 transition-colors hover:border-[#E8590C]/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8590C]/10 text-[#E8590C]">
                    <AnalyticsIcon
                      name={source.icon}
                      className="h-5 w-5"
                    />
                  </div>

                  <p className="mt-3 text-xs font-semibold leading-5 text-[#222222]">
                    {source.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pl-5">
            <div className="h-7 w-px bg-[#E8590C]/40" />
            <div className="flex items-center gap-2 rounded-xl border border-[#E8590C]/20 bg-[#E8590C]/[0.05] px-4 py-3">
              <AnalyticsIcon
                name="refresh"
                className="h-5 w-5 text-[#E8590C]"
              />
              <span className="text-sm font-medium text-[#333333]">
                02 — Organize and prepare
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
              03 — Build useful reports
            </p>

            <div className="mt-3 space-y-3">
              {outputs.map((output) => (
                <div
                  key={output.title}
                  className="flex items-start gap-3 rounded-xl border border-black/[0.08] bg-white p-4 transition-colors hover:border-[#E8590C]/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8590C]/10 text-[#E8590C]">
                    <AnalyticsIcon name={output.icon} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#222222]">
                      {output.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#555555]">
                      {output.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[#E8590C]/20 bg-[#E8590C]/[0.05] p-4">
            <span className="mt-0.5 text-[#E8590C]">
              <AnalyticsIcon name="target" />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Your data. Your business questions.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#555555]">
                Reports and visualizations are designed around your actual
                data, selected indicators, and requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#E8590C] via-[#F5A16C] to-[#E8590C]" />
      </div>
    </div>
  )
}

export function DataAnalyticsPage() {
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
              DATA ANALYTICS & DASHBOARDS
            </div>

            <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Turn business data into{' '}
              <span className="relative inline-block text-[#E8590C]">
                clearer decisions.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E8590C]/25"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              We bring your business data together and turn it into clear
              dashboards and reports. Understand what is happening, track
              important indicators, and give your team useful information
              to act on.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E8590C] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#c94b09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8590C]"
              >
                Discuss your data needs
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
              {[
                'Reports built around your needs',
                'Clear, organized information',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="text-[#E8590C]">
                    <CheckIcon />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <AnalyticsWorkflowPreview />
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8590C]">
            From data to insight
          </p>

          <p className="max-w-3xl text-base leading-7 text-[#555555]">
            Business information becomes more useful when it is organized
            and easy to understand. We help bring your data together and
            present it through dashboards and reports that support everyday
            business decisions.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="What we build"
          title="Make your business data easier to understand."
          description="From data preparation to interactive dashboards, we build reporting solutions around your business questions and requirements."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_40px_-25px_rgba(232,89,12,0.35)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors group-hover:bg-[#E8590C] group-hover:text-white">
                  <AnalyticsIcon name={item.icon} />
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
            title="From scattered data to a clearer view."
            description="A practical process helps us understand your data, build useful reports, and deliver a solution that fits your team's workflow."
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
              title="Where can data analytics help?"
              description="The right dashboard starts with the questions your team needs to answer. We organize information around the areas that matter to your business."
            />

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition-colors hover:text-[#c94b09]"
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

      {/* Benefits */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Designed with purpose"
            title="Clear information. More confident decisions."
            description="We focus on making data useful for the people who need it, with reporting that supports your business processes and goals."
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
              Ready to make more sense of your data?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us about your reporting needs, your data sources, or the
              questions you want your dashboards to answer. We'll discuss a
              practical approach for your business.
            </p>

            <Link
              to="/contact"
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
