import {ModalsActions} from "./modals.actions";

type State = {
    addBudgetModal: boolean,
    addExpenseModal: boolean,
    viewExpensesModal: boolean
};

const initialState: State = {
    addBudgetModal: false,
    addExpenseModal: false,
    viewExpensesModal: false
};

const reducer = (state = initialState, action: any) => {

    switch (action.type) {

        case ModalsActions.HIDE_ADDBUDGET:
            return {
                ...state,
                addBudgetModal: false
            };

        case ModalsActions.SHOW_ADDBUDGET:
            return {
                ...state,
                addBudgetModal: true
            };

        case ModalsActions.HIDE_ADDEXPENSE:
            return {
                ...state,
                addExpenseModal: false
            };

        case ModalsActions.SHOW_ADDEXPENSE:
            return {
                ...state,
                addExpenseModal: true
            };

        case ModalsActions.HIDE_VIEWEXPENSES:
            return {
                ...state,
                viewExpensesModal: false
            };

        case ModalsActions.SHOW_VIEWEXPENSES:
            return {
                ...state,
                viewExpensesModal: true
            };

        default:
            return state;
    }

};

export default reducer;
