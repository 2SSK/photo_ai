import React from "react";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";
import createZustandContext from "./ZustandContext";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  generating: boolean;
  setGenerating: (generating: boolean) => void;
};

const getStore = (initialState: { generating: boolean }) => {
  return createStore<State>()(
    persist(
      (set) => ({
        generating: initialState.generating,
        setGenerating: (generating) => set({ generating }),
      }),
      { name: "image-store", storage: createJSONStorage(() => localStorage) },
    ),
  );
};

export const ImageStore = createZustandContext(getStore);

export function useImageStore<T>(selector: (state: State) => T): T {
  const store = React.useContext(ImageStore.Context);
  if (!store) {
    throw new Error("Missing image store provider");
  }

  return useStore(store, selector);
}
