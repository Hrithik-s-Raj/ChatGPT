import Error from "next/error";
import openai from "./chatgpt";

const query = async (prompt: string, id: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 200,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `Sorry for that Please Try again,(Error:${err.message})`);

  console.log("+++++++++++++++++++++++++++++++++++", res);
  return res;
};

export default query;
