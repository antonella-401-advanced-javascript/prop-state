import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

Enzyme.configure({ adapter: new Adapter() });
describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='red' />);
    expect(wrapper).toMatchSnapshot();
  });
});