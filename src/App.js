import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeConatiner from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeConatiner from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeConatiner />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeConatiner />
      </div>
    </Provider>
  );
}
