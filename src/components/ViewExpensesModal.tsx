import React from 'react';
import {Button,Modal} from "react-bootstrap";
import {Budget} from "../models/Budget";
import ExpenseItem from "./ExpenseItem";
import {Expense} from "../models/Expense";
import exp from "constants";

type ViewExpensesModalProps = {

    // Parameter
    show: boolean;
    budget?: Budget;

    // Events
    onClose: () => void;
    onExpenseDelete: (expense: Expense) => void;

}

export default class ViewExpensesModal extends React.Component<ViewExpensesModalProps> {

    constructor(props: any) {

        super(props);

        // Methoden registrieren
        this.onModalClose = this.onModalClose.bind(this);

    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.onModalClose}>

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.budget != null ? this.props.budget.name : ''} - Kosten</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {this.props.budget != null && this.props.budget.expenses.map(item => {
                        return (
                            <ExpenseItem key={item.id}
                                         expense={item}
                                         onExpenseDelete={this.props.onExpenseDelete}></ExpenseItem>
                        )
                    })}

                    {/*
                    <div className="hstack">
                        <div className="me-auto fs-4">Kosten 1.1</div>
                        <div className="fs-5">25 EUR</div>
                        <Button className="ms-2" size="sm" variant="outline-danger">
                            &times;
                        </Button>
                    </div>

                    <div className="hstack">
                        <div className="me-auto fs-4">Kosten 1.2</div>
                        <div className="fs-5">25 EUR</div>
                        <Button className="ms-2" size="sm" variant="outline-danger">
                            &times;
                        </Button>
                    </div>

                    <div className="d-flex pb-3">

                        <div className="me-auto fs-4">Kosten 1.1</div>
                        <div className="fs-5">25 EUR</div>
                        <Button className="ms-2" size="sm" variant="outline-danger">
                            &times;
                        </Button>

                    </div>
                    */}

                </Modal.Body>

            </Modal>
        );
    }

    onModalClose() {
        this.props.onClose();
    }

}