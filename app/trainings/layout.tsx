import type { ReactNode } from 'react'
import './zta.css'

export default function TrainingsLayout({ children }: { children: ReactNode }) {
  return <div className="zta-layout-root">{children}</div>
}
