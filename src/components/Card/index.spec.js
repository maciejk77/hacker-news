import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  it('should render correctly', () => {
    const card = shallow(<Card />);
    expect(card).toMatchSnapshot();
  });
});
