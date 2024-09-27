import { ArrowDown } from "lucide-react";
import { BlockOperation } from "./components/block-operations";
import {
  ArrowUp,
  CreditCard,
  CurrencyCircleDollar,
} from "@phosphor-icons/react";

import { useUserExpenseStore } from "@/store/user-expense.store";
import { LastExpenses } from "./components/last-expenses";
import { UpcomingDeadlines } from "./components/upcoming-deadlines";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { fetchGetListUserExpense } from "@/api/expense.api";

const HomePage = () => {
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
      <div className="font-bold text-purple-950 text-3xl">Dashboard</div>
      <div className="flex gap-4 ">
        <BlockOperation
          type="Saldo atual"
          value={
            state?.totalValue?.totalRevenue! - state?.totalValue?.totalExpense!
          }
          Icon={CurrencyCircleDollar}
          color="bg-blue-500"
        />
        <BlockOperation
          type="Receitas"
          value={state?.totalValue?.totalRevenue!}
          Icon={ArrowUp}
          color="bg-green-500"
        />
        <BlockOperation
          type="Despesas"
          value={state?.totalValue?.totalExpense!}
          Icon={ArrowDown}
          color="bg-red-500"
        />
        <BlockOperation
          type="Cartão de crédito"
          value={80000}
          Icon={CreditCard}
          color="bg-slate-600"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <div className="text-lg py-4">Despesas mais recentes</div>
          <LastExpenses />
        </div>

        <div>
          <div className="text-lg py-4">Próximos vencimentos</div>
          <UpcomingDeadlines />
        </div>
      </div>
    </div>
  );
};

export { HomePage };
