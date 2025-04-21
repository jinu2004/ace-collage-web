export default function HallOfFame() {
  return (
    <section
      className="flex flex-col h-screen md:flex-row gap-8 p-6 md:p-12 bg-black"
      style={{
        background: "black",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('backgroundSvg/svg-bottom-hof.png'), url('backgroundSvg/svg-top-hof.png')",
        backgroundSize: "30%, 50%",
        backgroundPosition: "bottom left, top right",
      }}
    >
      {/* Left Column */}
      <div className="flex-1 h-full p-4 md:p-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-snug md:leading-[1.2]">
          HALL OF{" "}
          <span className="text-customBlue">FAME</span>
          <img
            src="logos/svg.png"
            className="relative top-[-40px] md:top-[-65px] left-[120px] md:left-[160px] w-[10vw] md:w-[5vw] h-[10vw] md:h-[5vw]"
            alt="Graduation Cap Icon"
          />
        </h2>
        <div className="h-auto md:h-[85%] w-full md:w-[85%] relative text-base md:text-2xl lg:mt-8 font-inter">
          Celebrating the achievements of our outstanding graduates! Our alumni
          have made their mark in top companies worldwide, showcasing
          excellence, innovation, and leadership.
          <br />
          <br />
          Meet our stars who continue to inspire the next generation.
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center flex-1 p-4 md:p-8 overflow-y-auto max-h-[70vh] md:max-h-[85vh] scroll-smooth scrollbar-hide">
        <div className="space-y-4 h-full font-inter flex flex-col items-center">
          {/* Graduate Profiles List */}
          <ul role="list" className="w-full">
            {/* Example Profile 1 */}
            <li className="flex flex-col md:flex-row gap-x-6 gap-y-4 py-4 p-5 rounded-lg h-auto md:h-48 items-center">
              <img
                alt="Vinu"
                src="logos/images (1).png"
                className="rounded-[34px] w-24 h-24 md:h-full md:w-auto"
              />
              <div className="flex flex-col min-w-0 flex-auto text-center md:text-left">
                <p className="text-xl md:text-2xl font-inter text-gray-200">
                  Vinu
                </p>
                <p className="mt-2 font-inter text-sm md:text-base text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
            {/* Example Profile 2 */}
            <li className="flex flex-col md:flex-row gap-x-6 gap-y-4 py-4 p-5 rounded-lg h-auto md:h-48 items-center">
              <img
                alt="Alwin"
                src="logos/images (1).png"
                className="rounded-[34px] w-24 h-24 md:h-full md:w-auto"
              />
              <div className="flex flex-col min-w-0 flex-auto text-center md:text-left">
                <p className="text-xl md:text-2xl font-inter text-gray-200">
                  Alwin
                </p>
                <p className="mt-2 font-inter text-sm md:text-base text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
            {/* Example Profile 3 */}
            <li className="flex flex-col md:flex-row gap-x-6 gap-y-4 py-4 p-5 rounded-lg h-auto md:h-48 items-center">
              <img
                alt="Seetha"
                src="logos/images (1).png"
                className="rounded-[34px] w-24 h-24 md:h-full md:w-auto"
              />
              <div className="flex flex-col min-w-0 flex-auto text-center md:text-left">
                <p className="text-xl md:text-2xl font-inter text-gray-200">
                  Seetha
                </p>
                <p className="mt-2 font-inter text-sm md:text-base text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
