import { createContext, useContext, useReducer } from "react";
import { UseAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  groups: [],
  loading: false,
  error: null,
  userInfo: {},
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "loading":
      return { ...state, loading: true, groups: [], error: null };
    case "fetchGroups":
      return { ...state, groups: payload.groups, userInfo: payload.userInfo };
    case "error":
      return { ...state, error: payload, loading: false };
    case "finished":
      return { ...state, loading: false };
    case "addJob":
      return {
        ...state,
        groups: state.groups.map((item) => {
          if (item.id === payload) return { ...item, jobs: item.jobs + 1 };
          return { ...item };
        }),
      };
  }
}
const RecordsContext = createContext();

export function RecordsProvider({ children }) {
  const [{ groups, loading, error, userInfo }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();
  const { id } = UseAuth();
  const getID = localStorage.getItem("id");

  async function fetchGroup() {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(
        `https://record-trends.vercel.app/api/data?id=${getID ? getID : id}`
      );
      const data = await res.json();

      dispatch({ type: "fetchGroups", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finished" });
    }
  }

  async function upDateGroup(group) {
    const newGroup = { id, userInfo, groups: [...groups, group] };
    try {
      const res = await fetch(
        `https://record-trends.vercel.app/api/data?id=${getID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroup),
          id,
        }
      );
      const data = await res.json();
      console.log(data);
      // dispatch({ type: "fetchGroups", payload: data.dataBase });
      // navigate("/records");
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finished" });
    }
  }

  async function AddJob(idNo) {
    const group = groups.map((item) =>
      item.id === idNo ? { ...item, jobs: item.jobs + 1 } : { ...item }
    );

    const newGroup = { getID, userInfo, groups: group };
    try {
      const res = await fetch(
        `https://record-trends.vercel.app/api/data?id=${getID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroup),
        }
      );
      const data = await res.json();
      dispatch({ type: "fetchGroups", payload: data });
      navigate("/records");
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finished" });
    }
  }

  async function newUser(user) {
    const newGroup = { id: Date.now().toString(), userInfo: user, groups: [] };

    try {
      await fetch(`https://record-trends.vercel.app/api/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGroup),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finished" });
    }
  }
  return (
    <RecordsContext.Provider
      value={{
        fetchGroup,
        groups,
        loading,
        error,
        upDateGroup,
        AddJob,
        newUser,
      }}
    >
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
