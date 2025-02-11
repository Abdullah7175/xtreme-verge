import React from "react";
import Whoarewe from "@/components/Whoarewe";
import Main from "@/components/Main";
import WorkFlow from "@/components/Workflow";
import Services from "@/components/Services";
import Counter from "@/components/Counter";
import Slider from "@/components/Slider";

export default function Home() {
 

  return (
    <>
      <Main/>
      <Whoarewe />
      <Slider />
      <Services/>
      <WorkFlow />
      <Counter />
    </>
  );
}
