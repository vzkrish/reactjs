import {SAVE_COMMENT} from "../../src/actions/types"
import {saveComment} from "../../src/actions/index"
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

describe('actions',() => {
    describe('saveComment', () => {
        it("has the correct type",() => {
            const action = saveComment();
            expect(action.type).toBe(SAVE_COMMENT);
        });
        
        it("has the correct payload",() => {
            const action = saveComment('New Comment');
            expect(action.payload).toBe('New Comment');
        });
    });
});