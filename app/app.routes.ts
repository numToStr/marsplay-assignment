import { userRoutes } from "./user/user.routes";
import { RegisterRoute } from "../@types/types";

export const appRoutes: RegisterRoute = (fastify, _, done) => {
    fastify.register(userRoutes, {
        prefix: "/user",
    });

    return done();
};
