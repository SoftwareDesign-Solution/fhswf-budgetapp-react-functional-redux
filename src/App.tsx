import React from 'react';
import './App.css';
import {Container, Button} from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";
import TotalBudgetCard from "./components/TotalBudgetCard";
import AddExpenseModal from "./components/AddExpenseModal";
import {Budget as BudgetModal} from "./models/Budget";
import { v4 as uuidv4 } from 'uuid';
import {Expense} from "./models/Expense";

type AppState = {
    budget?: BudgetModal;
    budgets: BudgetModal[];
    showAddBudgetModal: boolean;
    showAddExpenseModal: boolean;
    showViewExpensesModal: boolean;
}

export default class App extends React.Component<{}, AppState>{

    state: AppState = {
        budgets: [
            {id: uuidv4(), name: 'Hello World 1!', amount: 25, max: 100, expenses: [{id: uuidv4(), name: 'Kosten 1.1', amount: 25, budgetId: ''}]},
            {id: uuidv4(), name: 'Hello World 2!', amount: 50, max: 100, expenses: [{id: uuidv4(), name: 'Kosten 2.1', amount: 50, budgetId: ''}]},
            {id: uuidv4(), name: 'Hello World 3!', amount: 0, max: 100, expenses: []}],
        showAddBudgetModal: false,
        showAddExpenseModal: false,
        showViewExpensesModal: false
    };

    /*
    constructor(props: any) {
        super(props);

        // Methoden registrieren
        //this.onAddBudgetClick = this.onAddBudgetClick.bind(this);
        //this.onBudgetSave = this.onBudgetSave.bind(this);
        //this.onExpenseSave = this.onExpenseSave.bind(this);
        //this.onExpenseDelete = this.onExpenseDelete.bind(this);

    }
    */

    onAddBudgetClick = () => {
        this.setState({showAddBudgetModal: true})
    };

    onAddExpenseClick = (budget?: BudgetModal) => {
        this.setState({
            budget: budget,
            showAddExpenseModal: true
        })
    };

    onBudgetSave = (name: string, amount: number) => {

        const budget: BudgetModal = {
            id: uuidv4(),
            name: name,
            max: amount,
            amount: 0,
            expenses: []
        };

        const budgets = this.state.budgets;

        budgets.push(budget);

        this.setState({budgets: budgets});

    }

    onExpenseSave = (expense: Expense) => {

        let budgets = this.state.budgets;

        let index = budgets.findIndex(item => item.id === expense.budgetId);

        budgets[index].expenses.push(expense);

        let total: number = budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

        budgets[index].amount = total;

        this.setState({budgets: budgets});

    }

    onViewExpense = (budget: BudgetModal | null) => {

        if (budget == null) return;

        this.setState({
            budget: budget,
            showViewExpensesModal: true
        });

    }

    onExpenseDelete = (expense: Expense) => {

        let budgets = this.state.budgets;

        let index = budgets.findIndex(item => item.id === expense.budgetId);

        const expenses = budgets[index].expenses.filter(item => item.id !== expense.id);

        budgets[index].expenses = expenses;

        let total: number = budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

        budgets[index].amount = total;

        this.setState({budgets: budgets});

        console.log(this.state.budgets);

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

                    <BudgetCard name="Hello World 4!" amount={100} max={100} onExpenseAdd={() => this.onAddExpenseClick()} onViewExpense={() => this.onViewExpense(null)}></BudgetCard>
                    <BudgetCard name="Hello World 5!" amount={200} max={100} onExpenseAdd={() => this.onAddExpenseClick()} onViewExpense={() => this.onViewExpense(null)}></BudgetCard>

                    {this.state.budgets.map(item => {
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
                        amount={this.state.budgets.reduce((total, item) => (total + (+item.amount)), 0)}
                        max={this.state.budgets.reduce((total, item) => (total + (+item.max)), 0)} />

                </div>

                <AddBudgetModal
                    show={this.state.showAddBudgetModal}
                    onBudgetSave={this.onBudgetSave}
                    onClose={() => this.setState({showAddBudgetModal: false})} />

                <AddExpenseModal
                    show={this.state.showAddExpenseModal}
                    budget={this.state.budget}
                    budgets={this.state.budgets}
                    onExpenseSave={this.onExpenseSave}
                    onClose={() => this.setState({showAddExpenseModal: false})} />

                <ViewExpensesModal
                    show={this.state.showViewExpensesModal}
                    budget={this.state.budget}
                    onClose={() => this.setState({showViewExpensesModal: false})}
                    onExpenseDelete={this.onExpenseDelete} />

            </Container>
        );

    }

  /*
  onAddBudgetClick() {
      this.setState({showAddBudgetModal: true});
  }
  */

  /*onAddExpenseClick(budget?: BudgetModal) {
      this.setState({
          budget: budget,
          showAddExpenseModal: true
      })
  }*/

  /*onViewExpense(budget: BudgetModal | null) {

        if (budget == null) return;

        this.setState({
            budget: budget,
            showViewExpensesModal: true
        });

  }*/

    /*onBudgetSave(name: string, amount: number) {

      const budget: BudgetModal = {
          id: uuidv4(),
          name: name,
          max: amount,
          amount: 0,
          expenses: []
        };

        const budgets = this.state.budgets;

        budgets.push(budget);

        this.setState({budgets: budgets});

    }*/

    /*onExpenseSave(expense: Expense) {

        let budgets = this.state.budgets;

        let index = budgets.findIndex(item => item.id === expense.budgetId);

        budgets[index].expenses.push(expense);

        let total: number = budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

        budgets[index].amount = total;

        this.setState({budgets: budgets});

    }*/

    /*onExpenseDelete(expense: Expense) {

        let budgets = this.state.budgets;

        let index = budgets.findIndex(item => item.id === expense.budgetId);

        const expenses = budgets[index].expenses.filter(item => item.id !== expense.id);

        budgets[index].expenses = expenses;

        let total: number = budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

        budgets[index].amount = total;

        this.setState({budgets: budgets});

        console.log(this.state.budgets);

    }*/

}
