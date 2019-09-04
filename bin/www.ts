import fastify from "fastify";
import { PORT, isDev } from "../config/keys";

const app = fastify({
    logger: {
        name: "fastify-app",
        timestamp: true,
        level: "info",
        prettyPrint: isDev
    },
    disableRequestLogging: isDev
});

// Declare a route
app.get("/", async (_, res) => {
    res.type("application/json").code(200);
    return { hello: "world" };
});

app.listen(PORT as string, (err: Error, address: string) => {
    if (err) {
        app.log.error(err);

        throw err;
    }

    app.log.info(`server listening on ${address}`);
});
