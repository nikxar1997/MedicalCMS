import React from "react";

import NavBar from "@/Components/Navigation/NavBar";
import SideBar from "@/Components/Navigation/SideBar";

export default function PageContent(props:any) {
  let mainContentRef:any = React.createRef();
  return (
    <div className="mainContainer" ref={mainContentRef}>
      <NavBar/>
      <div className="pageContent">
      {props.children}
      </div>  
      <SideBar/>
    </div>
  );
}