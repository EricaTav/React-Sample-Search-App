import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import Search from '../src/scripts/components/Search';
import App from '../src/scripts/components/App';
import Company from '../src/scripts/components/Company';
import Footer from '../src/scripts/components/Footer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


describe('Search', function () {


    it('component App created', () => {
        const renderedComponent = (<App />);
        expect(renderedComponent).toBeDefined();
    });

    it('component Search created', () => {
        const renderedComponent = shallow(<Search />);
        expect(renderedComponent).toBeDefined();
    });

    it('component Company created', () => {
        const renderedComponent = (<Search />);
        expect(renderedComponent).toBeDefined();
    });

    it('App contains Footer', function() {
        expect(shallow(<App />).contains(<Footer/>)).toBe(true);
    });

    it('Has Title created', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find("h1").text()).toEqual("Company Search Form");
    });

    it('submit Company Search Test', () => {
        const spy = jest.spyOn(Search.prototype, 'handleInputChange');
        const component = mount(<Search />);
        component.find('input').simulate('change', {target: {value: 'Test'}});
        component.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('Search has search input', function() {
        expect(shallow(<Search />).find('.search-page__input').length).toBe(1);
    });

    it('Company should have Company propperties in its state', () => {
        const cmp = shallow(<Company />);
        expect(cmp.state().company).toEqual({ "id": undefined, "name": undefined, "register_no": undefined});
    });

});








