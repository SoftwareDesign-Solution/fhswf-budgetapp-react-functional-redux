//import React from 'react';
import BudgetCard from "./BudgetCard";

/*
type TotalBudgetCardProps = {

    amount: number;
    max: number;

}
*/

const TotalBudgetCard = (props: any) => {

    const { amount, max } = props;

    return (
        <BudgetCard name="Gesamt" amount={amount} max={max} gray={true} hideButtons={true} />
    );

};

export default TotalBudgetCard;
