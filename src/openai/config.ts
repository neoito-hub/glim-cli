import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: "",
});

export const openai = new OpenAIApi(configuration);
