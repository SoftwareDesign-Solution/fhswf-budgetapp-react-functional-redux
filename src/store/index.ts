import { combineReducers, createStore } from 'redux';
import budgetReducer from "./budget/budget.reducer";
import modalsReducer from "./modals/modals.reducer";

/* ----- Save State in LocalStorage ----- */
let propsToSave: string[] = [];
export const setProps = (props: string[]) => propsToSave = props;
//export const getLocalStore = () => JSON.parse(localStorage.getItem('state') || '');
export const setLocalStore = (store: any) => {
    var toSave: any = {};
    var state = store.getState();
    propsToSave.forEach((p: string) => {
        toSave[p] = state[p]
    });
    localStorage.setItem('state', JSON.stringify(toSave));
};

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

setProps(['budget', 'modals']);
/* ----- END Save State in LocalStorage ----- */


const reducers = combineReducers({
    budget: budgetReducer,
    modals: modalsReducer
});

const store = createStore(reducers, loadFromLocalStorage());

store.subscribe(() => setLocalStore(store));

export default store;
