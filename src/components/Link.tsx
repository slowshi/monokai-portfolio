import React, { ReactNode } from 'react'

interface LinkProps {
  href: string
  target?: string
  label?: string
  children: ReactNode
}

const Link: React.FC<LinkProps> = ({ href, target, label, children }) => (
  <a
    className="inline-block transition duration-300 ease-in-out monokai-blue hover:monokai-white hover:monokai-bg-blue py-1 px-2 rounded"
    href={href}
    target={target}
    aria-label={label}
  >
    <div className="flex items-center justify-center">{children}</div>
  </a>
)

export { Link }
