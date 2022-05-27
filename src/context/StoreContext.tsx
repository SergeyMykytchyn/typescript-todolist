import React, { useState, createContext } from "react";
import storeType, { complete, incomplete } from "types/storeType";

interface storeContextType extends storeType {
  markComplete(todo: string): void,
  markIncomplete(todo: string): void,
  deleteTodo(todo: string): void
}

const initialState: storeContextType = {
  complete: [],
  incomplete: [],
  markComplete: () => {},
  markIncomplete: () => {},
  deleteTodo: () => {}
};

export const StoreContext = createContext(initialState);

export const StoreContextProvider = (props: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState<complete>([]);
  const [incomplete, setIncomplete] = useState<incomplete>([]);

  const markComplete = (todo: string) => {
    setComplete([...complete, todo]);
    setIncomplete([...incomplete.filter((item) => item !== todo)]);
  };

  const markIncomplete = (todo: string) => {
    setIncomplete([...incomplete, todo]);
    setComplete([...complete.filter((item) => item !== todo)]);
  };

  const deleteTodo = (todo: string) => {
    setComplete([...complete.filter((item) => item !== todo)]);
    setIncomplete([...incomplete.filter((item) => item !== todo)]);
  };

  return (
    <StoreContext.Provider
      value={{
        complete,
        incomplete,
        markComplete,
        markIncomplete,
        deleteTodo,
      }}>
      { props.children }
    </StoreContext.Provider>
  );
};
