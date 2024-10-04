import { createContext, useContext, useReducer } from "react";
import { UseAuth } from "./AuthContext";

const initialState = {
  groups: [],
  loading: false,
  error: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "loading":
      return { ...state, loading: true, groups: [], error: null };
    case "fetchGroups":
      return { ...state, groups: payload.groups };
    case "error":
      return { ...state, error: payload, loading: false };
    case "finished":
      return { ...state, loading: false };
  }
}
const RecordsContext = createContext();

export function RecordsProvider({ children }) {
  const [{ groups, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { id } = UseAuth();

  async function fetchGroup() {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/dataBase/${id}`);
      const data = await res.json();
      dispatch({ type: "fetchGroups", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finished" });
    }
  }

  return (
    <RecordsContext.Provider value={{ fetchGroup, groups, loading, error }}>
      {children}
    </RecordsContext.Provider>
  );
}

export function UseRecordContext() {
  const records = useContext(RecordsContext);
  if (records === undefined)
    throw new Error(
      "You are attempting to fetch the record context outside the record provider"
    );
  return records;
}
