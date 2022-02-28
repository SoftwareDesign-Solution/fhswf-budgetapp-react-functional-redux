import {Budget} from "../../models/Budget";
import {Actions} from "./budget.actions";
import {v4 as uuidv4} from "uuid";

type State = {
    budget: Budget | null;
    budgets: Budget[];
}

const initialState: State = {
    budget: null,
    budgets: [
        {id: uuidv4(), name: 'Hello World 1!', amount: 25, max: 100, expenses: [{id: uuidv4(), name: 'Kosten 1.1', amount: 25, budgetId: ''}]},
        {id: uuidv4(), name: 'Hello World 2!', amount: 50, max: 100, expenses: [{id: uuidv4(), name: 'Kosten 2.1', amount: 50, budgetId: ''}]},
        {id: uuidv4(), name: 'Hello World 3!', amount: 0, max: 100, expenses: []}
    ]
};

const reducer = (state = initialState, action: any) => {

    switch (action.type) {

        case Actions.ADD_BUDGET: {
            return {
                ...state,
                budgets: [...state.budgets, action.budget]
            };
        }

        case Actions.ADD_EXPENSE: {

            let index = state.budgets.findIndex(item => item.id === action.budgetId);

            state.budgets[index].expenses.push(action.expense);

            let total: number = state.budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

            state.budgets[index].amount = total;

            return {
                ...state,
                budgets: [...state.budgets]
            }

        }

        case Actions.DELETE_EXPENSE: {

            let index = state.budgets.findIndex(item => item.id === action.budgetId);

            const expenses = state.budgets[index].expenses.filter(item => item.id !== action.expenseId);

            state.budgets[index].expenses = expenses;

            let total: number = state.budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

            state.budgets[index].amount = total;

            return {
                ...state,
                budgets: [...state.budgets]
            }

        }

        case Actions.SET_CURRENT_BUDGET: {

            return {
                ...state,
                budget: action.budget
            }

        }

        default:
            return state;

    }

};

export default reducer;