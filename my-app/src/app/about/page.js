import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 md:px-20 lg:px-32">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          About <span className="text-blue-500">Get Me A Chai</span> ☕
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
          Get Me A Chai is a crowdfunding platform built for creators, developers, writers, and artists. 
          It allows your fans and supporters to fund your creative work with the price of a simple cup of chai!
        </p>
      </div>

      {/* Features / How it Works Section */}
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
          <div className="text-3xl">🤝</div>
          <h3 className="text-xl font-bold text-slate-200">Connect with Fans</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Bring your community closer to you. Let your true supporters back your projects directly without any middlemen.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
          <div className="text-3xl">💸</div>
          <h3 className="text-xl font-bold text-slate-200">Easy Contributions</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Supporters can easily send small amounts (like buying a chai) to show their appreciation for your hard work and content.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
          <div className="text-3xl">🚀</div>
          <h3 className="text-xl font-bold text-slate-200">Grow Your Craft</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fund your equipment, server costs, or daily fuel (chai!) so you can keep doing what you love full-time.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mt-24 bg-linear-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/30 p-8 md:p-12 rounded-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-100">Our Mission</h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          We believe that every creator deserves support. Whether you are coding open-source software, writing blogs, 
          or making art, "Get Me A Chai" provides a frictionless way to fund your passion sip by sip.
        </p>
      </div>
    </div>
  )
}

export default About

export const metadata = {
  title: "About - Get Me A Chai"
}