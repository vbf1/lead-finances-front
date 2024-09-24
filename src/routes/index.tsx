import { HomePage } from "../components/pages/private/home";
import { SignInPage } from "../components/pages/public/signIn";
import { ERoutesPath } from "../enum/routes-path.enum";
import { IRouteType } from "../interface/pages.interface";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./private-route";

const listPages: IRouteType = {
  public: [{ path: ERoutesPath.SignIn, component: <SignInPage /> }],
  private: [{ path: ERoutesPath.Home, component: <HomePage /> }],
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {listPages.public.map((publicRoutes) => (
          <Route path={publicRoutes.path} element={publicRoutes.component} />
        ))}
        {listPages.private.map((privateRoutes) => (
          <Route
            path={privateRoutes.path}
            element={<PrivateRoute>{privateRoutes.component}</PrivateRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
