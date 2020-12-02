import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from "../../Utils";

const setup = (props) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: "Test Desc",
                tempArr: [{
                    fName: "Test fName",
                    lName: "Test lName",
                    email: 'test@gmail.com',
                    age: 35,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setup(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a header', () => {
            const header = findByTestAttr(wrapper, 'header');
            expect(header.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });


        it('Should not render component', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });

        it('Should not render a header', () => {
            const header = findByTestAttr(wrapper, 'header');
            expect(header.length).toBe(0);
        });

        it('Should not render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(0);
        })
    });
});