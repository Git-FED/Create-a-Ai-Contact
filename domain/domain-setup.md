# Domain Setup

Choose a domain or subdomain that makes the AI nature of the channel understandable. Examples include `ai.example.com` or `assistant@example.com`.

Before launch:

- Confirm control of the domain.
- Enable SPF and DKIM according to the chosen mail provider.
- Publish a DMARC policy appropriate for your sending volume.
- Configure the Cloudflare Email Worker route.
- Decide whether replies should come from the AI address or a no-reply address.
- Publish a human escalation address and response-time expectation.
- Test spoofing resistance and reply threading.
