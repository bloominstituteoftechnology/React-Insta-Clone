import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// component
import PostContainer from "../components/PostContainer/PostContainer";
// data
import postData from "../dummy-data";

Enzyme.configure({ adapter: new Adapter() });

describe("<PostContainer />", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<PostContainer dummy={postData} />);
		expect(tree).toMatchSnapshot();
	});

	it("should render a post's thumbnail", () => {
		const component = shallow(<PostContainer dummy={postData} />);

		const thumbnails = component.find("img");
		thumbnails.forEach((node, index) => {
			expect(typeof node.props().src).toBe("string");
			expect(typeof node.props().alt).toBe("string");
			expect(node.props().src).toEqual(postData[index].thumbnailUrl);
		});
	});
});
