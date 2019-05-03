import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('comments testing', function(){
    describe('App Testing', function(){
        it('renders correctly', function(){
            var domtree = renderer.create(<App />).toJSON();
            expect(domtree).toMatchSnapshot();
        });
        });
    }); 

