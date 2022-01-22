import React from 'react';
import {Button, Card, ProgressBar} from "react-bootstrap";

type BudgetCardProps = {

    // Parameter
    name: string;
    amount: number;
    max: number;
    gray?: boolean;
    hideButtons?: boolean;

    // Events
    onExpenseAdd?: () => void;
    onViewExpense?: () => void;

}

export default class BudgetCard extends React.Component<BudgetCardProps> {

    render() {

        const classNames = [];

        if (this.props.amount > this.props.max)
            classNames.push("bg-danger", "bg-opacity-10");
        else if (this.props.gray)
            classNames.push("bg-light");

        return (
            <Card className={classNames.join(" ")}>

                <Card.Body>

                    <div className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                        <div className="float-start">{this.props.name}</div>
                        <div className="float-end">{this.props.amount} EUR / {this.props.max} EUR</div>
                    </div>

                    <ProgressBar now={this.props.amount} max={this.props.max} variant={this.getProgressBarVariant(this.props.amount, this.props.max)}></ProgressBar>

                    {!this.props.hideButtons && (
                        <div className="d-flex float-end mt-4">
                            <Button className="m-2" variant="outline-primary" onClick={this.props.onExpenseAdd}>Kosten hinzufügen</Button>
                            <Button className="m-2" variant="outline-secondary" onClick={this.props.onViewExpense}>Kosten auflisten</Button>
                        </div>
                    )}

                </Card.Body>

            </Card>
        );
    }

    getProgressBarVariant(amount: number, max: number) {
        const ratio = amount / max
        if (ratio < 0.5) return "primary"
        if (ratio < 0.75) return "warning"
        return "danger";
    }

}