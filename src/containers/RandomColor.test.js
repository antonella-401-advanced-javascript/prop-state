import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

Enzyme.configure({ adapter: new Adapter() });
describe('Random Color component', () => {
  it('renders Random Color', () => {
    const wrapper = shallow(<RandomColor />);
    wrapper.setState({ backgroundColor: 'pink' });
    expect(wrapper).toMatchSnapshot();
  });
});