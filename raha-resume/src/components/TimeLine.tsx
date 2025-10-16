
import React from "react";

export default function TimeLine() {
  const SEO = [
    { description: "Lorem Ipsum dolor", title: "Lorem(2018–2019)", id: 1 },
    { description: "Lorem Ipsum dolor", title: "Lorem(2019–2020)", id: 2 },
    { description: "Lorem Ipsum dolor", title: "Lorem(2021–2022)", id: 3 },
  ];

  const FRONTEND = [
    { description: "Lorem Ipsum dolor", title: "Lorem(2018–2019)", id: 1 },
    { description: "Lorem Ipsum dolor", title: "Lorem(2019–2020)", id: 2 },
    { description: "Lorem Ipsum dolor", title: "Lorem(2021–2022)", id: 3 },
  ];

  return (
    <section className="mt-20 px-6">
      <h1 className="text-3xl text-white font-bold text-center mb-10">
        My resume
      </h1>

      <div className="flex flex-col  gap-10">
        {/* SEO Section */}
        <div className="flex flex-row justify-between">
          <div className="mt-32 flex">
            <div className="w-4 h-4 rotate-45 bg-orange-400 shadow-[0_0_10px_rgba(255,127,80,0.8)] mt-1 mr-3"></div>
            <h1 className="text-xl  text-white font-semibold ">SEO</h1>
          </div>
          <div className=" ">
            {SEO.map((item) => (
              <div key={item.id} className="flex items-start mb-20">
                <div className="w-4 h-4 rotate-45 bg-orange-400 shadow-[0_0_10px_rgba(255,127,80,0.8)] mt-1 mr-3"></div>
                <div className="flex flex-col">
                  <p className="text-white text-sm md:text-base">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Front-end Section */}
        <div className="flex flex-row justify-between">
          <div className="mt-32 flex">
            <div className="w-4 h-4 rotate-45 bg-orange-400 shadow-[0_0_10px_rgba(255,127,80,0.8)] mt-1 mr-3"></div>
            <h1 className="text-xl  text-white font-semibold ">SEO</h1>
          </div>
          <div className=" ">
            {FRONTEND.map((item) => (
              <div key={item.id} className="flex items-start mb-20">
                <div className="w-4 h-4 rotate-45 bg-orange-400 shadow-[0_0_10px_rgba(255,127,80,0.8)] mt-1 mr-3"></div>
                <div className="flex flex-col">
                  <p className="text-white text-sm md:text-base">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// TODO = Make animation of there own 
// TODO = Make const of persian values