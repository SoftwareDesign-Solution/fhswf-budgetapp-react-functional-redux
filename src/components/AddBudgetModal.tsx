import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

type AddBudgetModalProps = {

    // Parameter
    show: boolean;

    // Events
    onClose: () => void;
    onBudgetSave: (name: string, amount: number) => void;

}

type AddBudgetModalState = {
    name: string;
    amount: number;
}

export default class AddBudgetModal extends React.Component<AddBudgetModalProps, AddBudgetModalState> {

    state: AddBudgetModalState = {
        name: '',
        amount: 0
    };

    constructor(props: AddBudgetModalProps) {

        super(props);

        // Methoden registrieren
        this.onModalClose = this.onModalClose.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onAmountChanged = this.onAmountChanged.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    render() {

        return (
            <form>

                <Modal show={this.props.show} onHide={this.onModalClose}>

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

    onModalClose() {
        this.props.onClose();
    }

    onNameChanged(e: any) {
        this.setState({name: e.target.value});
    }

    onAmountChanged(e: any) {
        this.setState({amount: e.target.value});
    }

    onCancelClick() {
        this.props.onClose();
    }

    onSaveClick() {
        this.props.onBudgetSave(this.state.name, this.state.amount);
        this.props.onClose();
    }

}