import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Button, Form, Modal} from "react-bootstrap";
import {Budget} from "../models/Budget";
import {Expense} from "../models/Expense";
import { v4 as uuidv4 } from 'uuid';
import {addExpense} from "../store/budget/budget.actions";
import {hideAddExpenseModal} from "../store/modals/modals.actions";

/*
type AddExpenseModalProps = {

    // Parameter
    show: boolean;
    budget?: Budget;
    budgets: Budget[];

    // Events
    onClose: () => void;
    onExpenseSave: (expense: Expense) => void;

}
*/

/*
type AddExpenseModalState = {
    name: string;
    amount: number;
    budgetId: string;
}
*/

const AddExpenseModal = () => {

    const [state, setState] = useState({
        name: '',
        amount: 0,
        budgetId: ''
    });

    const addExpenseModal = useSelector((state: any) => state.modals.addExpenseModal);
    const budget = useSelector((state: any) => state.budget.budget);
    const budgets = useSelector((state: any) => state.budget.budgets);

    const dispatch = useDispatch();

    const onModalClose = () => {
        dispatch(hideAddExpenseModal());
    }

    const onNameChanged = (e: any) => setState(prevState => {
        return {
            ...prevState,
            name: e.target.value
        }
    });

    const onAmountChanged = (e: any) => setState(prevState => {
        return {
            ...prevState,
            amount: e.target.value
        }
    });

    const onBudgetChanged = (e: any) => setState(prevState => {
        return {
            ...prevState,
            budgetId: e.target.value
        }
    });

    const onSaveClick = () => {

        let budgetId: string = '';

        if (state.budgetId !== '')
            budgetId = state.budgetId;
        else if (budget?.id !== '')
            budgetId = budget?.id || '';

        const expense: Expense = {
            id: uuidv4(),
            budgetId: budgetId,
            name: state.name,
            amount: state.amount
        };

        dispatch(addExpense(budgetId, expense));
        dispatch(hideAddExpenseModal());

    }

    return (
        <Modal show={addExpenseModal} onHide={onModalClose}>

            <Modal.Header closeButton>
                <Modal.Title>Kosten hinzufügen</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>

                    <Form.Group className="mb-3" controlId="input-1">
                        <Form.Text>Name</Form.Text>
                        <Form.Control type="text" onChange={onNameChanged} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="input-2">
                        <Form.Text>Betrag</Form.Text>
                        <Form.Control type="number" onChange={onAmountChanged} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="input-3">
                        <Form.Text>Budget</Form.Text>
                        <Form.Select defaultValue={budget !== undefined ? budget.id : ''} onChange={onBudgetChanged}>
                            {budgets.map((item: Budget) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" type="submit" onClick={onModalClose}>Abbrechen</Button>
                <Button variant="primary" type="submit" onClick={onSaveClick}>Speichern</Button>
            </Modal.Footer>

        </Modal>
    );

};

export default AddExpenseModal;

/*
const mapStateToProps = (state: any) => {
    return {
        addExpenseModal: state.modals.addExpenseModal,
        budget: state.budget.budget,
        budgets: state.budget.budgets,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addExpense: (budgetId: string, expense: Expense) => dispatch(addExpense(budgetId, expense)),
        hideAddExpenseModal: () => dispatch(hideAddExpenseModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseModal);
*/
