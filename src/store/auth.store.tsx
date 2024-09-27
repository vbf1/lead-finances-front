import { IAuth } from "@/interface/auth.interface";
import { create } from "zustand";

type ActionProps = {
  addUserAuthenticated: (auth: IAuth) => void;
  removeUserAuthenticated: () => void;
};

type State = {
  state: IAuth | null;
  actions: ActionProps;
};

const useAuthStore = create<State>((set) => ({
  state: null,

  actions: {
    addUserAuthenticated: (auth: IAuth) => {
      localStorage.setItem(
        "userAuthenticated",
        JSON.stringify({
          userAuthenticated: {
            user: auth.userAuthenticated,
            token: auth.token,
          },
        })
      );
      set({ state: auth });
    },
    removeUserAuthenticated: () => {
      localStorage.removeItem("userAuthenticated");
      set({ state: null });
    },
  },
}));

export { useAuthStore };
