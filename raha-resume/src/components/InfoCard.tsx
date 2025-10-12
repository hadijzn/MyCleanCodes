import React from 'react'
// text-[rgba(255,127,80,1)]
export default function InfoCard() {
  return (
    <section className=" text-white py-20 px-6  md:px-10 flex flex-col md:flex-row items-center  gap-12 ">
      <div className="w-2xl h-2xl rounded-full overflow-hidden border-4 border-[rgba(255,127,80,1)]">
        <img  src="/assets/Raha.png" alt="Raha profile" className=" mt-2 w-full h-full object-cover rounded-full" />
      </div>
      <div className="max-w-xl">
        <h3 className="text-[rgba(255,127,80,1)] text-sm font-semibold tracking-widest mb-2">ABOUT ME</h3>
        <h1 className="text-4xl font-bold leading-snug mb-2">Hello, I am <br /> <span className="text-[rgba(255,127,80,1)]">Raha</span></h1>
        <p className="text-lg mb-4">
          I am <span className="text-[rgba(255,127,80,1)] font-semibold">front-end</span> developer and{" "}
          <span className="text-[rgba(255,127,80,1)] font-semibold">SEO</span> specialist
        </p>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-4">
          <button className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 transition">
            Portfolio
          </button>
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
            Download my resume
          </button>
        </div>
      </div>
    </section>
    //TODO = Learning css news
    //TODO = Make language work
  )
}
