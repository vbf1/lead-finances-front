import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAuthenticated } from "@/functions/check-user-authenticated";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const navigate = useNavigate();

  const isUserAuthenticated = checkUserAuthenticated();
  console.log("Route ==> ", isUserAuthenticated);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate(APP_ROUTES.public.signIn);
    }
  }, [isUserAuthenticated, navigate]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export { PrivateRoute };
