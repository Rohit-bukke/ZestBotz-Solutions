
import { Link } from 'react-router-dom'

const BRAND = '#E8590C'

const erpModules = [
  {
    number: '01',
    title: 'Finance & Accounting',
    description:
      'Bring financial operations together with structured accounting, expense management, invoicing, and financial reporting workflows.',
    icon: 'finance',
    features: ['Accounts and ledgers', 'Invoicing and expenses', 'Financial reporting'],
  },
  {
    number: '02',
    title: 'Inventory & Supply Chain',
    description:
      'Improve visibility across inventory, procurement, suppliers, and order fulfilment with connected operational workflows.',
    icon: 'inventory',
    features: ['Stock management', 'Purchase orders', 'Supplier coordination'],
  },
  {
    number: '03',
    title: 'Human Resources',
    description:
      'Organize employee information and streamline everyday HR processes through connected workforce management.',
    icon: 'people',
    features: ['Employee records', 'Leave management', 'HR workflows'],
  },
  {
    number: '04',
    title: 'Sales & Customer Operations',
    description:
      'Connect customer orders, sales activities, billing, and operational processes to support a more consistent customer experience.',
    icon: 'sales',
    features: ['Order management', 'Customer records', 'Sales workflows'],
  },
  {
    number: '05',
    title: 'Reporting & Business Insights',
    description:
      'Bring business information together to support operational visibility, reporting, and informed decision-making.',
    icon: 'report',
    features: ['Operational reports', 'Consolidated information', 'Decision support'],
  },
  {
    number: '06',
    title: 'Workflow Automation',
    description:
      'Reduce repetitive manual work by connecting business rules, approvals, notifications, and routine processes.',
    icon: 'automation',
    features: ['Approval workflows', 'Task automation', 'Process notifications'],
  },
]

const erpBenefits = [
  {
    title: 'Connected operations',
    description:
      'Connect business functions so teams can work with more consistent information across departments.',
    icon: 'connected',
  },
  {
    title: 'Less manual work',
    description:
      'Automate repetitive tasks and structured workflows to reduce unnecessary manual effort.',
    icon: 'automation',
  },
  {
    title: 'Better visibility',
    description:
      'Make relevant operational information easier to access, review, and understand.',
    icon: 'report',
  },
  {
    title: 'Flexible architecture',
    description:
      'Shape ERP solutions around your business processes, existing systems, and evolving requirements.',
    icon: 'layers',
  },
]

const implementationSteps = [
  {
    number: '01',
    title: 'Understand your business',
    description:
      'We review your current processes, operational challenges, business requirements, and existing technology.',
  },
  {
    number: '02',
    title: 'Plan the solution',
    description:
      'We define the appropriate modules, integrations, workflows, and implementation priorities for your requirements.',
  },
  {
    number: '03',
    title: 'Configure & integrate',
    description:
      'We configure the solution and connect relevant systems, data sources, and business processes.',
  },
  {
    number: '04',
    title: 'Test & improve',
    description:
      'We validate workflows, review business requirements, and prepare the solution for adoption and ongoing improvement.',
  },
]

const useCases = [
  {
    title: 'Manufacturing',
    description:
      'Coordinate inventory, procurement, production-related information, and operational processes.',
  },
  {
    title: 'Retail & Distribution',
    description:
      'Connect orders, stock information, supplier processes, and sales operations.',
  },
  {
    title: 'Professional Services',
    description:
      'Organize finance, project-related workflows, resource information, and internal operations.',
  },
  {
    title: 'Growing Businesses',
    description:
      'Create more connected business processes as teams, operations, and system requirements evolve.',
  },
]

function Icon({ name, size = 24, className = '' }) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  const paths = {
    finance: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h3M15 14h2" />
      </>
    ),
    inventory: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5M12 13v4" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" />
      </>
    ),
    sales: (
      <>
        <path d="M4 19V5M4 19h17" />
        <path d="m7 15 4-4 3 2 6-7M16 6h4v4" />
      </>
    ),
    report: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h3M15 16h1" />
      </>
    ),
    automation: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="5" />
        <path d="m10 12 1.4 1.4L14.5 10" />
      </>
    ),
    connected: (
      <>
        <rect x="2.5" y="3" width="7" height="7" rx="1.5" />
        <rect x="14.5" y="3" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
        <path d="M9.5 6.5h5M6 10v2.5h6M18 10v2.5h-6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    integration: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 4h6v6M20 4l-8 8M4 14v6h6M4 20l5-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
  }

  return <svg {...shared}>{paths[name] || paths.layers}</svg>
}

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        centered ? 'mx-auto text-center' : ''
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
          {eyebrow}
        </p>
      )}

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

