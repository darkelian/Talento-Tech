import { Route, Routes } from "react-router-dom";
import { Registro } from "./registro";
import { Dashboard } from "./dashboard";

export function Tutor() {
    return (
        <>
            <Routes>
                <Route path={`registro`} element={<Registro />} />
                <Route path={`dashboard`} element={<Dashboard />} />
            </Routes>
        </>
    )
}