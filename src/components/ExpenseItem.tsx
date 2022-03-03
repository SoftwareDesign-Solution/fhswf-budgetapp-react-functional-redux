import {Button} from "react-bootstrap";
import {Expense} from "../models/Expense";

/*
type ExpenseItemProps = {

    // Parameter
    expense: Expense;

    // Events
    onExpenseDelete: (expense: Expense) => void;

}
*/

const ExpenseItem = (props: any)  => {

    const { expense, onExpenseDelete } = props;

    return (
        <div className="hstack ps-1">
            <div className="me-auto fs-4">{expense.name}</div>
            <div className="fs-5">{expense.amount} EUR</div>
            <Button className="ms-2" size="sm" variant="outline-danger" onClick={() => onExpenseDelete(expense)}>
                &times;
            </Button>
        </div>
    );

};

export default ExpenseItem;