function ERPPreview() {
  const departments = [
    { label: 'Finance', detail: 'Accounts & billing', icon: 'finance' },
    { label: 'Inventory', detail: 'Stock & procurement', icon: 'inventory' },
    { label: 'People', detail: 'Employee operations', icon: 'people' },
    { label: 'Sales', detail: 'Orders & customers', icon: 'sales' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#E8590C]/[0.06] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="layers" size={21} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Business workspace
              </p>
              <p className="mt-0.5 text-xs text-[#777777]">
                Illustrative ERP interface
              </p>
            </div>
          </div>

          <span className="rounded-full border border-black/[0.08] px-3 py-1.5 text-xs text-[#555555]">
            Overview
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5">
            <p className="font-serif text-2xl text-[#111111]">
              Connected operations
            </p>
            <p className="mt-2 text-sm leading-6 text-[#777777]">
              A unified workspace for everyday business processes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {departments.map((department) => (
              <div
                key={department.label}
                className="rounded-xl border border-black/[0.08] bg-white p-4 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F5F5] text-[#E8590C]">
                  <Icon name={department.icon} size={21} />
                </div>
                <p className="text-sm font-semibold text-[#111111]">
                  {department.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  {department.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-black/[0.08] bg-[#F5F5F5] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Icon name="connected" size={19} className="text-[#E8590C]" />
              <p className="text-sm font-semibold text-[#111111]">
                Connected business workflow
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['Business data', 'Workflow', 'Team action'].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#555555]">
                      {step}
                    </span>
                    {index < 2 && (
                      <Icon
                        name="arrow"
                        size={14}
                        className="text-[#E8590C]"
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-black/[0.08] px-5 py-3 sm:px-6">
          <p className="text-xs leading-5 text-[#777777]">
            Example layout for illustrating connected ERP functions. Not a
            live product dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ERPPage() {
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
                Enterprise Resource Planning
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-[62px]">
              Bring your business together with{' '}
              <span className="text-[#E8590C]">ERP solutions.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Connect your business processes, simplify daily operations, and
              create a more unified way to manage information across your
              organization with ERP solutions tailored to your needs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Discuss Your ERP Needs
                <Icon name="arrow" size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#E8590C]/50 hover:text-[#E8590C]"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Connected business processes',
                'Workflow automation',
                'System integration',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-[#E8590C]" />
                  <span className="text-sm text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <ERPPreview />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              One connected foundation
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Replace disconnected workflows with a clearer way to work.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              As businesses grow, information can become scattered across
              separate applications, spreadsheets, and manual processes. This
              makes it harder for teams to coordinate activities and maintain
              a consistent view of operations.
            </p>
            <p>
              Enterprise Resource Planning (ERP) brings relevant business
              functions into a more connected environment. ZestBotz helps
              organizations explore ERP capabilities, streamline workflows,
              and integrate business systems around their operational
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="ERP capabilities"
            title="The business functions that keep you moving."
            description="Build a connected operational foundation around the functions that matter to your organization."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((module) => (
              <article
                key={module.number}
                className="group rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_18px_45px_rgba(17,17,17,0.06)] sm:p-7"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                    <Icon name={module.icon} size={23} />
                  </div>
                  <span className="font-serif text-sm text-[#999999]">
                    {module.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl leading-snug text-[#111111]">
                  {module.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#555555] sm:text-base">
                  {module.description}
                </p>

                <div className="mt-6 border-t border-black/[0.08] pt-5">
                  <ul className="space-y-3">
                    {module.features.map((feature) => (
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

      {/* Benefits */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why ERP"
            title="More connected systems. More coordinated teams."
            description="ERP is about more than bringing software together. It is about making everyday business processes easier to coordinate and manage."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {erpBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-black/[0.09] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
                  <Icon name={benefit.icon} size={23} />
                </div>

                <h3 className="font-serif text-xl text-[#111111]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Connected technology
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Make your existing systems work better together.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              An ERP environment can work alongside other business
              applications when the right integrations and data flows are in
              place. We help identify opportunities to connect systems and
              reduce unnecessary handoffs between teams.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Connect relevant business applications and services.',
                'Organize data exchange between supported systems.',
                'Automate suitable repetitive tasks and approvals.',
                'Consider security, access, and maintainability during design.',
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
                <p className="font-serif text-2xl text-[#111111]">
                  A connected ecosystem
                </p>
                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  An illustrative view of how business systems can work
                  together.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: 'ERP platform',
                    detail: 'Core business processes',
                    icon: 'layers',
                    featured: true,
                  },
                  {
                    name: 'Business applications',
                    detail: 'Existing tools and services',
                    icon: 'integration',
                  },
                  {
                    name: 'Automation workflows',
                    detail: 'Rules, approvals, and tasks',
                    icon: 'automation',
                  },
                  {
                    name: 'Business information',
                    detail: 'Structured operational data',
                    icon: 'report',
                  },
                ].map((item, index) => (
                  <div key={item.name}>
                    <div
                      className={`flex items-center gap-4 rounded-xl border p-4 ${
                        item.featured
                          ? 'border-[#E8590C]/30 bg-[#E8590C]/[0.06]'
                          : 'border-black/[0.08] bg-white'
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          item.featured
                            ? 'bg-[#E8590C] text-white'
                            : 'bg-[#F5F5F5] text-[#E8590C]'
                        }`}
                      >
                        <Icon name={item.icon} size={21} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#777777]">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    {index < 3 && (
                      <div className="flex h-5 items-center pl-9">
                        <div className="h-full border-l border-dashed border-[#E8590C]/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where ERP fits"
            title="Designed around real business operations."
            description="ERP requirements differ across industries and organizations. The solution should reflect your processes, operational priorities, and existing systems."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((item, index) => (
              <article
                key={item.title}
                className="group flex gap-5 rounded-2xl border border-black/[0.09] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04] sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 font-serif text-lg text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation process */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our approach"
            title="From business requirements to a connected solution."
            description="A structured approach helps align ERP decisions with your needs, technical environment, and implementation priorities."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7"
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

      {/* Security and fit */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-black/[0.08] bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:p-14">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="shield" size={27} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Built around your needs
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl">
              The right ERP starts with the right requirements.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#555555]">
              Every organization has different workflows, data requirements,
              and technology constraints. We begin by understanding your
              environment before recommending an implementation approach.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                'Business process alignment',
                'Integration requirements',
                'Access and data considerations',
                'Maintainability and future needs',
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
              Let’s build a better-connected business
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
              Ready to simplify your business operations?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Let’s discuss your ERP requirements, identify opportunities to
              connect your systems, and explore an approach that fits your
              organization.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Talk to Our Team
                <Icon name="arrow" size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/[0.05]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ERPPage
