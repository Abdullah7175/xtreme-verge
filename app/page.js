import React from "react";
import Whoarewe from "@/components/Whoarewe";
import Main from "@/components/Main";
import WorkFlow from "@/components/Workflow";
import Services from "@/components/Services";


export default function Home() {
 

  return (
    <>
      <Main/>
      <Whoarewe />
      <Services />
      <WorkFlow />
    </>
  );
}
