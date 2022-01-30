import React from 'react';
import BudgetCard from "./BudgetCard";

type TotalBudgetCardProps = {

    amount: number;
    max: number;

}

export default class TotalBudgetCard extends React.Component<TotalBudgetCardProps> {

    render() {

        const { amount, max } = this.props;

        return (
            <BudgetCard name="Gesamt" amount={amount} max={max} gray={true} hideButtons={true} />
        )
    }
}