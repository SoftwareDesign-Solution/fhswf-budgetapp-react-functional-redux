import React from 'react';
import { connect } from 'react-redux'
import {Modal} from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import {Expense} from "../models/Expense";
import {deleteExpense} from "../store/budget/budget.actions";
import {hideViewExpensesModal} from "../store/modals/modals.actions";

/*
type ViewExpensesModalProps = {

    // Parameter
    show: boolean;
    budget?: Budget;

    // Events
    onClose: () => void;
    onExpenseDelete: (expense: Expense) => void;

}
*/

class ViewExpensesModal extends React.Component<any> {

    onModalClose = () => {
        this.props.hideViewExpensesModal();
    }

    onExpenseDelete = (expense: Expense) => {
        this.props.deleteExpense(expense.budgetId, expense.id);
    };

    render() {

        return (
            <Modal show={this.props.viewExpensesModal} onHide={this.onModalClose}>

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.budget != null ? this.props.budget.name : ''} - Kosten</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {this.props.budget != null && this.props.budget.expenses.map((item: Expense) => {
                        return (
                            <ExpenseItem key={item.id}
                                         expense={item}
                                         onExpenseDelete={this.onExpenseDelete} />
                        )
                    })}

                    {/*
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

};

const mapStateToProps = (state: any) => {
    return {
        budget: state.budget.budget,
        viewExpensesModal: state.modals.viewExpensesModal
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteExpense: (budgetId: string, expenseId: string) => dispatch(deleteExpense(budgetId, expenseId)),
        hideViewExpensesModal: () => dispatch(hideViewExpensesModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpensesModal);
