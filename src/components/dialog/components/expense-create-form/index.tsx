import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

import { SelectComponent } from "@/components/select";
import { EXPENSE_OPERATION } from "@/constants/app-routes";
import { InputComponent } from "@/components/input";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  operation: z.enum([EXPENSE_OPERATION.Expense, EXPENSE_OPERATION.Renevue], {
    required_error: "Selecione uma opção",
  }),
  name: z
    .string({ message: "Digite um nome válido." })
    .min(5, { message: "O nome da despesa é obrigatório." }),
  value: z.string({ message: "Digite um valor válido." }).min(1, {
    message: "O valor da despesa é obrigatório.",
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;

interface Props {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ExpenseCreateForm = ({ closeModal }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const {
    actions: { addUserAuthenticated },
  } = useAuthStore();
  const { toast } = useToast();
  const navigation = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div className="space-y-4">
        <SelectComponent
          control={control}
          errors={errors.operation}
          placeholder="Selecione uma operação..."
        />
        <InputComponent
          control={control}
          name="name"
          errors={errors.name}
          placeholder="Digite um nome..."
        />
        <InputComponent
          control={control}
          name="value"
          errors={errors.value}
          placeholder="Digite um valor..."
        />
      </div>

      <div className="flex justify-end">
        <button className="text-white" type="submit">
          <div className="rounded-lg w-[12rem] bg-purple-950 p-2 items-center hover:bg-purple-900">
            Cadastrar
          </div>
        </button>
      </div>
    </form>
  );
};

export { ExpenseCreateForm };
