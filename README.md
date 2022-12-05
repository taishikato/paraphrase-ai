# Paraphrase AI

A simple app that specialized in paraphrasing short texts such as headlines on your landing page 😎

Paraphrase AI is using OpenAI GPT-3 🤖

## You need an API

You have to build an API to call Open AI GPT-3 API and set it on `.env` file.

I built an API on [Kuiq](https://kuiq.io/).

Here is the code. You need your own OpenAI API Key.

```typescript
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.144.0/http/server.ts"
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.1.0"

serve(async (req) => {
  const u = new URL(req.url);
  const userInput = u.searchParams.get('text');

  if (!userInput) {
    return new Response('no query', {
      headers: { "Content-Type": "application/json" },
    });
  }

  const configuration = new Configuration({
    apiKey: "YOUR-OPENAI-API-KEY"
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Rephrase the text in other words in the style of Paul Graham for a startup company.

Text: Supercharge your writing with the most advanced AI writing assistant.

Rephrase: Give your writing a turbo boost with the most innovative AI writing companion.

Text: Build in a weekend. Scale to millions.

Rephrase: Construct in a matter of days. Expand to a huge customer base.

Text: The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.

Rephrase: The quickest way to join together your most-used tools and APIs to construct the swiftest websites, stores, and applications for online use.

Text: ${userInput}

Rephrase:`,
    temperature: 0.7,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return new Response(JSON.stringify(response.data.choices), {
    headers: { "Content-Type": "application/json" },
  });
});
```