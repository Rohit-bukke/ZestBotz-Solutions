
import { Link } from 'react-router-dom'

const developmentServices = [
  {
    number: '01',
    icon: 'web',
    title: 'Website Development',
    description:
      'Build modern, responsive websites that communicate your brand, present your services, and provide a consistent experience across devices.',
    features: [
      'Responsive layouts',
      'Business and service websites',
      'Performance-conscious development',
    ],
  },
  {
    number: '02',
    icon: 'layers',
    title: 'Full-Stack Web Applications',
    description:
      'Develop interactive applications with thoughtfully designed frontends, reliable backend services, and structured data management.',
    features: [
      'Interactive user interfaces',
      'Backend business logic',
      'Database integration',
    ],
  },
  {
    number: '03',
    icon: 'layout',
    title: 'UI/UX & Frontend Development',
    description:
      'Turn product requirements into clear, accessible interfaces with consistent components and intuitive navigation.',
    features: [
      'Interface design implementation',
      'Reusable component systems',
      'Responsive user experiences',
    ],
  },
  {
    number: '04',
    icon: 'server',
    title: 'Backend & API Development',
    description:
      'Build backend services and APIs that connect application features, process business logic, and exchange data with other systems.',
    features: [
      'REST API development',
      'Authentication and authorization',
      'Third-party API integration',
    ],
  },
  {
    number: '05',
    icon: 'database',
    title: 'Database Design & Integration',
    description:
      'Organize application data with suitable database structures, validation, and integration patterns that fit your requirements.',
    features: [
      'Relational data modeling',
      'Queries and data operations',
      'Application-data integration',
    ],
  },
  {
    number: '06',
    icon: 'refresh',
    title: 'Maintenance & Modernization',
    description:
      'Improve existing applications through bug fixes, interface refinements, technical updates, and carefully planned enhancements.',
    features: [
      'Application improvements',
      'Dependency and code updates',
      'Ongoing technical support',
    ],
  },
]

const projectTypes = [
  {
    number: '01',
    icon: 'briefcase',
    title: 'Business Websites',
    description:
      'Professional websites for companies, service providers, and growing businesses that need a clear online presence.',
  },
  {
    number: '02',
    icon: 'app',
    title: 'Custom Web Applications',
    description:
      'Purpose-built applications for internal operations, customer portals, administration, and specialized workflows.',
  },
  {
    number: '03',
    icon: 'shopping',
    title: 'Customer-Facing Platforms',
    description:
      'Interactive platforms that help customers browse information, manage activities, and engage with your services.',
  },
  {
    number: '04',
    icon: 'workflow',
    title: 'Workflow & Management Systems',
    description:
      'Applications that organize records, user roles, approvals, communication, and day-to-day business processes.',
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Discover & define',
    description:
      'Understand your business objectives, users, essential features, technical constraints, and project priorities.',
  },
  {
    number: '02',
    title: 'Design & architect',
    description:
      'Plan the user experience, application structure, data model, integrations, and implementation approach.',
  },
  {
    number: '03',
    title: 'Develop & validate',
    description:
      'Build the application in manageable stages and test functionality, responsiveness, and important user workflows.',
  },
  {
    number: '04',
    title: 'Deploy & improve',
    description:
      'Prepare the application for deployment, validate the production environment, and plan ongoing maintenance.',
  },
]

const principles = [
  {
    icon: 'responsive',
    title: 'Responsive by design',
    description:
      'Build interfaces that adapt to different screen sizes and input methods.',
  },
  {
    icon: 'shield',
    title: 'Security-conscious development',
    description:
      'Consider authentication, authorization, validation, and safe handling of application data.',
  },
  {
    icon: 'code',
    title: 'Maintainable architecture',
    description:
      'Organize components and services to support debugging, collaboration, and future changes.',
  },
  {
    icon: 'speed',
    title: 'Performance awareness',
    description:
      'Consider efficient rendering, suitable data fetching, and optimized assets throughout development.',
  },
]

