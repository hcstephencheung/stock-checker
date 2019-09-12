import React from 'react';
import { shallow } from "enzyme";
import StockCheckerPage from "../StockCheckerPage";

describe("StockCheckerPage", () => {
    it("should render with skeletons", () => {
        const wrapper = shallow(<StockCheckerPage />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});

