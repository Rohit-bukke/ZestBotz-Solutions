
import { Link } from 'react-router-dom'

const scrapingServices = [
  {
    number: '01',
    icon: 'globe',
    title: 'Web Scraping',
    description:
      'Collect publicly accessible information from websites and online sources through structured, purpose-built extraction workflows.',
    features: [
      'Website content extraction',
      'Structured field collection',
      'Repeatable scraping workflows',
    ],
  },
  {
    number: '02',
    icon: 'database',
    title: 'Data Extraction',
    description:
      'Extract relevant information from web pages, documents, and supported data sources to make it easier to organize and use.',
    features: [
      'Field-based extraction',
      'Structured data output',
      'Source-specific processing',
    ],
  },
  {
    number: '03',
    icon: 'refresh',
    title: 'Automated Data Collection',
    description:
      'Build repeatable data collection workflows that help teams retrieve information at suitable intervals and reduce repetitive manual work.',
    features: [
      'Scheduled collection workflows',
      'Change and update checks',
      'Automated data delivery',
    ],
  },
  {
    number: '04',
    icon: 'clean',
    title: 'Data Cleaning & Transformation',
    description:
      'Prepare extracted information for downstream use by handling inconsistent formats, duplicate records, and missing values.',
    features: [
      'Format normalization',
      'Duplicate detection',
      'Data validation rules',
    ],
  },
  {
    number: '05',
    icon: 'integration',
    title: 'API & Data Integration',
    description:
      'Connect supported APIs, business applications, and data sources to create more consistent information flows.',
    features: [
      'API-based data retrieval',
      'Application integrations',
      'Structured data exchange',
    ],
  },
  {
    number: '06',
    icon: 'analytics',
    title: 'Data Analysis & Reporting',
    description:
      'Organize collected data into useful datasets and reports that help teams explore information and support business decisions.',
    features: [
      'Dataset preparation',
      'Reporting workflows',
      'Analysis-ready data',
    ],
  },
]

const useCases = [
  {
    icon: 'shopping',
    title: 'Market & Product Research',
    description:
      'Collect permitted product details, public pricing information, and category data for research and comparison.',
  },
  {
    icon: 'briefcase',
    title: 'Business Intelligence',
    description:
      'Organize relevant public business information to support market research, industry monitoring, and planning.',
  },
  {
    icon: 'search',
    title: 'Lead Research',
    description:
      'Structure permitted business information from appropriate public sources for research and business development workflows.',
  },
  {
    icon: 'newspaper',
    title: 'Content & Information Monitoring',
    description:
      'Track changes in permitted web content and organize updates from selected sources for review.',
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Define the data requirements',
    description:
      'Identify the target sources, required fields, collection frequency, expected output, and applicable access restrictions.',
  },
  {
    number: '02',
    title: 'Design the extraction workflow',
    description:
      'Select a suitable approach using available APIs, structured pages, or browser-based extraction where appropriate.',
  },
  {
    number: '03',
    title: 'Clean & validate the data',
    description:
      'Transform the collected information, apply validation rules, and handle missing or inconsistent records.',
  },
  {
    number: '04',
    title: 'Deliver & maintain',
    description:
      'Provide structured outputs or integrations and refine the workflow as source formats and business requirements change.',
  },
]

const iconPaths = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M5.6 9A7 7 0 0 1 17 5l3 2M4 17l3 2a7 7 0 0 0 11.4-4" />
    </>
  ),
  clean: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
      <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
    </>
  ),
  integration: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 4h6v6M20 4l-8 8M4 14v6h6M4 20l5-5" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19V5M4 19h17" />
      <rect x="7" y="11" width="3" height="5" rx="0.5" />
      <rect x="12" y="8" width="3" height="8" rx="0.5" />
      <rect x="17" y="5" width="3" height="11" rx="0.5" />
    </>
  ),
  shopping: (
    <>
      <path d="M3 4h2l2.5 11h10L21 8H6" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  newspaper: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h4v4H7zM14 8h3M14 11h3M7 16h10" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h4a3 3 0 0 1 3 3v6M12 15h4" />
    </>
  ),
}

