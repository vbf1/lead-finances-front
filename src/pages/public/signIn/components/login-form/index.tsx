import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IUser } from "../../../../../interface/user.interface";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useAuthStore } from "@/store/auth.store";
import { ResponseAuth } from "@/interface/auth.type";
import { APP_ROUTES } from "@/constants/app-routes";
import { useNavigate } from "react-router-dom";

const UserFormSchema = z.object({
  email: z
    .string({ message: "Digite um email válido" })
    .email({ message: "Digite um email válido" }),
  password: z
    .string({ message: "Digite uma senha válida" })
    .min(5, { message: "Digite uma senha válida" }),
});

type userFormSchemaType = z.infer<typeof UserFormSchema>;

const LoginForm = () => {
  const {
    actions: { addUserAuthenticated },
  } = useAuthStore();
  const { toast } = useToast();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormSchemaType>({
    resolver: zodResolver(UserFormSchema),
  });

  const submitForm = async ({ email, password }: IUser) => {
    try {
      const response: ResponseAuth = await axios.post(
        "http://localhost:8080/signin",
        {
          email,
          password,
        }
      );

      if (response) {
        addUserAuthenticated({
          userAuthenticated: response.data.existUser!,
          token: response.data.accessToken!,
        });
      }
      navigation(APP_ROUTES.private.dashboard);
    } catch (err: any) {
      return toast({
        title: `${err.name}`,
        description: `${err.name}`,
        className: "bg-purple-600 text-white ",
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="flex flex-col space-y-8 items-center">
        <div className="space-y-6">
          <div className="h-[7rem]">
            <div className="space-y-4">
              <div className="text-white">Email:</div>
              <input
                {...register("email")}
                className="w-[20rem] md:w-[30rem] p-3 rounded-2xl focus:outline-none placeholder:text-gray-400 ring-purple-950 focus:ring-2"
                placeholder="digite seu email..."
              />
            </div>

            <div className="mt-2">
              {errors.email && (
                <span className="text-white">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="h-[7rem]">
            <div className="space-y-4 ">
              <div className="text-white">Senha:</div>
              <input
                {...register("password")}
                className="w-[20rem] md:w-[30rem] p-3 rounded-2xl focus:outline-none placeholder:text-gray-400 ring-purple-950 focus:ring-2"
                placeholder="digite sua senha..."
              />
            </div>

            <div className="mt-2 ">
              {errors.password && (
                <span className="text-white">{errors.password.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="w-[20rem] md:w-[30rem] rounded-2xl bg-purple-950 p-3 hover:bg-purple-900">
          <button className="text-white  w-full">Entrar</button>
        </div>
      </div>
    </form>
  );
};

export { LoginForm };
