# 03 — Setup Guide

## Prerequisites

- A Cloudflare account with the domain managed in Cloudflare DNS
- Node.js 18 or newer
- Wrangler authentication: `npx wrangler login`
- An approved model-provider API key
- A human escalation destination

## Local setup

```bash
cd worker
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

Set the following values in `.dev.vars`:

```text
MODEL_API_URL=https://api.example.com/v1/chat/completions
MODEL_API_KEY=replace-me
MODEL_NAME=approved-model
ESCALATION_EMAIL=human@example.com
```

Do not commit `.dev.vars`.

## Cloud deployment

```bash
npx wrangler login
npx wrangler secret put MODEL_API_KEY
npx wrangler secret put ESCALATION_EMAIL
npm run deploy
```

Update `worker/wrangler.toml` with the production zone and route configuration appropriate to your account. Configure Email Routing after the worker is deployed.

## Verification checklist

- Send a plain-text test email from an external mailbox.
- Confirm the worker identifies itself as AI.
- Test an ordinary informational request.
- Test an uncertain or high-impact request and confirm escalation.
- Confirm oversized messages and repeated requests are limited.
- Review logs for accidental sensitive-data exposure.
