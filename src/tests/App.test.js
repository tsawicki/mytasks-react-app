import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('Main Component', () => {
  
  test('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.node).toMatchSnapshot();
  });
  
  test('renders input field', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.new-task-input').length).toBe(1);
  });

});