function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name] || iconPaths.database}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        centered ? 'mx-auto text-center' : ''
      }`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
        {eyebrow}
      </p>

      <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#555555] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function DataExtractionPreview() {
  const rows = [
    {
      source: 'Product listing',
      fields: 'Name, price, category',
      status: 'Structured',
    },
    {
      source: 'Business directory',
      fields: 'Name, website, location',
      status: 'Structured',
    },
    {
      source: 'Public information page',
      fields: 'Title, content, updated date',
      status: 'Structured',
    },
  ]

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#E8590C]/[0.07] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="database" size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Data extraction workflow
              </p>
              <p className="mt-1 text-xs text-[#777777]">
                Illustrative interface
              </p>
            </div>
          </div>

          <span className="rounded-full border border-black/[0.08] px-3 py-1.5 text-xs text-[#555555]">
            Preview
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5">
            <h3 className="font-serif text-2xl text-[#111111]">
              From web pages to structured data
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#777777]">
              An example of how different sources can be organized into
              consistent data fields.
            </p>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            {[
              { label: 'Collect', icon: 'globe' },
              { label: 'Transform', icon: 'clean' },
              { label: 'Deliver', icon: 'database' },
            ].map((step, index) => (
              <div
                key={step.label}
                className="relative rounded-xl border border-black/[0.08] bg-[#F5F5F5] p-3 text-center"
              >
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#E8590C]">
                  <Icon name={step.icon} size={19} />
                </div>
                <p className="text-xs font-semibold text-[#111111] sm:text-sm">
                  {step.label}
                </p>
                {index < 2 && (
                  <span className="absolute -right-2 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#E8590C]">
                    <Icon name="arrow" size={12} />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-black/[0.08]">
            <div className="grid grid-cols-[1fr_1.25fr] gap-3 bg-[#F5F5F5] px-4 py-3">
              <span className="text-xs font-semibold text-[#555555]">
                Source type
              </span>
              <span className="text-xs font-semibold text-[#555555]">
                Extracted fields
              </span>
            </div>

            {rows.map((row) => (
              <div
                key={row.source}
                className="grid grid-cols-[1fr_1.25fr] gap-3 border-t border-black/[0.06] px-4 py-4"
              >
                <div>
                  <p className="text-xs font-medium leading-5 text-[#111111] sm:text-sm">
                    {row.source}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[10px] text-[#777777] sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                    {row.status}
                  </span>
                </div>
                <p className="text-xs leading-5 text-[#555555] sm:text-sm">
                  {row.fields}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-[#E8590C]/[0.05] p-4">
            <Icon
              name="check"
              size={19}
              className="mt-0.5 shrink-0 text-[#E8590C]"
            />
            <p className="text-xs leading-6 text-[#555555]">
              Example structure only. The displayed entries are illustrative,
              not collected live data or a functioning scraper.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WebScrapingPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* Hero */}
      <section
        className="relative isolate"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8590C]/20 bg-white/80 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#E8590C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#555555]">
                Web Scraping & Data Solutions
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-[62px]">
              Turn web information into{' '}
              <span className="text-[#E8590C]">usable data.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Collect, structure, and transform relevant online information
              with tailored web scraping and data workflows that help your
              business spend less time on repetitive data collection.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Discuss Your Data Needs
                <Icon name="arrow" size={18} />
              </Link>

              <a
                href="#scraping-services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#E8590C]/50 hover:text-[#E8590C]"
              >
                Explore Our Solutions
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Structured data extraction',
                'Automated collection',
                'Data processing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-[#E8590C]" />
                  <span className="text-sm text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <DataExtractionPreview />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Data that works harder
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Better data starts with a better collection process.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              Valuable business information is often spread across websites,
              online directories, documents, and separate applications.
              Collecting it manually can be repetitive, inconsistent, and
              difficult to maintain as requirements change.
            </p>

            <p>
              ZestBotz helps design data workflows that retrieve permitted
              information, transform it into structured formats, and prepare
              it for analysis or integration with existing systems. The
              approach depends on the source, the required data, and the
              intended business use.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="scraping-services"
        className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="From raw web content to structured information."
            description="Choose the capabilities that fit your data collection, preparation, and integration requirements."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scrapingServices.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_18px_45px_rgba(17,17,17,0.06)] sm:p-7"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                    <Icon name={service.icon} size={23} />
                  </div>
                  <span className="font-serif text-sm text-[#999999]">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl leading-snug text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#555555] sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-black/[0.08] pt-5">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#555555]"
                      >
                        <Icon
                          name="check"
                          size={16}
                          className="mt-0.5 shrink-0 text-[#E8590C]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A clear path from source to solution."
            description="A structured process helps ensure the collected information is relevant, consistent, and ready for its intended use."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/35 hover:shadow-lg hover:shadow-black/[0.04] sm:p-7"
              >
                <p className="font-serif text-4xl text-[#E8590C]/35">
                  {step.number}
                </p>

                <div className="my-5 h-px w-full bg-black/[0.08]">
                  <div className="h-px w-12 bg-[#E8590C]" />
                </div>

                <h3 className="font-serif text-xl text-[#111111]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business applications"
            title="Put collected data to practical use."
            description="Purpose-built extraction workflows can support different business activities, depending on source availability and permitted use."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="group flex gap-5 rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04] sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                  <Icon name={useCase.icon} size={23} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    {useCase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-base">
                    {useCase.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Data quality */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Quality & reliability
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Useful data is more than data collected.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              Extracted information becomes more useful when it is consistent,
              validated, and delivered in a format that downstream systems can
              understand. Data quality checks are an important part of
              designing a maintainable extraction workflow.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Validate required fields and expected formats.',
                'Identify duplicate and incomplete records.',
                'Handle changes in source page structure.',
                'Log failures and review exceptional cases.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8590C]/10 text-[#E8590C]">
                    <Icon name="check" size={15} />
                  </span>

                  <span className="text-sm leading-7 text-[#555555] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#E8590C]/[0.07] blur-2xl" />

            <div className="relative rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.05)] sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
                  <Icon name="clean" size={23} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    Data quality checks
                  </h3>
                  <p className="mt-1 text-sm text-[#777777]">
                    Example validation rules
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Required fields',
                    description: 'Check that expected fields are present.',
                  },
                  {
                    title: 'Format consistency',
                    description: 'Normalize dates, text, and field formats.',
                  },
                  {
                    title: 'Duplicate records',
                    description: 'Identify potential duplicate entries.',
                  },
                  {
                    title: 'Source changes',
                    description: 'Detect failures that need review.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-black/[0.08] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5] text-[#E8590C]">
                      <Icon
                        name={index === 3 ? 'refresh' : 'check'}
                        size={18}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#111111]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#777777] sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-[#777777]">
                Validation examples only. Actual rules depend on the source
                and the requirements of each project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible data collection */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-black/[0.08] bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:p-14">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="shield" size={27} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Responsible data collection
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl">
              Build data workflows with access and usage in mind.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#555555]">
              Data extraction should respect applicable laws, source terms,
              access permissions, privacy requirements, and technical
              restrictions. We plan collection workflows around the intended
              use of the data and the constraints of each source.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                'Source and permission review',
                'Respect for access restrictions',
                'Appropriate data handling',
                'Responsible collection frequency',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-[#F5F5F5] p-4"
                >
                  <Icon
                    name="check"
                    size={17}
                    className="mt-0.5 shrink-0 text-[#E8590C]"
                  />
                  <span className="text-sm leading-6 text-[#555555]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#111111] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
          style={{
            background:
              'radial-gradient(ellipse at 5% 10%, rgba(232,89,12,0.24), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.14), transparent 36%), #111111',
          }}
        >
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#F5A16C]">
              Web Scraping & Data Solutions
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
              Have a data challenge? Let’s solve it together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Tell us what information you need, where it comes from, and how
              you plan to use it. We’ll explore an appropriate approach to
              collection, processing, and delivery.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Talk to Our Team
                <Icon name="arrow" size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/[0.05]"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
