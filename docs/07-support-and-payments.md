# 07 — Support and Payments

The static page includes optional support cards for PayPal, GitHub Sponsors, Buy Me a Coffee, NOWPayments, and Stripe.

## Age gate

Payment controls are hidden until the visitor confirms that they are 18 or older. The page then loads the PayPal and Stripe scripts. This is a front-end visibility gate, not legal age verification or identity verification; use a jurisdiction-appropriate provider flow when stronger controls are required.

## Ko-fi

The Ko-fi floating widget has intentionally been removed. The footer may still link to the existing Ko-fi page, but no Ko-fi script or floating overlay is loaded.

## Provider safety

- Keep payment provider accounts, plan identifiers, and business details current.
- Confirm that all provided public client identifiers belong to the intended production accounts.
- Never place secret API keys in this static site.
- Test each checkout in the provider's test/sandbox mode before production launch.
- Review the provider terms, refund policy, tax requirements, and age restrictions for your audience.
- The PayPal `onApprove` callback currently displays the subscription ID only; add a trusted server-side webhook before treating a subscription as active.

## Layout

Support cards are centered in a responsive grid. Social links are centered by the page layout on narrow screens and right-aligned within the footer on larger screens. The static site contains no live Discord widget; the Discord link is a normal footer link.
