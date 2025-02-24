import React, { useState } from "react";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

function App() {
const [prompt, setPrompt] = useState("");
const [result, setResult] = useState("");

const genAi = new GoogleGenerativeAI(
"AIzaSyBWEBE3A7HWDstZOrZqo-q394v6TNc2q6U"
);

const schema = {
description: "List of recipes",
type: SchemaType.ARRAY,
items: {
type: SchemaType.OBJECT,
properties: {
recipeName: {
type: SchemaType.STRING,
description: "Name of the recipe",
nullable: false,
},
ingredients: {
type: SchemaType.STRING,
description: "List of ingredients of recipe",
nullable: false,
},
},
required: ["recipeName", "ingredients"],
},
};

const model = genAi.getGenerativeModel({
model: "gemini-1.5-flash",
generationConfig: {
responseMimeType: "application/json",
responseSchema: schema,
},
});

const fetchByAI = async () => {
const res = await model.generateContent(
"List a few popular cookie recipes."
);
setResult(res?.response?.candidates?.[0]?.content?.parts?.[0]?.text);
console.log(
JSON.parse(res?.response?.candidates?.[0]?.content?.parts?.[0]?.text)
);
};

return <div>hi</div>;
}

export default App;
