export const { PORT, NODE_ENV, MONGO_URI } = process.env;

export const isDev = NODE_ENV !== "production";
