import { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

interface AppScreenProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export function AppScreen({ children, className, ...props }: AppScreenProps) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function AppScreenHeader({ children }, ref) {
    return (
      <div ref={ref} className="px-4 text-white">
        {children}
      </div>
    )
  }
)

AppScreen.Title = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function AppScreenTitle({ children }, ref) {
    return (
      <div ref={ref} className="text-2xl text-white">
        {children}
      </div>
    )
  }
)

AppScreen.Subtitle = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function AppScreenSubtitle({ children }, ref) {
    return (
      <div ref={ref} className="text-sm text-gray-500">
        {children}
      </div>
    )
  }
)

AppScreen.Body = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(function AppScreenBody({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('flex-auto rounded-t-2xl bg-white', className)}
      style={{ marginTop: '-1.5rem' }}
    >
      {children}
    </div>
  )
})
