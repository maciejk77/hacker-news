import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

describe('<Pagination />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });
});
