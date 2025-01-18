"use client";
// import { Carousel } from "../components/Carousel/Carousel";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Premium",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Standard",
    id: "tier-enterprise-2",
    href: "#",
    priceMonthly: "$59",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Custom integrations",
    ],
    featured: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff433d] to-[#ff80b5] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/3 font-semibold text-red-700">Pricing</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-slate-300 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-6 sm:mt-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
              tier.featured ? "bg-red-950/40 shadow-2xl" : "bg-slate-300/10"
            )}
          >
            <div className="flex items-center justify-between">
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-red-500" : "text-slate-400",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              {tier.featured && (
                <span className="inline-flex items-center rounded-md bg-red-900 px-2 py-1 text-xs font-medium text-slate-200 ring-1 ring-inset ring-red-600/10 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  Popular
                </span>
              )}
            </div>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-slate-300",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-slate-400",
                  "text-base"
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-slate-400",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-slate-400",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-rose-500" : "text-rose-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-[#ff433d]/90 text-white shadow-sm hover:bg-red-700 focus-visible:outline-red-500"
                  : "text-slate-200 ring-1 ring-inset ring-slate-200 hover:ring-slate-600 focus-visible:outline-red-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
