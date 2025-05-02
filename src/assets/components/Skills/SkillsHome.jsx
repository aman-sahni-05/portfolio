import ProfessionalSkills from "./ProfessionalSkills";
import TechnicalSkills from "./TechnicalSkills";
// import htmlLogo from './htmlLogo.png'

export default function SkillsHome() {
  return (
    <div className="relative w-screen flex min-h-screen md:px-12 ">
      {/* background of skills page */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-15 z-0"
        style={{ backgroundImage: "url('/repeat.svg')" }}
      ></div>

      <main className=" relative  w-full min-h-screen flex flex-col gap-16 z-20">
        <h1 className=" text-center text-5xl mt-6 font-semibold text-blue-600">
          My <span className="text-black">Skills</span>
        </h1>
        <div className=" w-full  flex flex-col md:items-center gap-6 md:flex-row">
          <div className="flex flex-col flex-1 px-6 space-y-6 ">
            <h1 className="text-center text-2xl mb-14 font-semibold">
              Technical Skillss
            </h1>
            {
              <TechnicalSkills
                skillName="HTML"
                logo="./htmlLogo.png"
                progress="90"
              />
            }
            {
              <TechnicalSkills
                skillName="CSS"
                logo="./cssLogo.png"
                progress="75"
              />
            }
            {
              <TechnicalSkills
                skillName="Javascript"
                logo="./jsLogo.png"
                progress="90"
              />
            }
            {
              <TechnicalSkills
                skillName="Tailwind css"
                logo="./tailwindlogo.png"
                progress="65"
              />
            }
            {
              <TechnicalSkills
                skillName="React Js"
                logo="./reactLogo.png"
                progress="60"
              />
            }
            {
              <TechnicalSkills
                skillName="Git Github"
                logo="./gitLogo.png"
                progress="80"
              />
            }
          </div>
          <div className="flex flex-col mt-4 items-center justify-center flex-1 px-6 ">
            <h1 className="text-2xl mb-14 font-semibold">
              Professional Skills
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-12">
              <ProfessionalSkills skillName="Creativity" progress="65" />
              <ProfessionalSkills skillName="Communication" progress="70" />
              <ProfessionalSkills skillName="Problem Solving" progress="80" />
              <ProfessionalSkills skillName="Teamwork " progress="90" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
