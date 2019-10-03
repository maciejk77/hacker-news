import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../Comments';

describe('<Comments />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });
});
