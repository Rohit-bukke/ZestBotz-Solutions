
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  SchoolOSModal,
  DEFAULT_SCHOOLOS_DEPLOYED_URL,
} from '../components/SchoolOSModal'
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Users,
  Lock,
  ArrowRight,
  School,
  CheckCircle2,
} from 'lucide-react'

const products = [
  {
    number: '01',
    name: 'ZestRCM',
    category: 'Healthcare Technology',
    tagline: 'Bring clarity to healthcare revenue operations.',
    description:
      'A healthcare Revenue Cycle Management solution concept focused on claims visibility, denial analysis, billing workflows, and revenue-cycle insights.',
    features: [
      'Claims and billing visibility',
      'Denial analysis',
      'Revenue-cycle analytics',
      'Workflow automation',
    ],
    accent: '#E8590C',
    symbol: '✚',
  },
  {
    number: '02',
    name: 'SchoolOS',
    isFlagship: true,
    badge: 'Flagship B2B SaaS MVP',
    category: 'Education Technology • Multi-Tenant SaaS',
    tagline: 'AI-Ready School Operations Platform Designed for Indian Schools.',
    description:
      'An enterprise-grade, multi-tenant B2B SaaS platform engineered specifically for Indian K-12 schools (CBSE / ICSE / State Boards). Built with strict tenant boundary enforcement (school_id), automated real-time WhatsApp parent alerts, physical perimeter gate passes with guard verification, and non-toxic constructive academic analytics.',
    features: [
      'Strict multi-tenant data isolation (school_id)',
      'Automated WhatsApp parent alerts & circulars',
      'Perimeter student safety gate passes & guard console',
      'Constructive academic growth analytics & mastery bands',
      '5 pre-seeded test roles with 1-click persona switcher',
      'High-throughput FastAPI + React 19 + Celery & Redis stack',
    ],
    accent: '#2563EB',
    symbol: '▦',
    deployedUrl: DEFAULT_SCHOOLOS_DEPLOYED_URL,
  },
  {
    number: '03',
    name: 'ZestHR',
    category: 'Human Resources',
    tagline: 'Simplify the employee lifecycle.',
    description:
      'An HR management solution concept focused on organizing employee information, recruitment activities, and routine HR workflows.',
    features: [
      'Employee information management',
      'Recruitment workflows',
      'Leave and attendance tracking',
      'HR process automation',
    ],
    accent: '#7C3AED',
    symbol: '◎',
  },
]

