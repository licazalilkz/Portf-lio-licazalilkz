import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
