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
    <section className="my-20 py-24 bg-blue-700 text-white relative">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
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

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right - Steps */}
          <div className="space-y-6">
            {Process.map((process, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white text-gray-900 shadow-md rounded-lg">
                <Image src={process.icon} width={50} height={50} alt={process.title} />
                <div>
                  <h4 className="text-xl font-bold">{process.title}</h4>
                  <p className="text-gray-700">{process.subTitle}</p>
                </div>
                <span className="text-2xl font-bold text-blue-700 ml-auto">{process.id}</span>
              </div>
            ))}
          </div>
           <div className="relative">
            <Fade direction="right" triggerOnce duration={1200}>
              <div className="relative w-full h-auto">
                <Image className="animate-bounce" src="/illustration.png" alt="Illustration" width={500} height={500} />
              </div>
            </Fade>
            <div className="absolute -z-10 -right-10 -bottom-10">
              <Image src="/shape/pattern.png" alt="Pattern" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
