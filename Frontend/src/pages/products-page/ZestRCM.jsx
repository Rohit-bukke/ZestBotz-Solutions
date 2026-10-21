import { useState } from 'react'
import { Link } from 'react-router-dom'

const capabilities = [
  {
    number: '01',
    title: 'Revenue Performance Reporting',
    description:
      'Organize revenue data into clear reports that help teams understand financial performance and identify areas requiring attention.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Claims & Payment Analysis',
    description:
      'Review claims and payment information to understand processing patterns, payment status, and outstanding items.',
    icon: '◫',
  },
  {
    number: '03',
    title: 'Denial Trend Analysis',
    description:
      'Examine denial categories and recurring patterns to support root-cause investigation and follow-up prioritization.',
    icon: '⌁',
  },
  {
    number: '04',
    title: 'KPI & Operational Reporting',
    description:
      'Structure key performance indicators into consistent reporting views for revenue cycle and billing teams.',
    icon: '▤',
  },
]

const audiences = [
  'Healthcare RCM companies',
  'Medical billing organizations',
  'Independent physician practices',
  'Healthcare finance and revenue operations teams',
  'RCM analysts and managers',
]

const benefits = [
  {
    title: 'Reduce manual reporting effort',
    description:
      'Create a more structured approach to organizing and reviewing revenue cycle data.',
  },
  {
    title: 'Improve performance visibility',
    description:
      'Bring relevant claims, payment, and revenue information into a clearer reporting workflow.',
  },
  {
    title: 'Investigate denial patterns',
    description:
      'Help teams identify recurring denial categories and decide where further investigation is needed.',
  },
  {
    title: 'Support informed decisions',
    description:
      'Give operational teams a consistent reporting foundation for reviewing performance and priorities.',
  },
]

