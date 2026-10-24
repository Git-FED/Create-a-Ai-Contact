# 06 — Static Site Deployment

The static contact page lives in `examples/`. It can be deployed in either of these ways:

## Option A: GitHub Pages behind Cloudflare

1. Push the repository to GitHub.
2. In the repository settings, set Pages to **GitHub Actions** as the source.
3. The `pages.yml` workflow publishes the `examples/` directory.
4. In Cloudflare DNS, point your custom hostname to the GitHub Pages hostname using the GitHub Pages custom-domain instructions.
5. Keep the DNS record proxied through Cloudflare only after the custom domain is verified.
6. Set the custom domain in GitHub Pages and add the required `CNAME` file if GitHub requests one.

Cloudflare sits in front of the static GitHub Pages origin. Use Cloudflare for DNS, TLS, caching, redirects, and optional security rules. The email Worker remains a separate Worker route.

## Option B: Cloudflare Pages from GitHub

1. Create a Cloudflare Pages project and choose **Direct Upload** for CI deployment.
2. Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
3. Add repository variable `CLOUDFLARE_PAGES_PROJECT` containing the Pages project name.
4. Enable the `cloudflare-pages.yml` workflow.
5. Attach the custom domain in Cloudflare Pages.

Do not run both publishing workflows for the same hostname. Choose one origin: GitHub Pages or Cloudflare Pages. In both cases, the public site and inbound email Worker are separate deployment concerns.

## Recommended routing

- `www.example.com` → GitHub Pages or Cloudflare Pages static site
- `ai.example.com` or `ai@example.com` → Email Routing and the AI Contact Worker
- `example.com` → redirect to the preferred web hostname

Cloudflare Workers can still be used for redirects, headers, access control, or API endpoints in front of the static site. Keep model keys and email-processing secrets in Worker secrets, never in the static site.
