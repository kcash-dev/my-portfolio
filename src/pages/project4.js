import React from 'react'

//Components
import ProjectNavBar from '../components/ProjectNavBar'
import ProjectTechnologies from '../components/ProjectTechnologies'
import BottomNav from '../components/BottomNav'
import OtherProjects from '../components/OtherProjects'

function Project4() {
  return (
      <main>
        <ProjectNavBar />
        <div className="my-10 px-10 w-full">
          <div>
            <h1 className="text-2xl font-bold pb-5">
              Break Time
            </h1>
          </div>
          <div className="pb-5">
            <text>
              Break Time was inspired by a basic app that was developed in a course I took on React Native. Seeing the app as very bare bones, I wanted to expand it and add my own features to it to make it more
              dynamic and more appealing. So, I added the ability to detail more about the task the user focuses on, as well as logging a recorded history of the tasks completed, and whether or not they were fully
              completed or not.
              <br />
              <br />
              This project uses React Redux to share task information across the app, Firebase for user authentication and storage of task history, as well as a basic React Navigation system.
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
                technologies={[ "React Native", "Firebase", "React Navigation", "React Redux", "Push Notifications" ]}
              />
            <div>
              <h3 className="text-md font-bold underline">
                Code
              </h3>
              <div className="pt-5">
                <a href="https://github.com/kcash-dev/BreakTime" target="_blank" rel="noreferrer" className="underline">Github</a>
              </div>
            </div>
          </div>
          <hr className="mb-5 mt-5" />
          <div className="px-5 pb-5 pt-5">
            <img 
              src='https://i.imgur.com/G6qUntM.jpg'
              alt="UltraCook Samples"
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
                I aimed to create a simple application that was easy for users to understand, but one that was effective at helping them increase productivity through a Pomodoro-style
                method. The app would keep track of how productive users were (based on their own measurement) and then present it to them in a simple format using a graph.
                <br />
                <br />
                The timer would provide an easy way for users to focus for a preset time (25 minutes/5 minutes rest or 50 minutes/10 minutes rest).
              </text>
            </div>
          </div>
          <div className="px-5 pb-5 bg-black rounded">
            <h2 className="text-xl font-bold underline text-right text-white pt-5">
              Challenges Faced
            </h2>
            <div className="pt-5 pb-5 text-white">
              <text>
                Since this was one of my first projects, I had no knowledge of Firebase nor Redux. Learning these two technologies to keep track of user tasks presented the largest challenge to me.
                <br />
                <br />
                I had a bare bones example project to work from, but adding in all of the features I wanted challenged me to think outside of the box and to learn new technologies to meet the feature ideas I had.
              </text>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <h2 className="text-xl font-bold underline">
              Key Lessons Learned
            </h2>
            <div className="pt-5">
              <text>
                Since this was my first experience with React Native, I faced many struggles with all the technologies that I was learning at once. Overall, Firebase and Redux challenged me the most, and I had a lot more
                to learn after this project using them to become more comfortable. However, technologies that I consider second-nature now (like React Navigation) challenged me by helping me learn proper structuring of an app to 
                share data effectively, as well as refactoring code for endless amounts of time.
              </text>
            </div>
          </div>
        </div>
        <OtherProjects />
        <BottomNav />
      </main>
  )
}

export default Project4