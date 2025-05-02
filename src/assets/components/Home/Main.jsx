import React from "react";
import TypingText from "./TypingText.jsx";

export default function Main() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-68px)]  md:px-12">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-20"
          style={{ backgroundImage: "url('/repeat.svg')" }}
        ></div>

        <main className="relative z-10 flex w-full mt-4 md:mt-0 md:gap-4  flex-wrap gap-20">
          {/* Left text 👍*/}
          <div className="flex-1 flex flex-col gap-12 justify-center ml-3">
            <h2 className="font-semibold text-3xl">Hello !</h2>
            <div className="relative md:static h-45 md:h-auto">
              <h1 className="font-semibold text-6xl">
                I'm <span className="text-blue-600">Aman sahni,</span>
              </h1>
              <h1 className="absolute md:static "> {<TypingText />} </h1>
            </div>
            <p className="text-sm font-extralight text-gray-400">
              I'm a passionate web developer who loves building modern,
              responsive websites. I enjoy experimenting with new ideas and
              technologies to create engaging user experiences.
            </p>

            <div className="flex gap-3">
              <button className="transition-all duration-200 hover:bg-blue-400 hover:scale-110 cursor-pointer px-4 py-2 rounded-4xl bg-blue-600 font-semibold text-slate-200">
                <a href="tel:+919877743918">Hire me</a>
              </button>
              <button className="transition-all duration-200 hover:scale-95 bg-black text-slate-200 opacity-40 hover:opacity-60 cursor-pointer border px-4 py-2 rounded-4xl">
                <a
                  href="https://wa.me/9877743918"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </button>
            </div>
          </div>

          {/* right image placeholder 👍*/}
          <div className="flex-[1] relative flex flex-col justify-center items-center md:items-end">
            <div className="relative z-2 w-[80vw]  max-w-[500px] h-[80vw] max-h-[500px]">
              {/* Image First - Base Layer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 600 600"
                opacity="0.49"
              >
                <path
                  d="M264.06684596414595 420.6476298619762C251.14031194721883 417.905635639971 231.4240847336772 414.77192795767934 216.2778444993022 405.76252854361684C201.1316042649272 396.75312912955434 182.85166143452355 382.65146999055696 173.18940455789595 366.5912333776012C163.52714768126836 350.53099676464547 161.69914983784386 329.24790553743196 158.30430323953658 309.40110886588246C154.9094566412293 289.55431219433297 150.2089027471863 265.39868526155306 152.8203249680522 247.51045334830434C155.43174718891808 229.62222143505562 162.61315638895064 214.867679402178 173.9728365647319 202.07171738639028C185.33251674051314 189.27575537060252 197.21448237772017 171.38753617301137 220.9784060227397 170.73468125357778C244.74232966775924 170.08182633414418 291.7478864101095 187.31719315543324 316.5563784348491 198.1545878697887C341.36487045958864 208.99198258414418 348.2851382004741 220.48223984732778 369.8293581711772 235.7590495397106C391.37357814188033 251.0358592320934 424.1469037440939 270.2297933548148 445.82169825906783 289.8154460240856C467.49649277404177 309.4010986933564 490.2158683843933 336.6904409378226 499.87812526102095 353.2729655553356C509.5403821376485 369.8554901728486 511.36835963602095 378.0814830113903 503.79523951883345 389.3105937291637C496.22211940164595 400.53970444693715 479.90075404520064 415.42479050650746 454.43940455789595 420.6476298619762C428.97805507059127 425.87046921744496 377.7942019211772 420.3864858596976 351.02714259500533 420.6476298619762C324.26008326883345 420.90877386425484 308.3304313726746 422.2144938756481 293.8370486008647 422.2144938756481C279.34366582905477 422.2144938756481 276.9933799810731 423.3896240839814 264.06684596414595 420.6476298619762C251.14031194721883 417.905635639971 231.4240847336772 414.77192795767934 216.2778444993022 405.76252854361684 "
                  fill="hsl(340, 45%, 50%)"
                  fillOpacity="0.13"
                  strokeWidth="0"
                  stroke="hsl(340, 45%, 30%)"
                ></path>
                <path
                  d="M171.62256746621165 345.4387099345271C158.69603344928456 342.69671571252184 138.9798062357429 339.5630080302302 123.8335660013679 330.5536086161677C108.6873257669929 321.5442092021052 90.40738293658924 307.4425500631078 80.74512605996165 291.3823134501521C71.08286918333405 275.3220768371963 69.25487133990956 254.038985609983 65.86002474160227 234.1921889384335C62.46517814329499 214.345392266884 57.76462424925201 190.1897653341041 60.3760464701179 172.30153342085538C62.987468690983775 154.41330150760666 70.16887789101634 139.65875947472907 81.52855806679759 126.86279745894132C92.88823824257884 114.06683544315356 104.77020387978587 96.17861624556241 128.5341275248054 95.52576132612882C152.29805116982493 94.87290640669522 199.3036079121752 112.10827322798428 224.11209993691477 122.94566794233975C248.92059196165434 133.78306265669522 255.84085970253977 145.27331991987882 277.3850796732429 160.55012961226163C298.929299643946 175.82693930464444 331.7026252461596 195.0208734273658 353.3774197611335 214.60652609663663C375.05221427610746 234.19217876590744 397.771589886459 261.4815210103736 407.43384676308665 278.06404562788646C417.0961036397143 294.6465702453994 418.92408113808665 302.87256308394115 411.35096102089915 314.1016738017146C403.77784090371165 325.330784519488 387.45647554726634 340.21587057905833 361.99512605996165 345.4387099345271C336.53377657265696 350.66154928999583 285.3499234232429 345.1775659322484 258.582864097071 345.4387099345271C231.81580477089915 345.69985393680565 215.88615287474028 347.00557394819896 201.3927701029304 347.00557394819896C186.8993873311205 347.00557394819896 184.54910148313874 348.1807041565322 171.62256746621165 345.4387099345271C158.69603344928456 342.69671571252184 138.9798062357429 339.5630080302302 123.8335660013679 330.5536086161677 "
                  fillOpacity="0.13"
                  fill="none"
                  opacity="1"
                  strokeOpacity="0.06"
                  strokeWidth="10"
                  stroke="hsl(205, 69%, 50%)"
                  transform="matrix(1,0,0,1,75,75)"
                ></path>
              </svg>
              <div className="absolute inset-1 flex items-center justify-center">
                <img
                  className="w-[85%] h-[85%] object-cover rounded-full shadow-lg"
                  src="./me3.png"
                  alt="Profile"
                />
              </div>

              <svg
                className="absolute inset-0 z-10 w-full h-full animate-spin2"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="spin2"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="5"
                  stroke="#1e88e5"
                  strokeDasharray="30 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute inset-0 self-center">
              <svg
                className="w-80 h-50 opacity-20"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="hsl(340, 45%, 50%)" />
              </svg>
            </div>
            <div className="absolute inset-0 self-center">
              <svg
                className="w-50 h-40 opacity-60 "
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#1e88e5" />
                <text
                  x="50"
                  y="45"
                  alignmentBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Developer!
                </text>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
