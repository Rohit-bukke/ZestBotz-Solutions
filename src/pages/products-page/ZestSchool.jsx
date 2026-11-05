import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  UserRoundCheck,
  X,
  Bell,
  Clock3,
  FileText,
  ChartNoAxesCombined,
  School,
  Send,
} from 'lucide-react'

const features = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Attendance management',
    description:
      'Record attendance in batches and support follow-up communication with parents through configured WhatsApp integrations.',
    tags: ['Batch marking', 'Parent notifications'],
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Student gate passes',
    description:
      'Generate student gate passes and give guards a dedicated workflow to verify passes before a student exits.',
    tags: ['Pass generation', 'Exit verification'],
  },
  {
    number: '03',
    icon: ChartNoAxesCombined,
    title: 'Academic insights',
    description:
      'Explore marks alongside class averages, percentiles and learning trajectories to better understand student progress.',
    tags: ['Marks analysis', 'Learning trajectories'],
  },
  {
    number: '04',
    icon: MessageCircle,
    title: 'School communication',
    description:
      'Organise circulars, announcements, WhatsApp broadcasts and notification records from a connected school workflow.',
    tags: ['Circulars', 'Notification audit log'],
  },
]

const roles = [
  {
    name: 'School administrators',
    label: 'Administration',
    icon: School,
    description:
      'Coordinate school operations, manage school-level workflows and oversee access for the relevant school.',
    tasks: ['School operations', 'User and role management', 'Academic overview'],
  },
  {
    name: 'Teachers',
    label: 'Teaching',
    icon: BookOpen,
    description:
      'Work with attendance and academic information through the teaching workflows available in the system.',
    tasks: ['Attendance workflows', 'Marks and academic records', 'Student progress'],
  },
  {
    name: 'Parents',
    label: 'Family',
    icon: Users,
    description:
      'Support school-to-home communication through the parent-facing workflows and configured notifications.',
    tasks: ['School announcements', 'Attendance communication', 'Student-related updates'],
  },
  {
    name: 'Security guards',
    label: 'Campus safety',
    icon: ShieldCheck,
    description:
      'Use the dedicated gate-pass verification workflow to check a pass before recording a student exit.',
    tasks: ['Pass verification', 'Exit checks', 'Safety-related alerts'],
  },
]

