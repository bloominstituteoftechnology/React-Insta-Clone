import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// data
import postData from "../dummy-data";
// component
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
	const tree = renderer.create(<App />);
	it("renders correctly", () => {
		expect(tree).toMatchSnapshot();
	});

	it("calls componentDidMount", () => {
		const spy = jest.spyOn(App.prototype, "componentDidMount");
		const component = mount(<App />);
		expect(spy).toHaveBeenCalled();
	});

	it("should store data in a list", () => {
		const data = tree.getInstance().state.dummyList;
		expect(data).toBeInstanceOf(Array);
	});

	it("should store profiles in state", () => {
		const profile = postData[0];
		expect(profile).toBeInstanceOf(Object);
	});
});
