import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { partnerLogos, partnersPage } from '../data'

export default function PartnersPage() {
  const location = useLocation()
  const [helpTab, setHelpTab] = useState(partnersPage.helpTabs[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const activeHelp = partnersPage.helpTabs.find((tab) => tab.id === helpTab) ?? partnersPage.helpTabs[0]

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash === 'become' || hash === 'find' || hash === 'resources') {
      setHelpTab(hash === 'resources' ? 'resources' : hash)
      document.getElementById('find')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="partners-hero-media" aria-hidden="true">
          <img src={partnersPage.hero.image} alt="" />
        </div>
        <div className="partners-hero-copy">
          <h1>{partnersPage.hero.title}</h1>
          <p>{partnersPage.hero.body}</p>
          <a href={partnersPage.hero.cta.to} className="btn btn-primary">
            {partnersPage.hero.cta.label}
          </a>
        </div>
      </section>

      <section className="partners-network">
        <img
          className="partners-network-wave"
          src={partnersPage.networkWave}
          alt=""
          aria-hidden="true"
        />
        <div className="container">
          <h2>{partnersPage.network}</h2>
        </div>
      </section>

      <section className="partners-help" id="find">
        <div className="partners-help-intro">
          <h2>How can we help?</h2>
          <p>Select an option below</p>
        </div>

        <div className="partners-help-tabs" role="tablist" aria-label="Partner help options">
          {partnersPage.helpTabs.map((tab) => {
            const selected = tab.id === helpTab
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`help-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`help-panel-${tab.id}`}
                className={`partners-help-tab${selected ? ' selected' : ''}`}
                onClick={() => setHelpTab(tab.id)}
              >
                <span className="partners-help-avatar">
                  <img src={tab.image} alt="" />
                </span>
                <span className="partners-help-label">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div
          className="partners-help-panel"
          role="tabpanel"
          id={`help-panel-${activeHelp.id}`}
          aria-labelledby={`help-tab-${activeHelp.id}`}
        >
          <div className="container partners-help-panel-inner" id={activeHelp.id === 'become' ? 'become' : undefined}>
            <h3>{activeHelp.title}</h3>
            <p>{activeHelp.intro}</p>
            <ul>
              {activeHelp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link to={activeHelp.cta.to} className="btn btn-primary">
              {activeHelp.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="partners-stats">
        <div className="container">
          <h2>{partnersPage.stats.title}</h2>
          <p className="partners-stats-lead">{partnersPage.stats.body}</p>
          <div className="partners-stats-grid">
            {partnersPage.stats.items.map((item) => (
              <div className="partners-stat" key={item.label}>
                <div className="partners-stat-value">{item.value}</div>
                <div className="partners-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-meet">
        <div className="container">
          <h2>{partnersPage.meet.title}</h2>
          <p>{partnersPage.meet.body}</p>
          <div className="partners-logo-grid">
            {partnerLogos.map((logo) => (
              <div className="partners-logo-cell" key={logo.name}>
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
          <Link to="/contact" className="text-link">
            Explore all partners
          </Link>
        </div>
      </section>

      <section className="partners-success">
        <div className="container">
          <h2>{partnersPage.success.title}</h2>
          <p>{partnersPage.success.body}</p>
          <Link to={partnersPage.success.cta.to} className="text-link">
            {partnersPage.success.cta.label}
          </Link>
        </div>
      </section>

      <section className="partners-news">
        <div className="container">
          <h2>{partnersPage.news.title}</h2>
          <Link to={partnersPage.news.cta.to} className="text-link">
            {partnersPage.news.cta.label}
          </Link>
        </div>
      </section>

      <section className="partners-service">
        <div className="container">
          <h2>{partnersPage.service.title}</h2>
          <p>{partnersPage.service.body}</p>
          <Link to={partnersPage.service.cta.to} className="text-link">
            {partnersPage.service.cta.label}
          </Link>
        </div>
      </section>

      <section className="partners-faq">
        <div className="container">
          <h2>Elevonixs Partner Program frequently asked questions</h2>
          <div className="partners-faq-list">
            {partnersPage.faqs.map((item, index) => {
              const open = openFaq === index
              return (
                <div className={`partners-faq-item${open ? ' open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="partners-faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {item.q}
                    <span aria-hidden="true">{open ? '−' : '+'}</span>
                  </button>
                  {open ? <div className="partners-faq-a">{item.a}</div> : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