const workflowItems = [
  {
    icon: CalendarCheck,
    title: 'Record attendance',
    description: 'Mark attendance using the batch workflow.',
  },
  {
    icon: Bell,
    title: 'Notify parents',
    description: 'Use the configured messaging integration.',
  },
  {
    icon: FileText,
    title: 'Keep a record',
    description: 'Review notification records in the audit log.',
  },
]

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF631C]" />
      {children}
    </div>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-10 max-w-2xl'}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="text-3xl font-semibold tracking-tight text-[#202020] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function ProductPreview() {
  const [activeTab, setActiveTab] = useState('Attendance')

  const tabs = ['Attendance', 'Gate passes', 'Communication']

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="pointer-events-none absolute -inset-5 rounded-[36px] bg-gradient-to-br from-orange-100/80 via-orange-50/50 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_80px_-36px_rgba(100,65,35,0.28)]">
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E95617]">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">SchoolOS</p>
              <p className="text-xs text-gray-500">School operations</p>
            </div>
          </div>
          <span className="rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-700">
            Concept preview
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
              School workspace
            </p>
            <h3 className="mt-1 text-xl font-semibold text-gray-900">
              Everyday school operations
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              An illustrative preview of documented workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                  activeTab === tab
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Attendance' && (
            <div className="space-y-3 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Attendance workflow
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Batch marking and follow-up
                  </p>
                </div>
                <ClipboardCheck className="text-orange-500" size={22} />
              </div>

              {[
                ['Select a class', 'Choose the relevant class or group'],
                ['Mark attendance', 'Record student attendance'],
                ['Notify parents', 'Use the configured messaging channel'],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-sm font-semibold text-orange-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto shrink-0 text-gray-300" size={16} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Gate passes' && (
            <div className="space-y-4 pt-5">
              <div className="flex items-start gap-3 rounded-xl bg-orange-50/80 p-4">
                <ShieldCheck className="mt-0.5 shrink-0 text-orange-600" size={23} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Student exit verification
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    A dedicated guard workflow for checking a generated gate
                    pass before recording a student's exit.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Workflow
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-gray-600">
                  <span className="rounded-lg bg-gray-50 px-3 py-2">Generate pass</span>
                  <ArrowRight size={14} className="text-orange-500" />
                  <span className="rounded-lg bg-gray-50 px-3 py-2">Verify pass</span>
                  <ArrowRight size={14} className="text-orange-500" />
                  <span className="rounded-lg bg-gray-50 px-3 py-2">Record exit</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Communication' && (
            <div className="space-y-3 pt-5">
              {workflowItems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                >
                  <div className="rounded-lg bg-orange-50 p-2 text-orange-600">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 rounded-lg border border-dashed border-gray-200 px-3 py-2.5 text-center text-xs text-gray-400">
            Illustrative interface · Not a live school dashboard
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ZestSchool() {
  const [activeRole, setActiveRole] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const faqs = [
    {
      question: 'What is ZestSchool?',
      answer:
        'ZestSchool is a school operations platform built around workflows such as attendance, student gate passes, academic insights and school communication.',
    },
    {
      question: 'Which school roles does the platform account for?',
      answer:
        'The documented role model includes school administrators, teachers, parents, security guards and a super-admin role.',
    },
    {
      question: 'Does ZestSchool support WhatsApp communication?',
      answer:
        'The project describes a WhatsApp gateway abstraction with support for provider integrations such as Meta Cloud API, Gupshup and Twilio. Actual delivery depends on provider configuration and valid credentials.',
    },
    {
      question: 'How is school data separated?',
      answer:
        'The documented architecture uses a school identifier for tenant-scoped data and role-based access. Production deployment should be accompanied by tests verifying tenant isolation and authorization.',
    },
  ]

  return (
    <main className="overflow-hidden bg-white text-[#202020]">
      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-50/90 via-white to-white" />
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-orange-100/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div>
              <SectionLabel>Introducing ZestSchool</SectionLabel>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#202020] sm:text-5xl lg:text-[60px]">
                School operations,
                <span className="block bg-gradient-to-r from-[#FF631C] to-[#F18A42] bg-clip-text pb-1 text-transparent">
                  working together.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Bring attendance, student gate passes, academic insights and
                school communication into connected workflows with ZestSchool.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/book-a-call"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF631C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e95515]"
                >
                  Book a call
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-orange-200 hover:bg-orange-50/60"
                >
                  Explore features
                  <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-[#FF631C]" />
                  School-focused workflows
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-[#FF631C]" />
                  Role-based access model
                </span>
              </div>
            </div>

            <ProductPreview />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-gray-100 bg-[#FFFEFD] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <div>
            <SectionLabel>One connected workspace</SectionLabel>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              The everyday details of running a school matter.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              From marking attendance to verifying student exits and sharing
              school announcements, ZestSchool brings together the workflows
              described in its SchoolOS project.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              The goal is a clearer way for school teams to work across their
              respective responsibilities—with the appropriate roles and
              workflows in place.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="What you can do"
            title="Designed around real school workflows."
            description="Explore the capabilities documented in the SchoolOS project, presented in one consistent product experience."
          />

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {features.map(({ number, icon: Icon, title, description, tags }) => (
              <article
                key={number}
                className="group border-t border-gray-200 pt-6 transition-colors hover:border-orange-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-[#F15A1A] transition group-hover:bg-orange-100">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-medium tracking-wider text-gray-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900 sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow highlight */}
      <section className="bg-gradient-to-br from-orange-50/80 via-[#FFFDFC] to-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>Connected communication</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              From school updates to a clearer communication trail.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              SchoolOS describes circulars, WhatsApp broadcasts, an integration
              gateway and a notification audit log. Together, these support a
              workflow for communicating with school communities and reviewing
              notification records.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Organise school circulars and announcements',
                'Connect supported WhatsApp messaging providers',
                'Review notification records in the audit log',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-6 text-gray-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100/80 bg-white p-5 shadow-[0_20px_60px_-40px_rgba(120,75,35,0.25)] sm:p-7">
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Communication workflow
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Illustrative process
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                <Send size={20} />
              </div>
            </div>

            <div className="space-y-0 pt-5">
              {[
                {
                  icon: FileText,
                  title: 'Prepare an announcement',
                  detail: 'Create a circular or school update.',
                },
                {
                  icon: MessageCircle,
                  title: 'Choose a communication channel',
                  detail: 'Use the configured messaging integration.',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Review notification records',
                  detail: 'Consult the available audit trail.',
                },
              ].map(({ icon: Icon, title, detail }, index) => (
                <div key={title} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < 2 && (
                    <span className="absolute bottom-0 left-[19px] top-10 w-px bg-orange-100" />
                  )}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600">
                    <Icon size={18} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-semibold text-gray-900">{title}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-lg bg-gray-50 px-3 py-2 text-xs leading-5 text-gray-500">
              Actual message delivery depends on the provider, credentials and
              deployment configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Built around responsibilities"
            title="A different view for each school role."
            description="The documented role model accounts for the different people involved in school operations."
          />

          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <div className="space-y-2">
              {roles.map(({ name, label, icon: Icon }, index) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveRole(index)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
                    activeRole === index
                      ? 'border-orange-200 bg-orange-50/80'
                      : 'border-transparent bg-white hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      activeRole === index
                        ? 'bg-white text-orange-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-gray-900">
                      {name}
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">{label}</span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className={activeRole === index ? 'text-orange-600' : 'text-gray-300'}
                  />
                </button>
              ))}
            </div>

            <div className="flex min-h-[320px] flex-col justify-center rounded-2xl border border-gray-100 bg-[#FFFEFD] p-6 sm:p-9">
              {(() => {
                const role = roles[activeRole]
                const Icon = role.icon

                return (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>
                    <p className="mt-6 text-sm font-medium text-orange-700">
                      {role.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      {role.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
                      {role.description}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {role.tasks.map((task) => (
                        <div
                          key={task}
                          className="flex items-start gap-2 rounded-lg border border-gray-100 bg-white p-3"
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-orange-600" />
                          <span className="text-sm leading-5 text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            The project also documents a super-admin role. Exact permissions
            should be confirmed against the deployed application.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-gray-100 bg-gray-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Under the hood"
            title="A foundation designed for connected school systems."
            description="The project README documents a web application stack spanning the frontend, API, data layer and background processing."
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: LayoutDashboard,
                title: 'Frontend',
                subtitle: 'React 19 · TypeScript',
                detail: 'Vite, Tailwind CSS, Lucide and Recharts.',
              },
              {
                icon: LockKeyhole,
                title: 'API & access',
                subtitle: 'FastAPI · Pydantic',
                detail: 'JWT authentication and a documented tenant-aware role model.',
              },
              {
                icon: School,
                title: 'Data layer',
                subtitle: 'MongoDB · PostgreSQL',
                detail: 'The README describes MongoDB with in-memory fallback and a PostgreSQL ORM layer.',
              },
              {
                icon: Clock3,
                title: 'Background work',
                subtitle: 'Celery · Redis',
                detail: 'Background task processing within the documented deployment stack.',
              },
            ].map(({ icon: Icon, title, subtitle, detail }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200/80 bg-white p-5 transition hover:border-orange-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm font-medium text-orange-700">{subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-gray-200/80 bg-white px-5 py-4">
            <div className="flex items-start gap-3">
              <Sparkles size={19} className="mt-0.5 shrink-0 text-orange-600" />
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-semibold text-gray-800">Implementation note: </span>
                This stack reflects the project documentation, not a claim that
                every service is currently configured or production-ready.
                Deployment settings, tenant isolation and external integrations
                should be verified separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A few things worth knowing.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-gray-600">
              Learn more about the platform's documented workflows, roles and
              integration approach.
            </p>
            <Link
              to="/book-a-call"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition hover:text-orange-800"
            >
              Discuss your requirements
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map(({ question, answer }, index) => (
              <div key={question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-4 max-w-2xl pr-6 text-sm leading-7 text-gray-600 sm:text-base">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-[#FFF9F5] to-white px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700">
                <GraduationCap size={19} />
                ZestSchool by ZestBotz
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Let's talk about your school's workflows.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
                Explore how attendance, gate passes, academic insights and
                communication workflows could fit your school's requirements.
              </p>
            </div>

            <Link
              to="/book-a-call"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF631C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e95515]"
            >
              Make a call
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}