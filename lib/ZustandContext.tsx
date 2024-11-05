import React from "react";
import { StoreApi } from "zustand";

const createZustandContext = <TInitial, TStore extends StoreApi<unknown>>(
  getStore: (initial: TInitial) => TStore,
) => {
  const Context = React.createContext<TStore | null>(null);

  const Provider = (props: {
    children?: React.ReactNode;
    initialValue: TInitial;
  }) => {
    const [store] = React.useState(getStore(props.initialValue));
    return <Context.Provider value={store}>{props.children}</Context.Provider>;
  };

  return {
    // Throw an error if the context is used outside a provider
    useContext: () => {
      const context = React.useContext(Context);
      if (!context) {
        throw new Error(
          "useContext must be used within a Provider with a value",
        );
      }
      return context;
    },
    Context,
    Provider,
  };
};

export default createZustandContext;
