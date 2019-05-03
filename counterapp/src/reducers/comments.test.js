import {SAVE_COMMENT} from "../../src/actions/types"
import comments from "./comments"

describe('reducers', () => {
    describe('comments', () => {
        it('updates new state ', () => {
            const state=[]
            const action={
                type:SAVE_COMMENT,
                payload:'new comment'
            }
            const newstate=comments(state,action);
            expect(newstate).toEqual(['new comment'])
        });
    });
});