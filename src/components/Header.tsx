import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset } from '../asset'
import { navItems } from '../data'
import { LogoMark, MenuIcon } from './Icons'

const toolIcons = {
  search: asset('images/icons/search-icon.svg'),
  contact: asset('images/icons/contact-icon.svg'),
  profile: asset('images/icons/profile-not-logged-in.svg'),
}

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rootRef = useRef<HTMLElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const isPartners = location.pathname.startsWith('/partners')
  const isContact = location.pathname.startsWith('/contact')
  const isAuth =
    location.pathname.startsWith('/accounts') || location.pathname.startsWith('/signup')
  const active = navItems.find((item) => item.label === open && item.columns)

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(null)
        setSearchOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(null)
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  const closeMenus = () => {
    setOpen(null)
    setMobileOpen(false)
    setSearchOpen(false)
  }

  return (
    <header className="site-header" ref={rootRef}>
      <div className="header-top">
        <Link to="/" className="brand" aria-label="Elevonixs home">
          <LogoMark className="brand-mark" />
          <span className="brand-name">elevonixs</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((value) => !value)
            setOpen(null)
            setSearchOpen(false)
          }}
        >
          <MenuIcon />
        </button>

        <nav className={`primary-nav${mobileOpen ? ' open' : ''}`} aria-label="Primary">
          {navItems.map((item) => {
            if (item.href) {
              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="nav-trigger"
                  onClick={closeMenus}
                >
                  {item.label}
                </NavLink>
              )
            }

            const isOpen = open === item.label
            return (
              <div key={item.label} className={`nav-item${isOpen ? ' open' : ''}`}>
                <button
                  className="nav-trigger"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => {
                    setSearchOpen(false)
                    setOpen(isOpen ? null : item.label)
                  }}
                >
                  {item.label}
                </button>
                {isOpen && item.columns ? (
                  <div className="mega mega-inline" role="region" aria-label={`${item.label} menu`}>
                    {item.columns.map((column) => (
                      <div className="mega-col" key={column.title}>
                        <ul className="mega-list">
                          <li className="mega-heading">
                            <span>{column.title}</span>
                          </li>
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <Link to={link.to} onClick={closeMenus}>
                                <span>{link.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>

        <div className="header-tools">
          <div className={`search-tool${searchOpen ? ' open' : ''}`}>
            {searchOpen ? (
              <form
                className="header-search"
                role="search"
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
                <input
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                  aria-label="Search Elevonixs"
                />
                <button type="submit" className="icon-btn" aria-label="Submit search" title="Search">
                  <img src={toolIcons.search} alt="" width={25} height={25} />
                </button>
                <button
                  type="button"
                  className="search-cancel"
                  aria-label="Cancel search"
                  title="Cancel"
                  onClick={() => {
                    setQuery('')
                    setSearchOpen(false)
                  }}
                >
                  ×
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="icon-btn"
                aria-label="Search"
                title="Search"
                aria-expanded={false}
                onClick={() => {
                  setOpen(null)
                  setSearchOpen(true)
                }}
              >
                <img src={toolIcons.search} alt="" width={25} height={25} />
              </button>
            )}
          </div>
          <Link to="/contact" className="icon-btn hide-sm" aria-label="Contact Us" title="Contact Us">
            <img src={toolIcons.contact} alt="" width={25} height={25} />
          </Link>
          <Link to="/accounts" className="icon-btn icon-profile" aria-label="Sign In" title="Sign In">
            <img src={toolIcons.profile} alt="" width={35} height={35} />
          </Link>
        </div>
      </div>

      {active?.columns ? (
        <div className="mega-wrap mega-wrap-desktop" role="region" aria-label={`${active.label} menu`}>
          <div className={`mega cols-${active.columns.length}`}>
            <button
              type="button"
              className="mega-close"
              aria-label="Close"
              onClick={() => setOpen(null)}
            >
              <span aria-hidden="true">×</span>
            </button>
            {active.columns.map((column) => (
              <div className="mega-col" key={column.title}>
                <ul className="mega-list">
                  <li className="mega-heading">
                    <span>{column.title}</span>
                  </li>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} onClick={closeMenus}>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="subnav">
        <div className="subnav-inner">
          <h1 className="subnav-title">
            {isPartners
              ? 'Partners'
              : isContact
                ? 'Contact Elevonixs'
                : isAuth
                  ? 'My Elevonixs'
                  : 'Data and AI Solutions'}
          </h1>
          {isPartners ? (
            <nav className="subnav-links" aria-label="Partners">
              <a href="#find">Find a Partner</a>
              <a href="#become">Become a Partner</a>
              <Link to="/accounts">Log in to PartnerNet</Link>
            </nav>
          ) : isContact ? (
            <nav className="subnav-links" aria-label="Contact">
              <a href="#contact-form">Contact form</a>
              <Link to="/resources">FAQs</Link>
              <Link to="/demos" className="btn btn-white btn-sm">
                Request pricing
              </Link>
            </nav>
          ) : isAuth ? (
            <nav className="subnav-links" aria-label="Account">
              <Link to="/accounts">Sign in</Link>
              <Link to="/signup" className="btn btn-white btn-sm">
                Sign up
              </Link>
            </nav>
          ) : (
            <Link to="/demos" className="btn btn-white btn-sm">
              Try Elevonixs Viya
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
