import React from "react";

export default function Portfolio() {
  const MyWork = [
    {
      name: "Front-end",
      id: 1,
      link: "www.yyy.com",
      image: "./assets/site.png",
    },
    { name: "SEO", id: 2, link: "www.zzz.com", image: "./assets/site.png" },
    { name: "Design", id: 3, link: "www.xxx.com", image: "./assets/site.png" },
  ];
  return (
    <section className="flex flex-row gap-4 mt-8">
      {MyWork.map((work) => {
        return (
          <ul key={work.id}>
            <li className="bg-[#1e1e1e] border-2 border-[rgba(255,127,80,1)] rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:border-opacity-0 hover:shadow-[0_0_0_4px_rgba(135,206,250,0.5)] flex flex-col items-center justify-between p-3">
              <a>{work.link}</a>
              <img src={work.image} />
              <p>{work.name}</p>
              <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-5 h-5 rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </li>
          </ul>
        );
      })}
    </section>
  );
}
