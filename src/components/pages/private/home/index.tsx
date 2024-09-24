import { ArrowDown } from "lucide-react";
import { BlockOperation } from "./components/block-operations";
import {
  ArrowUp,
  CreditCard,
  CurrencyCircleDollar,
} from "@phosphor-icons/react";

const HomePage = () => {
  return (
    <div className="container mx-auto p-10 space-y-10">
      <div className="font-bold text-purple-950 text-3xl">Dashboard</div>

      <div className="flex gap-4 ">
        <BlockOperation
          type="Saldo atual"
          value="1.650,00"
          Icon={CurrencyCircleDollar}
          color="bg-blue-500"
        />
        <BlockOperation
          type="Receitas"
          value="6.000,00"
          Icon={ArrowUp}
          color="bg-green-500"
        />
        <BlockOperation
          type="Despesas"
          value="5.350,00"
          Icon={ArrowDown}
          color="bg-red-500"
        />
        <BlockOperation
          type="Cartão de crédito"
          value="500,00"
          Icon={CreditCard}
          color="bg-slate-600"
        />
      </div>
    </div>
  );
};

export { HomePage };
