import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { appReducer } from "_redux/store"; // импорт редьюсера. Читать конфиги.

function render(ui: React.ReactElement, { initialState = {}, store = createStore(appReducer, initialState), ...renderOptions } = {}): any {
    function Wrapper({ children }: { children: React.ReactElement }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
