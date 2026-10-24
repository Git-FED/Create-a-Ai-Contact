import { buildReply } from "./auto-reply.js";

const DEFAULT_MAX_BODY = 12000;

export async function handleEmail(message, env) {
  const maxBody = Number(env.MAX_BODY_CHARS || DEFAULT_MAX_BODY);
  const raw = await readMessage(message);
  const body = raw.body.slice(0, maxBody);

  const reply = await buildReply({
    from: raw.from,
    to: raw.to,
    subject: raw.subject,
    body,
    env,
  });

  if (reply.escalate) {
    if (!env.ESCALATION_EMAIL) {
      message.setReject("Escalation destination is not configured.");
      return;
    }
    await message.forward(env.ESCALATION_EMAIL);
    return;
  }

  const headers = {
    "In-Reply-To": raw.messageId || "",
    References: raw.messageId || "",
  };
  await message.reply(reply.subject, reply.text, headers);
}

async function readMessage(message) {
  const headers = message.headers;
  return {
    from: headers.get("from") || "unknown sender",
    to: headers.get("to") || "",
    subject: headers.get("subject") || "(no subject)",
    messageId: headers.get("message-id") || "",
    body: await message.raw,
  };
}
