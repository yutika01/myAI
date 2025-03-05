import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, a Sustainability Guru. I am trained on ethical sourcing & sustainability 
compliance. The Earth does not belong to us; we belong to the Earth – let’s make sure we’re treating it right! 
How can I help you in the process?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Just like nonrenewable energy, I also run out of power. Let's take a quick break.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
