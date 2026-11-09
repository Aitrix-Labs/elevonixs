import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'

type FormState = {
  email: string
  password: string
  remember: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  email: '',
  password: '',
  remember: true,
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.email.trim()) errors.email = 'Enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.password) errors.password = 'Enter your password.'
  return errors
}

export default function AccountsPage() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [showPassword, setShowPassword] = useState(false)
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
    setTouched({ email: true, password: true })
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
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
                src={asset('images/contact/training.jpg')}
                alt="Elevonixs customer accessing My Elevonixs"
              />
            </div>
            <h1>Sign in to My Elevonixs</h1>
            <p>
              Access support, training, trials and account resources with your Elevonixs profile.
            </p>
            <ul className="auth-benefits">
              <li>Open support cases and downloads</li>
              <li>Continue learning and certification paths</li>
              <li>Manage account preferences securely</li>
            </ul>
            <p className="auth-switch">
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </aside>

          <div className="auth-card">
            {submitted ? (
              <div className="auth-success" role="status" aria-live="polite">
                <h2>You&apos;re signed in.</h2>
                <p>
                  Demo sign-in succeeded for <strong>{values.email}</strong>. In production this would
                  open My Elevonixs.
                </p>
                <div className="auth-success-actions">
                  <Link to="/resources" className="btn btn-primary">
                    Go to resources
                  </Link>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setSubmitted(false)
                      setValues(initial)
                      setTouched({})
                    }}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <form className="auth-form contact-form" onSubmit={onSubmit} noValidate>
                <div className="auth-card-head">
                  <h2>Sign in</h2>
                  <p>Use your My Elevonixs email and password.</p>
                </div>

                <label className={touched.email && errors.email ? 'has-error' : ''}>
                  <span>
                    Email <em>*</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    value={values.email}
                    onChange={(event) => setField('email', event.target.value)}
                    onBlur={() => onBlur('email')}
                  />
                  {touched.email && errors.email ? (
                    <span className="field-error">{errors.email}</span>
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
                      autoComplete="current-password"
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
                  {touched.password && errors.password ? (
                    <span className="field-error">{errors.password}</span>
                  ) : null}
                </label>

                <div className="auth-inline-row">
                  <label className="contact-consent">
                    <input
                      type="checkbox"
                      checked={values.remember}
                      onChange={(event) => setField('remember', event.target.checked)}
                    />
                    <span>Keep me signed in</span>
                  </label>
                  <button type="button" className="text-link auth-forgot">
                    Forgot password?
                  </button>
                </div>

                <div className="contact-form-actions">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Signing in…' : 'Sign in'}
                  </button>
                  {!canSubmit && Object.keys(touched).length > 0 ? (
                    <span className="contact-form-hint">Enter email and password to continue.</span>
                  ) : (
                    <span className="contact-form-hint">* Required fields</span>
                  )}
                </div>

                <p className="auth-card-foot">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
