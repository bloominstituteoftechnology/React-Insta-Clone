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
	const tree = renderer.create(<PostContainer dummy={postData} />);
	it("renders correctly", () => {
		expect(tree).toMatchSnapshot();
	});

	it("should render a post's thumbnail with the thumbnail url", () => {
		const component = shallow(<PostContainer dummy={postData} />);

		const thumbnails = component.find("img");
		thumbnails.forEach((node, index) => {
			expect(typeof node.props().src).toBe("string");
			expect(typeof node.props().alt).toBe("string");
			expect(node.props().src).toEqual(postData[index].thumbnailUrl);
		});
	});

	it("should render a post's image with the image url", () => {
		const component = shallow(<PostContainer dummy={postData} />);
		const images = component.find(".cardImg");

		images.forEach((node, index) => {
			expect(typeof node.props().src).toBe("string");
			expect(typeof node.props().tag).toBe("string");
			expect(node.props().src).toEqual(postData[index].imageUrl);
		});
	});

	it("should render a post's likes", () => {
		const component = shallow(<PostContainer dummy={postData} />);
		const likes = component.find("strong");

		likes.forEach((node, index) => {
			const likeCount = node.props().children[0];

			expect(typeof likeCount).toBe("number");
			expect(likeCount).toEqual(postData[index].likes);
		});
	});

	it("should render a posts' comments", () => {
		const component = shallow(<PostContainer dummy={postData} />);
		const comments = component.find("CommentSection");

		comments.forEach((node, index) => {
			const postComments = node.props().commentList;
			for (let i = 0; i < postComments.length; i++) {
				const c = postComments[i];

				expect(typeof c).toBe("object");
				expect(typeof c.username).toBe("string");
				expect(typeof c.text).toBe("string");
				expect(c.text).toEqual(postData[index].comments[i].text);
			}
		});
	});
});
