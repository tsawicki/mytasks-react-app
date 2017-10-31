import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('SingleTaskCheckbox Component', () => {
  
  test('should mark task as done on click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ tasks: [{"id":"9b122f8a-a3f6-4f02-8839-b54b46202acc","val":"trzy","isDone":false},{"id":"c3b324fd-e494-4912-81f2-ac122654e849","val":"dwa","isDone":false},{"id":"9217cd41-6f58-420e-8c63-22e2122f6877","val":"raz","isDone":false}] });
    const taskCheckbox = wrapper.find('.single-task .check input').at(0);
    taskCheckbox.simulate('change');
    expect(wrapper.find('.single-task .done').length).toBe(1);
  });

});

