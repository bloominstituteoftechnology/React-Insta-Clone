import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// component
import CommentSection from "../components/CommentSection/CommentSection";
// data
import postData from "../dummy-data";

Enzyme.configure({ adapter: new Adapter() });

const commentData = describe("<CommentSection />", () => {
    it("should render correctly", () => {
        const tree = renderer.create(<CommentSection commentList={postData} />);
        expect(tree).toMatchSnapshot();
    });

    it("should render a comment's author", () => {});

    it("should render a comment's text", () => {});

    it("should render a timestamp", () => {});

    it("should render an input tag", () => {});

    it("should have initial state", () => {});

    it("should have an input field that changes value", () => {});

    it("should handle a new comment", () => {});

    it("should handle adding a new comment", () => {});
});
