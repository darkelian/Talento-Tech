import { Profile } from "./Profile";
import { Scheduled } from "./Scheduled";
import { Request } from "./Request";
import { useState } from "react";

export function Dashboard() {
  const [updateScheduled, setUpdateScheduled] = useState(false);


  return (
    <div className="container">
      <div className="row">
        <div>
          <h1>
            <p>Dashboard del tutor</p>
          </h1>
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
      <div className="">
        <Scheduled />
      </div>
    </div>
  );
}
