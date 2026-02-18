import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from '@/components/Container';
import {Button} from "@/components/Button";

const plans = [
  {
    name: 'Default',
    featured: false,
    price: { Monthly: '0.99', Annually: '$9.99' },
    description:
        'Most Popular! Unlock the full OmegaFyt experience with advanced features that keep you motivated and on track toward your goals.',
    features: [
      'AI-Powered Mobile App Access',
      'Advanced Workout Analytics',
      'Unlimited Progress Photos',
      'Priority Customer Support',
    ],
  },
  {
    name: 'Lifetime',
    featured: false,
    price: { Monthly: '$24.99', Annually: '$24.99' },
    description:
        'Best Value! Get the full app, all of its features for 1 price. Limited time offer.',
    features: [
        'AI-Powered Mobile App Access',
        'Advanced Workout Analytics',
        'Unlimited Progress Photos',
        'Priority Customer Support',
    ],
    // link: '/contact',
  },
];

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
            fill="currentColor"
        />
        <circle
            cx="12"
            cy="12"
            r="8.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

interface PlanProps {
  name: string
  price: { Monthly: string; Annually: string }
  description: string
  features: string[]
  featured?: boolean
  activePeriod: 'Monthly' | 'Annually'
  link?: string
}

function Plan({
  name,
  price,
  description,
  features,
  featured = false,
  activePeriod,
  link,
}: PlanProps) {
  return (
      <section
          className={clsx(
              'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
              featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
          )}
      >
        <h3
            className={clsx(
                'flex items-center text-sm font-semibold',
                featured ? 'text-white' : 'text-gray-900'
            )}
        >
          <span className="text-lg">{name}</span>
        </h3>
        <p
            className={clsx(
                'relative mt-5 flex text-3xl tracking-tight',
                featured ? 'text-white' : 'text-gray-900'
            )}
        >
          {price.Monthly === price.Annually ? (
              price.Monthly
          ) : (
              <>
            <span
                aria-hidden={activePeriod === 'Annually'}
                className={clsx(
                    'transition duration-300',
                    activePeriod === 'Annually' &&
                    'pointer-events-none translate-x-6 select-none opacity-0'
                )}
            >
              {price.Monthly}
            </span>
                <span
                    aria-hidden={activePeriod === 'Monthly'}
                    className={clsx(
                        'absolute left-0 top-0 transition duration-300',
                        activePeriod === 'Monthly' &&
                        'pointer-events-none -translate-x-6 select-none opacity-0'
                    )}
                >
              {price.Annually}
            </span>
              </>
          )}
        </p>
        <p
            className={clsx(
                'mt-3 text-sm',
                featured ? 'text-gray-300' : 'text-gray-700'
            )}
        >
          {description}
        </p>
        <div className="order-last mt-6">
          <ul
              role="list"
              className={clsx(
                  '-my-2 divide-y text-sm',
                  featured
                      ? 'divide-gray-800 text-gray-300'
                      : 'divide-gray-200 text-gray-700'
              )}
          >
            {features.map((feature) => (
                <li key={feature} className="flex py-2">
                  <CheckIcon
                      className={clsx(
                          'h-6 w-6 flex-none',
                          featured ? 'text-white' : 'text-cyan-500'
                      )}
                  />
                  <span className="ml-4">{feature}</span>
                </li>
            ))}

          </ul>
            <div className="w-full py-4">
            {link ? (
                <Button href={link} className="w-full flex justify-center items-center">Get Started</Button>
            ) : null}
            </div>
        </div>

      </section>
  );
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>('Monthly');

  return (
      <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
                id="pricing-title"
                className="text-3xl font-medium tracking-tight text-background"
            >
              Choose Your Transformation Plan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start your transformation today. Begin free, upgrade anytime as your needs grow.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <RadioGroup
                  value={activePeriod}
                  onChange={setActivePeriod}
                  className="grid grid-cols-2"
              >
                {['Monthly', 'Annually'].map((period) => (
                    <RadioGroup.Option
                        key={period}
                        value={period}
                        className={clsx(
                            'cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-primary-dark outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                            period === 'Monthly'
                                ? 'rounded-l-lg'
                                : '-ml-px rounded-r-lg'
                        )}
                    >
                      {period}
                    </RadioGroup.Option>
                ))}
              </RadioGroup>
              <div
                  aria-hidden="true"
                  className={clsx(
                      'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-primary transition-all duration-300',
                      activePeriod === 'Monthly'
                          ? '[clip-path:inset(0_50%_0_0)]'
                          : '[clip-path:inset(0_0_0_calc(50%-1px))]'
                  )}
              >
                {['Monthly', 'Annually'].map((period) => (
                    <div
                        key={period}
                        className={clsx(
                            'py-2 text-center text-sm font-semibold text-gray-50 [&:not(:focus-visible)]:focus:outline-none',
                            period === 'Annually' && '-ml-px'
                        )}
                    >
                      {period}
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {plans.map((plan) => (
                <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
            ))}
          </div>
        </Container>
      </section>
  );
}
