import { create } from "zustand";

export const Store = create((set) => {
  return {
    calls: [],
    change_calls: (param) => set({ calls: param }),
  };
});

export default Store;
