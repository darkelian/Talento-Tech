import { EditableCalendar } from "./Calendar";
import { Profile } from "./Profile";
import { Scheduled } from "./Scheduled";
import { Request } from "./Request";

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
                    <Profile />
                </div>
                <div className="col">
                    <Request />
                </div>
            </div>
            <div className="row">
                <EditableCalendar />
            </div>
            <div className="">
                <Scheduled />
            </div>
        </>

    );
}