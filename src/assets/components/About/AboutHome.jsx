export default function AboutHome() {
  return (
    <div className="mt-16 bg-[linear-gradient(349deg,_rgba(30,136,229,1)_25%,_rgba(30,136,229,1)_100%)] min-h-screen flex md:flex-row flex-col gap-4 md:gap-12 justify-between items-center px-12">
      {/* Left side image */}
      <div className="relative w-[80vw]  max-w-[500px] h-[80vw] max-h-[500px]">
        <div className="absolute inset-1 flex items-center justify-center">
          <img
            className="w-[85%] h-[85%] bg-slate-50 object-cover rounded-full shadow-lg"
            src="./me3.png"
            alt=""
          />
        </div>
      </div>

      {/* Right side text */}
      <div className=" h-[100%] md:h-[60%] justify-evenly flex-2 text-slate-50 flex flex-col gap-y-6 md:gap-y-3">
        <div className="flex gap-4 flex-col justify-between">
          <h3 className="font-thin font-[mono]">- About Me</h3>
          <h1 className="text-4xl">Who is Aman Sahni ?</h1>
          <p>
            Hey, I'm Aman Sahni. I'm a web developer with a passion for turning
            ideas into real, interactive websites. I spend countless hours
            learning and experimenting with new technologies. I pour my
            creativity and curiosity into every project I work on.Welcome to my
            portfolio—this is my journey of continuous learning, growth, and
            exploration in the world of web development.
          </p>
        </div>
        <div className="flex gap-6 md:gap-x-12 flex-wrap">
          <div>
            <h3 className="text-2xl md:text-4xl md:mb-2">900+</h3>
            <p>Hours of coding practice</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl md:mb-2">3+</h3>
            <p>Personal Projects</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl md:mb-2">24/7</h3>
            <p>Passion for learning</p>
          </div>
        </div>
        <div className="flex mb-8 md:mb-0 justify-evenly gap-4 items-center bg-slate-50 py-1 w-44 rounded-4xl text-blue-600 cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:scale-95">
          {/* Download CV Button with link */}
          <a href="/resume.pdf" download="Aman_resume.pdf">
            <button className="cursor-pointer">Download CV</button>
          </a>

          {/* Arrow button */}
          <button className="cursor-pointer w-10 h-10 border rounded-full bg-blue-600 ">
            <i className="fa-solid fa-arrow-right text-slate-50"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
