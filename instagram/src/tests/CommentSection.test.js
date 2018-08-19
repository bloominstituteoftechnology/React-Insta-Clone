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
});
