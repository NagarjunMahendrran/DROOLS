import { createStore,applyMiddleware ,compose} from "redux";
import rootReducer from "../Reducers/reducers";
import * as keys from "../Actions/ActionKeys"
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,keys.initialState,composeEnhancers(applyMiddleware(thunk)));
