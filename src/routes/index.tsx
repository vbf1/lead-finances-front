import { HomePage } from "../pages/private/home";
import { Route, Routes, useLocation } from "react-router-dom";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { PrivateRoute } from "@/components/private-route";
import { APP_ROUTES } from "@/constants/app-routes";
import { SignInPage } from "@/pages/public/signIn";
import { FinancesDetails } from "@/pages/private/finances-details";

const AppRoutes = () => {
  const { pathname } = useLocation();

  const isPublicPage = checkIsPublicRoute(pathname);

  const pagesPrivate = [
    {
      path: APP_ROUTES.private.dashboard,
      component: <HomePage />,
    },
    {
      path: APP_ROUTES.private.financesDetails,
      component: <FinancesDetails />,
    },
  ];

  return (
    <>
      {isPublicPage && (
        <Routes>
          <Route path={APP_ROUTES.public.signIn} element={<SignInPage />} />
        </Routes>
      )}
      {!isPublicPage &&
        pagesPrivate.map((pagesPrivate) => (
          <Routes>
            <Route
              path={pagesPrivate.path}
              element={<PrivateRoute>{pagesPrivate.component}</PrivateRoute>}
            />
          </Routes>
        ))}
      {/* <Route path="/finances-details" Component={FinancesDetails} /> */}
    </>
  );
};

export { AppRoutes };
