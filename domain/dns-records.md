# DNS Records

The exact records depend on the provider and domain configuration. Confirm values in the Cloudflare dashboard before publishing them.

| Record | Name | Value | Purpose |
|---|---|---|---|
| MX | `@` | Cloudflare Email Routing target | Receive mail for the domain |
| TXT | `@` | Provider-supplied verification value | Verify domain ownership |
| TXT | `@` | SPF policy assembled for all senders | Sender authorization |
| CNAME/TXT | provider-specific | Provider-supplied DKIM value | Message signing |

Avoid creating multiple conflicting SPF records. Keep DNS changes documented and review them after provider changes.
