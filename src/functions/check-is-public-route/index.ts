import { APP_ROUTES } from "@/constants/app-routes";

const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(asPath);
};

export { checkIsPublicRoute };
