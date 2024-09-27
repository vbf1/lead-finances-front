import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EXPENSE_OPERATION } from "@/constants/app-routes";
import { Control, Controller, FieldError } from "react-hook-form";

const listOperationType = [
  { id: 1, value: EXPENSE_OPERATION.Expense },
  { id: 2, value: EXPENSE_OPERATION.Renevue },
];

interface Props {
  control: Control<any>;
  errors?: FieldError;
  placeholder: string;
}

const SelectComponent = ({ control, placeholder, errors }: Props) => {
  return (
    <div className="h-[4rem]">
      <Controller
        name="operation"
        control={control}
        render={({ field }) => (
          <Select {...field} onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="p-5">
              <SelectValue placeholder={placeholder}>
                {field.value || placeholder}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {listOperationType.map((operation) => (
                  <SelectItem
                    key={operation.id}
                    value={operation.value}
                    className="cursor-pointer"
                  >
                    {operation.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />

      <div className="p-2">
        {errors && <span className="text-red-600 ">{errors.message}</span>}
      </div>
    </div>
  );
};

export { SelectComponent };
