import {Actions} from "./modals.actions";
import { State } from './modals.state';

const initialState: State = {
    addBudgetModal: false,
    addExpenseModal: false,
    viewExpensesModal: false
};

const reducer = (state = initialState, action: any) => {

    switch (action.type) {

        case Actions.HIDE_ADDBUDGET:
            return {
                ...state,
                addBudgetModal: false
            };

        case Actions.SHOW_ADDBUDGET:
            return {
                ...state,
                addBudgetModal: true
            };

        case Actions.HIDE_ADDEXPENSE:
            return {
                ...state,
                addExpenseModal: false
            };

        case Actions.SHOW_ADDEXPENSE:
            return {
                ...state,
                addExpenseModal: true
            };

        case Actions.HIDE_VIEWEXPENSES:
            return {
                ...state,
                viewExpensesModal: false
            };

        case Actions.SHOW_VIEWEXPENSES:
            return {
                ...state,
                viewExpensesModal: true
            };

        default:
            return state;
    }

};

export default reducer;
