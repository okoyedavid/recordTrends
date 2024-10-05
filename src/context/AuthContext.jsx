import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  id: null,
  loading: false,
  error: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "UserAuthenticated":
      localStorage.setItem("id", payload.id);
      return {
        ...state,
        user: payload.userInfo.name,
        isAuthenticated: true,
        id: payload.id,
      };

    case "loading":
      return { ...state, loading: true };
    case "error":
      return { ...state, loading: false, error: payload };
    case "finishedFetching":
      return { ...state, loading: false };
  }
}

export function AuthProvider({ children }) {
  const [{ loading, error, id }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  async function getUser(name, password) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch("http://localhost:8000/dataBase");
      const data = await res.json();

      validateInfo(data, name, password);
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "finishedFetching" });
    }
  }

  function validateInfo(data, name, password) {
    const authenticatedUser = Object.values(data).find(
      (user) =>
        user.userInfo.name === name && user.userInfo.passWord === password
    );
    if (authenticatedUser) {
      dispatch({ type: "UserAuthenticated", payload: authenticatedUser });
      navigate("/records");
    } else {
      console.log("authentication failed credentials doesnt exist");
      const message = "username and password not found";
      dispatch({ type: "error", payload: message });
    }
  }

  return (
    <AuthContext.Provider value={{ getUser, loading, error, id }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  const auth = useContext(AuthContext);
  if (auth === undefined)
    throw new Error(
      "you are trying to access the Auth context outside the outside provider"
    );
  return auth;
}
