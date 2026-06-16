import { create } from "zustand";
import { getProfile, verifyAuthToken } from "../services/authService";

export const useAuth = create((set) => ({
  user: null,
  isLoggedIn: false,
  isCheckingAuth: true,

  logOut: () => set({ user: null, isLoggedIn: false }),
  checkAuth: async () => {
    try {
      const isValid = await verifyAuthToken();
      if (!isValid) {
        set({ user: null, isLoggedIn: false, isCheckingAuth: false });
        return;
      }

      const user = await getProfile();
      set({ user, isLoggedIn: true, isCheckingAuth: false });
    } catch {
      set({ user: null, isLoggedIn: false, isCheckingAuth: false });
    }
  },
}))
