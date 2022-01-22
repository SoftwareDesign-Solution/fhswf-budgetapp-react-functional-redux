import {Expense} from "./Expense";

export class Budget {
    id: string = '';
    name: string = '';
    amount: number = 0;
    max: number = 0;
    expenses: Expense[] = [];
}
