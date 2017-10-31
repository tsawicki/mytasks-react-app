import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('TasksList Component', () => {
  
  test('"Delete Done Tasks" works', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ tasks: [{"id":"9b122f8a-a3f6-4f02-8839-b54b46202acc","val":"trzy","isDone":true},{"id":"c3b324fd-e494-4912-81f2-ac122654e849","val":"dwa","isDone":true},{"id":"9217cd41-6f58-420e-8c63-22e2122f6877","val":"raz","isDone":true}] });
    var deleteLink = wrapper.find('.delete-done-tasks').simulate('click');
    expect(wrapper.state().tasks.length).toBe(0);
  });

  test('starts with empty list', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.single-task').length).toBe(0);
  });

  test('renders tasks', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ tasks: [{"id":"9b122f8a-a3f6-4f02-8839-b54b46202acc","val":"trzy","isDone":false},{"id":"c3b324fd-e494-4912-81f2-ac122654e849","val":"dwa","isDone":false},{"id":"9217cd41-6f58-420e-8c63-22e2122f6877","val":"raz","isDone":false}] });
    expect(wrapper.find('.single-task').length).toBe(3);
    expect(wrapper.find('.single-task .task-content').at(0).text()).toBe('trzy');
    expect(wrapper.find('.single-task .task-content').at(1).text()).toBe('dwa');
    expect(wrapper.find('.single-task .task-content').at(2).text()).toBe('raz');
  });

});

