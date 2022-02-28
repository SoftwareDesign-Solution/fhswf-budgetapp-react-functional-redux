import {Budget} from "../../models/Budget";
import {Expense} from "../../models/Expense";

const Actions = {
    ADD_BUDGET: 'ADD_BUDGET',
    ADD_EXPENSE: 'ADD_EXPENSE',
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    SET_CURRENT_BUDGET: 'SET_CURRENT_BUDGET'
};

//const addBudget = (budget: Budget) => ({ type: Actions.ADD_BUDGET, payload: budget });
const addBudget = (budget: Budget) => {
    return {
        type: Actions.ADD_BUDGET,
        budget
    };
}

//const addExpense = (expense: Expense) => ({ type: Actions.ADD_EXPENSE, payload: expense });
const addExpense = (budgetId: string, expense: Expense) => {
    return {
        type: Actions.ADD_EXPENSE,
        budgetId,
        expense
    };
}

//const deleteExpense = (payload: Expense) => ({ type: Actions.DELETE_EXPENSE, payload: payload });
const deleteExpense = (budgetId: string, expenseId: string) => {
    return {
        type: Actions.DELETE_EXPENSE,
        budgetId,
        expenseId
    }
};

const setCurrentBudget = (budget: Budget) => {
    return {
        type: Actions.SET_CURRENT_BUDGET,
        budget
    };
};

export { Actions, addBudget, addExpense, deleteExpense, setCurrentBudget };
