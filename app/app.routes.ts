import { userRoutes } from "./user/user.routes";
import { RegisterRoute } from "../@types/route.types";

export const appRoutes: RegisterRoute = (fastify, _, done) => {
    fastify.register(userRoutes, {
        prefix: "/user"
    });

    return done();
};
