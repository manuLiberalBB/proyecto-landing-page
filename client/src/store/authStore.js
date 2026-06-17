import { create } from "zustand";
import { logoutUser, verifyAuthToken } from "../services/authService";

export const useAuth = create((set) => ({
  user: null,
  isLoggedIn: false,
  isCheckingAuth: true,

  logOut: async () => {
    try {
      await logoutUser();
    } catch {
      // Si falla el backend, igual limpiamos el estado local.
    }
    set({ user: null, isLoggedIn: false, isCheckingAuth: false });
  },

  checkAuth: async () => {
    try {
      const user = await verifyAuthToken();
      if (!user) {
        set({ user: null, isLoggedIn: false, isCheckingAuth: false });
        return;
      }

      set({ user, isLoggedIn: true, isCheckingAuth: false });
    } catch {
      set({ user: null, isLoggedIn: false, isCheckingAuth: false });
    }
  },
}));
