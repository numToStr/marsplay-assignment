import { ServerResponse } from "http";
import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterRoute } from "../../@types/types";
import { PostDAL } from "./post.dal";

export const postRoutes: RegisterRoute = async fastify => {
    fastify.get(
        "/:postID",
        async (req: FastifyRequest, res: FastifyReply<ServerResponse>) => {
            const { postID } = req.params;

            if (!postID) {
                res.code(406);

                return {
                    message: "Please provide a valid post id",
                };
            }

            const post = await new PostDAL({
                _id: postID,
            }).findOne();

            if (!post) {
                res.code(409);

                return {
                    message: "Post not found with specified id :/",
                };
            }

            return {
                message: "Successful",
                post,
            };
        }
    );

    fastify.get("/", async (req: FastifyRequest) => {
        const { userID } = req.query;

        let postQuery = {};

        if (userID) {
            postQuery = {
                userID: Number(userID),
            };
        }

        const posts = await new PostDAL(postQuery).findAll();

        return {
            message: "Successful",
            posts,
        };
    });

    return true;
};
