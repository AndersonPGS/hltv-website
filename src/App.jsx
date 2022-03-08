import { Route, Routes } from "react-router-dom";
import { Matches } from "./pages/Matches/Matches";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Matches />} />
    </Routes>
  )
}