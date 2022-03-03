import {Budget} from "../../models/Budget";

interface State {
    budget: Budget | undefined;
    budgets: Budget[];
};

export type { State };