import { ILastExpense } from "@/interface/user-expense.interface";
import { Invoice } from "@phosphor-icons/react";
import currency from "currency.js";

interface Props {
  expense: ILastExpense;
}

const BlockExpense = ({ expense }: Props) => {
  return (
    <div className="space-y-2 ">
      {expense &&
        expense.expenses.map((expense) => (
          <div
            className="flex justify-between items-center px-10  w-[35rem] h-[3rem] font-bold bg-purple-600  mx-12 rounded-lg"
            key={expense.name}
          >
            <Invoice
              weight="fill"
              height={35}
              width={35}
              className="text-white"
            />
            <div className="text-white font-bold flex gap-2">
              <div>Despesa:</div> <div>{expense.name}</div>
            </div>
            <div className="text-white font-bold flex gap-2">
              <div>Valor:</div>
              <div>
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
