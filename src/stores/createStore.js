// import makeInspectable from "mobx-devtools-mst";
import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";
// import { connectToDevTools } from "mobx-devtools/lib/mobxDevtoolsBackend";

// connectToDevTools({ host: "localhost", port: 8098 });

export function createStore() {
  const root = RootStore.create();

  // makeInspectable(root);

  return root;
}

const MSTContext = createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

export function useStore(mapStateToProps) {
  const store = useContext(MSTContext);

  if (typeof mapStateToProps === "function") {
    return mapStateToProps(store);
  }

  return store;
}
