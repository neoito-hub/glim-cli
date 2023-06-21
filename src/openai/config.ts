import { OpenAIApi, Configuration } from "openai";
import fs from "fs";

export const createOpenAIApiInstance = async () => {
  let configData;
  try {
    configData = fs.readFileSync("glim.config.json", "utf8");
    const ooo = fs.readFileSync("glim.config.json", "utf8");
  } catch (error) {
    configData = '{"apiKey": "YOUR_FALLBACK_API_KEY"}';
  }

  const config = await JSON.parse(configData);

  const apiKey = await config.apiKey;

  const configuration = new Configuration({
    apiKey: await apiKey,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
};
