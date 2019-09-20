import { ServerResponse } from "http";
import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterRoute } from "../../@types/types";
import { UserDAL } from "./user.dal";

export const userRoutes: RegisterRoute = async fastify => {
    fastify.get(
        "/:userID",
        async (req: FastifyRequest, res: FastifyReply<ServerResponse>) => {
            const { userID } = req.params;

            if (!userID) {
                res.code(406);

                return {
                    message: "Please provide a valid user id",
                };
            }

            const user = await new UserDAL({
                _id: userID,
            }).findOne();

            if (!user) {
                res.code(409);

                return {
                    message: "User not found with specified id :/",
                };
            }

            return {
                message: "Successful",
                user,
            };
        }
    );

    fastify.get("/", async () => {
        const users = await new UserDAL().findAll();

        return {
            message: "Successful",
            users,
        };
    });

    return true;
};
