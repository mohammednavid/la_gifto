import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
// import reducer, { initialState } from "./Components/reducer";
// import { StateProvider } from "./Components/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <App />
      {/* </StateProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
