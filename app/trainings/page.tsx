import type { CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Trainings — AI Practitioner Programme | The Cloud Intelligence Inc.',
  description:
    'Hands-on AI practitioner programme: real enterprise agents, production codebases, dedicated mentor, and your own deployable agent. 8 weeks. Built by practitioners, for practitioners.',
}

const waHref = 'https://wa.me/14708615206'

const cssVar = (name: string, value: string): CSSProperties => ({ [name]: value } as CSSProperties)

export default function TrainingsPage() {
  const journey = [
    {
      step: '01',
      section: 'Real-world showcase',
      accent: '#ff9800',
      title: "See how it's actually done",
      sub: 'Not theory. Not slides. Real enterprise AI, live.',
      body: 'A dedicated expert from our team walks you through a real AI agent we built for a real client — the business problem, the full codebase, the architecture decisions, and the honest story of the journey from zero to production.',
      included: [
        'Live walkthrough of a live enterprise AI agent',
        'Business use case & measurable outcomes',
        'Full architecture deep-dive with trade-off rationale',
        'Alternatives considered and why we chose differently',
        "The messy, honest story — what worked, what didn't",
      ],
      outcome: 'You understand exactly how AI goes from idea to production.',
    },
    {
      step: '02',
      section: 'Hands-on access',
      accent: '#26c6da',
      title: 'Get your hands on the code',
      sub: 'Run it. Break it. Understand it.',
      body: 'We give you full access to the codebase, set up the entire environment on your machine, and assign you real tasks on the same code. Not toy examples — the actual production logic.',
      included: [
        'Full codebase access — read, run, explore',
        'We set up your local environment end-to-end',
        'Curated tasks so you learn by doing',
        'Execute real commands on real agent code',
        'Daily follow-ups to keep momentum and unblock you',
      ],
      outcome: 'You go from observer to executor — with proof.',
    },
    {
      step: '03',
      section: 'Dedicated mentor',
      accent: '#42a5f5',
      title: 'A human expert in your corner',
      sub: 'One person. Your questions. Every day.',
      body: "You get one dedicated team member assigned to you. Not a chatbot. Not a ticketing system. A real person who knows the code, knows the domain, and checks in with you daily until you're confident.",
      included: [
        '1 dedicated expert, just for you',
        'Daily check-ins and structured follow-ups',
        'Instant unblocking — no waiting days for answers',
        'Guidance calibrated to your background (tech or non-tech)',
        'Honest feedback on your understanding and progress',
      ],
      outcome: 'You never feel alone in the learning process.',
    },
    {
      step: '04',
      section: 'Your own agent',
      accent: '#e91e63',
      title: "Build something that's yours",
      sub: 'A real agent. Your use case. Your ownership.',
      body: 'Tell us a problem you want to solve — in your work, your team, your industry. We help you scope, design, and build a working AI agent around it. Then we hand it over to you, completely.',
      included: [
        'You define the use case',
        'We guide the scoping, design, and build',
        'Full ownership of the agent and codebase',
        'Ready to demo to your team, manager, or client',
      ],
      outcome: 'You leave with something real to show the world.',
    },
  ]

  const nutshell = [
    {
      accent: '#ff9800',
      n: '1',
      text: 'We show you what we built, how, and why — so you gain real operational know-how.',
    },
    {
      accent: '#26c6da',
      n: '2',
      text: 'You access the code, run it yourself, and complete tasks with hands-on guidance.',
    },
    {
      accent: '#42a5f5',
      n: '3',
      text: 'Your dedicated team member is with you daily — no question goes unanswered.',
    },
    {
      accent: '#e91e63',
      n: '4',
      text: 'We help you build your own agent. You own it. You demo it. You prove it.',
    },
  ]

  const glance = [
    { accent: '#00bcd4', val: '2 Months', label: 'Full programme duration' },
    { accent: '#ff9800', val: '10 hrs/week', label: 'Minimum time commitment' },
    { accent: '#4caf50', val: '3 × 1hr', label: 'Live sessions per week with instructor' },
  ]

  const weeks = [
    { accent: '#00bcd4', hrs: '3 hrs', title: 'Live Sessions', desc: '3 × 1hr with instructor — code review, Q&A, progress check' },
    { accent: '#7e57c2', hrs: '4 hrs', title: 'Hands-On Coding', desc: 'Real codebase tasks at your own pace, guided by curated exercises' },
    { accent: '#ff9800', hrs: '2 hrs', title: 'Your Agent Work', desc: 'Scoping, designing and building your own AI agent use case' },
    { accent: '#4caf50', hrs: '1 hr', title: 'Review & Reflection', desc: 'Weekly self-review + async questions for next session' },
  ]

  const inclusions = [
    { dot: '#00bcd4', text: '8 weeks of structured programme access' },
    { dot: '#4caf50', text: '3 live instructor sessions per week (24 total)' },
    { dot: '#ff9800', text: 'Full enterprise codebase access' },
    { dot: '#7e57c2', text: '1 dedicated instructor — yours alone' },
    { dot: '#e91e63', text: 'Your own AI agent built & handed over' },
    { dot: '#42a5f5', text: 'Virtual support throughout the programme' },
  ]

  const values = [
    {
      accent: '#00bcd4',
      n: '24',
      title: 'Live Sessions',
      desc: '3 sessions × 8 weeks × 1 hour each with a dedicated expert',
    },
    {
      accent: '#4caf50',
      n: '80+',
      title: 'Hands-On Hours',
      desc: 'Access to production codebase + curated tasks across the programme',
    },
    {
      accent: '#ff9800',
      n: '1',
      title: 'Custom AI Agent',
      desc: 'A working agent scoped and built specifically for your use case (scoped for 20hrs of development).',
    },
    {
      accent: '#7e57c2',
      n: '∞',
      title: 'Virtual Support',
      desc: 'Async support from your instructor throughout all 8 weeks',
    },
  ]

  const wont = [
    { title: 'No software licences', d: 'All tools and environments are provided.' },
    { title: 'No hidden platform fees', d: 'The price you see is the price you pay.' },
    { title: 'No extra charges for your agent', d: 'Building your agent is part of the programme.' },
    { title: 'No recurring subscription', d: 'One-time fee. No monthly billing after.' },
    { title: 'No exam or certification fees', d: "Nothing extra to prove what you've learned." },
    { title: 'No upsells or add-ons', d: 'Everything is included from day one.' },
  ]

  return (
    <>
      <Navbar />
      <div className="zta zta--with-site-nav">
        <main className="zta__main">
        {/* Hero — matches screenshot 1 */}
        <section className="zta__section">
          <span className="zta__badge">Not a course. Not a bootcamp. Something better.</span>
          <h2 className="zta__h2">Learn AI by working on real agents we already built</h2>
          <p className="zta__lead">
            We are not trainers. We are practitioners. We bring you into our actual work — the code, the decisions, the
            failures — and guide you from zero to your first deployable AI agent.
          </p>
          <ul className="zta__checks">
            <li>Enterprise-grade experience</li>
            <li>Real production codebases</li>
            <li>1-on-1 dedicated mentor</li>
            <li>Your own agent at the end</li>
          </ul>
        </section>

        <section className="zta__section" style={{ paddingTop: 0 }}>
          <p className="zta__kicker">Who is this for</p>
          <div className="zta__pills">
            {[
              'Software Developers',
              'Engineering Managers',
              'Product Managers',
              'Functional / Non-Tech Professionals',
              'Business Analysts',
              'Anyone Curious About AI',
            ].map((label) => (
              <span key={label} className="zta__pill">
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="zta__section">
          <p className="zta__kicker">The four-part journey</p>
          <div className="zta__journey-grid">
            {journey.map((j) => (
              <article
                key={j.step}
                className="zta__journey-card"
                style={cssVar('--zta-card-accent', j.accent)}
              >
                <div className="zta__journey-label">
                  <span style={{ opacity: 0.9 }}>{j.step}</span>
                  <span style={{ display: 'block', marginTop: '4px' }}>{j.section.toUpperCase()}</span>
                </div>
                <h3>{j.title}</h3>
                <p className="zta__journey-sub">{j.sub}</p>
                <p className="zta__journey-body">{j.body}</p>
                <p className="zta__journey-wi">What&apos;s included</p>
                <ul className="zta__journey-ul">
                  {j.included.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="zta__journey-out">Outcome</p>
                <p className="zta__journey-outcome">{j.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="zta__section">
          <p className="zta__kicker">In a nutshell</p>
          <div className="zta__nutshell">
            {nutshell.map((nut) => (
              <div key={nut.n} className="zta__nut-col" style={cssVar('--zta-nut-accent', nut.accent)}>
                <div className="zta__nut-num">{nut.n}.</div>
                <p>{nut.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule — screenshot 2 */}
        <section className="zta__section zta__center">
          <span className="zta__badge zta__badge--orange">Not a course. Not a bootcamp. Something better.</span>
          <h2 className="zta__h2">8 Weeks. 10 Hours a Week. One Real AI Agent.</h2>
          <p className="zta__lead">
            A focused, hands-on programme — structured enough to drive results, flexible enough to fit your life.
          </p>
        </section>

        <section className="zta__section" style={{ paddingTop: 0 }}>
          <p className="zta__kicker">Programme at a glance</p>
          <div className="zta__glance">
            {glance.map((g) => (
              <div key={g.val} className="zta__glance-card" style={cssVar('--zta-glance-accent', g.accent)}>
                <div className="zta__glance-val">{g.val}</div>
                <div className="zta__glance-label">{g.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="zta__section">
          <p className="zta__kicker">What your week looks like</p>
          <div className="zta__week-grid">
            {weeks.map((w) => (
              <div key={w.title} className="zta__week-card" style={cssVar('--zta-week-accent', w.accent)}>
                <span className="zta__week-hrs">{w.hrs}</span>
                <div className="zta__week-body">
                  <div className="zta__week-title">{w.title}</div>
                  <p className="zta__week-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="zta__section" style={{ paddingTop: 0 }}>
          <p className="zta__kicker">Always-on virtual support</p>
          <div className="zta__support">
            <h2>Virtual Support — Available All the Time</h2>
            <p>
              Chat · Code Reviews · Async Q&A · Resource Sharing — between every session, all 8 weeks.
            </p>
          </div>
        </section>

        <section className="zta__section">
          <p className="zta__kicker">Programme roadmap</p>
          <div className="zta__roadmap">
            <article className="zta__road-card" style={cssVar('--zta-road-accent', '#00bcd4')}>
              <h3>Month 1 — Understand &amp; Execute</h3>
              <p className="zta__wk">Week 1–2</p>
              <p className="zta__wd">
                Live walkthroughs of a real enterprise AI agent — code, architecture, decisions, and the honest story from
                zero to production.
              </p>
              <p className="zta__wk">Week 3–4</p>
              <p className="zta__wd">
                Hands-on tasks on the production codebase with your dedicated instructor, daily guidance, and real commands
                to run and explore.
              </p>
              <div className="zta__milestone">
                ★ You can confidently run, navigate and explain the full agent codebase — and you know why every decision
                was made.
              </div>
            </article>
            <article className="zta__road-card" style={cssVar('--zta-road-accent', '#ff9800')}>
              <h3>Month 2 — Design &amp; Build</h3>
              <p className="zta__wk">Week 5–6</p>
              <p className="zta__wd">
                Scope, design and architect your own AI agent use case — guided by your instructor through every decision and
                trade-off.
              </p>
              <p className="zta__wk">Week 7–8</p>
              <p className="zta__wd">
                Build, test and iteratively refine your working AI agent with hands-on instructor support every step of the
                way.
              </p>
              <div className="zta__milestone zta__milestone--warm">
                ★ A fully deployable AI agent built for your use case — yours to own, present and demo to your team or
                leadership.
              </div>
            </article>
          </div>
        </section>

        {/* Pricing — screenshot 3 */}
        <section className="zta__section">
          <span className="zta__badge zta__badge--orange">Not a course. Not a bootcamp. Something better.</span>
          <h2 className="zta__h2">One Programme. One Price. Everything Included.</h2>
          <p className="zta__lead" style={{ maxWidth: 'none' }}>
            No hidden add-ons, no tiered features — every participant gets the full experience.
          </p>

          <div className="zta__price-wrap">
            <div className="zta__price-grid">
              <div>
                <div className="zta__price-big">$1,200</div>
                <p className="zta__price-sub">per participant</p>
                <p className="zta__price-meta">One-time fee · Full 8-week programme</p>
                <p className="zta__price-meta">No recurring charges · Nothing hidden</p>
              </div>
              <div>
                <p className="zta__incl-head">Everything included in $1,200:</p>
                <ul className="zta__incl-list">
                  {inclusions.map((row) => (
                    <li key={row.text}>
                      <span className="zta__incl-dot" style={{ background: row.dot }} aria-hidden />
                      {row.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="zta__kicker" style={{ marginTop: '48px' }}>
            How the value breaks down
          </p>
          <div className="zta__value-grid">
            {values.map((v) => (
              <div key={v.n} className="zta__value-card" style={cssVar('--zta-val-accent', v.accent)}>
                <div className="zta__value-num">{v.n}</div>
                <p className="zta__value-title">{v.title}</p>
                <p className="zta__value-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          <p className="zta__kicker" style={{ marginTop: '48px' }}>
            What you won&apos;t pay for
          </p>
          <div className="zta__wont-grid">
            {wont.map((w) => (
              <div key={w.title} className="zta__wont-card">
                <span className="zta__wont-x" aria-hidden>
                  ✕
                </span>
                <div>
                  <strong>{w.title}</strong>
                  <span>{w.d}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="zta__cta-bar" style={{ marginTop: '40px' }}>
            <div>
              <p className="zta__cta-strong">Your AI journey doesn&apos;t start with a course.</p>
              <p className="zta__cta-italic">It starts with a real project.</p>
              <p className="zta__cta-muted">
                Spaces are limited — we work with a small group to keep quality high and the experience genuinely personal.
              </p>
            </div>
            <a className="zta__btn-wa" href={waHref} target="_blank" rel="noopener noreferrer">
              WhatsApp Us +1 470 861 5206
            </a>
          </div>
        </section>

        {/* Thank you — screenshot 4 */}
        <section className="zta__thank">
          <div className="zta__thank-inner">
            <p>Thank you for your time and interest.</p>
            <h2>Thank You</h2>
            <p className="zta__thank-tag">We look forward to building something real with you.</p>
            <p className="zta__thank-body">
              Trainings is built on one belief: the best way to learn AI is to work alongside people who are already
              doing it — on real problems, with real code, for real outcomes.
            </p>
            <div className="zta__contact-row">
              <div className="zta__contact-card" style={cssVar('--zta-contact-accent', '#4caf50')}>
                <small>WhatsApp</small>
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  +1 470 861 5206
                </a>
              </div>
              <div className="zta__contact-card" style={cssVar('--zta-contact-accent', '#00bcd4')}>
                <small>Website</small>
                <a href="https://thecloudintelligence.com" target="_blank" rel="noopener noreferrer">
                  thecloudintelligence.com
                </a>
              </div>
              <div className="zta__contact-card" style={cssVar('--zta-contact-accent', '#7e57c2')}>
                <small>Address</small>
                <strong>Alpharetta, GA 30004</strong>
              </div>
            </div>
            <div className="zta__logo-foot">
              <Image src="/img/tci-logo-color.svg" alt="The Cloud Intelligence" width={200} height={60} />
            </div>
            <Link href="/" className="zta__back">
              ← Back to home
            </Link>
            <p className="zta__tagline-foot">
              Trainings · AI Practitioner Programme · Built by practitioners, for practitioners
            </p>
          </div>
        </section>
        </main>
      </div>
      <SiteFooter />
      <Scripts />
    </>
  )
}
