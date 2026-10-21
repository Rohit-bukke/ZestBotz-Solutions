
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const serviceLinks = [
  ['Process & Workflow Automation', '/services/process-workflow-page'],
  ['Agentic AI Solutions', '/services/agentic-ai-page'],
  ['Web Scraping & Data Solutions', '/services/web-scraping-page'],
  ['Web & Software Development', '/services/web-software-page'],
  ['Data Analytics & Dashboards', '/services/data-analytics'],
  ['Chatbot Integration', '/services/chatbot-page'],
  ['ERP Solutions', '/services/erp-page'],
  ['Healthcare RCM Data Solutions', '/services/healthcare-page'],
]

const productLinks = [
  ['ZestRCM', '/products/zestRCM'],
  ['ZestHR', '/products/zestHR'],
  ['ZestSchool', '/products/zestSchool'],
]

const workLinks = [
  ['Industries', '/industries'],
  ['Case Studies', '/work'],
]

function Chevron({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Dropdown({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[15px] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#E8590C]/[0.07] hover:text-[#E8590C] group-hover:text-[#E8590C] group-focus-within:text-[#E8590C]"
      >
        {label}
        <Chevron className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[250px] overflow-hidden rounded-2xl border border-[#E8590C]/15 bg-white py-2 shadow-[0_18px_50px_-20px_rgba(17,17,17,0.22)]">
          {items.map(([text, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block whitespace-nowrap px-5 py-3 text-sm transition-all duration-200 hover:bg-[#E8590C]/[0.06] hover:pl-6 hover:text-[#E8590C] ${
                    isActive
                      ? 'bg-[#E8590C]/[0.06] font-medium text-[#E8590C]'
                      : 'text-[#222222]'
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  const topLink = ({ isActive }) =>
    `rounded-full px-3 py-2 text-[15px] transition-colors duration-200 hover:bg-[#E8590C]/[0.07] hover:text-[#E8590C] ${
      isActive ? 'bg-[#E8590C]/[0.07] text-[#E8590C]' : 'text-[#1a1a1a]'
    }`

  const mobileGroups = [
    ['Services', serviceLinks],
    ['Our Work', workLinks],
    ['Products', productLinks],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#E8590C]/10 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-xl'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      {/* Orange radial gradients matching the Agentic AI page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      />

      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link to="/" className="relative z-10 shrink-0" aria-label="ZestBotz home">
          <img
            src={logo}
            alt="ZestBotz"
            className="block h-auto w-[60px]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <Dropdown label="Services" items={serviceLinks} />
          <Dropdown label="Our Work" items={workLinks} />
          <Dropdown label="Products" items={productLinks} />

          <NavLink to="/careers" className={topLink}>
            Careers
          </NavLink>

          <NavLink to="/about" className={topLink}>
            About
          </NavLink>

          <Link
            to="/contact"
            className="ml-1 rounded-full bg-gradient-to-r from-[#171522] to-[#30251f] px-7 py-3 text-[15px] font-medium text-white shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#E8590C] hover:to-[#f28a38] hover:shadow-lg hover:shadow-orange-500/20"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8590C]/15 bg-white/80 transition-colors hover:bg-[#E8590C]/[0.06] lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="relative max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#E8590C]/10 bg-white/95 px-6 pb-6 pt-2 shadow-xl backdrop-blur-xl lg:hidden">
          {mobileGroups.map(([label, items]) => (
            <div key={label} className="border-b border-black/[0.07]">
              <button
                type="button"
                aria-expanded={mobileSection === label}
                onClick={() =>
                  setMobileSection(mobileSection === label ? null : label)
                }
                className="flex w-full items-center justify-between py-4 text-left text-[15px] transition-colors hover:text-[#E8590C]"
              >
                {label}
                <Chevron
                  className={`transition-transform duration-200 ${
                    mobileSection === label ? 'rotate-180 text-[#E8590C]' : ''
                  }`}
                />
              </button>

              {mobileSection === label && (
                <ul className="mb-3 overflow-hidden rounded-xl border border-[#E8590C]/10 bg-[#E8590C]/[0.035] py-2">
                  {items.map(([text, path]) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm transition-colors hover:bg-[#E8590C]/[0.07] hover:text-[#E8590C] ${
                            isActive
                              ? 'font-medium text-[#E8590C]'
                              : 'text-[#222222]'
                          }`
                        }
                      >
                        {text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <NavLink
            to="/careers"
            className="block border-b border-black/[0.07] py-4 text-[15px] transition-colors hover:text-[#E8590C]"
          >
            Careers
          </NavLink>

          <NavLink
            to="/about"
            className="block border-b border-black/[0.07] py-4 text-[15px] transition-colors hover:text-[#E8590C]"
          >
            About
          </NavLink>

          <Link
            to="/contact"
            className="mt-4 block rounded-full bg-gradient-to-r from-[#171522] to-[#30251f] py-3 text-center text-[15px] font-medium text-white transition-all duration-300 hover:from-[#E8590C] hover:to-[#f28a38]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
