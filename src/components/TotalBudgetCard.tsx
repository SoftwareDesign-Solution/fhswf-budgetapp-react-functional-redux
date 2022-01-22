import React from 'react';
import BudgetCard from "./BudgetCard";

type TotalBudgetCardProps = {

    amount: number;
    max: number;

}

export default class TotalBudgetCard extends React.Component<TotalBudgetCardProps> {

    render() {
        return (
            <BudgetCard name="Gesamt" amount={this.props.amount} max={this.props.max} gray={true} hideButtons={true} />
        )
    }
}