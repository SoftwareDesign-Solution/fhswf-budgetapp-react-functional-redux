const ModalsActions = {
    HIDE_ADDBUDGET: 'HIDE_ADDBUDGET',
    SHOW_ADDBUDGET: 'SHOW_ADDBUDGET',
    HIDE_ADDEXPENSE: 'HIDE_ADDEXPENSE',
    SHOW_ADDEXPENSE: 'SHOW_ADDEXPENSE',
    HIDE_VIEWEXPENSES: 'HIDE_VIEWEXPENSES',
    SHOW_VIEWEXPENSES: 'SHOW_VIEWEXPENSES'
};

const hideAddBudgetModal = () => {
    return {
        type: ModalsActions.HIDE_ADDBUDGET
    };
};

const showAddBudgetModal = () => {
    return {
        type: ModalsActions.SHOW_ADDBUDGET
    };
};

const hideAddExpenseModal = () => {
    return {
        type: ModalsActions.HIDE_ADDEXPENSE
    };
};

const showAddExpenseModal = () => {
    return {
        type: ModalsActions.SHOW_ADDEXPENSE
    };
};

const hideViewExpensesModal = () => {
    return {
        type: ModalsActions.HIDE_VIEWEXPENSES
    };
};

const showViewExpensesModal = () => {
    return {
        type: ModalsActions.SHOW_VIEWEXPENSES
    };
};

export { ModalsActions, hideAddBudgetModal, showAddBudgetModal, hideAddExpenseModal, showAddExpenseModal, hideViewExpensesModal, showViewExpensesModal };
