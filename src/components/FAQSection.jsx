import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { faqs, faqCategories } from '../data/faqs'

function ChevronIcon({ isOpen }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#E8590C] transition-transform duration-300 ${
        isOpen ? 'rotate-180' : ''
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function HelpIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FAQSection({ id = 'faq', standalone = false }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIds, setOpenIds] = useState(() => new Set(['what-does-zestbotz-do']))
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (itemId) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(itemId)) {
        next.delete(itemId)
      } else {
        next.add(itemId)
      }
      return next
    })
  }

  const expandAll = () => {
    setOpenIds(new Set(faqs.map((f) => f.id)))
  }

  const collapseAll = () => {
    setOpenIds(new Set())
  }

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory

      if (!matchesCategory) return false

      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase().trim()
      const inQuestion = faq.question.toLowerCase().includes(query)
      const inSummary = faq.summary.toLowerCase().includes(query)
      const inCategory = faq.category.toLowerCase().includes(query)
      const inAnswers = faq.answer.some((p) => p.toLowerCase().includes(query))
      const inItems = faq.items?.some(
        (it) =>
          it.title.toLowerCase().includes(query) ||
          it.description.toLowerCase().includes(query)
      )

      return inQuestion || inSummary || inCategory || inAnswers || inItems
    })
  }, [activeCategory, searchQuery])

  return (
    <section id={id} className="scroll-mt-24 bg-[#FAFAFA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Clear answers to your business questions.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#555555] sm:text-lg">
              Explore how we deliver automation, build dependable data pipelines,
              and partner with teams to scale operational efficiency.
            </p>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={expandAll}
              className="text-xs font-semibold text-[#555555] transition hover:text-[#E8590C]"
            >
              Expand all
            </button>
            <span className="text-black/20">•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs font-semibold text-[#555555] transition hover:text-[#E8590C]"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'border border-black/[0.08] bg-white text-[#555555] hover:border-black/20 hover:text-[#111111]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#999999]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full rounded-full border border-black/[0.1] bg-white py-2 pl-9 pr-4 text-xs sm:text-sm placeholder:text-[#999999] focus:border-[#E8590C] focus:outline-none focus:ring-1 focus:ring-[#E8590C]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-black/[0.08] bg-white p-10 text-center">
              <p className="text-base font-semibold text-[#111111]">
                No matching questions found
              </p>
              <p className="mt-2 text-sm text-[#666666]">
                Try adjusting your search query or switch back to "All" categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#E8590C] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#c94c09]"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id)

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border transition duration-200 ${
                    isOpen
                      ? 'border-[#E8590C]/40 bg-white shadow-sm'
                      : 'border-black/[0.08] bg-white hover:border-black/[0.15]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <div className="flex-1 pr-2">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-[#E8590C]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#E8590C]">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-medium leading-snug text-[#111111] sm:text-xl">
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="mt-1.5 line-clamp-1 text-sm text-[#777777]">
                          {faq.summary}
                        </p>
                      )}
                    </div>

                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA]">
                      <ChevronIcon isOpen={isOpen} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/[0.06] bg-[#FCFCFC] px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                      {/* Paragraphs */}
                      <div className="space-y-3">
                        {faq.answer.map((para, i) => (
                          <p
                            key={i}
                            className="text-sm leading-7 text-[#444444] sm:text-base sm:leading-8"
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Structured items if present */}
                      {faq.items && faq.items.length > 0 && (
                        <div className="mt-5 space-y-3 rounded-xl border border-black/[0.06] bg-white p-4 sm:p-5">
                          {faq.items.map((item, idx) => (
                            <div
                              key={item.title}
                              className={`flex flex-col gap-1 sm:flex-row sm:items-baseline ${
                                idx !== faq.items.length - 1
                                  ? 'border-b border-black/[0.05] pb-3'
                                  : ''
                              }`}
                            >
                              <span className="min-w-[240px] text-sm font-semibold text-[#111111] sm:text-base">
                                • {item.title}:
                              </span>
                              <span className="text-sm leading-6 text-[#555555] sm:text-base">
                                {item.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-black/[0.08] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
              <HelpIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#111111]">
                Have a unique operational bottleneck or technical question?
              </h4>
              <p className="mt-1 text-sm text-[#666666]">
                Our engineering team is ready to discuss your specific architecture, data sources, and timelines.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8590C]"
          >
            <span>Ask our team</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
