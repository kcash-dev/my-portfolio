import React from 'react'

//Components
import ProjectNavBar from '../components/ProjectNavBar'
import ProjectTechnologies from '../components/ProjectTechnologies'
import BottomNav from '../components/BottomNav'
import OtherProjects from '../components/OtherProjects'

function Project2() {
  return (
      <main>
        <ProjectNavBar />
        <div className="my-10 px-10 w-full">
          <div>
            <h1 className="text-2xl font-bold pb-5">
              Music Player
            </h1>
          </div>
          <div className="pb-5">
            <text>
              This music player project was something I thought of while I was deciding between using iTunes or YouTube Music. I loved features from both and thought,
              "Why not combine them?". So, I set out to learn how they worked. Like other projects, many of the technologies were new to me and this presented a challenge
              as I learned to recreate the functionality that exists with the top music players. This app allows users to add music stored locally, and play it just like on their
              favorite music player app.
              <br />
              <br />
              This project incorporated a lot of animations and menus. The music plays across the app and can be skipped or users can return to the previous song.
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
                technologies={[ "React Native", "Firebase", "React Navigation", "Reanimated", "React Redux" ]}
              />
            <div>
              <h3 className="text-md font-bold underline">
                Code
              </h3>
              <div className="pt-5">
                <a href="https://github.com/kcash-dev/musicPlayerApp" target="_blank" rel="noreferrer" className="underline">Github</a>
              </div>
            </div>
          </div>
          <hr className="mb-5 mt-5" />
          <div className="lg:p-5 md:p-3 sm:p-1">
            <img 
              src='https://i.imgur.com/EZErM5k.jpg'
              alt="Music Player Samples"
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
                This was another project I began knowing that it would take hours upon hours to learn the proper technologies and how to share
                information across the app. But, I was eager to learn these concepts because I knew it would be beneficial for any future projects.
                I loved the animations that I found while using iTunes and YouTube Music (especially the menu sliding up and down for the current song),
                so I aimed to recreate these the best I could.
                <br />
                <br />
                This music player app took me far beyond the knowledge I had at the time, and showed me a side of React Native that I had yet to learn. The app
                had to be smooth, beautiful, and fast. This would challenge me more than I realized.
              </text>
            </div>
          </div>
          <div className="px-5 pb-5 bg-black rounded">
            <h2 className="text-xl font-bold underline text-right text-white pt-5">
              Challenges Faced
            </h2>
            <div className="pt-5 pb-5 text-white">
              <text>
                I had no familiarity with animations prior to this project. I didn't even know where to begin in this area. As I researched, I discovered the Reanimated
                library and found it very capable for what I was trying to do. I had to spend a lot of time familiarizing myself with the documentation, and it took a lot of experimentation
                as well.
                <br />
                <br />
                In addition, React Redux was still a relatively new concept to me. I had used it in previous projects, but I didn't feel comfortable using it. And I saw this as an excellent opportunity
                to force myself out of my comfort zone to expand my knowledge.
              </text>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <h2 className="text-xl font-bold underline">
              Key Lessons Learned
            </h2>
            <div className="pt-5">
              <text>
                By the time I had finished, I felt comfortable with the Reanimated library. I was creating my own animations and extending beyond what was listed in the documentation.
                From this, I have been able to incorporate this into other projects to give users feedback when using the apps I create.
                <br />
                <br />
                I was still slightly uncomfortable using React Redux and I came away from this project knowing I needed to invest more time in it. For this, I learned that I need more preparation
                before utilizing this technology, and I need to study the documentation more to deepen my understanding of how React Redux works.
              </text>
            </div>
          </div>
        </div>
        <OtherProjects />
        <BottomNav />
      </main>
  )
}

export default Project2