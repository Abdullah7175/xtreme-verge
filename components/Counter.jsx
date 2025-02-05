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

const Counter = ({ style_2, style_3 }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {counter_data.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex flex-col items-center">
                <div
                  className={`text-4xl font-bold ${
                    style_2 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  <div className="animate-count">
                    <Count number={item.number} add_style={true} />
                  </div>
                  {(i === 0 || i === 1) && <span>K</span>}
                </div>
                <p
                  className={`text-lg font-medium ${
                    style_2 ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!style_3 && <div className="h-36 md:h-16"></div>}
    </>
  );
};

export default Counter;
