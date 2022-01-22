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
        return (
            <div className="hstack ps-1">
                <div className="me-auto fs-4">{this.props.expense.name}</div>
                <div className="fs-5">{this.props.expense.amount} EUR</div>
                <Button className="ms-2" size="sm" variant="outline-danger" onClick={() => this.props.onExpenseDelete(this.props.expense)}>
                    &times;
                </Button>
            </div>
        )
    }

}