import { Route, Routes } from "react-router-dom";
import Registrations from "./Registrations";
import Registrations2 from "./Registrations2";
import HomeStudent from "./HomeStudent";
import BookTutoring from "./BookTutoring";

export function Student() {
  return (
    <>
      <Routes>
        <Route path={`registration1`} element={<Registrations />} />
        <Route path={`registration2`} element={<Registrations2 />} />
        <Route path={`dashboardstudent`} element={<HomeStudent />} />
        <Route path={`booktutoring`} element={<BookTutoring />} />
      </Routes>
    </>
  );
}
