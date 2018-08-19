import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// data
import postData from "../dummy-data";
// component
import SearchBar from "../components/SearchBar/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
	const search = jest.fn();
	const tree = renderer.create(<SearchBar search={search} />);
	it("should render without crashing", () => {
		expect(tree).toMatchSnapshot();
	});

	it("should render an input tag", () => {
		const component = shallow(<SearchBar search={search} />);
		expect(component.find("input").length).toBe(1);
	});

	it("should have an input that changes", () => {
		const component = shallow(<SearchBar search={search} />);
		const input = component.find("input");
		const profile = "google";
		expect(input.value).toBe(undefined);
		input.value = profile;
		expect(input.value).toEqual("google");
	});

	it("should call handleSearch to change state", () => {
		const handleSearch = jest.fn();
		const component = shallow(<SearchBar search={search} />);
		const input = component.find("input");
		const event = { target: { name: `${input.props().name}`, value: "abc" } };

		expect(component.state("user").length).toBe(0);
		component.instance().handleSearch(event);
		expect(component.state("user")).toEqual("abc");
	});

	it("should render a links to instagram.com", () => {
		const component = shallow(<SearchBar search={search} />);
		const links = component.find("a");
		links.forEach((node, index) => {
			expect(node.props().href).toBe("https://www.instagram.com/?hl=en");
		});
	});
});
