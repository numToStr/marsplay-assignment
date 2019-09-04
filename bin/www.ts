import fastify from "fastify";
import { PORT, isDev } from "../config/keys";
import pkg from "../package.json";

import { appRoutes } from "../app/app.routes";

const app = fastify({
    logger: {
        name: pkg.name,
        timestamp: true,
        level: "info",
        prettyPrint: isDev
    }
});

app.register(appRoutes, {
    prefix: "/api"
});

app.listen(PORT as string, (err: Error, address: string) => {
    if (err) {
        app.log.error(err);

        throw err;
    }

    app.log.info(`>> [LISTEN]::${address}`);
});
