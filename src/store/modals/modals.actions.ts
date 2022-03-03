const Actions = {
    HIDE_ADDBUDGET: 'HIDE_ADDBUDGET',
    SHOW_ADDBUDGET: 'SHOW_ADDBUDGET',
    HIDE_ADDEXPENSE: 'HIDE_ADDEXPENSE',
    SHOW_ADDEXPENSE: 'SHOW_ADDEXPENSE',
    HIDE_VIEWEXPENSES: 'HIDE_VIEWEXPENSES',
    SHOW_VIEWEXPENSES: 'SHOW_VIEWEXPENSES'
};

const hideAddBudgetModal = () => {
    return {
        type: Actions.HIDE_ADDBUDGET
    };
};

const showAddBudgetModal = () => {
    return {
        type: Actions.SHOW_ADDBUDGET
    };
};

const hideAddExpenseModal = () => {
    return {
        type: Actions.HIDE_ADDEXPENSE
    };
};

const showAddExpenseModal = () => {
    return {
        type: Actions.SHOW_ADDEXPENSE
    };
};

const hideViewExpensesModal = () => {
    return {
        type: Actions.HIDE_VIEWEXPENSES
    };
};

const showViewExpensesModal = () => {
    return {
        type: Actions.SHOW_VIEWEXPENSES
    };
};

export { Actions, hideAddBudgetModal, showAddBudgetModal, hideAddExpenseModal, showAddExpenseModal, hideViewExpensesModal, showViewExpensesModal };
