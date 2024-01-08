import React from "react";

import { MonthScreen } from "./pages";
import GlobalStyle from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <MonthScreen />
        <GlobalStyle />
      </Provider>
    </div>
  );
};

export default App;
