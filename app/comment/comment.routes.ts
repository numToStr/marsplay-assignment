import { FastifyRequest } from "fastify";
import { RegisterRoute } from "../../@types/types";
import { CommentDAL } from "./comment.dal";

export const commentRoutes: RegisterRoute = async fastify => {
    fastify.get("/", async (req: FastifyRequest) => {
        const { postID } = req.query;

        let commentQuery = {};

        if (postID) {
            commentQuery = {
                postID: Number(postID),
            };
        }

        const posts = await new CommentDAL(commentQuery).findAll();

        return {
            message: "Successful",
            posts,
        };
    });

    return true;
};
