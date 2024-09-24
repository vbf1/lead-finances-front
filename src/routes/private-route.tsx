import { Navigate } from "react-router-dom";
import { ERoutesPath } from "../enum/routes-path.enum";
import { PropsWithChildren, useEffect } from "react";
import { useUsersStore } from "@/store/users";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { actions, state } = useUsersStore();

  useEffect(() => {
    actions.getUserAuthenticated();
  }, [actions]);

  return state.userAuthenticate ? (
    children
  ) : (
    <Navigate to={ERoutesPath.SignIn} />
  );
};

export { PrivateRoute };
