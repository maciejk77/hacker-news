import React from 'react';
import { shallow } from 'enzyme';
import CardGrid from '../CardGrid';

describe('<CardGrid />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CardGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
