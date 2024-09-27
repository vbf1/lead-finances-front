import { DialogComponent } from "@/components/dialog";
import { TableComponent } from "@/components/table";
import { useUserExpenseStore } from "@/store/user-expense.store";

const FinancesDetails = () => {
  const { state } = useUserExpenseStore();

  return (
    <div className="container mx-auto p-10 space-y-10">
      <div className=" flex justify-between ">
        <div className="font-bold text-purple-950 text-3xl">
          Detalhamento de finanças
        </div>
        <DialogComponent />
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
