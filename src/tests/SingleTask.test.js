import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('TasksStats Component', () => {
  
  test('deletes task on delete link click', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ tasks: [{"id":"9b122f8a-a3f6-4f02-8839-b54b46202acc","val":"trzy","isDone":false},{"id":"c3b324fd-e494-4912-81f2-ac122654e849","val":"dwa","isDone":false},{"id":"9217cd41-6f58-420e-8c63-22e2122f6877","val":"raz","isDone":false}] });
    expect(wrapper.state().tasks.length).toBe(3);
    wrapper.find('.single-task .delete-link').at(0).simulate('click');
    expect(wrapper.state().tasks.length).toBe(2);
  });

});

