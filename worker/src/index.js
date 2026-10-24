import { handleEmail } from "./email-handler.js";

export default {
  async email(message, env, ctx) {
    await handleEmail(message, env, ctx);
  },
};

export async function fetch() {
  return new Response("AI-Contact email worker is running", { status: 200 });
}
