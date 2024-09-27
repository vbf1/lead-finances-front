import { IUserExpense } from "@/interface/user-expense.interface";
import { create } from "zustand";

type ActionProps = {
  setExpenses: (expenses: IUserExpense) => void;
  getExpenses: () => IUserExpense | null;
};

type StoreProps = {
  state: IUserExpense | null;
  actions: ActionProps;
};

const useUserExpenseStore = create<StoreProps>((set, get) => ({
  state: null,
  actions: {
    setExpenses: (expenses: IUserExpense) => {
      set({
        state: expenses,
      });
    },
    getExpenses() {
      return get().state;
    },
  },
}));

export { useUserExpenseStore };
