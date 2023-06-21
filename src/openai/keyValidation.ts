import { OpenAIApi, Configuration } from "openai";


export const isAPIKeyValid = async (apiKey: string): Promise<boolean> => {
  try {

    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `1+1! `,
        },
      ],
    });
    if (response?.data?.choices[0]?.message?.content) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
  
    return false;
  }
};
