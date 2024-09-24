import { LoginForm } from "./components/form";

const SignInPage = () => {
  return (
    <div className="flex justify-center md:items-center w-auto h-screen bg-purple-600 md:bg-white">
      <div className="bg-purple-600 h-[30rem] md:h-[40rem] w-[30rem] md:w-[40rem] rounded-3xl">
        <div>
          <div className="flex justify-center py-14 md:py-10 text-2xl text-white gap-6 items-center">
            <img
              src={"/public/images/icon-logo.png"}
              width={40}
              height={40}
              style={{ filter: "invert(100%)" }}
            />
            Lead Finances
          </div>
          <div className="flex justify-start py-12 px-10 text-2xl text-white ">
            Acesse o Sistema,
            <br /> com suas credenciais de acesso
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export { SignInPage };
