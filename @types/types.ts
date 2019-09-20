import { Plugin, RegisterOptions } from "fastify";
import { Server, ServerResponse, IncomingMessage } from "http";

export type RegisterRoute = Plugin<
    Server,
    IncomingMessage,
    ServerResponse,
    RegisterOptions<Server, IncomingMessage, ServerResponse>
>;

export interface DALOptions {
    select?: string;
    sort?: object;
    upsert?: boolean;
}
