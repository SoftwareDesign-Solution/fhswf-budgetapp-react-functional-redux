import { State as BudgetState } from './budget/budget.state';
import { State as ModalState } from './modals/modals.state';

export default interface State {
    budget: BudgetState,
    modals: ModalState
};