import { skip } from "node:test";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", id: 1, percent: 94, image: "./assets/HTML.png" },
    { name: "CSS", id: 2, percent: 86, image: "./assets/CSS.png" },
    { name: "WordPress", id: 3, percent: 78, image: "./assets/WordPress.png" },
    { name: "Java", id: 8, percent: 73, image: "./assets/java.png" },
    {
      name: "Javascript",
      id: 4,
      percent: 67,
      image: "./assets/javascript.png",
    },
    { name: "React", id: 5, percent: 56, image: "./assets/React.png" },
    { name: "Next", id: 6, percent: 54, image: "./assets/next js.png" },
    { name: "Seo", id: 7, percent: 98, image: "./assets/SEO.png" },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="w-36 h-52 bg-[#1e1e1e] border-2 border-[rgba(255,127,80,1)] rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:border-opacity-0 hover:shadow-[0_0_0_4px_rgba(135,206,250,0.5)] flex flex-col items-center justify-between p-3"
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-20 h-20 object-contain"
          />
          <div className="text-center">
            <p className="text-white text-sm font-semibold">{skill.name}</p>
            <p className="text-sky-400 text-xs">{skill.percent}</p>
          </div>
        </li>
      ))}
    </section>
  );
}
//border-[rgba(255,127,80,1)]
// make a array for languages
// This section is no need to language persian just section need to two language مهارت ها و skills
// TODO = give this a animation for percent of languages
// TODO = Nazanin said make larger of rectangle of skills
// TODO = Give scale when make reload on page : this learning exist on react learning of bootcmap یعنی عکس ها پرش نداشته باشن فک کنم تو پروژه فروشگاه جاواسکریپت باشه یا ری اکت دقیق یادم نیس 