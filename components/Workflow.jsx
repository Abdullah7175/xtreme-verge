import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Process = [
  {
    id: "01",
    title: "Research niche",
    subTitle: "Identify your target market and understand customer needs to find competitive.",
    icon: "icon/search01.svg",
  },
  {
    id: "02",
    title: "Set up your team",
    subTitle: "Assemble a skilled team aligned with your business goals and objectives.",
    icon: "/icon/user-icon.png",
  },
  {
    id: "03",
    title: "Create a game plan",
    subTitle: "Develop a detailed strategy objectives, audiences, and marketing approaches.",
    icon: "/icon/clipboar02.svg",
  },
  {
    id: "04",
    title: "Review and scale",
    subTitle: "Analyze performance metrics regularly to optimize and grow your strategy effectively.",
    icon: "/icon/medal-star.svg",
  },
];

const WorkFlow = () => {
  return (
    <section className="py-24 bg-blue-700 text-white">
      <div className="max-w-[85%] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <Fade direction="down" triggerOnce duration={1000}>
            <div className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-1 rounded-full shadow-md">
              <Image src="/icon/process-icon.svg" width={24} height={24} alt="Process Icon" />
              Our working process
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={1200}>
            <h2 className="text-4xl font-bold mt-4">Our Development Workflow</h2>
          </Fade>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative space-y-8 pt-30">
            {Process.map((process, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 border border-blue-600 rounded-[20px] shadow-lg p-[40px_30px] max-w-[450px] min-h-[236px] sticky"
                style={{ top: `${25 + index * 60}px` }}
              >
                <div className="mb-5">
                  <Image
                    src={process.icon}
                    width={41}
                    height={41}
                    alt={process.title}
                  />
                  <div className="flex items-center justify-center absolute top-[30px] right-[30px] w-[48px] h-[48px] bg-[rgba(15,83,220,0.1)] text-[#0c111d] text-[24px] font-medium rounded-full">
                    {process.id}
                  </div>
                </div>
                <h4 className="text-2xl font-bold">{process.title}</h4>
                <p className="text-gray-700 mt-3">{process.subTitle}</p>
              </div>
            ))}
          </div>
          <div className="flex sticky top-16 mt-10">
            <Fade direction="right" triggerOnce duration={1200}>
              <div className="relative w-full max-w-lg ml-auto">
                <Image src="/illustration.png" alt="Illustration" width={550} height={550}/>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
