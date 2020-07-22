import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  // Wrap CommentBox with Redux Provider
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and two button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
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
