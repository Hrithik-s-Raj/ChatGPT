import Error from "next/error";
import openai from "./chatgpt";

const query = async (prompt: string, id: string, model: string) => {
  const sapKeywords = [
    "sap",
    "sap bw",
    "sap hana",
    "sap s/4hana",
    "sap erp",
    "sap crm",
    "s4hana",
    "s4hana conversion",
    "greenfield",
    "brownfield",
    "Ktern.AI",
    "Ktern",
    "DXaas",
    "Dxaas as a service",
  ];

  if (sapKeywords.some((keyword) => prompt.toLowerCase().includes(keyword))) {
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
  } else return "Dont Know";
};

export default query;
