import { Route, Routes } from "react-router-dom";
import { Registration } from "./Registration.jsx";
import { Dashboard } from "./Dashboard.jsx";

export function Tutor() {
    return (
        <>
            <Routes>
                <Route path={`registration`} element={<Registration />} />
                <Route path={`dashboard`} element={<Dashboard />} />
            </Routes>
        </>
    )
}