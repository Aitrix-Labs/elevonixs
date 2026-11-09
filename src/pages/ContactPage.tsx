import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'
import FormSelect from '../components/FormSelect'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  country: string
  topic: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  topic: '',
  message: '',
  consent: false,
}

const topics = [
  'Request a demo',
  'Request pricing',
  'Product questions',
  'Technical support',
  'Partner inquiry',
  'Training & certification',
  'Other',
]

const channels: {
  title: string
  body: string
  image: string
  imageAlt: string
  action: { label: string; href: string } | { label: string; to: string }
}[] = [
  {
    title: 'Sales & demos',
    body: 'Talk with an Elevonixs specialist about Viya, AI solutions and pricing.',
    image: asset('images/contact/sales.jpg'),
    imageAlt: 'Specialists reviewing analytics on a tablet',
    action: { label: 'Scroll to form', href: '#contact-form' },
  },
  {
    title: 'Technical Support',
    body: 'Get help with products, downloads, documentation and service requests.',
    image: asset('images/contact/support.jpg'),
    imageAlt: 'Professional working on a laptop by a window',
    action: { label: 'Visit support', to: '/resources' },
  },
  {
    title: 'Training & Certifications',
    body: 'Explore learning paths, exams and certification resources.',
    image: asset('images/contact/training.jpg'),
    imageAlt: 'Learner in a professional training session',
    action: { label: 'Explore resources', to: '/resources' },
  },
  {
    title: 'Partners',
    body: 'Find an Elevonixs Partner or learn how to join the partner program.',
    image: asset('images/contact/partners.jpg'),
    imageAlt: 'Partner team collaborating in a meeting',
    action: { label: 'Go to Partners', to: '/partners' },
  },
]

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.firstName.trim()) errors.firstName = 'Enter your first name.'
  if (!values.lastName.trim()) errors.lastName = 'Enter your last name.'
  if (!values.email.trim()) errors.email = 'Enter your work email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.company.trim()) errors.company = 'Enter your company name.'
  if (!values.topic) errors.topic = 'Select a topic.'
  if (!values.message.trim()) errors.message = 'Tell us how we can help.'
  else if (values.message.trim().length < 12) {
    errors.message = 'Please add a bit more detail (at least 12 characters).'
  }
  if (!values.consent) errors.consent = 'Consent is required to submit.'
  return errors
}

