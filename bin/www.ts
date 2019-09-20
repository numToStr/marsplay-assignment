import fastify from "fastify";
import { connect as mongooseConnect } from "mongoose";

import { PORT, MONGO_URI, isDev } from "../config/keys";
import pkg from "../package.json";

import { appRoutes } from "../app/app.routes";

const app = fastify({
    logger: {
        name: pkg.name,
        timestamp: true,
        level: "info",
        prettyPrint: isDev,
    },
    ignoreTrailingSlash: true,
});

app.register(appRoutes, {
    prefix: "/api",
});

mongooseConnect(MONGO_URI as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        app.log.info(`>> [LISTEN]:{MONGODB}`);

        app.listen(PORT as string)
            .then((address: string) => {
                app.log.info(`>> [LISTEN]:{SERVER}::${address}`);
            })
            .catch((error: Error) => {
                app.log.error(error);

                throw error;
            });
    })
    .catch((error: Error) => {
        app.log.error(error);

        throw error;
    });

const handler = (error: {} | Error | undefined | null, event: string): void => {
    if (error) {
        app.log.error(">> [EXIT]:{SERVER}", error);

        throw error;
    }

    app.log.info(`${event} caught`);
};

process.on("beforeExit", () => handler(null, "beforeExit"));
process.on("exit", () => handler(null, "exit"));
process.on("unhandledRejection", error => handler(error, "unhandledRejection"));
process.on("SIGINT", () => handler(null, "SIGINT"));
process.on("SIGQUIT", () => handler(null, "SIGQUIT"));
process.on("SIGTERM", () => handler(null, "SIGTERM"));

process.on("uncaughtException", error => handler(error, "uncaughtException"));
