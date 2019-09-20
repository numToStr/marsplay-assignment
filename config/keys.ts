export const { PORT, NODE_ENV, MONGO_URI, TOKEN_KEY, TOKEN_EXP } = process.env;

export const isDev = NODE_ENV !== "production";
