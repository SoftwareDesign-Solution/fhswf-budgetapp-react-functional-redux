import React from 'react';
import { connect } from 'react-redux'
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

class App extends React.Component<any, any> {

    onAddBudgetClick = () => {
        this.props.showAddBudgetModal();

        /*
        const budget: Budget = { id: uuidv4(), name: 'Hello World 4!', amount: 0, max: 500, expenses: [] };

        const expense: Expense = { id: uuidv4(), budgetId: budget.id, name: 'Redux', amount: 450 };

        this.props.addBudget(budget);

        this.props.addExpense(budget.id, expense);

        console.log(this.props.budgets);
        */

    };

    onAddExpenseClick = (budget?: Budget) => {
        this.props.setCurrentBudget(budget);
        this.props.showAddExpenseModal();
    };

    onViewExpense = (budget: Budget | null) => {
        this.props.setCurrentBudget(budget);
        this.props.showViewExpensesModal();
    }

    get TotalBudgetAmount(): number {
        return this.props.budgets.reduce((total: number, item: Budget) => (total + (+item.amount)), 0);
    }

    get TotalBudgetMax(): number {
        return this.props.budgets.reduce((total: number, item: Budget) => (total + (+item.max)), 0);
    }

    render() {
        return (
            <Container className={"my-4"}>

                <div className="d-flex mb-4 gap-2">
                    <h1 className="me-auto">FHSWF React Kostenplaner</h1>
                    <Button variant="primary" onClick={this.onAddBudgetClick}>Budget hinzufügen</Button>
                    <Button variant="outline-primary" onClick={() => this.onAddExpenseClick()}>Kosten hinzufügen</Button>
                </div>

                <div
                    className="d-grid align-content-stretch gap-2 align-items-start"
                    style={{gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"}}>

                    {this.props.budgets.map((item: Budget) => {
                        return (
                            <BudgetCard
                                key={item.id}
                                name={item.name}
                                amount={item.amount}
                                max={item.max}
                                onExpenseAdd={() => this.onAddExpenseClick(item)}
                                onViewExpense={() => this.onViewExpense(item)} />
                        )
                    })}

                    <TotalBudgetCard
                        amount={this.TotalBudgetAmount}
                        max={this.TotalBudgetMax} />

                </div>

                <AddBudgetModal />

                <AddExpenseModal />

                <ViewExpensesModal />

            </Container>
        );
    }

};

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