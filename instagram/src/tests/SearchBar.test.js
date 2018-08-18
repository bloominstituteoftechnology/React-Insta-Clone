import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// data
import postData from "../dummy-data";
// component
import SearchBar from "../components/SearchBar/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
	const search = jest.fn();
	it("should render without crashing", () => {
		const tree = renderer.create(<SearchBar search={search} />);
		expect(tree).toMatchSnapshot();
	});
});
