import { Omega } from "lucide-react"
import clsx from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center", className)}>
      <Omega width="40" height="40" className="text-primary" />
      <h1 className="ml-2 text-2xl text-primary">OmegaFyt</h1>
    </div>
  )
}
