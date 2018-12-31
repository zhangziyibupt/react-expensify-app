import React from 'react';
import { Header } from '../../components/Header';
// shallow vs full DOM rendering(will render children components too)
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'; // simplify the snapshot, see jest.config.json snapshotSerializers
// import "../setupTests";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');


    // user react-test-renderer/shallow library
    // import ReactShallowRenderer from 'react-test-renderer/shallow';
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});