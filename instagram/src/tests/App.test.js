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
	it("renders correctly", () => {
		const tree = renderer.create(<App />);
		expect(tree).toMatchSnapshot();
	});

	it("calls componentDidMount", () => {
		const spy = jest.spyOn(App.prototype, "componentDidMount");
		const component = mount(<App />);
		expect(spy).toHaveBeenCalled();
	});
});
