import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Button, Form, Modal} from "react-bootstrap";
import {Budget} from "../models/Budget";
import {addBudget} from "../store/budget/budget.actions";
import {hideAddBudgetModal} from "../store/modals/modals.actions";
import {v4 as uuidv4} from "uuid";
import State from './../store/State';

/*
type AddBudgetModalProps = {

    // Parameter
    show: boolean;

    // Events
    onClose: () => void;
    onBudgetSave: (name: string, amount: number) => void;

}
*/

/*
type AddBudgetModalState = {
    name: string;
    amount: number;
}
*/

const AddBudgetModal = () => {

    const [state, setState] = useState({
        name: '',
        amount: 0
    });

    const dispatch = useDispatch();

    const addBudgetModal = useSelector((state: State) => state.modals.addBudgetModal);

    const onModalClose = () => {
        dispatch(hideAddBudgetModal());
    };

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

    const onCancelClick = () => {
        dispatch(hideAddBudgetModal());
    };

    const onSaveClick = () => {

        const budget: Budget = {
            id: uuidv4(),
            name: state.name,
            max: state.amount,
            amount: 0,
            expenses: []
        };

        dispatch(addBudget(budget));

        dispatch(hideAddBudgetModal());

    };

    return (
        <form>

            <Modal show={addBudgetModal} onHide={onModalClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Budget hinzufügen</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group className="mb-3" controlId="input-1">
                        <Form.Text>Name</Form.Text>
                        <Form.Control type="text" onChange={onNameChanged}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="input-1">
                        <Form.Text>Betrag</Form.Text>
                        <Form.Control type="number" onChange={onAmountChanged} />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" type="submit" onClick={onCancelClick}>Abbrechen</Button>
                    <Button variant="primary" type="submit" onClick={onSaveClick}>Speichern</Button>
                </Modal.Footer>

            </Modal>

        </form>
    );

};

export default AddBudgetModal;

/*
const mapStateToProps = (state: any) => {
    return {
        addBudgetModal: state.modals.addBudgetModal,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addBudget: (budget: Budget) => dispatch(addBudget(budget)),
        hideAddBudgetModal: () => dispatch(hideAddBudgetModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetModal);
*/
