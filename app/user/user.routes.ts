import { FastifyRequest } from "fastify";
import { RegisterRoute } from "../../@types/types";
import { UserDAL } from "./user.dal";

export const userRoutes: RegisterRoute = async fastify => {
    fastify.get("/:userID", async (req: FastifyRequest) => {
        const { userID } = req.params;

        return new UserDAL({
            _id: userID,
        }).findOne();
    });

    fastify.get("/", async () => {
        return new UserDAL().findAll();
    });

    return true;
};
