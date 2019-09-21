import { PostModel, PostModelType } from "./post.model";
import { RootDAL } from "../../utils/root.dal";

export class PostDAL extends RootDAL<PostModelType> {
    constructor(ctx: object = {}) {
        super(PostModel, ctx);
    }
}
