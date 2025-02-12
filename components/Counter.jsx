import React from "react";
import Count from "./ui/Count";

const counter_data = [
  {
    id: 1,
    title: "Project Completed",
    number: 91,
  },
  {
    id: 2,
    title: "Happy Customers",
    number: 2,
  },
  {
    id: 3,
    title: "Years Experiences",
    number: 21,
  },
  {
    id: 4,
    title: "Awards Achievement",
    number: 42,
  },
];

const Counter = ({}) => {
  return (
    <>
      <div className="my-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {counter_data.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex flex-col items-center">
                <div
                  className="text-8xl stroke"
                >
                  <div className="animate-count inline-block">
                    <Count number={item.number} add_style={true} />
                  </div>
                  {(i === 0 || i === 1) && <span className="text-8xl stroke">K</span>}
                </div>
                <p
                  className="text-3xl font-thin relative before:rounded-full before:bg-red-100 before:h-14 before:w-14 before:absolute before:-top-2 before:-left-5 before:-z-10"              
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
