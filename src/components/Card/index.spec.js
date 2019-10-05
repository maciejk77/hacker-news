import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  // no need if speacific node is included in markup
  // this may change, better yet to test whether props were received

  it('should receive props id,score,title,kids', () => {});

  describe('should expand/collapse a card', () => {
    it('starts with a collapsed card', () => {});
    it('expands a card on first/odd click', () => {});
    it('collapses a card on second/even click', () => {});
  });

  describe('should set prev/next comment on click', () => {
    it('should start with first comment', () => {});
    it('should set previous comment', () => {});
    it('should set next comment', () => {});
    it('should set first comment when received click on last', () => {});
    it('should set last comment when received click on first', () => {});
  });
});
