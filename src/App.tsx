import { Header } from "./components/pages/private/header";
import { AppRoutes } from "./routes";
import { useUsersStore } from "./store/users";

function App() {
  const { state } = useUsersStore();
  return (
    <div className="bg-slate-100 h-screen">
      {state.userAuthenticate && <Header />}
      <AppRoutes />
    </div>
  );
}

export { App };
