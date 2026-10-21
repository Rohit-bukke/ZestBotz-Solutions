
import { Link } from 'react-router-dom'

const rcmServices = [
  {
    number: '01',
    icon: 'eligibility',
    title: 'Eligibility & Benefits Verification',
    description:
      'Verify insurance coverage and benefits before appointments to help teams identify missing information and potential billing issues earlier.',
    items: [
      'Insurance eligibility checks',
      'Patient demographics validation',
      'Benefits verification workflows',
    ],
  },
  {
    number: '02',
    icon: 'authorization',
    title: 'Prior Authorization Support',
    description:
      'Organize authorization requirements, documentation, and follow-ups to support smoother coordination between providers and payers.',
    items: [
      'Authorization status tracking',
      'Documentation coordination',
      'Payer follow-up workflows',
    ],
  },
  {
    number: '03',
    icon: 'claims',
    title: 'Claims Processing & Scrubbing',
    description:
      'Support claim preparation and submission with structured checks designed to identify missing information and potential errors before submission.',
    items: [
      'Claim data validation',
      'Pre-submission checks',
      'Rejection tracking and follow-up',
    ],
  },
  {
    number: '04',
    icon: 'denials',
    title: 'Denial Management',
    description:
      'Organize denied claims by reason, coordinate supporting documentation, and help teams manage correction and appeal workflows.',
    items: [
      'Denial categorization',
      'Root-cause analysis support',
      'Appeal and resubmission tracking',
    ],
  },
  {
    number: '05',
    icon: 'payments',
    title: 'Payment Posting & Reconciliation',
    description:
      'Structure payment information and reconciliation workflows to help teams maintain clearer records of reimbursements and adjustments.',
    items: [
      'Payment posting workflows',
      'Remittance data processing',
      'Payment reconciliation support',
    ],
  },
  {
    number: '06',
    icon: 'receivables',
    title: 'Accounts Receivable Management',
    description:
      'Organize outstanding claims and follow-up priorities so teams can focus on unresolved balances and aging receivables.',
    items: [
      'AR aging categorization',
      'Outstanding claim tracking',
      'Payer follow-up coordination',
    ],
  },
]

const dataSolutions = [
  {
    icon: 'data',
    title: 'Healthcare Data Processing',
    description:
      'Structure and validate healthcare administrative data to improve consistency across billing and operational workflows.',
  },
  {
    icon: 'analytics',
    title: 'RCM Reporting & Analytics',
    description:
      'Organize claims, denials, payments, and receivables information into reports that support operational review and decision-making.',
  },
  {
    icon: 'automation',
    title: 'Intelligent Workflow Automation',
    description:
      'Automate suitable repetitive tasks, data entry, notifications, and workflow handoffs while retaining human review where needed.',
  },
  {
    icon: 'integration',
    title: 'System & Data Integration',
    description:
      'Explore integrations between relevant healthcare applications, billing platforms, and data sources based on technical requirements.',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Patient access',
    description: 'Eligibility, benefits, and authorization',
  },
  {
    number: '02',
    title: 'Claims preparation',
    description: 'Data checks, coding validation, and submission',
  },
  {
    number: '03',
    title: 'Payment operations',
    description: 'Remittance, posting, and reconciliation',
  },
  {
    number: '04',
    title: 'Follow-up & insights',
    description: 'Denials, AR management, and reporting',
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Understand your workflow',
    description:
      'Review your existing RCM processes, systems, data sources, operational challenges, and reporting requirements.',
  },
  {
    number: '02',
    title: 'Identify opportunities',
    description:
      'Identify workflow gaps, repetitive tasks, data quality issues, and opportunities for process improvement.',
  },
  {
    number: '03',
    title: 'Design & integrate',
    description:
      'Define an appropriate approach to process improvement, automation, reporting, and system integration.',
  },
  {
    number: '04',
    title: 'Validate & refine',
    description:
      'Test workflows, review outputs, and refine the solution against agreed requirements and operational controls.',
  },
]

