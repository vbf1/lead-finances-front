import { useUsersStore } from "@/store/users";

export const Header = () => {
  const {
    actions: { removeUserAuthenticated },
  } = useUsersStore();

  return (
    <div className=" bg-purple-600 shadow-lg shadow-purple-600">
      <div className="flex justify-between p-6 container mx-auto items-center ">
        <div className="flex gap-16">
          <div className="flex gap-4 ">
            <img
              src={"/public/images/icon-logo.png"}
              width={30}
              style={{ filter: "invert(100%)" }}
            />
            <div className="text-white text-xl font-bold">Lead Finances</div>
          </div>

          <div className="flex gap-6">
            <div
              className="text-white text-lg font-bold cursor-pointer"
              onClick={() => {}}
            >
              Home
            </div>
            <div
              className="text-white text-lg font-bold cursor-pointer"
              onClick={() => {}}
            >
              Detalhamento de finanças
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="text-white text-lg font-bold">Victor Batista</div>
          <div
            className="text-white text-lg font-bold cursor-pointer"
            onClick={() => removeUserAuthenticated()}
          >
            Sair
          </div>
        </div>
      </div>
    </div>
  );
};
