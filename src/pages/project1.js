import React from 'react'

//Components
import ProjectNavBar from '../components/ProjectNavBar'
import ProjectTechnologies from '../components/ProjectTechnologies'
import BottomNav from '../components/BottomNav'
import OtherProjects from '../components/OtherProjects'

function Project1() {
  return (
      <main>
        <ProjectNavBar />
        <div className="my-10 px-10 w-full">
          <div>
            <h1 className="text-2xl font-bold pb-5">
              Pixtagram
            </h1>
          </div>
          <div className="pb-5">
            <text>
              Pixtagram is a project I built to enhance my knowledge of all things React Native. Instagram is one of the
              most popular apps built with React Native, and combines multiple technologies to create a beautiful UI that is also
              very functional. Pixtagram allows users to create a profile with an email and password, and allows users to select photos
              stored locally to upload, along with a caption.
              <br />
              <br />
              In addition, users can view the photos on an Instagram-like feed, then like or comment on the photo. As well, users can
              view other users profiles and their photos.
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
                technologies={[ "React Native", "Firebase", "React Navigation" ]}
              />
            <div>
              <h3 className="text-md font-bold underline">
                Code
              </h3>
              <div className="pt-5">
                <a href="https://github.com/kcash-dev/instaClone" target="_blank" rel="noreferrer" className="underline">Github</a>
              </div>
            </div>
          </div>
          <hr className="mb-5 mt-5" />
          <div className="px-5 pb-5 pt-5">
            <img 
              src='https://i.imgur.com/DmcqKyw.jpg'
              alt="Pixtagram Samples"
              className="rounded mx-auto"
            />
          </div>
          <hr className="mb-5 mt-5" />
          <div className="pt-5 pb-5">
            <h2 className="text-xl font-bold underline">
              Project Goal
            </h2>
            <div className="pt-5">
              <text>
                I built this project because I knew it would present a challenge unlike one I had taken on before. And I was right.
                With Instagram having such a beautiful UI, plus a lot of features, I knew it would be difficult to replicate both the
                front-end and back-end, while still having it be functional and fast.
                <br />
                <br />
                Pixtagram challenged me to learn technologies I wasn't as familiar with, as well as find solutions to complex problems
                in terms of making the components reusable and moving information freely across the app.
              </text>
            </div>
          </div>
          <div className="px-5 pb-5 bg-black rounded">
            <h2 className="text-xl font-bold underline text-right text-white pt-5">
              Challenges Faced
            </h2>
            <div className="pt-5 pb-5 text-white">
              <text>
                Most importantly, I had never taken on a project this complex. The multitude of screens, components, and information was a challenge
                from the beginning. I had used React Navigation in past projects, but having to navigate to separate nested navigators, as well as sending
                information along with them took some time to adjust to.
                <br />
                <br />
                Same as React Navigation, I had some familiarity with Firebase (Firestore and Auth). However, I hadn't had experience with the level of detail to
                sending and retrieving information like I had to use in this project. Creating collections and documents that worked together, were accessible, and would
                easily display user information took a lot of research and planning, much more than I had anticipated when I started the project.
              </text>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <h2 className="text-xl font-bold underline">
              Key Lessons Learned
            </h2>
            <div className="pt-5">
              <text>
                The time spent in Firebase documentation and StackOverflow is more than I care to admit. It took hours upon hours of reading, testing, and adjusting
                before I finally arrived at a solution that worked. In addition to the Firebase knowledge I gained, it taught me how key it is to have a solid plan to
                follow before diving into the code.
                <br />
                <br />
                A plan lessens the time spent figuring out problems, and provides a direct path to cutting down on needless experimentation. This is something I will carry
                into future projects.
              </text>
            </div>
          </div>
        </div>
        <OtherProjects />
        <BottomNav />
      </main>
  )
}

export default Project1