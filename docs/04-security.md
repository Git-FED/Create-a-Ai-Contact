# 04 — Security

## Minimum controls

- Store API keys only as Wrangler secrets.
- Enforce message-size, attachment, and rate limits.
- Treat inbound email content as untrusted input and prompt-injection material.
- Never execute instructions embedded in emails without explicit authorization.
- Keep the model from changing routing, secrets, or deployment configuration.
- Use allowlists for tools and outbound destinations.
- Log event metadata, not full message content by default.
- Define a retention and deletion policy before production launch.

## Escalate immediately

Escalate requests involving legal commitments, money movement, account recovery, medical or safety decisions, employment decisions, credentials, personal data exports, or instructions that conflict with system policy.

## Incident response

If the system sends an incorrect or unsafe reply, disable the route, preserve relevant metadata, rotate affected secrets, notify the owner, and document the incident. Do not silently delete evidence needed for investigation.
