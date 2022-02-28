import React from 'react';
import {Button} from "react-bootstrap";
import {Expense} from "../models/Expense";

type ExpenseItemProps = {

    // Parameter
    expense: Expense;

    // Events
    onExpenseDelete: (expense: Expense) => void;

}

export default class ExpenseItem extends React.Component<ExpenseItemProps> {

    render() {

        const { expense } = this.props;

        return (
            <div className="hstack ps-1">
                <div className="me-auto fs-4">{expense.name}</div>
                <div className="fs-5">{expense.amount} EUR</div>
                <Button className="ms-2" size="sm" variant="outline-danger" onClick={() => this.props.onExpenseDelete(expense)}>
                    &times;
                </Button>
            </div>
        )
    }

}