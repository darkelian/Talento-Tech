import { Route, Routes } from "react-router-dom";
import Registrations from "./Registrations";
import Registrations2 from "./Registrations2";


export function Student() {
    return (
        <>
            <Routes>
                <Route path={`registration1`} element={<Registrations />} />
                <Route path={`registration2`} element={<Registrations2 />} />
            </Routes>
        </>
    )
}