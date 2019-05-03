import React, {Component} from 'react';
import { mount } from "enzyme";
import FlatListDemo from './FlatListDemo'
describe("Mount ", () => {
  
  it("mount flatlist", () => {

    const wrapper:any = mount(
      <FlatListDemo/> 
      )
  console.log('wrapper', wrapper.props())
      expect(wrapper).toMatchSnapshot();
      expect(wrapper).toBeDefined()
  });


});
