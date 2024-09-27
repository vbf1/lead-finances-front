import { Header } from "./pages/header";
import { AppRoutes } from "./routes";
import { useAuthStore } from "./store/auth.store";

function App() {
  const { state: stateAuth } = useAuthStore();

  return (
    <div className="bg-slate-100 h-screen">
      {stateAuth?.token && <Header />}
      <AppRoutes />
    </div>
  );
}

export { App };