const faqs = [
  {
    question: 'What is RCM Analytics?',
    answer:
      'RCM Analytics refers to analyzing healthcare revenue cycle data, such as claims, payments, denials, and operational KPIs, to help teams understand revenue performance and reporting trends.',
  },
  {
    question: 'Which healthcare reports can be analyzed?',
    answer:
      'Depending on the available data and implementation, reporting may cover claims, payment status, denial categories, outstanding balances, and revenue cycle KPIs.',
  },
  {
    question: 'Can I upload CSV or Excel files?',
    answer:
      'CSV and Excel are potential input formats for data analysis. File upload availability depends on the configured ZestRCM implementation. Contact our team to confirm supported formats and workflows.',
  },
  {
    question: 'Can the dashboard be customized?',
    answer:
      'Reporting views and KPIs can be discussed based on your team’s requirements. The available customization depends on the implementation scope.',
  },
  {
    question: 'Does ZestRCM integrate with existing billing or EHR systems?',
    answer:
      'Integration feasibility depends on your existing systems, available APIs, data formats, and project requirements. Our team can discuss the appropriate approach with you.',
  },
  {
    question: 'How can I request a demo?',
    answer:
      'Visit our Contact page and share your organization’s requirements. Our team can discuss your use case and the next steps.',
  },
]

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF631C]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function RCMPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#FF631C]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-bold text-gray-900">
              Revenue Intelligence
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Illustrative dashboard preview
            </p>
          </div>

          <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-[#D94C0B]">
            Concept
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-6">
          {[
            'Claims Overview',
            'Payment Analysis',
            'Denial Trends',
            'RCM Performance',
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-gray-100 bg-gray-50/80 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-gray-600">
                  {item}
                </span>
                <span className="text-sm text-[#FF631C]">
                  {['◫', '↗', '⌁', '▤'][index]}
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-orange-200"
                  style={{ width: `${[62, 44, 72, 53][index]}%` }}
                />
              </div>
              <div className="mt-2 h-2 w-2/3 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>

        <div className="mx-4 mb-4 rounded-xl border border-gray-100 p-4 sm:mx-6 sm:mb-6 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Reporting Overview
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Illustrative visualization
              </p>
            </div>
            <span className="text-xs text-gray-400">Sample layout</span>
          </div>

          <div className="mt-5 flex h-24 items-end gap-2 sm:h-32 sm:gap-3">
            {[35, 54, 42, 75, 57, 88, 65, 78, 48, 68, 92, 72].map(
              (height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-sm ${
                    index === 5 || index === 10
                      ? 'bg-[#FF631C]'
                      : 'bg-orange-100'
                  }`}
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>

          <div className="mt-3 flex justify-between text-[10px] text-gray-400 sm:text-xs">
            <span>Reporting period</span>
            <span>Sample visualization only</span>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 sm:px-6">
          <p className="text-xs leading-5 text-gray-500">
            Concept preview only. No live customer data, measured results, or
            connected analytics are represented.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ZestRCMPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="overflow-hidden bg-white text-[#171717]">
      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_15%,rgba(255,99,28,0.12),transparent_38%),radial-gradient(ellipse_at_90%_70%,rgba(255,99,28,0.07),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-2 text-sm font-semibold text-[#D94C0B] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
              ZestBotz Healthcare Solutions
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Turn RCM Data Into
              <span className="mt-2 block text-[#FF631C]">
                Clearer Insights.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Bring claims, payments, denial trends, and revenue cycle
              reporting into focus with a structured approach to healthcare
              revenue intelligence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FF631C] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#E95412]"
              >
                Request a Demo
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-orange-200 hover:bg-orange-50/50"
              >
                Explore Capabilities
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              {[
                'Revenue reporting',
                'Claims analysis',
                'Denial visibility',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-[#FF631C]">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <RCMPreview />
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-gray-100 bg-gray-50/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-10">
          <SectionHeading
            eyebrow="About ZestRCM"
            title="A clearer view of your revenue cycle"
            description="Revenue cycle teams work with multiple reports and operational data sources. ZestRCM is positioned around making that information easier to review, understand, and use in day-to-day decision-making."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Structured Reporting',
                text: 'Organize relevant revenue cycle information into consistent reporting views.',
              },
              {
                title: 'Operational Visibility',
                text: 'Review claims, payment, and denial information in a more accessible format.',
              },
              {
                title: 'Trend Investigation',
                text: 'Explore recurring patterns and identify areas that may need attention.',
              },
              {
                title: 'Decision Support',
                text: 'Give teams a clearer basis for operational reviews and follow-up.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-lg text-[#FF631C]">
                  ↗
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Reporting that focuses on what matters"
            description="Explore the key areas a revenue intelligence workflow can support. Available functionality depends on the final product implementation and configured data sources."
            centered
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl font-bold text-[#FF631C] transition group-hover:bg-[#FF631C] group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="relative bg-[#171717] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(255,99,28,0.2),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF8B57]">
              Who It Supports
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Built around healthcare revenue workflows
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-gray-300">
              Different teams need different views of revenue cycle
              performance. The reporting approach can be shaped around your
              organization, data availability, and operational priorities.
            </p>

            <Link
              to="/book-a-call"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#FF631C] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#E95412]"
            >
              Discuss Your Requirements
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <ul className="space-y-5">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF631C]/15 text-sm text-[#FF8B57]">
                    ✓
                  </span>
                  <span className="leading-6 text-gray-200">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business value */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Business Value"
            title="Make reporting more useful to your team"
            description="A structured revenue intelligence workflow can help teams spend less time assembling reports and more time understanding what the data shows."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-5 rounded-2xl border border-gray-200 p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-bold text-[#FF631C]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions about ZestRCM"
            description="Learn more about RCM analytics, reporting requirements, and getting started."
            centered
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    isOpen ? 'border-orange-200 shadow-sm' : 'border-gray-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? 'rotate-45 bg-orange-50 text-[#FF631C]'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,99,28,0.15),transparent_65%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF631C]">
            Let’s Talk
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Gain Better Visibility Into Your RCM Performance?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Let's explore how healthcare revenue intelligence can support your
            team's reporting and operational workflows.
          </p>

          <Link
            to="/book-a-call"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-[#FF631C] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#E95412]"
          >
            Request a Demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}