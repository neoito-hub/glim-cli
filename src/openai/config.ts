import { OpenAIApi, Configuration } from "openai";
import fs from "fs";

const configData = fs.readFileSync("glim.config.json", "utf8");
const config = JSON.parse(configData);
const apiKey = config.apiKey;

const configuration = new Configuration({
  apiKey: apiKey,
});

export const openai = new OpenAIApi(configuration);
