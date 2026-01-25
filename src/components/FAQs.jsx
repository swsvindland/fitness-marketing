import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'I want a new feature!',
    answer:
      'Love hearing from our community! Email me at sam@omegafyt.com and let me know what you want. I personally read every message and prioritize features our users request most.',
    links: [],
  },
  {
    question: 'How many people are working on this project?',
    answer:
      'Currently just me - a full-time software engineer passionate about helping people transform their bodies. I work on OmegaFyt in my free time and release new features weekly. Being a small team means I can move fast and build features that actually matter to users!',
    links: [],
  },
  {
    question: 'Is this project open source?',
    answer:
      'Not currently. While this is in active development and growing, I\'m focused on building the best fitness experience possible. If circumstances change or the project becomes unmaintained, I\'ll open source it to benefit the community.',
    links: [],
  },
  {
    question: 'How do I change my password?',
    answer:
      'Easy! Click the User Icon in the top right → Settings → Change Password. Forgot your password? No problem - just click "Forgot Password" on the login screen and we\'ll send you a reset link instantly.',
    links: [],
  },
  {
    question: 'Do you sell my data?',
    answer:
      'Never! Your fitness data is sacred to us. We use minimal, anonymous analytics to improve the app, but your personal workout data, progress photos, and measurements stay 100% private and are never sold to anyone.',
    links: [],
  },
  {
    question: 'Why does it take so long to login?',
    answer:
      'We\'re bootstrapped and growing sustainably without selling your data! This helps us keep costs low and focus on features you want. As the user base grows, we\'re continuously upgrading our infrastructure for better performance.',
    links: [],
  },
  {
    question: 'Why a subscription and not a flat price?',
    answer:
      'Great question! Unlike one-time purchase apps, OmegaFyt provides ongoing value through constantly updated food databases (1.5M+ foods), cloud storage for your progress photos, AI-powered workout adjustments, and weekly feature updates. The small monthly cost ensures you always get the latest features.',
    links: [],
  },
  {
    question: 'I want to cancel my subscription',
    answer:
      'We\'d hate to see you go, but we understand! Cancel anytime through your app store: Profile → Manage Subscriptions. No hassle, no questions asked. Your data stays safe for 30 days in case you want to return.',
    links: [],
  },
  {
    question: 'I want a refund',
    answer:
      'We want you to love OmegaFyt! If you\'re not satisfied, first try reaching out to sam@omegafyt.com - we often can resolve issues quickly. For refunds, contact Apple or Google support as they handle all billing. Cancel your subscription first to avoid future charges.',
    links: [
      'https://support.apple.com/en-us/HT204084',
      'https://support.google.com/googleplay/workflow/9813244?hl=en',
    ],
  },
];

export function FAQs() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="divide-white/10 mx-auto max-w-4xl divide-y">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary">
            Frequently asked questions
          </h2>
          <dl className="divide-white/10 mt-10 space-y-6 divide-y">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="text-white flex w-full items-start justify-between text-left">
                        <span className="font-semibold leading-7 text-secondary">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6 text-secondary"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6 text-secondary"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="leading-7 text-ternary">{faq.answer}</p>
                      {faq.links.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          className="leading-7 text-ternary"
                          rel="noreferrer"
                        />
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
