import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // counter
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: Math.max(0, s.count - 1) })),

  // user
  user: null, // { id, name }
  setUser: (user) => set({ user }),

  // theme
  theme: 'light',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
}));