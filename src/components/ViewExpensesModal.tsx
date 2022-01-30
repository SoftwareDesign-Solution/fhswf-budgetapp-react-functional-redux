import React from 'react';
import {Modal} from "react-bootstrap";
import {Budget} from "../models/Budget";
import ExpenseItem from "./ExpenseItem";
import {Expense} from "../models/Expense";

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
        //this.onModalClose = this.onModalClose.bind(this);

    }

    onModalClose = () => {
        this.props.onClose();
    }

    render() {

        const { budget, show } = this.props;

        return (
            <Modal show={show} onHide={this.onModalClose}>

                <Modal.Header closeButton>
                    <Modal.Title>{budget != null ? budget.name : ''} - Kosten</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {budget != null && budget.expenses.map(item => {
                        return (
                            <ExpenseItem key={item.id}
                                         expense={item}
                                         onExpenseDelete={this.props.onExpenseDelete} />
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

}