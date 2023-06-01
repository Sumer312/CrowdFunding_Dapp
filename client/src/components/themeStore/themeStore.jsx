import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 1,
      changeTheme: () =>
        set((state) => ({
          theme: state.theme === 1 ? 0 : 1,
        })),
    }),
    {
      name: "themeStore",
    }
  )
);

export default useThemeStore;
