import { RecordsProvider } from "./context/RecordsContext";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import Records from "./components/Records";
import Login from "./components/LoginForm";
import SignUp from "./components/SignUp";

function App() {
  return (
    <RecordsProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="home" element={<Homepage />} />
        <Route path="records" element={<Records />} />
      </Routes>
    </RecordsProvider>
  );
}

export default App;
