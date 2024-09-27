import { Input } from "@/components/ui/input";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  control: Control<any>;
  name: string;
  errors?: FieldError;
  placeholder: string;
}

const InputComponent = ({
  control,
  name,

  errors,
  placeholder,
}: Props) => {
  return (
    <div className="h-[4rem]">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            name={field.name}
            placeholder={placeholder}
            className="p-5"
          />
        )}
      />
      <div className="p-2">
        {errors && <span className="text-red-600">{errors.message}</span>}
      </div>
    </div>
  );
};

export { InputComponent };
