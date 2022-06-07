import React from 'react'

export default function About() {
  return (
    <section id="about">
        <div className="px-10 py-5">
            <h1 className="lg:text-6xl font-bold py-1">
                Hey there, I'm <text className="lg:text-6xl font-bold text-green-400">Kyle Cash</text>.
            </h1>
            <h2 className="lg:text-5xl font-bold py-1">
                Front-End <text className="lg:text-5xl font-bold text-green-400">Developer</text>
            </h2>
            <h2 className="lg:text-5xl font-bold py-1">
                Mobile <text className="lg:text-5xl font-bold text-green-400">Specialist</text>
            </h2>
            <h2 className="lg:text-5xl font-bold py-1">
                Self-<text className="lg:text-5xl font-bold text-green-400">Taught</text>
            </h2>
            <div className="w-11/12 py-10 flex w-full align-center justify-center">
                <img 
                    src="https://i.imgur.com/jEVwln7.jpg"
                    alt="Kyle's Profile"
                    className="w-8/12 rounded"
                />
            </div>
            <div className="lg:px-5 md:px-1 sm:px-1 flex flex-row ">
                <div className="lg:px-5 md:px-1 sm:px-1">
                    <text>
                        I'm a 31-year-old self-taught developer from the USA. I am a front-end developer, 
                        but I specialize in creating mobile applications that are smooth and responsive.
                        <br />
                        <br />
                        I've faced many challenges during my learning, but I've worked hard to overcome them,
                        and find a solution that meets the projects needs.
                    </text>
                </div>
                <div className="px-5 md:px-1 sm:px-1">
                    <text>
                        These challenges have helped shape me into the developer I am today;
                        one that is relentless in solving the challenges in front of me, but a developer that is teachable and a quick-learner.
                    </text>
                </div>
            </div>
        </div>
    </section>
  )
}