export default function ContactPage() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canSubmit = useMemo(() => Object.keys(validate(values)).length === 0, [values])

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const onBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }))
    const nextErrors = validate({ ...values })
    setErrors((prev) => ({ ...prev, [key]: nextErrors[key] }))
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      company: true,
      topic: true,
      message: true,
      consent: true,
    })
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <div className="contact-hero-copy">
            <h1>Contact Elevonixs</h1>
            <p>
              We&apos;re always eager to answer questions about our analytics and AI software — or
              anything else you may need.
            </p>
            <a href="#contact-form" className="btn btn-primary">
              Get a demo or quote now
            </a>
          </div>
          <div className="contact-hero-visual">
            <img
              src={asset('images/contact/hero-circle.png')}
              alt="Three diverse coworkers collaborating to solve a problem"
            />
          </div>
        </div>
      </section>

      <section className="contact-channels">
        <div className="container">
          <div className="contact-channel-grid">
            {channels.map((item) => (
              <article className="contact-channel" key={item.title}>
                <div className="contact-channel-media">
                  <img src={item.image} alt={item.imageAlt} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                {'href' in item.action ? (
                  <a href={item.action.href} className="text-link">
                    {item.action.label}
                  </a>
                ) : (
                  <Link to={item.action.to} className="text-link">
                    {item.action.label}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="container contact-form-layout">
          <div className="contact-form-intro">
            <div className="contact-form-intro-photo">
              <img
                src={asset('images/contact/sales.jpg')}
                alt="Elevonixs team ready to help with your request"
              />
            </div>
            <h2>Send us a message</h2>
            <p>
              Share a few details and an Elevonixs specialist will follow up. For urgent product
              issues, use Technical Support.
            </p>
            <ul className="contact-form-notes">
              <li>Typical response within one business day</li>
              <li>Demo and pricing requests prioritized by region</li>
              <li>Existing customers can also sign in to My Elevonixs</li>
            </ul>
            <Link to="/accounts" className="text-link">
              Log in to My Elevonixs
            </Link>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success" role="status" aria-live="polite">
                <h3>Thanks — your message is on its way.</h3>
                <p>
                  An Elevonixs specialist will follow up at <strong>{values.email}</strong>
                  {values.topic ? (
                    <>
                      {' '}
                      about <strong>{values.topic.toLowerCase()}</strong>
                    </>
                  ) : null}
                  .
                </p>
                <button type="button" className="btn btn-primary" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="contact-form-row">
                  <label className={touched.firstName && errors.firstName ? 'has-error' : ''}>
                    <span>
                      First name <em>*</em>
                    </span>
                    <input
                      name="firstName"
                      autoComplete="given-name"
                      value={values.firstName}
                      onChange={(event) => setField('firstName', event.target.value)}
                      onBlur={() => onBlur('firstName')}
                      aria-invalid={Boolean(touched.firstName && errors.firstName)}
                    />
                    {touched.firstName && errors.firstName ? (
                      <span className="field-error">{errors.firstName}</span>
                    ) : null}
                  </label>
                  <label className={touched.lastName && errors.lastName ? 'has-error' : ''}>
                    <span>
                      Last name <em>*</em>
                    </span>
                    <input
                      name="lastName"
                      autoComplete="family-name"
                      value={values.lastName}
                      onChange={(event) => setField('lastName', event.target.value)}
                      onBlur={() => onBlur('lastName')}
                      aria-invalid={Boolean(touched.lastName && errors.lastName)}
                    />
                    {touched.lastName && errors.lastName ? (
                      <span className="field-error">{errors.lastName}</span>
                    ) : null}
                  </label>
                </div>

                <div className="contact-form-row">
                  <label className={touched.email && errors.email ? 'has-error' : ''}>
                    <span>
                      Work email <em>*</em>
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => setField('email', event.target.value)}
                      onBlur={() => onBlur('email')}
                      aria-invalid={Boolean(touched.email && errors.email)}
                    />
                    {touched.email && errors.email ? (
                      <span className="field-error">{errors.email}</span>
                    ) : null}
                  </label>
                  <label>
                    <span>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(event) => setField('phone', event.target.value)}
                    />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label className={touched.company && errors.company ? 'has-error' : ''}>
                    <span>
                      Company <em>*</em>
                    </span>
                    <input
                      name="company"
                      autoComplete="organization"
                      value={values.company}
                      onChange={(event) => setField('company', event.target.value)}
                      onBlur={() => onBlur('company')}
                      aria-invalid={Boolean(touched.company && errors.company)}
                    />
                    {touched.company && errors.company ? (
                      <span className="field-error">{errors.company}</span>
                    ) : null}
                  </label>
                  <label>
                    <span>Country / region</span>
                    <input
                      name="country"
                      autoComplete="country-name"
                      value={values.country}
                      onChange={(event) => setField('country', event.target.value)}
                    />
                  </label>
                </div>

                <label className={touched.topic && errors.topic ? 'has-error' : ''}>
                  <span>
                    Topic <em>*</em>
                  </span>
                  <FormSelect
                    name="topic"
                    value={values.topic}
                    onChange={(value) => setField('topic', value)}
                    onBlur={() => onBlur('topic')}
                    placeholder="Select a topic"
                    aria-label="Select a topic"
                    invalid={Boolean(touched.topic && errors.topic)}
                    options={topics.map((topic) => ({ value: topic, label: topic }))}
                  />
                  {touched.topic && errors.topic ? (
                    <span className="field-error">{errors.topic}</span>
                  ) : null}
                </label>

                <label className={touched.message && errors.message ? 'has-error' : ''}>
                  <span>
                    How can we help? <em>*</em>
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => setField('message', event.target.value)}
                    onBlur={() => onBlur('message')}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    placeholder="Share goals, timeline or product interest"
                  />
                  {touched.message && errors.message ? (
                    <span className="field-error">{errors.message}</span>
                  ) : null}
                </label>

                <label
                  className={`contact-consent${touched.consent && errors.consent ? ' has-error' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) => setField('consent', event.target.checked)}
                    onBlur={() => onBlur('consent')}
                  />
                  <span>
                    I agree that Elevonixs may contact me about this request and related products or
                    services. <em>*</em>
                  </span>
                </label>
                {touched.consent && errors.consent ? (
                  <span className="field-error">{errors.consent}</span>
                ) : null}

                <div className="contact-form-actions">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Submit'}
                  </button>
                  {!canSubmit && Object.keys(touched).length > 0 ? (
                    <span className="contact-form-hint">Complete required fields to continue.</span>
                  ) : (
                    <span className="contact-form-hint">* Required fields</span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
