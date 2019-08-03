import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import {Home} from "../pages";

const mockStore = configureStore();

describe('Home Page', () => {
    const store = mockStore({formReducer:{}});
    const wrapper = mount(<Provider store={store}> <Home /></Provider>);
    it("Renders the title", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    });
    it("Renders the header", () => {
    expect(wrapper.find(".header").exists()).toBe(true);
    });
    it("Renders the footer", () => {
    expect(wrapper.find(".footer").exists()).toBe(true);
    });
    it("Renders the form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
    });
});

describe("Test the store", () =>{
    const empytStore = {formReducer:{}};
    const fullStore = {formReducer:{
        text: "test",
        stars: ">10",
        license: "mit",
        fork: "only"
    }};
    it("Should be empyt for all Form Fields", () => {
        const store = mockStore( empytStore );
        const wrapper = mount(<Provider store={store}> <Home /></Provider>);
        const props = wrapper.props();
        expect(props.store.getState()).toMatchObject(empytStore);
    });
    it("Should be full for all Form Fields", () => {
        const store = mockStore( fullStore );
        const wrapper = mount(<Provider store={store}> <Home /></Provider>);
        const props = wrapper.props();
        expect(props.store.getState()).toMatchObject(fullStore);
    });
});