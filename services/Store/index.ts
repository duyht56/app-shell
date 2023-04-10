/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface IGlobalState {
  state: { [key: string]: unknown };
  update: (newState: { [key: string]: unknown }) => void;
  delete: (key: string) => void;
  deleteAll: () => void
}

export const useGlobalStore = create<IGlobalState>((set) => ({
  state: {},
  update: (newState) => set(({ state }) => ({ state: { ...state, ...newState } })),
  delete: (key) => set(({ state }) => {
    if (state[key]) {
      delete state[key]
    }
    return ({ state: { ...state } })
  }),
  deleteAll: () => set({ state: {} }),
}));

export const createStore = create;