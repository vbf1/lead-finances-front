import { fetchGetListUserExpense } from "@/api/expense.api";
import { TableComponent } from "@/components/table";
import { useAuthStore } from "@/store/auth.store";
import { useUserExpenseStore } from "@/store/user-expense.store";
import { useEffect } from "react";

const FinancesDetails = () => {
  const { state: stateAuth } = useAuthStore();
  const {
    state,
    actions: { setExpenses },
  } = useUserExpenseStore();

  useEffect(() => {
    fetchGetListUserExpense(stateAuth?.userAuthenticated?.id!).then(
      (expenses) => setExpenses(expenses)
    );
  }, [state]);

  return (
    <div className="container mx-auto p-10 space-y-10">
      <div className="font-bold text-purple-950 text-3xl">
        Detalhamento de finanças
      </div>
      {state && (
        <div>
          <TableComponent data={state} />
        </div>
      )}
    </div>
  );
};

export { FinancesDetails };
