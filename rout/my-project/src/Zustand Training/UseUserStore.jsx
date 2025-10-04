import { create } from 'zustand';
const useUserStore = create((set) => ({
  users: [],
  setUsers: (newUsers) => set({ users: newUsers }),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
export default useUserStore;
