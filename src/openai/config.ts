import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);
