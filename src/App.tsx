import { useDispatch, useSelector } from 'react-redux'
import {Container, Button} from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import {Budget} from "./models/Budget";
import {
    showAddBudgetModal,
    showAddExpenseModal,
    showViewExpensesModal
} from "./store/modals/modals.actions";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import {setCurrentBudget} from "./store/budget/budget.actions";
import ViewExpensesModal from "./components/ViewExpensesModal";
import TotalBudgetCard from "./components/TotalBudgetCard";
import State from './store/State';

const App = () => {

    const dispatch = useDispatch();

    const budgets = useSelector((state: State) => state.budget.budgets);

    const onAddBudgetClick = () => {
        dispatch(showAddBudgetModal());
    };

    const onAddExpenseClick = (budget?: Budget) => {
        dispatch(setCurrentBudget(budget));
        dispatch(showAddExpenseModal());
    };

    const onViewExpense = (budget?: Budget) => {
        dispatch(setCurrentBudget(budget));
        dispatch(showViewExpensesModal());
    }

    const TotalBudgetAmount = (): number => {
        return budgets.reduce((total: number, item: Budget) => (total + (+item.amount)), 0);
    }

    const TotalBudgetMax = (): number => {
        return budgets.reduce((total: number, item: Budget) => (total + (+item.max)), 0);
    }

    return (
        <Container className={"my-4"}>

            <div className="d-flex mb-4 gap-2">
                <h1 className="me-auto">FHSWF React Kostenplaner</h1>
                <Button variant="primary" onClick={onAddBudgetClick}>Budget hinzufügen</Button>
                <Button variant="outline-primary" onClick={() => onAddExpenseClick()}>Kosten hinzufügen</Button>
            </div>

            <div
                className="d-grid align-content-stretch gap-2 align-items-start"
                style={{gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"}}>

                {budgets.map((item: Budget) => {
                    return (
                        <BudgetCard
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            max={item.max}
                            onExpenseAdd={() => onAddExpenseClick(item)}
                            onViewExpense={() => onViewExpense(item)} />
                    )
                })}

                <TotalBudgetCard
                    amount={TotalBudgetAmount}
                    max={TotalBudgetMax} />

            </div>

            <AddBudgetModal />

            <AddExpenseModal />

            <ViewExpensesModal />

        </Container>
    );

};

export default App;

/*
const mapStateToProps = (state: any) => {
    return {
        budgets: state.budget.budgets
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        //addBudget: (budget: Budget) => dispatch(addBudget(budget)),
        //addExpense: (budgetId: string, expense: Expense) => dispatch(addExpense(budgetId, expense)),
        showAddBudgetModal: () => dispatch(showAddBudgetModal()),
        showAddExpenseModal: () => dispatch(showAddExpenseModal()),
        showViewExpensesModal: () => dispatch(showViewExpensesModal()),
        setCurrentBudget: (budget: Budget) => dispatch(setCurrentBudget(budget)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
