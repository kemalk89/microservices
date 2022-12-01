import create from "zustand";
import { User, UserState } from "./user-models";

export const useUserStore = create<UserState>((set) => ({
    currentUser: null,
    setCurrentUser: (u: User) => {
        set({ currentUser: u });
    },
    logout: () => {
        set({ currentUser: null });
    },
    loading: false
}));