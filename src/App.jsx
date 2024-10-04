import { RecordsProvider } from "./context/RecordsContext";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import Records from "./components/Records";
import Login from "./components/LoginForm";

function App() {
  return (
    <RecordsProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Homepage />} />
        <Route path="records" element={<Records />} />
      </Routes>
    </RecordsProvider>
  );
}

export default App;
