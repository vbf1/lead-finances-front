import { create } from "zustand";
import { IUser } from "../../interface/user.interface";

type ActionProps = {
  setAuth: (user: IUser) => void;
  getUserAuthenticated: () => IUser | null;
  removeUserAuthenticated: () => void;
};

type StoreProps = {
  state: {
    userAuthenticate: IUser | null;
  };
  actions: ActionProps;
};

export const useUsersStore = create<StoreProps>((set) => ({
  state: {
    userAuthenticate: null,
  },
  actions: {
    setAuth: (user: IUser) => {
      localStorage.setItem("userAuthenticated", JSON.stringify(user));
      set({
        state: {
          userAuthenticate: user,
        },
      });
    },
    getUserAuthenticated: () => {
      const user = localStorage.getItem("userAuthenticated");
      if (user) {
        const parsedUser = JSON.parse(user);
        set((state) => ({
          state: {
            ...state.state,
            userAuthenticate: parsedUser,
          },
        }));
        return parsedUser;
      }
      return null;
    },
    removeUserAuthenticated: () => {
      localStorage.removeItem("userAuthenticated");
      set({
        state: {
          userAuthenticate: null,
        },
      });
    },
  },
}));
