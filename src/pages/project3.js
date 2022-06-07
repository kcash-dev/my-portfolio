import React from 'react'

//Components
import ProjectNavBar from '../components/ProjectNavBar'
import ProjectTechnologies from '../components/ProjectTechnologies'
import BottomNav from '../components/BottomNav'
import OtherProjects from '../components/OtherProjects'

function Project3() {
  return (
      <main>
        <ProjectNavBar />
        <div className="my-10 px-10 w-full">
          <div>
            <h1 className="text-2xl font-bold pb-5">
              UltraCook
            </h1>
          </div>
          <div className="pb-5">
            <text>
              This app was a personal project based out of an app I had seen and a personal need. I wanted to better my cooking skills, but had no idea where to find recipes
              using the ingredients I had in my pantry and refrigerator. So, I thought, how great would it be to list the ingredients you have, and it shows you recipes using
              those exact ingredients. Thus, UltraCook was born.
              <br />
              <br />
              For this project, I knew I needed to incorporate React Redux as well as utilize and existing Recipe API. How to filter through and only show recipes using the chosen ingredients
              was an entirely new problem that I aimed to tackle.
            </text>
          </div>
          <div className="px-5 flex flex-row justify-evenly">
            <div>
              <h3 className="text-md font-bold underline">
                Project Type
              </h3>
              <div className="pt-5">
                <text>
                  Individual
                </text>
              </div>
            </div>
              <ProjectTechnologies 
                technologies={[ "React Native", "Firebase", "React Navigation", "React Redux" ]}
              />
            <div>
              <h3 className="text-md font-bold underline">
                Code
              </h3>
              <div className="pt-5">
                <a href="https://github.com/kcash-dev/RecipeFinder" target="_blank" rel="noreferrer" className="underline">Github</a>
              </div>
            </div>
          </div>
          <hr className="mb-5 mt-5" />
          <div className="lg:p-5 md:p-3 sm:p-1">
            <img 
              src='https://i.imgur.com/hQcosE3.jpg'
              alt="UltraCook Samples"
              className="rounded mx-auto"
            />
          </div>
          <hr className="mb-5 mt-5" />
          <div className="py-5">
            <h2 className="text-xl font-bold underline">
              Project Goal
            </h2>
            <div className="pt-5">
              <text>
                UltraCook was the first app where I familiarized myself with React Redux. I had heard about the technology, and I knew it would be a critical piece
                of my learning. So, with this app in mind, I set out to use it and learn how it works. In addition, I had used APIs with other languages (mostly JavaScript)
                so I wanted to learn how to use an API to pull data into an app, then store that data using React Redux.
                <br />
                <br />
                This app was one of the first apps where I aimed to go very in-depth and create a full-fledged app. Prior to this, I had only created partial apps, and I wanted to
                create something that was complete and usable.
              </text>
            </div>
          </div>
          <div className="px-5 pb-5 bg-black rounded">
            <h2 className="text-xl font-bold underline text-right text-white pt-5">
              Challenges Faced
            </h2>
            <div className="pt-5 pb-5 text-white">
              <text>
                Redux. Simple as that. This technology and the logic behind it was entirely new to me and I had no idea what I was doing. I read the documentation for hours, but it still didn't make sense to me. It took
                me piecing together (receiving errors upon errors) before I finally got it to a working version.
                <br />
                <br />
                While I had familiarity with APIs, I had no idea how I was going to bring in the massive amount of recipe information and then filter through it using the ingredients users entered into their "pantry". This presented
                a very large challenge that I had to overcome.
              </text>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <h2 className="text-xl font-bold underline">
              Key Lessons Learned
            </h2>
            <div className="pt-5">
              <text>
                Persistence. I was repeatedly frustrated by the usage of Redux, and it took a lot of patience to continue to work through the problems and errors I encountered. This was the first project
                to stretch me beyond my capabilities to such an extent, but it taught me the value of persistence when working on a difficult project and technologies I'm unfamiliar with.
              </text>
            </div>
          </div>
        </div>
        <OtherProjects />
        <BottomNav />
      </main>
  )
}

export default Project3