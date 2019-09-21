import { CommentModel, CommentModelType } from "./comment.model";
import { RootDAL } from "../../utils/root.dal";

export class CommentDAL extends RootDAL<CommentModelType> {
    constructor(ctx: object = {}) {
        super(CommentModel, ctx);
    }
}
