
// // TODO = Make this section in also persian
// // TODO = give title on map in Education
// // TODO = give underline to Education and language
// // TODO = give edu star scroll of there own
// // TODO = language need to slice beacuse have circles animation and every item need there own and price
// // TODO = Make underline under the loozy
// //className=" bg-[#1e1e1e] border-2 border-[rgba(255,127,80,1)] rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:border-opacity-0 hover:shadow-[0_0_0_4px_rgba(135,206,250,0.5)] flex flex-col items-center justify-between p-3"
// TODO = Make this section in also persian
// TODO = give title on map in Education
// TODO = give underline to Education and language
// TODO = give edu star scroll of there own
// TODO = language need to slice beacuse have circles animation and every item need there own and price
// TODO = Make underline under the loozy
// TODO = Make hover what you said to nazanin animation 

export default function EduLang() {
  const education = [
    { schoolname: "Lorem (2018-19)", description: "Lorem Ipsum dolor" },
    { schoolname: "Lorem (2018-19)", description: "Lorem Ipsum dolor" },
    { schoolname: "Lorem (2018-19)", description: "Lorem Ipsum dolor" },
    { schoolname: "Lorem (2018-19)", description: "Lorem Ipsum dolor" },
  ];
  const faEducation = [
    { schoolName: "لورم(2018-19)", id: 1, descriptin: "لورم ایپسوم دالر" },
    { schoolName: "لورم(2018-19)", id: 2, descriptin: "لورم ایپسوم دالر" },
    { schoolName: "لورم(2018-19)", id: 3, descriptin: "لورم ایپسوم دالر" },
    { schoolName: "لورم(2018-19)", id: 4, descriptin: "لورم ایپسوم دالر" },
  ];
  const Language = [
    { languageName: "German ", progress: "basic", id: 1 },
    { languageName: "Persian", progress: "Native", id: 2 },
    { languageName: "English", progress: "Advanced", id: 3 },
    { languageName: "Arabic", progress: "Basic", id: 4 },
  ];
  const faLanguage = [
    { languageName: "آلمانی", progress: "تازه کار", id: 1 },
    { languageName: "فارسی", progress: "پیشرفته", id: 2 },
    { languageName: "انگلیسی", progress: "پیشرفته", id: 3 },
    { languageName: "عربی", progress: "تازه کار", id: 4 },
  ];

  return (
    <section className="flex justify-around gap-4  mt-20 ">
      <div className="  w-md mr-20 h-4/6 flex  flex-col  border-1 rounded-xl  border-[rgba(255,127,80,1)]">
        <div className="mt-6 ml-6 ">
          <p className="md:text-4xl ">Education</p>
          <p className="">_____________________</p>
        </div>
        {education.map((edu, index) => (
          <div key={index} className="flex  mt-6 mb-2">
            <div className="  ml-10 mr-0 w-4 h-4 rotate-45 bg-orange-400 shadow-[0_0_10px_rgba(255,127,80,0.8)] mt-1"></div>
            <div className="flex flex-col  ml-3 ">
              <p className="text-white text-sm md:text-2xl font-semibold">
                {edu.schoolname}
              </p>
              <p className="text-gray-400 text-xs md:text-sm ">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start w-md h-4/6 border-1 rounded-xl overflow-hidden border-[rgba(255,127,80,1)]">
  <div className="mt-6 ml-6">
    <p className="md:text-4xl">Language</p>
    <p>_____________________</p>
  </div>

  {Language.map((lang) => {
    let filled = 0;
    if (lang.progress === "Native") filled = 5;
    else if (lang.progress === "Advanced") filled = 4;
    else if (lang.progress === "Basic") filled = 2;
    return (
      <div key={lang.id} className="flex items-center justify-between mt-6 mb-2 mx-10">
        <div>
          <p className="text-white text-sm md:text-2xl font-semibold">
            {lang.languageName}
          </p>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            {lang.progress}
          </p>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full mx-1 ${
                lang.progress === "Basic" && i < 2
                  ? "bg-white"
                  : i < filled
                  ? "bg-orange-400"
                  : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
}
// TODO = Make this section in also persian
// TODO = give title on map in Education
// TODO = give underline to Education and language
// TODO = give edu star scroll of there own
// TODO = language need to slice beacuse have circles animation and every item need there own and price
// TODO = Make underline under the loozy
// TODO = Make hover what you said to nazanin animation 