import React from 'react';
import { shallow, mount } from 'enzyme';
import RenderPics from '../src/Components/renderPics.jsx';


describe('App component functionality', () => {
  test('should render some numbers or something', () => {
    const wrapper = shallow(<RenderPics />);
    expect(wrapper.find('td').text().includes('1')).toBe(true);
  });

  test('should find sum stupid component or something dumb or something', () => {
    const wrapper = mount(<RenderPics />);
    const matchingElement = wrapper.find('someDumbID').containsMatchingElement(<PictureGrid />);
    expect(matchingElement).toBe(true);
  });

});