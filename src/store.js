import rootReducer from "./Redux/RootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;