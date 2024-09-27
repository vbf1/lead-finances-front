import { ILastExpense } from "@/interface/user-expense.interface";
import { Invoice } from "@phosphor-icons/react";
import currency from "currency.js";
import { ArrowDown } from "lucide-react";

interface Props {
  expense: ILastExpense;
}

const BlockExpense = ({ expense }: Props) => {
  return (
    <div className="space-y-2 ">
      {expense &&
        expense.expenses.map((expense) => (
          <div
            className="flex justify-between items-center px-10  w-[35rem] h-[3rem] border border-slate-400 mx-12 rounded-lg"
            key={expense.name}
          >
            <div className="bg-red-500 p-1 rounded-full">
              <ArrowDown className="text-white" />
            </div>
            <div className="text-purple-950  flex gap-2">
              <div>Despesa:</div>{" "}
              <div className="font-bold">{expense.name}</div>
            </div>
            <div className="text-purple-950  flex gap-2">
              <div>Valor:</div>
              <div className="font-bold">
                {currency(Number(expense.value) / 100, {
                  symbol: "R$ ",
                  decimal: ",",
                  separator: ".",
                }).format()}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export { BlockExpense };
