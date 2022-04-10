import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
