import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | (React.ComponentPropsWithoutRef<typeof Link> & { href: string })

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ className, href, ...props }, ref) {
    const btn =
      'inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-secondary shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-800'

    if (href) {
      return (
        <Link
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={clsx(className, btn)}
          {...(props as any)}
        />
      )
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={clsx(className, btn)}
        {...(props as any)}
      />
    )
  }
)
