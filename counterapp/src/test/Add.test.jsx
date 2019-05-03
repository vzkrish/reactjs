import {add} from "../add"

describe('add()',function(){

    it("adds two numbers", function(){
        expect(add(2,3)).toEqual(5);
    });
    
    it('does not add the third numbers', function(){
        expect(add(2,3,5)).toEqual(add(2,3));
    });

});

