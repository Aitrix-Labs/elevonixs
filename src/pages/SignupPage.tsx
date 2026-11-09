import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'

type FormState = {
  firstName: string
  lastName: string
  email: string
  company: string
  country: string
  password: string
  confirmPassword: string
  role: string
  terms: boolean
  updates: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  country: '',
  password: '',
  confirmPassword: '',
  role: '',
  terms: false,
  updates: true,
}

const roles = [
  'Business / analytics leader',
  'Data scientist / engineer',
  'IT / platform owner',
  'Developer',
  'Student / educator',
  'Partner',
  'Other',
]

function passwordScore(password: string) {
  let score = 0
  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  return score
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.firstName.trim()) errors.firstName = 'Enter your first name.'
  if (!values.lastName.trim()) errors.lastName = 'Enter your last name.'
  if (!values.email.trim()) errors.email = 'Enter your work email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.company.trim()) errors.company = 'Enter your company or organization.'
  if (!values.role) errors.role = 'Select your role.'
  if (!values.password) errors.password = 'Create a password.'
  else if (values.password.length < 8) errors.password = 'Use at least 8 characters.'
  else if (passwordScore(values.password) < 3) {
    errors.password = 'Include upper, lower, and a number or symbol.'
  }
  if (!values.confirmPassword) errors.confirmPassword = 'Confirm your password.'
  else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match.'
  }
  if (!values.terms) errors.terms = 'Accept the Terms of Use to continue.'
  return errors
}

export default function SignupPage() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const score = passwordScore(values.password)
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
      role: true,
      password: true,
      confirmPassword: true,
      terms: true,
    })
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="auth-page">
      <section className="auth-shell">
        <div className="container auth-layout">
          <aside className="auth-aside">
            <div className="auth-aside-media">
              <img
                src={asset('images/contact/sales.jpg')}
                alt="Professionals collaborating with Elevonixs"
              />
            </div>
            <h1>Create your My Elevonixs account</h1>
            <p>
              Get access to support, training, trials and account resources with a free Elevonixs
              profile.
            </p>
            <ul className="auth-benefits">
              <li>Track support cases and documentation</li>
              <li>Start software trials and learning paths</li>
              <li>Manage preferences and partner resources</li>
            </ul>
            <p className="auth-switch">
              Already have an account? <Link to="/accounts">Sign in</Link>
            </p>
          </aside>

          <div className="auth-card">
            {submitted ? (
              <div className="auth-success" role="status" aria-live="polite">
                <h2>Welcome — your account is ready.</h2>
                <p>
                  We created a My Elevonixs profile for <strong>{values.email}</strong>. You can sign
                  in anytime to continue.
                </p>
                <div className="auth-success-actions">
                  <Link to="/accounts" className="btn btn-primary">
                    Continue to sign in
                  </Link>
                  <Link to="/demos" className="text-link">
                    Explore Elevonixs Viya
                  </Link>
                </div>
              </div>
            ) : (
              <form className="auth-form contact-form" onSubmit={onSubmit} noValidate>
                <div className="auth-card-head">
                  <h2>Sign up</h2>
                  <p>Create your free Elevonixs account in a few steps.</p>
                </div>

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
                    />
                    {touched.lastName && errors.lastName ? (
                      <span className="field-error">{errors.lastName}</span>
                    ) : null}
                  </label>
                </div>

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
                  />
                  {touched.email && errors.email ? (
                    <span className="field-error">{errors.email}</span>
                  ) : null}
                </label>

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

                <label className={touched.role && errors.role ? 'has-error' : ''}>
                  <span>
                    Role <em>*</em>
                  </span>
                  <select
                    name="role"
                    value={values.role}
                    onChange={(event) => setField('role', event.target.value)}
                    onBlur={() => onBlur('role')}
                  >
                    <option value="">Select your role</option>
                    {roles.map((role) => (
                      <option value={role} key={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  {touched.role && errors.role ? (
                    <span className="field-error">{errors.role}</span>
                  ) : null}
                </label>

                <label className={touched.password && errors.password ? 'has-error' : ''}>
                  <span>
                    Password <em>*</em>
                  </span>
                  <div className="auth-password-field">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      autoComplete="new-password"
                      value={values.password}
                      onChange={(event) => setField('password', event.target.value)}
                      onBlur={() => onBlur('password')}
                    />
                    <button
                      type="button"
                      className="auth-toggle-password"
                      onClick={() => setShowPassword((value) => !value)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="auth-strength" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span key={level} className={score >= level ? `is-on strength-${score}` : ''} />
                    ))}
                  </div>
                  {touched.password && errors.password ? (
                    <span className="field-error">{errors.password}</span>
                  ) : (
                    <span className="auth-hint">At least 8 characters with mixed case and a number or symbol.</span>
                  )}
                </label>

                <label
                  className={touched.confirmPassword && errors.confirmPassword ? 'has-error' : ''}
                >
                  <span>
                    Confirm password <em>*</em>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={values.confirmPassword}
                    onChange={(event) => setField('confirmPassword', event.target.value)}
                    onBlur={() => onBlur('confirmPassword')}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <span className="field-error">{errors.confirmPassword}</span>
                  ) : null}
                </label>

                <label className={`contact-consent${touched.terms && errors.terms ? ' has-error' : ''}`}>
                  <input
                    type="checkbox"
                    checked={values.terms}
                    onChange={(event) => setField('terms', event.target.checked)}
                    onBlur={() => onBlur('terms')}
                  />
                  <span>
                    I agree to the Elevonixs <Link to="/terms">Terms of Use</Link> and{' '}
                    <Link to="/privacy">Privacy Statement</Link>. <em>*</em>
                  </span>
                </label>
                {touched.terms && errors.terms ? (
                  <span className="field-error">{errors.terms}</span>
                ) : null}

                <label className="contact-consent">
                  <input
                    type="checkbox"
                    checked={values.updates}
                    onChange={(event) => setField('updates', event.target.checked)}
                  />
                  <span>Send me product updates, events and learning resources.</span>
                </label>

                <div className="contact-form-actions">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Creating account…' : 'Create account'}
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
