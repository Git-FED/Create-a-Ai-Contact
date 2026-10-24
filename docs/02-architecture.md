# 02 — Architecture

## Message flow

1. A sender emails the AI contact address.
2. Cloudflare Email Routing forwards the message to the Email Worker.
3. The worker validates basic headers, extracts the message, and applies size and abuse limits.
4. The worker sends the normalized request to the reply-generation layer.
5. The generated response is checked against escalation rules.
6. The worker replies directly or routes the conversation to a human queue.

## Components

- **Email Routing:** Receives mail for the public address.
- **Cloudflare Email Worker:** Lightweight ingress and response orchestration.
- **Model provider:** Generates a draft response; credentials stay in Worker secrets.
- **State store:** Optional KV, D1, or external database for threads and rate limits.
- **Human queue:** Email, ticketing system, or webhook endpoint for escalation.

## Privacy boundary

The worker should minimize the data sent to the model. Remove unnecessary headers, attachments, signatures, and quoted history where possible. Do not send secrets, authentication codes, payment data, or regulated data to an external model unless the organization's approved controls allow it.
