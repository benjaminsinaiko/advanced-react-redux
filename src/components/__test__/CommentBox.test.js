import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    // pass value property to synthetic event
    wrapper.find('textarea').simulate('change', { target: { value: 'test comment' } });
    // force CommentBox component to update after change
    wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('test comment');
  });

  it('will clear textarea after submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
