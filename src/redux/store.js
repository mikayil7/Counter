import { createStore,combineReducers} from "redux";
//import thunk from 'redux-thunk';
import numberReducer from "./reducers";

const Reducer = combineReducers({numberReducer});

export const Store = createStore(Reducer);
 