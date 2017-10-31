import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('NewTaskInput Component', () => {
  
  test('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.new-task-input').length).toBe(1);
  });

  test('can add new task', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('.new-task-input').getNode();
    input.value = 'New Task Content Here';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
    expect(wrapper.find('.single-task').length).toBe(1);
    expect(wrapper.find('.single-task .task-content').text()).toBe('New Task Content Here');
  });

  test('input should be empty after creating new task', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('.new-task-input').getNode();
    input.value = 'New Task Content Here';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
    expect(input.value).toBe("");
  });

});

