# 05 — FAQ

## Is AI-Contact a person?

No. The name identifies a dedicated AI contact channel. Every reply should disclose that it was generated or assisted by an AI system.

## Can it send emails automatically?

Yes, if the organization explicitly authorizes the workflow and has configured the appropriate safeguards. Start with draft-only replies for sensitive use cases.

## Can it read attachments?

The starter worker does not process attachments. Add attachment handling only after defining file-type, malware, size, privacy, and retention controls.

## Where should secrets live?

Use Wrangler secrets in production and `.dev.vars` locally. Never commit secrets to Git.

## How do I add a human?

Set `ESCALATION_EMAIL` to a monitored mailbox or replace the escalation stub with an integration to the organization's ticketing system.
