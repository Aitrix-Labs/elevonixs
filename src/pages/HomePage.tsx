import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, LogoMark } from '../components/Icons'
import { asset } from '../asset'
import {
  aiPillars,
  anniversary,
  cloudOptions,
  ctaCards,
  customerLogos,
  customerStories,
  heroSlides,
  industries,
  partnerLogos,
  trustHero,
} from '../data'

const INDUSTRY_LOOP = 3

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const industryCount = industries.length
  const industrySlides = useMemo(
    () => Array.from({ length: INDUSTRY_LOOP }, () => industries).flat(),
    [],
  )
  const [industryIndex, setIndustryIndex] = useState(industryCount)
  const [industryAnim, setIndustryAnim] = useState(true)
  const industryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((value) => (value + 1) % heroSlides.length)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (industryIndex >= industryCount && industryIndex < industryCount * 2) return
    const normalized = ((industryIndex % industryCount) + industryCount) % industryCount + industryCount
    setIndustryAnim(false)
    setIndustryIndex(normalized)
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIndustryAnim(true))
    })
    return () => window.cancelAnimationFrame(id)
  }, [industryIndex, industryCount])

  const shiftIndustry = (dir: -1 | 1) => {
    setIndustryAnim(true)
    setIndustryIndex((value) => value + dir)
  }

  const prev = () => setSlide((value) => (value - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setSlide((value) => (value + 1) % heroSlides.length)

  return (
    <>
      {/* SAS: earth is a large full-bleed visual; text sits in a left column over it */}
      <section className="trust-hero">
        <div className="trust-hero-bg" aria-hidden="true">
          <img src={trustHero.image} alt="" />
        </div>
        <div className="trust-hero-inner">
          <div className="trust-copy">
            <h1>{trustHero.title}</h1>
            <h2 className="trust-sub">
              {trustHero.beforeStat}
              <span className="trust-stat">{trustHero.stat}</span>
              {trustHero.afterStat}
            </h2>
            <Link to={trustHero.cta.to} className="btn btn-primary">
              {trustHero.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* AI in Action carousel — SAS bordered navy cards + coverflow stage */}
      <div className="hero-wrap">
        <section className="hero" aria-roledescription="carousel" aria-label="AI in action">
          <button className="hero-arrow prev" aria-label="Previous item" onClick={prev}>
            <ArrowLeft />
          </button>
          <button className="hero-arrow next" aria-label="Next item" onClick={next}>
            <ArrowRight />
          </button>

          <div className="hero-stage">
            {heroSlides.map((item, index) => {
              const offset =
                (index - slide + heroSlides.length) % heroSlides.length === heroSlides.length - 1
                  ? -1
                  : (index - slide + heroSlides.length) % heroSlides.length === 1
                    ? 1
                    : index === slide
                      ? 0
                      : null
              if (offset === null) return null
              return (
                <article
                  key={item.id}
                  className={`hero-panel${offset === 0 ? ' is-active' : ' is-peek'}${offset === -1 ? ' is-prev' : ''}${offset === 1 ? ' is-next' : ''}`}
                  aria-hidden={offset !== 0}
                >
                  <div className="hero-copy">
                    <h2>{item.title}</h2>
                    {item.body ? <p className="lead">{item.body}</p> : null}
                    <div className="hero-actions">
                      <Link to={item.primary.to} className="btn btn-primary hero-btn">
                        {item.primary.label}
                      </Link>
                      {item.secondary ? (
                        <Link to={item.secondary.to} className="btn hero-btn-secondary">
                          {item.secondary.label}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  <div className={`hero-media media-${item.media}`}>
                    {item.media === 'product' ? <span className="hero-halo" aria-hidden="true" /> : null}
                    <img src={item.image} alt={item.imageAlt} />
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <div className="hero-dots" role="tablist" aria-label="Feature slides">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === slide ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
              aria-selected={index === slide}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </div>

      <section className="anniversary">
        <div className="container anniversary-grid">
          <div className="anniversary-copy reveal">
            <h2>{anniversary.title}</h2>
            <p>{anniversary.body}</p>
          </div>
          {anniversary.cards.map((card) => (
            <article key={card.title} className="promo-tile reveal">
              <Link to={card.to} className="promo-tile-media" aria-label={card.cta}>
                <img src={card.image} alt="" />
                {card.video ? (
                  <span className="promo-play" aria-hidden="true">
                    ▶
                  </span>
                ) : null}
              </Link>
              <div className="promo-tile-body">
                <p className="promo-type">{card.type}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <Link to={card.to} className="text-link">
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <div className="industries-head reveal">
            <p className="kicker">Industries</p>
            <h2 className="section-title">Industry-Ready Intelligence In Action</h2>
            <p className="section-body">
              Domain expertise matters more than ever in the age of generative and agentic AI,
              grounding innovation in real-world context and judgment. From digital twins in health
              care to AI driving operational impact at scale, explore how customers are using Elevonixs
              to deliver faster decisions, smarter operations and measurable results — all built on a
              foundation of trust and transparency.
            </p>
          </div>
        </div>

        <div className="industry-carousel">
          <div className="industry-viewport">
            <div
              className={`industry-track${industryAnim ? '' : ' is-instant'}`}
              ref={industryRef}
              style={{
                ['--industry-i' as string]: industryIndex,
                transform:
                  'translateX(calc(50% - (var(--industry-i) * var(--industry-step, 352px)) - (var(--industry-visual-w, 332px) / 2)))',
              }}
            >
              {industrySlides.map((item, index) => (
                <article
                  className={`industry-card${index === industryIndex ? ' is-active' : ''}`}
                  key={`${item.name}-${index}`}
                  onClick={() => {
                    setIndustryAnim(true)
                    setIndustryIndex(index)
                  }}
                >
                  <img className="icon" src={item.icon} alt="" />
                  <h3>{item.name}</h3>
                  <p className="industry-title">
                    <strong>{item.title}</strong>
                  </p>
                  <p className="industry-body">{item.body}</p>
                  <Link to={`/industries/${slugify(item.name)}`} className="cta-link">
                    Explore {item.name}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="industry-nav">
            <button className="industry-arrow prev" aria-label="Previous" onClick={() => shiftIndustry(-1)}>
              <ArrowLeft />
            </button>
            <button className="industry-arrow next" aria-label="Next" onClick={() => shiftIndustry(1)}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="future">
        <div className="container">
          <div className="future-intro reveal">
            <p className="kicker">The Future</p>
            <h2 className="section-title">The Future of AI, Built Responsibly</h2>
            <p className="future-lead">
              As AI evolves, organizations need greater transparency, governance and accountability.
              Elevonixs is advancing the next generation of AI innovation with responsibility built
              into every step.
            </p>
          </div>

          <div className="future-viya reveal">
            <div className="future-viya-copy">
              <div className="viya-mark">
                <LogoMark className="viya-mark-icon" />
                <span className="viya-mark-text">
                  elevonixs <em>viya</em>
                </span>
              </div>
              <p>
                Elevonixs Viya brings data, analytics and AI together in a single platform designed
                for enterprise scale. Build, deploy and govern AI faster — turning insight into
                decisions across your organization.
              </p>
              <Link to="/products/viya" className="btn btn-primary future-viya-btn">
                Learn more about Elevonixs Viya
              </Link>
            </div>
            <div className="future-viya-media">
              <img
                src={asset('images/sections/viya-diagram.png')}
                alt="Elevonixs Viya data and AI life cycle diagram"
              />
            </div>
          </div>

          <div className="pillars">
            {aiPillars.map((pillar) => (
              <article className="pillar reveal" key={pillar.title}>
                <h3>
                  <Link to={pillar.to}>{pillar.title}</Link>
                </h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Customers in Action — SAS rollover cards */}
      <section className="impact">
        <div className="container">
          <div className="reveal impact-intro">
            <p className="kicker">Impact</p>
            <h2 className="section-title">Customers in Action</h2>
            <p className="section-body">
              See how organizations are turning AI into real outcomes — faster decisions, smarter
              operations and measurable impact.
            </p>
          </div>

          <div className="impact-grid">
            {customerStories.map((item) => (
              <article key={item.company} className="impact-card">
                <div className="impact-inner">
                  <div className="impact-face impact-front">
                    <div className="impact-photo">
                      <img src={item.image} alt={item.imageAlt} />
                    </div>
                    <div className="impact-front-body">
                      <p className="industry">{item.industry}</p>
                      {item.metric ? <p className="metric">{item.metric}</p> : null}
                      <h3>{item.detail}</h3>
                      <div className="impact-front-footer">
                        <span className="company">{item.company}</span>
                        <Link to="/resources/customers" className="text-link">
                          Read the story
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="impact-face impact-back">
                    <p className="industry">{item.industry}</p>
                    <p className="quote">“{item.quote}”</p>
                    <div className="impact-back-footer">
                      <p className="author">{item.author}</p>
                      <Link to="/resources/customers" className="text-link">
                        Read the story
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="logos-section">
        <div className="logo-band logo-band-customers reveal">
          <div className="container logo-band-inner">
            <div className="logo-copy">
              <p className="kicker">Customers</p>
              <h2 className="section-title">Our Customers</h2>
              <p className="logo-lead">
                Our network of customers uses Elevonixs to make smarter decisions about data and AI.
              </p>
              <Link to="/resources/customers" className="text-link">
                View all
              </Link>
            </div>
          </div>
          <div className="logo-orbit logo-orbit-end" aria-hidden="true">
            <div className="logo-orbit-frame">
              <div className="logo-marquee">
                {[...customerLogos, ...customerLogos].map((logo, index) => (
                  <div className="logo-slide" key={`customer-${logo.name}-${index}`}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="logo-band logo-band-partners reveal">
          <div className="logo-orbit logo-orbit-start" aria-hidden="true">
            <div className="logo-orbit-frame">
              <div className="logo-marquee logo-marquee-reverse">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div className="logo-slide" key={`partner-${logo.name}-${index}`}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container logo-band-inner logo-band-inner-end">
            <div className="logo-copy">
              <p className="kicker">Partners</p>
              <h2 className="section-title">Our Partners</h2>
              <p className="logo-lead">
                Our network of partners offers industry expertise and implementation support tailored
                to help you achieve your goals.
              </p>
              <Link to="/partners" className="text-link">
                View all
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud">
        <div className="container reveal">
          <div className="cloud-intro">
            <h2 className="section-title">AI Your Way</h2>
            <p className="cloud-lead">
              Elevonixs runs where you choose — on-premises or in the cloud — giving you control and
              deployment flexibility without vendor lock-in to help you address your digital
              sovereignty objectives, while maintaining a consistent, enterprise-grade experience
              across environments.
            </p>
          </div>
          <div className="cloud-options">
            {cloudOptions.map((option) => (
              <Link to="/solutions/cloud" className="cloud-card" key={option.name}>
                <img className="cloud-logo" src={option.logo} alt={option.alt} />
                <span className="cloud-link">
                  {option.name}
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
          <Link to="/solutions/cloud" className="btn btn-outline-blue cloud-all">
            See all cloud options
          </Link>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-grid">
          {ctaCards.map((card) => (
            <article className="cta-card reveal" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link to={card.to} className="btn btn-primary btn-sm">
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
