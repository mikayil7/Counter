import { createStore,combineReducers} from "redux";
//import thunk from 'redux-thunk';
import numberReducer from "./reducers/numberReducers";
import listReducer from './reducers/listReducer'

const Reducer = combineReducers({number:numberReducer,list:listReducer});

export const Store = createStore(Reducer);
 