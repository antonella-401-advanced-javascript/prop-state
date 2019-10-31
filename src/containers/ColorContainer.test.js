import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import ColorContainer from './ColorContainer';

Enzyme.configure({ adapter: new Adapter() });
describe('Color Container', () => {
  it('renders Color Container', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Changes Color on button click', () => {
    const wrapper = mount(<ColorContainer colors={[
      'red',
      'green',
      'black',
      'yellow',
    ]} />);
    wrapper.findWhere(el => el.key() === 'red').simulate('click');
    expect(wrapper.state('backgroundColor')).toBe('red');
  });
});