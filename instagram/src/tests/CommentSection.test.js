import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import moment from "moment";
// component
import CommentSection from "../components/CommentSection/CommentSection";
// data
import postData from "../dummy-data";

Enzyme.configure({ adapter: new Adapter() });

describe("<CommentSection />", () => {
    const tree = renderer.create(<CommentSection commentList={postData} />);
    it("should render correctly", () => {
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

    it("should render a timestamp", () => {
        const component = shallow(<CommentSection commentList={postData} />);
        const timestamp = component.find("span");

        timestamp.forEach((node, index) => {
            const time = node.props().children;

            expect(typeof time).toBe("string");
            expect(typeof time).toBeTruthy();
            expect(time).toEqual(moment().calendar());
        });
    });

    it("should render an input tag", () => {
        const component = shallow(<CommentSection commentList={postData} />);
        const input = component.find(".CommentSection_input");

        expect(input.length).toBe(1);
        expect(input.props().name).toEqual("newComment");
        expect(input.props().type).toEqual("text");
    });

    it("should have initial state", () => {
        const data = tree.getInstance().state;
        const { comments, username, newComment } = data;

        expect(comments).toBeInstanceOf(Array);
        expect(typeof username).toBe("string");
        expect(username).toBeTruthy();
        expect(typeof newComment).toBe("string");
        expect(newComment).toBeFalsy();
    });

    it("should have an input field that changes value", () => {});

    it("should handle a new comment", () => {});

    it("should handle adding a new comment", () => {});
});
