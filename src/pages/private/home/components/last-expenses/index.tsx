import { getListUserExpenseOrderByDate } from "@/api/expense.api";
import { ILastExpense } from "@/interface/user-expense.interface";
import { useAuthStore } from "@/store/auth.store";
import { useEffect, useState } from "react";
import { BlockExpense } from "./components/block-expense";

const LastExpenses = () => {
  const [lastExpenses, setLastExpenses] = useState<ILastExpense | null>(null);

  const { state } = useAuthStore();

  useEffect(() => {
    getListUserExpenseOrderByDate(state?.userAuthenticated?.id!).then(
      (expense) => setLastExpenses(expense)
    );
  }, [state]);

  return (
    <div className="bg-white w-[45rem] h-[27rem] rounded-3xl">
      <div className="font-bold text-lg text-center py-6 text-red-700">
        Despesas mais recentes:
      </div>
      <div className="flex justify-center">
        <BlockExpense expense={lastExpenses!} />
      </div>
    </div>
  );
};

export { LastExpenses };