export function Products() {
  const [searchParams] = useSearchParams()
  const [isSchoolOSModalOpen, setIsSchoolOSModalOpen] = useState(false)
  const [modalInitialTab, setModalInitialTab] = useState('overview')

  useEffect(() => {
    const enquireParam = searchParams.get('enquire')
    const modalParam = searchParams.get('modal')
    if (
      enquireParam?.toLowerCase() === 'schoolos' ||
      modalParam?.toLowerCase() === 'schoolos'
    ) {
      setModalInitialTab('enquire')
      setIsSchoolOSModalOpen(true)
    }
  }, [searchParams])

  const openSchoolOSModal = (tab = 'overview') => {
    setModalInitialTab(tab)
    setIsSchoolOSModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* SchoolOS Detailed Modal */}
      <SchoolOSModal
        isOpen={isSchoolOSModalOpen}
        onClose={() => setIsSchoolOSModalOpen(false)}
        initialTab={modalInitialTab}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.15), transparent 38%), radial-gradient(ellipse at 95% 75%, rgba(37,99,235,0.12), transparent 35%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold uppercase tracking-wider text-[#E8590C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Products & Platforms</span>
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[68px]">
            Purpose-built solutions.
            <br />
            <span className="text-[#E8590C]">Designed for impact.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
            Explore the ZestBotz product portfolio across education technology,
            healthcare operations, and human resources. Built with clean monorepo
            architectures, strict tenant boundaries, and real-time automations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#product-list"
              className="inline-flex items-center gap-3 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08] shadow-md hover:shadow-lg"
            >
              Explore our products
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => openSchoolOSModal('overview')}
              className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 border border-blue-200 px-6 py-3.5 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition shadow-sm"
            >
              <School className="w-4 h-4 text-blue-600" />
              <span>Spotlight: SchoolOS B2B SaaS</span>
            </button>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {[
              ['01', 'Healthcare RCM'],
              ['02', 'SchoolOS Platform'],
              ['03', 'HR & People'],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="font-serif text-2xl text-[#E8590C] sm:text-3xl">
                  {number}
                </p>
                <p className="mt-2 text-xs text-[#666666] sm:text-sm font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section
        id="product-list"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              The Product Suite
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Technology with a purpose.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              Different industries. Different challenges. A shared engineering
              standard of clean architecture, rock-solid security, and seamless user experiences.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {products.map((product) => {
              const isSchoolOS = product.name === 'SchoolOS'

              return (
                <article
                  key={product.name}
                  id={product.name.toLowerCase()}
                  className={`group overflow-hidden rounded-3xl border transition duration-300 ${
                    isSchoolOS
                      ? 'border-blue-200 bg-white shadow-xl shadow-blue-500/[0.06] ring-1 ring-blue-500/10'
                      : 'border-black/[0.08] bg-white hover:border-black/15 hover:shadow-xl hover:shadow-black/[0.04]'
                  }`}
                >
                  <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Product identity panel */}
                    <div
                      className="relative flex min-h-[300px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[420px]"
                      style={{
                        backgroundImage: isSchoolOS
                          ? `radial-gradient(ellipse at 85% 15%, rgba(37,99,235,0.22), transparent 50%), linear-gradient(135deg, #F0F6FE, #EBF3FF)`
                          : `radial-gradient(ellipse at 85% 15%, ${product.accent}24, transparent 48%), linear-gradient(135deg, #FAFAFA, #F4F4F4)`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
                          Product {product.number}
                        </span>

                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                          {product.badge && (
                            <span className="rounded-full bg-blue-600 text-white font-semibold px-2.5 py-1 text-[11px] shadow-sm">
                              {product.badge}
                            </span>
                          )}
                          <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-[#555555] font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-8">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg"
                          style={{ backgroundColor: product.accent }}
                          aria-hidden="true"
                        >
                          {product.symbol}
                        </div>

                        <h3 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
                          {product.name}
                        </h3>

                        <p className="mt-3 max-w-sm text-sm leading-7 text-[#555555] font-medium">
                          {product.tagline}
                        </p>

                        {isSchoolOS && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                              <MessageSquare className="w-3 h-3 text-blue-600" /> WhatsApp Integrated
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Gate Pass Safety
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                              <Lock className="w-3 h-3 text-purple-600" /> Multi-Tenant
                            </span>
                          </div>
                        )}
                      </div>

                      <div
                        className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full border-[35px] opacity-20 transition duration-500 group-hover:scale-110"
                        style={{ borderColor: product.accent }}
                      />
                    </div>

                    {/* Product details */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <p className="text-sm leading-8 text-[#555555] sm:text-base">
                        {product.description}
                      </p>

                      <h4 className="mt-8 text-sm font-semibold flex items-center gap-2 text-gray-900">
                        {isSchoolOS ? (
                          <>
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span>Architecture & Solution Highlights</span>
                          </>
                        ) : (
                          <span>Solution highlights</span>
                        )}
                      </h4>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 text-sm leading-6 text-[#555555]"
                          >
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: product.accent }}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons & Enquiry options */}
                      <div className="mt-9 border-t border-black/[0.08] pt-6 flex flex-wrap items-center gap-4 justify-between">
                        {isSchoolOS ? (
                          <>
                            <div className="flex flex-wrap items-center gap-3">
                              {/* Open modal enquiry & full overview */}
                              <button
                                type="button"
                                onClick={() => openSchoolOSModal('overview')}
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-blue-500 shadow-sm"
                              >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Enquire & Product Overview</span>
                              </button>

                              {/* Open live demo sandbox */}
                              <a
                                href={product.deployedUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-800 shadow-sm"
                              >
                                <span>Live Demo Sandbox</span>
                                <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
                              </a>

                              {/* Persona details button */}
                              <button
                                type="button"
                                onClick={() => openSchoolOSModal('personas')}
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline px-2 py-2"
                              >
                                <Users className="w-3.5 h-3.5" />
                                <span>View 5 Demo Accounts</span>
                              </button>
                            </div>

                            <Link
                              to={`/contact?interest=SchoolOS`}
                              className="text-xs sm:text-sm font-semibold text-[#555555] hover:text-[#E8590C] transition inline-flex items-center gap-1"
                            >
                              <span>Direct Form</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </>
                        ) : (
                          <div className="flex items-center gap-4">
                            <Link
                              to={`/contact?interest=${encodeURIComponent(product.name)}`}
                              className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                              style={{ color: product.accent }}
                            >
                              Enquire about {product.name}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 90% 80%, rgba(232,89,12,0.09), transparent 40%)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-black/[0.08] bg-[#F8F7F5] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Let&apos;s talk
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Looking for a custom solution for your school or enterprise?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              Tell us about your requirements. From AI-enabled school operations
              to healthcare automation and custom SaaS products, we build systems that scale.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E8590C]"
          >
            Talk to our team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Products

