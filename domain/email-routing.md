# Email Routing

1. Enable Email Routing for the domain in Cloudflare.
2. Create the address, for example `ai@your-domain.example`.
3. Route that address to the deployed Email Worker.
4. Add a separate human destination for escalation or fallback.
5. Send test messages from an unrelated mailbox.

Use a dedicated address rather than routing the entire domain. Keep catch-all routing disabled unless it is intentionally designed and monitored.
