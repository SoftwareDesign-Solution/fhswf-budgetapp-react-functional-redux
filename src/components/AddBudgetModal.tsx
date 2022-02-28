import React from 'react';
import { connect } from 'react-redux'
import {Button, Form, Modal} from "react-bootstrap";
import {Budget} from "../models/Budget";
import {addBudget} from "../store/budget/budget.actions";
import {hideAddBudgetModal} from "../store/modals/modals.actions";
import {v4 as uuidv4} from "uuid";

/*
type AddBudgetModalProps = {

    // Parameter
    show: boolean;

    // Events
    onClose: () => void;
    onBudgetSave: (name: string, amount: number) => void;

}
*/

type AddBudgetModalState = {
    name: string;
    amount: number;
}

class AddBudgetModal extends React.Component<any, AddBudgetModalState> {

    state: AddBudgetModalState = {
        name: '',
        amount: 0
    };

    onModalClose = () => {
        this.props.hideAddBudgetModal();
    };

    onNameChanged = (e: any) => this.setState({name: e.target.value});

    onAmountChanged = (e: any) => this.setState({amount: e.target.value});

    onCancelClick = () => {
        this.props.hideAddBudgetModal();
    };

    onSaveClick = () => {

        const budget: Budget = {
            id: uuidv4(),
            name: this.state.name,
            max: this.state.amount,
            amount: 0,
            expenses: []
        };

        this.props.addBudget(budget);

        this.props.hideAddBudgetModal();

    };

    render() {

        return (
            <form>

                <Modal show={this.props.addBudgetModal} onHide={this.onModalClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Budget hinzufügen</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="input-1">
                            <Form.Text>Name</Form.Text>
                            <Form.Control type="text" onChange={this.onNameChanged}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="input-1">
                            <Form.Text>Betrag</Form.Text>
                            <Form.Control type="number" onChange={this.onAmountChanged} />
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" type="submit" onClick={this.onCancelClick}>Abbrechen</Button>
                        <Button variant="primary" type="submit" onClick={this.onSaveClick}>Speichern</Button>
                    </Modal.Footer>

                </Modal>

            </form>
        );
    }

};

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
