
import { useRef, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  role: 'General application',
  experience: 'Student / Fresher',
  resumeLink: '',
  portfolio: '',
  message: '',
}

const inputClass =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#E8590C] focus:ring-2 focus:ring-[#E8590C]/10'

export function Careers() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({
    loading: false,
    type: '',
    message: '',
  })

  const formRef = useRef(null)
  const nameRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status.message) {
      setStatus({
        loading: false,
        type: '',
        message: '',
      })
    }
  }

  const handleApply = (role) => {
    setForm((prev) => ({
      ...prev,
      role,
    }))

    setStatus({
      loading: false,
      type: '',
      message: '',
    })

    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.setTimeout(() => {
      nameRef.current?.focus({ preventScroll: true })
    }, 400)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      loading: true,
      type: '',
      message: '',
    })

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

      const response = await fetch(`${apiUrl}/api/careers/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to submit your application.')
      }

      setStatus({
        loading: false,
        type: 'success',
        message:
          data.message ||
          'Your application has been submitted successfully. Thank you!',
      })

      setForm(initialForm)
    } catch (error) {
      setStatus({
        loading: false,
        type: 'error',
        message:
          error.message ||
          'Something went wrong. Please try again in a moment.',
      })
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
      {/* Hero */}
      <section
        className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 15%, rgba(232,89,12,0.15), transparent 38%), radial-gradient(ellipse at 95% 75%, rgba(245,161,108,0.16), transparent 35%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E8590C]">
            Careers at ZestBotz
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[68px]">
            Build what&apos;s next.
            <br />
            <span className="text-[#E8590C]">Make an impact.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
            We&apos;re interested in people who enjoy solving problems,
            exploring new technologies, and building practical solutions with
            AI, automation, software, and data.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#opportunities"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
            >
              Explore career areas
            </a>

            <button
              type="button"
              onClick={() => handleApply('General application')}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3.5 text-sm font-semibold transition hover:border-[#E8590C] hover:text-[#E8590C]"
            >
              Submit your profile
              <span aria-hidden="true"></span>
            </button>
          </div>

          
        </div>
      </section>

      {/* Career areas */}
      <section
        id="opportunities"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Find your direction
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Areas where you can grow
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              Explore the technical areas that align with your interests and
              the skills you want to develop.
            </p>
          </div>


        </div>
      </section>

      {/* Recruitment status */}
      <section className="bg-[#F8F7F5] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Explore opportunities
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              No open positions at the moment
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              We don&apos;t have any active vacancies right now, but we&apos;re
              always interested in connecting with talented people. Submit your
              profile through the application form, and we&apos;ll keep your
              details in mind for future opportunities.
            </p>

            <button
              type="button"
              onClick={() => handleApply('General application')}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
            >
              Submit your profile
            </button>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        ref={formRef}
        id="application"
        className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Your next step
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s get to know you.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#666666] sm:text-base">
              Share your details, interests, and work. We&apos;d love to learn
              more about your skills and the kind of problems you enjoy
              solving.
            </p>

            <div className="mt-8 rounded-2xl border border-black/[0.08] bg-[#F8F7F5] p-6">
              <h3 className="font-semibold">Before you apply</h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#666666]">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#E8590C]">01</span>
                  Enter your contact details accurately.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#E8590C]">02</span>
                  Add a shareable Google Drive link to your resume.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#E8590C]">03</span>
                  Check that the resume link can be opened by the recipient.
                </li>
              </ul>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#777777]">
              Your submitted details and resume link will be emailed to the
              configured recruitment contact.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl">
              Application form
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#666666]">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="career-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name *
                  </label>
                  <input
                    ref={nameRef}
                    id="career-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address *
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="career-phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone number
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="Your contact number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-experience"
                    className="mb-2 block text-sm font-medium"
                  >
                    Experience level *
                  </label>
                  <select
                    id="career-experience"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="Student / Fresher">Student / Fresher</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1–3 years">1–3 years</option>
                    <option value="3+ years">3+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="career-role"
                  className="mb-2 block text-sm font-medium"
                >
                  Role of interest *
                </label>
                <select
                  id="career-role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="General application">
                    General application
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="career-resume"
                  className="mb-2 block text-sm font-medium"
                >
                  Resume link (Google Drive) *
                </label>
                <input
                  id="career-resume"
                  type="url"
                  name="resumeLink"
                  value={form.resumeLink}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  placeholder="https://drive.google.com/..."
                  className={inputClass}
                />
                <p className="mt-2 text-xs leading-5 text-[#777777]">
                  Upload your resume to Google Drive, then paste its shareable
                  link here. Set access so the recipient can view it.
                </p>
              </div>

              <div>
                <label
                  htmlFor="career-portfolio"
                  className="mb-2 block text-sm font-medium"
                >
                  Portfolio, GitHub, or LinkedIn
                </label>
                <input
                  id="career-portfolio"
                  type="url"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  maxLength={1000}
                  placeholder="https://github.com/yourusername"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="career-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell us about yourself
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={3000}
                  rows={5}
                  placeholder="Share your skills, projects, interests, or what you'd like to work on..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status.message && (
                <div
                  role={status.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`rounded-xl px-4 py-3 text-sm leading-6 ${
                    status.type === 'success'
                      ? 'border border-green-200 bg-green-50 text-green-800'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8590C] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c94b08] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status.loading ? 'Submitting application...' : 'Submit application'}
                {!status.loading && <span aria-hidden="true"></span>}
              </button>

              <p className="text-xs leading-6 text-[#777777]">
                By submitting this form, you agree to share the information
                provided for recruitment-related communication.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 10% 100%, rgba(232,89,12,0.14), transparent 40%), radial-gradient(ellipse at 90% 0%, rgba(245,161,108,0.16), transparent 38%)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl border border-black/[0.07] bg-white/70 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
              Have something else in mind?
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Your skills could fit in more than one place.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666666]">
              Send us your profile and tell us what you would like to build.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleApply('General application')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E8590C]"
          >
            Share your profile
            <span aria-hidden="true"></span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Careers
