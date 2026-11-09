import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from './Icons'

type Option = { value: string; label: string }

type FormSelectProps = {
  name: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  placeholder?: string
  invalid?: boolean
  'aria-label'?: string
}

export default function FormSelect({
  name,
  options,
  value,
  onChange,
  onBlur,
  placeholder = 'Select an option',
  invalid,
  'aria-label': ariaLabel,
}: FormSelectProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    if (!open) return
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
        onBlur?.()
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        onBlur?.()
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onBlur])

  return (
    <div className={`form-select${open ? ' is-open' : ''}${invalid ? ' is-invalid' : ''}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className="form-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onBlur={(event) => {
          if (!rootRef.current?.contains(event.relatedTarget as Node)) {
            onBlur?.()
          }
        }}
      >
        <span className={selected ? undefined : 'is-placeholder'}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown />
      </button>
      {open ? (
        <ul className="form-select-menu" id={listId} role="listbox" aria-label={ariaLabel}>
          <li role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={!value}
              className={`form-select-option${!value ? ' is-active' : ''}`}
              onClick={() => {
                onChange('')
                setOpen(false)
                onBlur?.()
              }}
            >
              {placeholder}
            </button>
          </li>
          {options.map((option) => {
            const active = option.value === value
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`form-select-option${active ? ' is-active' : ''}`}
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                    onBlur?.()
                  }}
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
