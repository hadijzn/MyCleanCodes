  {Language.map((lang, index) => (
    <div key={lang.id} className="flex items-start mt-6 mb-2 ml-10">
      <div className="flex flex-col ml-3">
        <p className="text-white text-sm md:text-2xl font-semibold">
          {lang.languageName}
        </p>
        <p className="text-gray-400 text-xs md:text-sm">
          {lang.progress}
        </p>
      </div>
    </div>
  ))}

        <div className="flex flex-col justify-start w-md h-4/6 border-1 rounded-xl overflow-hidden border-[rgba(255,127,80,1)]">
  <div className="mt-6 ml-6">
    <p className="md:text-4xl">Language</p>
    <p className="">_____________________</p>
  </div>


</div>