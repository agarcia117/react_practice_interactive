import Anthropic from "@anthropic-ai/sdk"
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba 
    // for ANTHROPIC_API_KEY
    apiKey: import.meta.env.VITE_HF_ACCESS_TOKEN,

    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message);
        
        return `Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra non accumsan sollicitudin nisi pellentesque inceptos proin. Semper massa litora vel habitasse vehicula ligula massa. Litora gravida nulla velit laoreet feugiat nec ridiculus potenti inceptos. Sit massa nam eleifend feugiat maximus ante gravida. Porttitor quisque proin semper neque dis eu mollis netus. Turpis nisl diam convallis ipsum dictum vivamus accumsan. Habitasse commodo magnis nisl cras ipsum. Elit magna turpis nisl platea fringilla fermentum imperdiet phasellus.

        Mus habitant natoque vitae neque maecenas convallis blandit. Scelerisque porta aptent id commodo ullamcorper scelerisque quam. Donec blandit laoreet sit tortor netus ligula. Potenti aliquam posuere habitasse eu; parturient elit. Proin malesuada orci purus platea varius cubilia. Ac mus risus per duis laoreet erat.

        Aenean mauris cras placerat mollis velit fusce parturient platea. Potenti malesuada cursus fusce feugiat maximus? Lacus class varius mauris per vulputate phasellus in finibus pellentesque. Mi condimentum morbi gravida; metus fames vitae. Ad tempor conubia sodales turpis ultrices. Aluctus lorem augue blandit rutrum. Congue eu litora nam pulvinar pellentesque dapibus scelerisque. Ultricies netus tellus litora metus vulputate aliquet tempor montes. Lacinia lectus sollicitudin taciti per torquent dictumst curabitur.

        At eget arcu sed pretium justo nascetur nunc. Etiam aenean metus turpis aptent erat. Fringilla curabitur sem sodales velit dignissim? Nunc torquent dui molestie enim pulvinar. Etiam elementum torquent etiam scelerisque leo vehicula mauris. Blandit nisi iaculis curae rutrum tellus viverra eros vestibulum himenaeos. Faucibus in cursus pellentesque tellus eu nec litora.

        Vitae adipiscing nunc conubia, urna magnis donec. Himenaeos iaculis ridiculus dignissim lectus ligula molestie pulvinar. Sem ornare torquent etiam facilisi eleifend interdum. Tempus primis sollicitudin sed a ipsum finibus. Cubilia orci metus auctor conubia egestas semper tortor nostra leo. Proin magnis facilisi himenaeos morbi ipsum penatibus et. Porta inceptos id posuere aenean sollicitudin. Est per donec sed curae, sodales lectus est ante. Natoque condimentum finibus mi bibendum sit. Aporttitor porta elit lacus hac semper elementum mollis auctor.`;
    }
}
