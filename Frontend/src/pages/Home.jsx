import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesList, targetIndustries, productList, company } from '../data/company.js'

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#FF631C] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
      {children}
    </p>
  )
}

function HeroWorkflowVisual() {
  const steps = [
    { number: '01', title: 'Automate Work', desc: 'Python scripts & intelligent agents eliminating repetitive tasks' },
    { number: '02', title: 'Connect Data', desc: 'Normalized ETL pipelines & validated multi-system staging' },
    { number: '03', title: 'Improve Decisions', desc: 'Validated Power BI dashboards & operational exception alerts' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full bg-[#FF631C]/15 blur-3xl" />

      <div className="relative rounded-[28px] border border-black/[0.08] dark:border-white/10 bg-white/90 dark:bg-[#141417] p-6 sm:p-8 shadow-[0_25px_80px_rgba(11,11,13,0.08)] backdrop-blur">
        <div className="flex items-start justify-between border-b border-black/[0.06] pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF631C]">
              Operational Framework
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#0B0B0D] dark:text-white">
              Practical Engineering
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Bridging AI Capabilities with Business Operations
            </p>
          </div>

          <span className="rounded-full border border-[#FF631C]/30 bg-[#FF631C]/10 px-3 py-1 text-[11px] font-semibold text-[#FF631C]">
            Verified Model
          </span>
        </div>

        <div className="my-6 space-y-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3.5 rounded-2xl border border-black/[0.06] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#18181D] p-4 transition hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1E1E24]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                {step.number}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{step.title}</p>
                <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-xl bg-[#0B0B0D] p-3.5 text-white">
            <p className="text-[11px] text-gray-400">Positioning</p>
            <p className="mt-1 text-xs font-semibold">Practical Technology Partner</p>
          </div>
          <div className="rounded-xl border border-black/[0.07] dark:border-white/10 bg-gray-50 dark:bg-[#18181D] p-3.5">
            <p className="text-[11px] text-gray-500">Core Approach</p>
            <p className="mt-1 text-xs font-semibold text-gray-900 dark:text-white">Deterministic & Validated</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  useEffect(() => {
    document.title = 'ZestBotz | Bridging AI Capabilities with Business Operations'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0B0B0D] text-[#0B0B0D] dark:text-gray-100">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.14), transparent 38%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 35%)',
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF631C]/25 bg-white/85 dark:bg-white/10 dark:border-[#FF631C]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF631C]">
              <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
              {company.positioning}
            </div>

            <h1 className="max-w-3xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[60px] text-[#0B0B0D] dark:text-white">
              Transforming workflows with{' '}
              <span className="text-[#FF631C]">AI-driven automation</span> and
              analytics.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
              ZestBotz is a practical technology solutions venture. We help businesses automate repetitive manual work, connect fragmented data, and improve operational visibility through custom software, data engineering, and validated analytics.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
              >
                Explore 8 Services
                <ArrowIcon />
              </Link>

              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-white/80 dark:bg-white/10 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] dark:text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Book Discovery Consultation
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 border-t border-black/[0.08] dark:border-white/10 pt-6">
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckIcon />
                Automate Work
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckIcon />
                Connect Data
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckIcon />
                Improve Decisions
              </span>
            </div>
          </div>

          <HeroWorkflowVisual />
        </div>
      </section>

      {/* THREE CENTRAL PROMISES */}
      <section className="border-y border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Our Core Value Proposition</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white">
              Three clear promises for your operations.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We communicate ZestBotz as a practical technology partner that understands business workflows, rather than a generic AI agency or software development shop.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {company.promises.map((p, idx) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#141417] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1A1A20] hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#FF631C]">PROMISE 0{idx + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 OFFICIAL SERVICES OVERVIEW */}
      <section id="services" className="scroll-mt-24 bg-[#F9F9FA] dark:bg-[#0E0E11] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <SectionLabel>Official Services</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
                Engineered for business operations.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Eight practical service categories spanning intelligent automation, data engineering, healthcare analytics, and custom software.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF631C] hover:underline shrink-0"
            >
              <span>View detailed services directory</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 dark:hover:border-[#FF631C]/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-medium text-gray-500">
                      {service.tags[0]}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-gray-900 dark:text-white group-hover:text-[#FF631C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06]">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:gap-2.5 transition-all"
                  >
                    <span>Explore Service</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES OVERVIEW */}
      <section className="bg-white dark:bg-[#0B0B0D] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Target Industries</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
              Built for industry-specific operational realities.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We focus on solving genuine operational friction for healthcare providers, SMBs, sales teams, logistics, and tech ventures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetIndustries.map((ind) => (
              <div
                key={ind.id}
                className="rounded-2xl border border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#141417] p-6 sm:p-7 transition hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1A1A20]"
              >
                <span className="text-xs font-bold text-[#FF631C]">{ind.number}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{ind.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{ind.summary}</p>
                <div className="mt-4 border-t border-black/[0.06] pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Key Solutions:</p>
                  <ul className="mt-1.5 space-y-1">
                    {ind.solutions.slice(0, 2).map((s) => (
                      <li key={s} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#FF631C]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              View All Target Industry Profiles
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO — ACCURATE STATUS */}
      <section className="bg-[#F9F9FA] dark:bg-[#0E0E11] py-20 sm:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Product Portfolio</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
              Verified product status & roadmap.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We clearly distinguish between working prototypes, conceptual demonstrations, and development roadmaps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {productList.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-7 transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                    <span className="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-[11px] font-semibold text-gray-800 dark:text-gray-200">
                      {prod.statusBadge}
                    </span>
                    <span className="text-xs text-gray-400">Status Verified</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">{prod.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-[#FF631C]">{prod.category}</p>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{prod.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06]">
                  <Link
                    to={prod.route}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:underline"
                  >
                    <span>View Product Details</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div
          className="mx-auto max-w-7xl rounded-[2.2rem] bg-[#0B0B0D] p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.25), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <SectionLabel>Let's Collaborate</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-[46px] leading-tight">
              Have a workflow to automate or data to connect?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Tell us about your business challenge. We evaluate feasibility and design practical solutions that simplify your daily operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Book a Discovery Call
                <ArrowIcon />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send Us a Message
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
