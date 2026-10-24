# 09 — Email List

`examples/email-list.html` is a standalone FEDPromptly signup and sign-in page based on the supplied Supabase project configuration. It includes the promotional visuals directly as compact JPEG data URIs, so the page remains visually complete when opened or copied as a single HTML file.

## What it does

- Shows a centered, Discord-style join prompt with a typewriter animation.
- Opens an accessible sign-up/sign-in modal.
- Supports email confirmation, password sign-in, password reset, session restoration, and logout through Supabase Auth.
- Shows a simple signed-in account state and a contact link.
- Falls back with a clear message when the Supabase client cannot load.
- Includes a visual hero and three promotional cards below the signup area instead of stopping after the header widget.

## Requirements

The page loads `@supabase/supabase-js@2` from jsDelivr and uses the configured Supabase project URL and publishable key in browser code. Publishable/anon keys are designed to be exposed to the browser, but Row Level Security and Supabase Auth settings must be configured correctly in the Supabase project.

Before production use:

- Confirm the project URL and publishable key belong to the intended Supabase project.
- Enable and test email confirmation and password-reset redirect URLs.
- Configure the deployed site URL in Supabase Auth.
- Review rate limits, CAPTCHA/abuse controls, privacy notice, data retention, and unsubscribe behavior.
- Do not place a Supabase service-role key in this page.

Preview it with the same command as the main site:

```bash
python3 -m http.server 8000 --directory examples
```

Then open `/email-list.html`. The main landing page links to it from the top navigation.
