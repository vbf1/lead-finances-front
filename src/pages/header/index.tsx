import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { APP_ROUTES } from "@/constants/app-routes";
import { useAuthStore } from "@/store/auth.store";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const {
    state,
    actions: { removeUserAuthenticated },
  } = useAuthStore();

  return (
    <div className=" bg-purple-600 shadow-lg  shadow-purple-600">
      <div className="flex justify-between p-6 container mx-auto">
        <div className="flex gap-16">
          <div
            className="flex gap-4 cursor-pointer items-center"
            onClick={() => navigate(APP_ROUTES.private.dashboard)}
          >
            <img
              src={"/public/images/icon-logo.png"}
              width={30}
              style={{ filter: "invert(100%)" }}
            />
            <div className="text-white text-xl font-bold">Lead Finances</div>
          </div>

          <div className="flex gap-6 items-center">
            <div
              className="text-white font-medium cursor-pointer"
              onClick={() => navigate(APP_ROUTES.private.dashboard)}
            >
              Dashboard
            </div>
            <div
              className="text-white font-medium cursor-pointer"
              onClick={() => navigate(APP_ROUTES.private.financesDetails)}
            >
              Detalhamento de finanças
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-center">
          <div className="flex gap-6 items-center">
            <div className="text-white font-medium">
              {state?.userAuthenticated?.name}
            </div>

            <div
              className="text-white font-medium cursor-pointer"
              onClick={() => removeUserAuthenticated()}
            >
              Sair
            </div>
            <Avatar>
              <AvatarImage src="/images/image-user.png" />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
