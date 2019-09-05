import { RegisterRoute } from "../../@types/types";

export const userRoutes: RegisterRoute = (fastify, _, done) => {
    fastify.addSchema({
        $id: "login",
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
            },
            password: {
                type: "string",
            },
        },
    });

    fastify.get("/", async () => {
        return {
            user: true,
            type: "GET",
        };
    });

    fastify.post(
        "/",
        {
            schema: {
                body: "login#",
            },
        },
        async req => {
            return {
                user: true,
                type: "POST",
                ...req.body,
            };
        }
    );

    return done();
};
