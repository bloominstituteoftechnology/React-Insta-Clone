import React from "react";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CommentSection from "../components/CommentSection/CommentSection";
import postData from "../dummy-data";

Enzyme.configure({ adapter: new Adapter() });

describe("Comment Section", () => {
  it("should render an input tag", () => {
    const component = shallow(<CommentSection />);
    expect(component.find("input").length).toBe(1);
  });

  it("calls componentDidMount", () => {
    sinon.spy(CommentSection.prototype, "componentDidMount");
    const component = mount(<CommentSection comments={postData[0].comments} />);
    expect(CommentSection.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it("adds comments to state upon mounting", () => {
    const component = mount(<CommentSection comments={postData[1].comments} />);
    expect(component.state("comments")).toEqual(postData[1].comments);
  });

  it('should render a div with className "comment" for every comment in state', () => {
    const comments = ["first", "awww"];
    const component = shallow(<CommentSection comments={comments} />);
    expect(component.state("comments")).toEqual(comments);
    expect(component.find("div.comment").length).toBe(2);
  });
});

/* import React from 'react';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentSection from '../CommentSection/CommentSection';
import postData from '../dummy-data';

Enzyme.configure({ adapter: new Adapter() });

describe("Comment Section", () => {
  it("should render an input tag", () => {
    const component = shallow(<CommentSection />);
    expect(component.find("input").length).toBe(1);
  });

  it("calls componentDidMount", () => {
    sinon.spy(CommentSection.prototype, "componentDidMount");
    const component = mount(<CommentSection comments={postData[0].comments} />);
    expect(CommentSection.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it("should store comments in state", () => {
    const component = shallow(<CommentSection />);
    expect(component.state("comments")).toBeDefined();
  });

  it("adds comments to state upon mounting", () => {
    const component = mount(<CommentSection comments={postData[1].comments} />);
    expect(component.state("comments")).toEqual(postData[1].comments);
  });
});

*/