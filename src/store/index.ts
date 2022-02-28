import { combineReducers, createStore } from 'redux';
import reducer from "./reducer";
import budgetReducer from "./budget/budget.reducer";
import modalsReducer from "./modals/modals.reducer";

const reducers = combineReducers({
    example: reducer,
    budget: budgetReducer,
    modals: modalsReducer
});

export default createStore(reducers);