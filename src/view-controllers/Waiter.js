import React from "react";
import MenuBar from'./MenuBar';
import WaiterContainer from "./WaiterContainer-jsonFirebase";

function Waiter() {
  return (
    <div>
        <MenuBar/>
        <WaiterContainer/>
    </div>
  );
}

export default Waiter;
  