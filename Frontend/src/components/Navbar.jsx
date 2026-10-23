import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'

const serviceLinks = [
  ['AI Agents & Workflow Automation', '/services/ai-automation'],
  ['Python & RPA Automation', '/services/python-rpa-automation'],
  ['Web Scraping & Data Extraction', '/services/web-scraping-data-extraction'],
  ['Data Engineering & ETL/ELT', '/services/data-engineering'],
  ['Business Intelligence & Power BI', '/services/business-intelligence'],
  ['Healthcare Analytics & RCM', '/services/healthcare-analytics-rcm'],
  ['Custom Software & SaaS', '/services/custom-software-development'],
  ['Document Processing & BPA', '/services/document-automation'],
]

const productLinks = [
  ['SchoolOS', '/products/zestSchool'],
  ['ZestRCM Analytics', '/products/zestRCM'],
  ['ZestHR', '/products/zestHR'],
]

const workLinks = [
  ['Target Industries', '/industries'],
  ['Methodology & Case Studies', '/work'],
]

function SunIcon({ className = 'h-4 w-4' }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className = 'h-4 w-4' }) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function Chevron({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Dropdown({ label, overviewPath, items }) {
  return (
    <div className="group relative">
      <div className="flex items-center">
        <NavLink
          to={overviewPath}
          className={({ isActive }) =>
            `flex items-center gap-1 rounded-l-full py-2 pl-3.5 pr-1 text-[14px] font-medium transition-colors duration-200 hover:text-[#FF631C] ${
              isActive ? 'text-[#FF631C]' : 'text-[#1a1a1a] dark:text-gray-200'
            }`
          }
        >
          {label}
        </NavLink>
        <button
          type="button"
          aria-label={`Toggle ${label} menu`}
          className="rounded-r-full py-2 pr-2.5 text-[#1a1a1a] dark:text-gray-200 transition-colors duration-200 hover:text-[#FF631C] group-hover:text-[#FF631C]"
        >
          <Chevron className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
        </button>
      </div>

      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[280px] overflow-hidden rounded-2xl border border-[#FF631C]/15 bg-white dark:bg-[#121216] dark:border-white/10 py-2.5 shadow-[0_20px_50px_-15px_rgba(11,11,13,0.18)]">
          <li className="border-b border-black/[0.06] dark:border-white/10 pb-1.5 mb-1 px-4">
            <Link
              to={overviewPath}
              className="block py-1 text-xs font-semibold uppercase tracking-wider text-[#FF631C] hover:underline"
            >
              View all {label.toLowerCase()} →
            </Link>
          </li>
          {items.map(([text, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-[13.5px] transition-all duration-200 hover:bg-[#FF631C]/[0.07] hover:pl-5 hover:text-[#FF631C] ${
                    isActive
                      ? 'bg-[#FF631C]/[0.08] font-semibold text-[#FF631C]'
                      : 'text-[#222222] dark:text-gray-300'
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
  const { theme, toggleTheme } = useTheme()
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
    `rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-200 hover:text-[#FF631C] ${
      isActive ? 'text-[#FF631C] font-semibold' : 'text-[#1a1a1a] dark:text-gray-200'
    }`

  const mobileGroups = [
    { label: 'Services', overview: '/services', items: serviceLinks },
    { label: 'Products', overview: '/products', items: productLinks },
    { label: 'Our Work', overview: '/work', items: workLinks },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#FF631C]/10 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B0B0D]/95 shadow-[0_8px_30px_rgba(11,11,13,0.06)] backdrop-blur-xl'
          : 'bg-white/90 dark:bg-[#0B0B0D]/90 backdrop-blur-md'
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.08), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.08), transparent 34%)',
        }}
      />

      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <Link to="/" className="relative z-10 shrink-0 flex items-center gap-2.5" aria-label="ZestBotz home">
          <img
            src={logo}
            alt="ZestBotz Solutions Logo"
            className="block dark:hidden h-12 w-auto object-contain"
          />
          <img
            src={logoWhite}
            alt="ZestBotz Solutions Logo"
            className="hidden dark:block h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
          <Dropdown label="Services" overviewPath="/services" items={serviceLinks} />
          <Dropdown label="Products" overviewPath="/products" items={productLinks} />

          <NavLink to="/industries" className={topLink}>
            Industries
          </NavLink>

          <NavLink to="/work" className={topLink}>
            Work
          </NavLink>

          <NavLink to="/about" className={topLink}>
            About
          </NavLink>

          <NavLink to="/careers" className={topLink}>
            Careers
          </NavLink>

          {/* Light / Dark Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80 text-gray-700 shadow-xs transition-all duration-200 hover:border-[#FF631C] hover:bg-[#FF631C]/10 hover:text-[#FF631C] dark:border-white/15 dark:bg-[#16161A] dark:text-amber-400 dark:hover:border-[#FF631C] dark:hover:text-[#FF631C] cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>

          <div className="ml-2 flex items-center gap-2.5">
            <Link
              to="/book-a-call"
              className="rounded-full border border-[#FF631C]/30 bg-[#FF631C]/5 px-4 py-2 text-[13.5px] font-semibold text-[#FF631C] transition-all duration-200 hover:bg-[#FF631C] hover:text-white dark:bg-[#FF631C]/10 dark:border-[#FF631C]/40"
            >
              Book a Call
            </Link>

            <Link
              to="/contact"
              className="rounded-full bg-[#0B0B0D] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-md shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF631C] hover:shadow-orange-500/20 dark:bg-white dark:text-[#0B0B0D] dark:hover:bg-[#FF631C] dark:hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF631C]/20 bg-white/90 dark:bg-[#16161A] text-[#0B0B0D] dark:text-gray-100 transition-colors hover:bg-[#FF631C]/10 lg:hidden"
        >
          <svg
            width="22"
            height="22"
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
        <div className="relative max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#FF631C]/10 bg-white/98 dark:bg-[#0B0B0D]/98 px-6 pb-8 pt-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="space-y-1">
            <NavLink
              to="/"
              className="block py-3 text-[15px] font-medium text-[#111111] dark:text-gray-200 border-b border-black/[0.06] dark:border-white/10 hover:text-[#FF631C]"
            >
              Home
            </NavLink>

            {mobileGroups.map(({ label, overview, items }) => (
              <div key={label} className="border-b border-black/[0.06] dark:border-white/10">
                <div className="flex w-full items-center justify-between py-3.5">
                  <Link
                    to={overview}
                    className="text-[15px] font-medium text-[#111111] dark:text-gray-200 hover:text-[#FF631C]"
                  >
                    {label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Expand ${label}`}
                    onClick={() =>
                      setMobileSection(mobileSection === label ? null : label)
                    }
                    className="p-1 text-gray-500 hover:text-[#FF631C]"
                  >
                    <Chevron
                      className={`transition-transform duration-200 ${
                        mobileSection === label ? 'rotate-180 text-[#FF631C]' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileSection === label && (
                  <ul className="mb-3 space-y-1 rounded-xl border border-[#FF631C]/15 bg-[#FF631C]/[0.03] p-2">
                    <li className="pb-1 mb-1 border-b border-black/[0.05] dark:border-white/10">
                      <Link
                        to={overview}
                        className="block px-3 py-1.5 text-xs font-semibold text-[#FF631C]"
                      >
                        Explore all {label.toLowerCase()} →
                      </Link>
                    </li>
                    {items.map(([text, path]) => (
                      <li key={path}>
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            `block rounded-lg px-3 py-2 text-xs sm:text-sm transition-colors ${
                              isActive
                                ? 'bg-[#FF631C]/10 font-semibold text-[#FF631C]'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-[#FF631C]/5 hover:text-[#FF631C]'
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
              to="/industries"
              className="block py-3 text-[15px] font-medium text-[#111111] dark:text-gray-200 border-b border-black/[0.06] dark:border-white/10 hover:text-[#FF631C]"
            >
              Industries
            </NavLink>

            <NavLink
              to="/about"
              className="block py-3 text-[15px] font-medium text-[#111111] dark:text-gray-200 border-b border-black/[0.06] dark:border-white/10 hover:text-[#FF631C]"
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              className="block py-3 text-[15px] font-medium text-[#111111] dark:text-gray-200 border-b border-black/[0.06] dark:border-white/10 hover:text-[#FF631C]"
            >
              Careers
            </NavLink>
          </div>

          {/* Compact Theme Toggle inside Mobile Navigation Panel */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Appearance
              </span>
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 shadow-xs transition-all duration-200 hover:border-[#FF631C] hover:bg-[#FF631C]/10 hover:text-[#FF631C] dark:border-white/15 dark:bg-[#16161A] dark:text-amber-400 dark:hover:border-[#FF631C] dark:hover:text-[#FF631C] cursor-pointer"
            >
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/book-a-call"
              className="block rounded-xl border border-[#FF631C] bg-[#FF631C]/10 py-3 text-center text-sm font-semibold text-[#FF631C] transition hover:bg-[#FF631C] hover:text-white"
            >
              Book a Call
            </Link>
            <Link
              to="/contact"
              className="block rounded-xl bg-[#0B0B0D] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#FF631C] dark:bg-white dark:text-[#0B0B0D] dark:hover:bg-[#FF631C] dark:hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