const iconPaths = {
  eligibility: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h4M8 16h3M15 14l1.5 1.5L19 13" />
    </>
  ),
  authorization: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  claims: (
    <>
      <path d="M7 3h8l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M15 3v5h4M9 12h6M9 16h4" />
    </>
  ),
  denials: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
  payments: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4M15 14h2" />
    </>
  ),
  receivables: (
    <>
      <path d="M4 19V5M4 19h17" />
      <path d="m7 15 4-4 3 2 6-7M16 6h4v4" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
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
  automation: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  integration: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 4h6v6M20 4l-8 8M4 14v6h6M4 20l5-5" />
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
  activity: (
    <>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
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
      {iconPaths[name] || iconPaths.activity}
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

function RCMWorkflowPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#E8590C]/[0.07] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="activity" size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111111]">
                Revenue cycle workflow
              </p>
              <p className="mt-1 text-xs text-[#777777]">
                Illustrative process overview
              </p>
            </div>
          </div>

          <span className="rounded-full border border-black/[0.08] px-3 py-1.5 text-xs text-[#555555]">
            RCM
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-6">
            <h3 className="font-serif text-2xl text-[#111111]">
              From patient access to payment
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#777777]">
              An overview of the key stages in a healthcare revenue cycle.
            </p>
          </div>

          <div className="space-y-3">
            {workflow.map((step, index) => (
              <div key={step.number}>
                <div
                  className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                    index === 0
                      ? 'border-[#E8590C]/30 bg-[#E8590C]/[0.05]'
                      : 'border-black/[0.08] bg-white'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
                      index === 0
                        ? 'bg-[#E8590C] text-white'
                        : 'bg-[#F5F5F5] text-[#E8590C]'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#111111]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#777777] sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < workflow.length - 1 && (
                  <div className="ml-9 h-3 border-l border-dashed border-[#E8590C]/40" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-[#F5F5F5] p-4">
            <div className="flex items-start gap-3">
              <Icon
                name="shield"
                size={20}
                className="mt-0.5 shrink-0 text-[#E8590C]"
              />
              <div>
                <p className="text-sm font-semibold text-[#111111]">
                  Data quality and workflow controls
                </p>
                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  Validation, appropriate access controls, and review steps
                  should be designed around each workflow's requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/[0.08] px-5 py-3 sm:px-6">
          <p className="text-xs leading-5 text-[#777777]">
            Conceptual illustration only. Not a live billing system or
            patient-data dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function HealthCarePage() {
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
                Healthcare RCM & Data Solutions
              </span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-[62px]">
              Smarter healthcare operations, powered by{' '}
              <span className="text-[#E8590C]">better data.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              Streamline revenue cycle workflows, improve healthcare
              administrative data quality, and explore automation that helps
              billing teams manage complex processes with greater clarity.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf4e09] hover:shadow-lg hover:shadow-[#E8590C]/20"
              >
                Discuss Your Requirements
                <Icon name="arrow" size={18} />
              </Link>

              <a
                href="#rcm-services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#E8590C]/50 hover:text-[#E8590C]"
              >
                Explore Our Solutions
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Revenue cycle workflows',
                'Healthcare data solutions',
                'Process automation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-[#E8590C]" />
                  <span className="text-sm text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <RCMWorkflowPreview />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              The bigger picture
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Connect the operational details behind every patient encounter.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              Healthcare revenue cycle management spans the administrative
              journey from patient registration and insurance verification to
              claims, payments, denials, and outstanding balances. Disconnected
              systems and inconsistent data can create extra work at each
              stage.
            </p>

            <p>
              ZestBotz focuses on practical technology solutions that help
              organize workflows, process information, and identify suitable
              opportunities for integration and automation. The approach can
              be tailored to your systems, business processes, and operational
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* RCM Services */}
      <section
        id="rcm-services"
        className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Revenue cycle management"
            title="Support across the revenue cycle."
            description="Explore the core workflows involved in healthcare billing operations, from initial eligibility checks through payment follow-up."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rcmServices.map((service) => (
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
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#555555]"
                      >
                        <Icon
                          name="check"
                          size={16}
                          className="mt-0.5 shrink-0 text-[#E8590C]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Data Solutions */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Healthcare data solutions"
            title="Turn fragmented information into more useful workflows."
            description="Data processing, reporting, and integrations can help healthcare administrative teams organize information and make routine work easier to manage."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dataSolutions.map((solution) => (
              <article
                key={solution.title}
                className="group rounded-2xl border border-black/[0.09] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/40 hover:shadow-lg hover:shadow-black/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors duration-300 group-hover:bg-[#E8590C] group-hover:text-white">
                  <Icon name={solution.icon} size={23} />
                </div>

                <h3 className="font-serif text-xl leading-snug text-[#111111]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Automation with purpose
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
              Automate repetitive work. Keep people in control.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              Healthcare administrative workflows often include repetitive
              data handling, status checks, document processing, and follow-up
              tasks. Appropriate automation can help organize this work while
              preserving review and escalation steps for exceptions.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Automate suitable data entry and transfer tasks.',
                'Route workflow exceptions for human review.',
                'Organize claim statuses and follow-up tasks.',
                'Support operational reporting and reconciliation.',
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

            <Link
              to="/book-a-call"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#E8590C] transition-colors hover:text-[#111111]"
            >
              Discuss automation opportunities
              <Icon name="arrow" size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#E8590C]/[0.07] blur-2xl" />

            <div className="relative rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.05)] sm:p-8">
              <div className="mb-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
                  <Icon name="automation" size={24} />
                </div>

                <h3 className="font-serif text-2xl text-[#111111]">
                  A structured workflow
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  An example of how administrative tasks can move through
                  validation and review.
                </p>
              </div>

              <div className="space-y-0">
                {[
                  {
                    title: 'Receive information',
                    description: 'Collect relevant administrative data',
                  },
                  {
                    title: 'Validate & organize',
                    description: 'Check required fields and workflow rules',
                  },
                  {
                    title: 'Review exceptions',
                    description: 'Route incomplete or uncertain cases',
                  },
                  {
                    title: 'Record & report',
                    description: 'Update workflow status and records',
                  },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          index === 2
                            ? 'bg-[#E8590C] text-white'
                            : 'bg-[#F5F5F5] text-[#E8590C]'
                        }`}
                      >
                        {index === 2 ? (
                          <Icon name="shield" size={19} />
                        ) : (
                          <span className="text-sm font-semibold">
                            0{index + 1}
                          </span>
                        )}
                      </div>

                      {index < 3 && (
                        <div className="my-1 min-h-5 flex-1 border-l border-dashed border-[#E8590C]/40" />
                      )}
                    </div>

                    <div className="pb-5">
                      <p className="text-sm font-semibold text-[#111111]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#777777]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#E8590C]/15 bg-[#E8590C]/[0.04] p-4">
                <p className="text-sm leading-6 text-[#555555]">
                  <span className="font-semibold text-[#111111]">
                    Important:
                  </span>{' '}
                  Automation rules, review requirements, and data access must
                  be designed for the specific workflow and applicable
                  healthcare requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data governance */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-black/[0.08] bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:p-14">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-[#E8590C]">
              <Icon name="shield" size={27} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Data governance
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#111111] sm:text-4xl">
              Responsible handling of sensitive healthcare information.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#555555]">
              Healthcare data solutions must consider privacy, security,
              appropriate access, and data integrity from the beginning.
              Implementation should account for the applicable requirements,
              contractual obligations, systems, and data involved.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                'Role-appropriate access controls',
                'Data validation and quality checks',
                'Secure integration planning',
                'Review and exception handling',
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

            <p className="mt-5 text-xs leading-6 text-[#777777]">
              Specific compliance obligations and certifications must be
              assessed and verified for each implementation. No certification
              or compliance status is implied by this page.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation process */}
      <section className="bg-[#F5F5F5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our approach"
            title="Start with your workflow. Build around your needs."
            description="A structured delivery process helps connect business requirements, technical feasibility, and appropriate operational controls."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:border-[#E8590C]/35 sm:p-7"
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
              Healthcare RCM & Data Solutions
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
              Let’s make your healthcare workflows work smarter.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Tell us about your current RCM processes, data challenges, or
              automation goals. Let’s explore a practical approach that fits
              your operational requirements.
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
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
