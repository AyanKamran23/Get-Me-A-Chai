import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] ">
        <div className="font-extrabold text-4xl items-center flex justify-center gap-4 ">Get Me a Chai <span><img className="w-14 InvertImg" src="/tea.gif" alt="tea" /></span></div>
        <p className="text-sm text-slate-200 pb-10 pt--5">
         A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-2 ">
          <Link href={"/login"}>
          <button className="px-4 py-2 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:scale-105 active:scale-95">
            Start Here
          </button>
          </Link>
          <Link href={"/about"}>
          <button className="px-4 py-2 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:scale-105 active:scale-95">
            Read More
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5 my-14"></div>

      <div className="text-white container mx-auto">
        <h2 className="text-2xl font-bold text-center my-8" >Your Fans can buy you a Chai</h2>
        <div className="flex flex-row justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={70} src="/person.gif" alt="" />
            <p className="font-bold my-1" >Fans want to help</p>
            <p className="text-xs"> Your Fans are available for you to help you </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={70} src="/coin.gif" alt="" />
            <p className="font-bold my-1" >Fans want to help</p>
            <p className="text-xs"> Your Fans are available for you to help you </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={70} src="/group.gif" alt="" />
            <p className="font-bold my-1" >Fans want to help</p>
            <p className="text-xs"> Your Fans are available for you to help you </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5 my-14"></div>

      <div className="text-white container mx-auto items-center justify-center flex flex-col">
        <h2 className="text-2xl font-bold text-center my-6" >Learn More about Us</h2>
        <iframe width="400" height="250" src="/Pass-OP.mp4"></iframe>

      </div> */}
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-4 py-20 text-center space-y-8 max-w-4xl mx-auto">

          {/* Main Title with Glow */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight flex items-center justify-center gap-3">
              Get Me a <span className="text-blue-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">Chai</span><img className="w-18 InvertImg" src="/tea.gif" alt="tea" />
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A crowdfunding platform for creators, developers, and artists. Get funded by your fans and followers. Start now!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-slate-950 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20 hover:scale-105">
                Start Here
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-full border border-slate-800 transition-all duration-200 hover:border-slate-700 hover:scale-105">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-slate-800 to-transparent my-10" />

        {/* Features / "Your Fans can buy you a Chai" Section */}
        <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
          <h2 className="text-3xl font-bold text-center text-slate-200">
            Your Fans can buy you a <span className="text-blue-500">Chai</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-3xl border border-blue-500/20">
               <img className="" width={45} src="/person.gif" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Fans want to help</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your fans are available for you to help you fund your creative journey and projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-3xl border border-blue-500/20">
               <img className="" width={45} src="/coin.gif" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Direct Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Receive direct contributions securely without any complicated third-party hurdles.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-3xl border border-blue-500/20">
              <img className="" width={45} src="/group.gif" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Group Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Build a loyal community around your work, code, art, or content creation.
              </p>
            </div>

          </div>
        </div>

        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-slate-800 to-transparent my-10" />

        <div className="text-white container mx-auto items-center justify-center flex flex-col">
          <h2 className="text-3xl font-bold text-center my-6" >Learn More <span className="text-blue-500">About Us</span></h2>
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-xl hover:border-blue-500/50 transition-all duration-300">
            <iframe width="400" height="250" src="/Pass-OP.mp4"></iframe>
          </div>

        </div>

        {/* Bottom Spacing / Footer placeholder */}
        <div className="py-12" />
      </div>
    </>
  );
}