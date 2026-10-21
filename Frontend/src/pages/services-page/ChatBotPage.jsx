
import { Link } from 'react-router-dom'

const capabilities = [
  {
    number: '01',
    title: 'Website Chatbots',
    text: 'Add a chatbot to your website to answer common questions and help visitors find the information they need.',
    icon: 'message',
  },
  {
    number: '02',
    title: 'AI-Powered Responses',
    text: 'Connect AI capabilities to help your chatbot understand questions and prepare relevant responses.',
    icon: 'sparkles',
  },
  {
    number: '03',
    title: 'Knowledge Integration',
    text: 'Connect approved documents, FAQs, and business information to support more relevant answers.',
    icon: 'book',
  },
  {
    number: '04',
    title: 'Business Integrations',
    text: 'Connect the chatbot with suitable applications and systems to support your existing workflows.',
    icon: 'plug',
  },
  {
    number: '05',
    title: 'Lead & Enquiry Collection',
    text: 'Collect visitor enquiries and relevant details through a structured conversational experience.',
    icon: 'users',
  },
  {
    number: '06',
    title: 'Human Handover',
    text: 'Give visitors a way to reach your team when a question needs personal attention.',
    icon: 'headset',
  },
]

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'Identify your audience, common questions, business goals, and chatbot requirements.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Plan the conversation flow, information sources, integrations, and handover rules.',
  },
  {
    number: '03',
    title: 'Build & Test',
    text: 'Develop the chatbot and test its responses against relevant questions and scenarios.',
  },
  {
    number: '04',
    title: 'Deploy & Improve',
    text: 'Integrate the chatbot into your chosen platform and refine it as your needs evolve.',
  },
]

const useCases = [
  'Frequently asked questions',
  'Website visitor assistance',
  'Product and service enquiries',
  'Lead and enquiry collection',
  'Internal knowledge assistance',
  'Customer support routing',
]

const benefits = [
  {
    title: 'Help visitors find answers',
    text: 'Make relevant information easier to access through a conversational interface.',
  },
  {
    title: 'Fit your existing workflow',
    text: 'Shape the chatbot around your business information, tools, and support process.',
  },
  {
    title: 'Keep people involved',
    text: 'Provide a clear path to human assistance when a conversation needs further attention.',
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

function ChatIcon({ name, className = 'h-6 w-6' }) {
  const paths = {
    message: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8M8 11h8" />
      </>
    ),
    plug: (
      <>
        <path d="M9 7V3m6 4V3M7 7h10v4a5 5 0 0 1-10 0V7Zm5 9v5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    headset: (
      <>
        <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
        <path d="M5 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm12 0h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
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
 * Illustrative chatbot conversation.
 * This is a static design preview, not a connected chatbot.
 * Messages are examples, not real customer conversations.
 */
function ChatbotPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[36px] bg-[#E8590C]/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_80px_-35px_rgba(17,17,17,0.3)]">
        <div className="flex items-center gap-3 border-b border-black/[0.07] px-6 py-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
            <ChatIcon name="message" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[#111111]">
              Website assistant
            </p>
            <p className="mt-1 text-xs text-[#777777]">
              Illustrative conversation
            </p>
          </div>

          <span className="rounded-full border border-[#E8590C]/20 bg-[#E8590C]/[0.05] px-3 py-1.5 text-[10px] font-semibold text-[#E8590C]">
            PREVIEW
          </span>
        </div>

        <div className="space-y-5 bg-white p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <ChatIcon name="sparkles" className="h-5 w-5" />
            </div>

            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-black/[0.07] bg-[#F5F5F5] p-4">
              <p className="text-xs font-semibold text-[#111111]">
                Assistant
              </p>
              <p className="mt-2 text-sm leading-6 text-[#555555]">
                Hello! How can I help you explore our services today?
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#E8590C] p-4 text-white">
              <p className="text-xs font-semibold text-white/80">
                Visitor
              </p>
              <p className="mt-2 text-sm leading-6">
                I'd like to know more about your automation services.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <ChatIcon name="sparkles" className="h-5 w-5" />
            </div>

            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-black/[0.07] bg-[#F5F5F5] p-4">
              <p className="text-xs font-semibold text-[#111111]">
                Assistant
              </p>
              <p className="mt-2 text-sm leading-6 text-[#555555]">
                We can help with process automation, AI solutions, and
                business software. Is there a particular workflow you'd
                like to improve?
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#E8590C]/20 bg-[#E8590C]/[0.05] p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#E8590C]">
                <ChatIcon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#111111]">
                  Designed around your business
                </p>
                <p className="mt-1 text-xs leading-5 text-[#555555]">
                  Responses can be configured around approved information,
                  with a route to human support when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-black/[0.1] bg-white px-4 py-3">
            <span className="flex-1 text-sm text-[#999999]">
              Ask a question...
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8590C] text-white">
              <ChatIcon name="send" className="h-4 w-4" />
            </span>
          </div>

          <p className="text-center text-[11px] leading-5 text-[#888888]">
            Static design preview · No messages are sent
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#E8590C] via-[#F5A16C] to-[#E8590C]" />
      </div>
    </div>
  )
}

export function ChatBotPage() {
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
              CHATBOT INTEGRATION
            </div>

            <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Better conversations.
              <span className="relative mt-1 inline-block text-[#E8590C]">
                {' '}More helpful experiences.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E8590C]/25"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              We integrate chatbots into websites and applications to help
              visitors find information, ask questions, and navigate your
              services. Connect your chatbot to relevant business information
              and give people a path to human support when they need it.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/book-a-call"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E8590C] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#c94b09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8590C]"
              >
                Discuss your chatbot
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
                'Built around your information',
                'Human support when needed',
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

          <ChatbotPreview />
        </div>
      </section>

      {/* Introduction strip */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8590C]">
            Conversations that help
          </p>

          <p className="max-w-3xl text-base leading-7 text-[#555555]">
            A useful chatbot does more than display automated replies.
            It should help people find relevant information, follow a
            clear conversation, and reach your team when a question
            needs personal attention.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="What we build"
          title="Chatbot solutions for real business needs."
          description="From simple website assistance to AI-powered conversations, we shape chatbot integrations around your users, information, and workflows."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.09] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_40px_-25px_rgba(232,89,12,0.35)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C] transition-colors group-hover:bg-[#E8590C] group-hover:text-white">
                  <ChatIcon name={item.icon} />
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
            title="From the first question to a useful conversation."
            description="A clear implementation process helps ensure that the chatbot fits your business, provides relevant information, and handles questions appropriately."
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
              title="Where can chatbots help?"
              description="The right chatbot starts with what your visitors or team need help with. Here are some common applications."
            />

            <Link
              to="/book-a-call"
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

      {/* Principles */}
      <section className="border-y border-black/[0.07] bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Designed with purpose"
            title="Helpful automation. Human support when it matters."
            description="A chatbot should make information easier to access while respecting your business rules and giving people a clear path to further assistance."
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
              Ready to make conversations more helpful?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us what your visitors need help with, what information
              your chatbot should use, and how it should fit into your
              existing workflow. We'll discuss a practical approach.
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
