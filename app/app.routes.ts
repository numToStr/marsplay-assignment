import { RegisterRoute } from "../@types/types";
import { userRoutes } from "./user/user.routes";
import { postRoutes } from "./post/post.routes";
import { commentRoutes } from "./comment/comment.routes";

export const appRoutes: RegisterRoute = (fastify, _, done) => {
    fastify.register(userRoutes, {
        prefix: "/users",
    });

    fastify.register(postRoutes, {
        prefix: "/posts",
    });

    fastify.register(commentRoutes, {
        prefix: "/comments",
    });

    return done();
};
