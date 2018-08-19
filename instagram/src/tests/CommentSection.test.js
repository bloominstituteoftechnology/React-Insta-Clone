import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// component
import CommentSection from "../components/CommentSection/CommentSection";
// data
import postData from "../dummy-data";

Enzyme.configure({ adapter: new Adapter() });

describe("<CommentSection />", () => {
    it("should render correctly", () => {
        const tree = renderer.create(<CommentSection commentList={postData} />);
        expect(tree).toMatchSnapshot();
    });

    it("should render a comment's author and text", () => {
        const component = shallow(<CommentSection commentList={postData} />);
        const username = component.find("strong");

        username.forEach((node, index) => {
            const user = node.props().children;
            expect(typeof user).toBe("string");

            for (let i = 0; i < postData[index].comments.length; i++) {
                const comment = postData[index].comments[i];
                expect(typeof comment).toBe("object");
                expect(typeof comment.username).toBe("string");
                expect(typeof comment.text).toBe("string");
                expect(comment.username).toBeTruthy();
                expect(comment.text).toBeTruthy();
            }
        });
    });

    it("should render a timestamp", () => {});

    it("should render an input tag", () => {});

    it("should have initial state", () => {});

    it("should have an input field that changes value", () => {});

    it("should handle a new comment", () => {});

    it("should handle adding a new comment", () => {});
});