const iconPaths = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01M13 6.5h.01" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 9v12" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="8" rx="2" />
      <rect x="3" y="13" width="18" height="8" rx="2" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
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
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 9v12" />
    </>
  ),
  shopping: (
    <>
      <path d="M3 4h2l2.5 11h10L21 8H6" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h4a3 3 0 0 1 3 3v6M12 15h4" />
    </>
  ),
  responsive: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M7 8h10M7 11h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
    </>
  ),
  speed: (
    <>
      <path d="M12 14 16 8M20.2 15A9 9 0 1 0 3.8 15" />
      <path d="M3 19h18" />
      <circle cx="12" cy="14" r="1" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
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
      {iconPaths[name] || iconPaths.layers}
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

function WebsitePreview() {
  const navigation = ['Home', 'About', 'Services', 'Contact']

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#E8590C]/[0.07] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <div className="flex items-center gap-2 border-b border-black/[0.08] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8590C]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <div className="ml-3 flex-1 rounded-md bg-[#F5F5F5] px-3 py-1.5">
            <p className="text-[10px] text-[#777777]">
              your-business-website.example
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8590C] text-white">
                <Icon name="layers" size={19} />
              </div>
              <span className="text-sm font-semibold text-[#111111]">
                YourBrand
              </span>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              {navigation.map((item) => (
                <span
                  key={item}
                  className={`text-[10px] ${
                    item === 'Home'
                      ? 'font-semibold text-[#E8590C]'
                      : 'text-[#777777]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 sm:hidden">
              <span className="h-0.5 w-4 rounded bg-[#111111]" />
              <span className="h-0.5 w-4 rounded bg-[#111111]" />
            </div>
          </div>

          <div
            className="rounded-xl p-5 sm:p-7"
            style={{
              background:
                'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 45%), #F8F8F8',
            }}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8590C]">
              A better digital experience
            </p>

            <h3 className="max-w-sm font-serif text-2xl leading-tight text-[#111111] sm:text-3xl">
              Build something meaningful for your business.
            </h3>

            <p className="mt-3 max-w-sm text-xs leading-6 text-[#555555] sm:text-sm">
              A considered digital experience designed around your customers
              and your business goals.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-4 py-2.5 text-[11px] font-semibold text-white">
              Explore our services
              <Icon name="arrow" size={14} />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: 'layout', label: 'Frontend' },
              { icon: 'server', label: 'Backend' },
              { icon: 'database', label: 'Database' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-black/[0.08] bg-white p-3 text-center sm:p-4"
              >
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8590C]/10 text-[#E8590C]">
                  <Icon name={item.icon} size={19} />
                </div>
                <p className="text-[10px] font-medium text-[#555555] sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/[0.08] px-5 py-3">
          <p className="text-xs leading-5 text-[#777777]">
            Illustrative website concept, not a live application.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function WebSoftwarePage() {
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
                Web & Software Development
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-[62px]">
              Digital products built around{' '}
              <span className="text-[#E8590C]">your vision.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Design and develop modern websites, full-stack applications,
              and tailored software that bring your ideas to life and support
              the way your business works.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Discuss Your Project
                <Icon name="arrow" size={18} />
              </Link>

              <a
                href="#development-services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#E8590C]/50 hover:text-[#E8590C]"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Modern web experiences',
                'Custom applications',
                'Scalable architecture',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-[#E8590C]" />
                  <span className="text-sm text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <WebsitePreview />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              From idea to application
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Software should solve real problems, not create new ones.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              A successful digital product needs more than an attractive
              interface. It needs clear user flows, dependable application
              logic, thoughtful data management, and an architecture that
              supports future improvements.
            </p>

            <p>
              ZestBotz helps turn business requirements into practical digital
              solutions, from responsive websites and customer portals to
              custom web applications and backend services. Each project can
              be shaped around its users, technical requirements, and
              long-term objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section
        id="development-services"
        className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our development services"
            title="Everything your digital product needs to take shape."
            description="Build a new product, improve an existing application, or connect the systems behind your business."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {developmentServices.map((service) => (
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

      {/* Project Types */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we can build"
            title="The right solution for your next step."
            description="Different business goals call for different digital products. Start with the problem you want to solve, then shape the solution around it."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {projectTypes.map((project) => (
              <article
                key={project.number}
                className="group flex gap-5 rounded-2xl border border-black/[0.09] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04] sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                  <Icon name={project.icon} size={23} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-base">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we approach development"
            title="Thoughtful engineering from the start."
            description="A strong foundation helps make applications easier to use, maintain, test, and evolve as requirements change."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                  <Icon name={principle.icon} size={23} />
                </div>

                <h3 className="font-serif text-xl leading-snug text-[#111111]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our development process"
            title="A clear path from requirements to release."
            description="Work through a structured development lifecycle with priorities, testing, and technical decisions aligned to your project."
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

      {/* Technology and Integration */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Connected applications
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Bring your interfaces, services, and data together.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              Modern applications often need to work with external APIs,
              databases, authentication services, and existing business tools.
              A well-planned architecture helps those pieces communicate
              while keeping responsibilities clearly separated.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Connect applications with suitable APIs.',
                'Integrate data sources and business services.',
                'Design authentication and role-based access.',
                'Plan for deployment and future maintenance.',
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
              <div className="mb-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
                  <Icon name="workflow" size={23} />
                </div>

                <h3 className="font-serif text-2xl text-[#111111]">
                  Application architecture
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  An illustrative view of the main parts of a web application.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Frontend interface',
                    description: 'Pages, components, and user interactions',
                    icon: 'layout',
                  },
                  {
                    title: 'Backend services',
                    description: 'Business logic, APIs, and access control',
                    icon: 'server',
                  },
                  {
                    title: 'Data layer',
                    description: 'Persistent storage and data operations',
                    icon: 'database',
                  },
                  {
                    title: 'External integrations',
                    description: 'Connected tools and third-party services',
                    icon: 'integration',
                  },
                ].map((layer, index) => (
                  <div key={layer.title}>
                    <div
                      className={`flex items-center gap-4 rounded-xl border p-4 ${
                        index === 0
                          ? 'border-[#E8590C]/30 bg-[#E8590C]/[0.05]'
                          : 'border-black/[0.08] bg-white'
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          index === 0
                            ? 'bg-[#E8590C] text-white'
                            : 'bg-[#F5F5F5] text-[#E8590C]'
                        }`}
                      >
                        <Icon name={layer.icon} size={21} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#111111]">
                          {layer.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#777777]">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    {index < 3 && (
                      <div className="ml-9 h-3 border-l border-dashed border-[#E8590C]/40" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-[#777777]">
                Conceptual architecture only. Actual components depend on the
                project's requirements and chosen technology stack.
              </p>
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
              Web & Software Development
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
              Have an idea? Let’s build something useful.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Tell us about your business, your users, and the problem you
              want to solve. Let’s explore a practical approach to bringing
              your next digital product to life.
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
