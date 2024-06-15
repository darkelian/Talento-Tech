import { CalendarioEditable } from "./calendario";
import { Perfil } from "./perfil";
import { Programadas } from "./programadas";
import { Solicitudes } from "./solicitudes";

export function Dashboard() {
    return (
        <>
            <div className="row">
                <div>
                    <h1><p>Dashboard del tutor</p></h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Perfil />
                </div>
                <div className="col">
                    <Solicitudes />
                </div>
            </div>
            <div className="row">
                <CalendarioEditable />
            </div>
            <div className="">
                <Programadas />
            </div>
        </>

    );
}