import { useDispatch, useSelector } from 'react-redux'
import {Modal} from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import {Expense} from "../models/Expense";
import {deleteExpense} from "../store/budget/budget.actions";
import {hideViewExpensesModal} from "../store/modals/modals.actions";
import State from './../store/State';

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

const ViewExpensesModal = () => {

    const dispatch = useDispatch();

    const viewExpensesModal = useSelector((state: State) => state.modals.viewExpensesModal);
    const budget = useSelector((state: State) => state.budget.budget);

    const onModalClose = () => {
        dispatch(hideViewExpensesModal());
    }

    const onExpenseDelete = (expense: Expense) => {
        dispatch(deleteExpense(expense.budgetId, expense.id));
    };

    return (
        <Modal show={viewExpensesModal} onHide={onModalClose}>

            <Modal.Header closeButton>
                <Modal.Title>{budget !== undefined ? budget.name : ''} - Kosten</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {budget !== undefined && budget.expenses.map((item: Expense) => {
                    return (
                        <ExpenseItem key={item.id}
                                     expense={item}
                                     onExpenseDelete={onExpenseDelete} />
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

};

export default ViewExpensesModal;

/*
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
*/
