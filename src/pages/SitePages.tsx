import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { aiPillars, industries, newsItems } from '../data'

function PageShell({
  title,
  lead,
  children,
}: {
  title: string
  lead: string
  children?: ReactNode
}) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">{children}</div>
      </section>
    </>
  )
}

export function ProductsPage() {
  return (
    <PageShell
      title="Software & Products"
      lead="Explore Elevonixs Viya and the solutions that help enterprises build, deploy and govern trusted AI."
    >
      <div className="card-list">
        {[
          ['Elevonixs Viya', 'Unified data, analytics and AI platform for enterprise scale.'],
          ['AI Navigator', 'Centralized visibility and governance across models, agents and use cases.'],
          ['Viya Copilot', 'Conversational generative AI for productivity across the AI life cycle.'],
          ['Decisioning', 'Turn insight into governed, repeatable business decisions.'],
          ['Data Management', 'Connect, prepare and govern data wherever it lives.'],
          ['Marketing AI', 'Build, govern and activate AI models for marketing faster.'],
        ].map(([title, body]) => (
          <article className="simple-card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/products/${slugify(title)}`} className="btn-ghost-blue" style={{ marginTop: 14, display: 'inline-flex' }}>
              Learn more →
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export function ProductPage() {
  const { slug = 'viya' } = useParams()
  const title = titleCase(slug)
  return (
    <PageShell
      title={title}
      lead={`${title} helps teams move from data to trusted decisions with governance built in.`}
    >
      <div className="prose">
        <p>
          Elevonixs {title} brings transparency, scale and accountability to enterprise AI. Connect
          your data, build production-ready models, and operationalize decisions across cloud, hybrid
          and on-premises environments.
        </p>
        <p>
          Whether you are advancing generative AI, agentic workflows or classical analytics,
          Elevonixs keeps trust and oversight at the center of every step.
        </p>
        <Link to="/demos" className="btn btn-primary" style={{ marginTop: 8 }}>
          Try Elevonixs Viya
        </Link>
      </div>
    </PageShell>
  )
}

export function SolutionsPage() {
  return (
    <PageShell
      title="Solutions"
      lead="From trustworthy AI to industry decisioning, Elevonixs solutions are built for real-world complexity."
    >
      <div className="card-list">
        {aiPillars.map((item) => (
          <article className="simple-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <Link to={item.to} className="btn-ghost-blue" style={{ marginTop: 14, display: 'inline-flex' }}>
              Explore →
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export function SolutionPage() {
  const { slug = 'trustworthy-ai' } = useParams()
  const match = aiPillars.find((item) => item.to.endsWith(slug))
  const title = match?.title ?? titleCase(slug)
  return (
    <PageShell
      title={title}
      lead={match?.body ?? 'Explore how Elevonixs helps organizations deliver trusted outcomes with data and AI.'}
    >
      <div className="prose">
        <p>
          Elevonixs embeds governance, explainability and industry expertise into every solution so
          teams can innovate without sacrificing control. Deploy with confidence across regulated and
          high-stakes environments.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Talk to an expert
        </Link>
      </div>
    </PageShell>
  )
}

export function IndustriesPage() {
  return (
    <PageShell
      title="Industries"
      lead="Domain expertise matters more than ever. See how Elevonixs delivers industry-ready intelligence."
    >
      <div className="card-list">
        {industries.map((item) => (
          <article className="simple-card" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
            <Link
              to={`/industries/${slugify(item.name)}`}
              className="btn-ghost-blue"
              style={{ marginTop: 14, display: 'inline-flex' }}
            >
              Explore {item.name} →
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export function IndustryPage() {
  const { slug = 'banking' } = useParams()
  const item = industries.find((entry) => slugify(entry.name) === slug) ?? industries[0]
  return (
    <PageShell title={item.name} lead={item.title}>
      <div className="prose">
        <p>{item.body}</p>
        <Link to="/contact" className="btn btn-primary">
          Explore {item.name} solutions
        </Link>
      </div>
    </PageShell>
  )
}

export function ResourcesPage() {
  return (
    <PageShell
      title="Resources"
      lead="Insights, stories and research on trustworthy data and AI from Elevonixs."
    >
      <div className="card-list">
        {newsItems.map((item) => (
          <article className="simple-card" key={item.title}>
            <p className="kicker">{item.tag}</p>
            <h3>{item.title}</h3>
            {item.body ? <p>{item.body}</p> : null}
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export function ArticlePage() {
  const { slug = 'insight' } = useParams()
  return (
    <PageShell
      title={titleCase(slug)}
      lead="Deep-dive insight from Elevonixs on data, analytics and responsible AI."
    >
      <div className="prose">
        <p>
          Organizations that treat trust as a first-class requirement are far more likely to realize
          durable ROI from AI. Elevonixs helps teams operationalize governance, quality and
          accountability across the full life cycle.
        </p>
      </div>
    </PageShell>
  )
}

export function DemosPage() {
  return (
    <PageShell
      title="Try Elevonixs Viya"
      lead="Explore Elevonixs Viya in a secure trial environment and see trusted AI in action."
    >
      <div className="prose">
        <p>
          Start a free trial, request a guided demo, or talk with our team about pricing and
          deployment options across cloud and on-premises environments.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <Link to="/contact" className="btn btn-primary">
            Start free trial
          </Link>
          <Link to="/contact" className="btn btn-white">
            Request a demo
          </Link>
        </div>
      </div>
    </PageShell>
  )
}

export function CompanyPage() {
  const { slug = 'overview' } = useParams()
  return (
    <PageShell
      title={titleCase(slug)}
      lead="Elevonixs is building the most trustworthy data and AI partner for the world's decisions."
    >
      <div className="prose">
        <p>
          With deep expertise, a leading data and AI platform, and standout industry solutions,
          Elevonixs helps customers move beyond AI hype and focus on what delivers real value —
          trusted decisions at scale.
        </p>
      </div>
    </PageShell>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy Statement' : 'Terms of Use'
  return (
    <PageShell title={title} lead={`Elevonixs ${title.toLowerCase()} for elevonixs.com visitors and customers.`}>
      <div className="prose">
        <p>
          This is a placeholder legal page for the Elevonixs marketing site clone. Replace with your
          approved legal copy before production use.
        </p>
      </div>
    </PageShell>
  )
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function titleCase(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
