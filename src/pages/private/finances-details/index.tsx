import { fetchGetListUserExpense } from "@/api/expense.api";
import { DialogComponent } from "@/components/dialog";
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
      <div className=" flex justify-between ">
        <div className="font-bold text-purple-950 text-3xl">
          Detalhamento de finanças
        </div>
        <div className="bg-purple-950 text-white p-1 rounded-full flex justify-center items-center ">
          <DialogComponent />
        </div>
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
