import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('<App />', () => {
  it('should render correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
