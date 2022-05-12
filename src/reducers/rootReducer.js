import { combineReducers } from "redux";
import { reducer as cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer
});

export { rootReducer };
