export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 4c6.2 0 11.2 2.4 14.2 6.2 2.2 2.8 3.2 6.2 2.6 9.8-.5 3.2-2.2 6-4.8 8.1-3.4 2.8-8 4.3-12.8 4.3h-.6c-3.8.1-7.5-1-10.4-3.2C8.4 26.3 6.2 22.4 6 18c-.2-4.8 1.8-9.2 5.5-12.1C15.2 3.1 19.4 4 24 4Z"
        fill="#0766D1"
      />
      <path
        d="M24 10c4.2 0 7.6 1.5 9.4 4 1.3 1.8 1.7 4 1.1 6.2-.5 2-1.9 3.7-3.9 4.9-2.4 1.5-5.4 2.1-8.4 2h-.2c-2.6.1-5.1-.6-7-2.1-1.7-1.3-2.9-3.4-3-5.8-.2-3 1.1-5.8 3.5-7.5C18.2 10.4 21 10 24 10Z"
        fill="#fff"
        fillOpacity="0.35"
      />
      <path
        d="M18.5 29.5c2.2 3.8 5.4 6.4 9.2 7.2 3.4.7 6.8-.2 9.3-2.5"
        stroke="#0766D1"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ChevronDown() {
  return (
    <svg viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M10 5.5v12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {[4, 10, 16].flatMap((y) =>
        [4, 10, 16].map((x) => (
          <circle key={`${x}-${y}`} cx={x + 2} cy={y + 2} r="1.6" fill="currentColor" />
        )),
      )}
    </svg>
  )
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 18.5c1.6-2.8 11.4-2.8 13 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H10l-4 3.5V16H7.5A2.5 2.5 0 0 1 5 13.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8.5V6.8c0-.7.2-1.2 1.2-1.2h1.3V3h-2.2C11.8 3 10.5 4.5 10.5 7v1.5H8.5V11h2v10h3.5V11h2.3l.5-2.5h-2.8Z"
      />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.6 3h2.6l-5.7 6.5L22 21h-6.2l-4.3-5.6L6.3 21H3.7l6.1-7L2.2 3h6.3l3.9 5.2L17.6 3Zm-.9 16.2h1.4L7.4 4.7H5.9l10.8 14.5Z"
      />
    </svg>
  )
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.3 9.2H3.5V20.5h2.8V9.2ZM4.9 3.5A1.7 1.7 0 1 0 5 6.9a1.7 1.7 0 0 0-.1-3.4ZM13.2 9c-1.5 0-2.5.8-2.9 1.6h-.1V9.2H7.6c0 .9 0 11.3 0 11.3h2.8v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.6v6.2H17.3v-6.7C17.3 10.4 15.6 9 13.2 9Z"
      />
    </svg>
  )
}

export function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.7 4.8 12 4.8 12 4.8s-6.7 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.2 12a29 29 0 0 0 .3 4.8 2.8 2.8 0 0 0 2 2c1.8.4 8.5.4 8.5.4s6.7 0 8.5-.4a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .3-4.8 29 29 0 0 0-.3-4.8ZM9.9 15.2V8.8L15.6 12l-5.7 3.2Z"
      />
    </svg>
  )
}

export function RssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.5 17.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 5.2v2.7A12.6 12.6 0 0 1 16.1 20.5h2.7A15.3 15.3 0 0 0 3.5 5.2Zm0 5.5v2.7a7.1 7.1 0 0 1 7.1 7.1h2.7a9.8 9.8 0 0 0-9.8-9.8Z"
      />
    </svg>
  )
}
