import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { IUserExpense } from "@/interface/user-expense.interface";

import currency from "currency.js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  data: IUserExpense;
}

const TableComponent = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10rem] uppercase text-purple-950 ">
            ID
          </TableHead>
          <TableHead className="w-[20rem] uppercase text-purple-950 ">
            Tipo de operação
          </TableHead>
          <TableHead className="w-[15rem] uppercase text-purple-950 ">
            Data
          </TableHead>
          <TableHead className="w-[20rem] uppercase text-purple-950 ">
            Nome
          </TableHead>
          <TableHead className="text-right uppercase text-purple-950 ">
            Valor
          </TableHead>
        </TableRow>
      </TableHeader>

      {data.listExpenses.expenses.map((expense, index) => (
        <TableBody key={expense.name}>
          <TableRow>
            <TableCell className="font-medium text-purple-950 ">
              {index + 1}
            </TableCell>
            <TableCell
              className={cn("font-bold", {
                "text-red-500": expense.operation === "Despesa",
                "text-green-500": expense.operation === "Receita",
              })}
            >
              {expense.operation}
            </TableCell>
            <TableCell className="text-purple-950  font-bold">
              {format(expense.created_at, "dd/MM/yyyy HH:mm", {
                locale: ptBR,
              })}
            </TableCell>
            <TableCell className="text-purple-950 font-bold">
              {expense.name}
            </TableCell>
            <TableCell
              className={cn("font-bold text-right", {
                "text-red-500": expense.operation === "Despesa",
                "text-green-500": expense.operation === "Receita",
              })}
            >
              {currency(Number(expense.value) / 100, {
                symbol: "R$",
                decimal: ",",
                separator: ".",
              }).format()}
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
};

export { TableComponent };
