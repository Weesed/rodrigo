import { ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title?: string
  children: ReactNode
}

export function Card({ icon, title, children }: CardProps) {
  return (
    <div className="text-pretty rounded-md bg-blue-light-background p-5">
      {icon && (
        <div className="mb-4 flex items-center gap-1">
          <div className="rounded-md bg-blue-background p-1">{icon}</div>
          <h3 className="font-semibold">{title}</h3>
        </div>
      )}
      {children}
    </div>
  )
}