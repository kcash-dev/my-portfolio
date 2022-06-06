import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt  } from "react-icons/fa";
import { SiRedux, SiFirebase, SiTailwindcss } from "react-icons/si";

export const projects = [
    {
        name: 'Pixtagram',
        picture: 'https://i.imgur.com/4TQ24Pr.jpg',
        description: 'An Instagram clone aimed at learning new technologies such as Firebase (Auth/Firestore), working with APIs, React Navigation, and more. This project helped me learn how to incorporate reusable components and how to share information between them.',
        shortenedDescription: 'An Instagram clone that aims to recreate the functionality of the popular social app.',
        link: '/project1',
        gitHubLink: 'https://github.com/kcash-dev/instaClone',
        inProgress: false
    },
    {
        name: 'Music Player',
        picture: 'https://i.imgur.com/8azBAok.jpg',
        description: 'A music player app combining features from top music players (iTunes, YouTube Music, Spotify). This project was an experiment with using Firebase, React Navigation, Redux, as well as familiarizing myself with the Animate library and its functions.',
        shortenedDescription: 'A music player app that combines the best features from the top music players.',
        link: '/project2',
        gitHubLink: 'https://github.com/kcash-dev/musicPlayerApp',
        inProgress: true
    },
    {
        name: 'UltraCook',
        picture: 'https://i.imgur.com/3KCQkIx.jpg',
        description: 'An app that helps users find recipes based on the ingredients they have available to them. The can add items to their pantry and recipes are suggested to them. This app utilizes Redux, React Navigation, and a Recipe API to suggest different recipes.',
        shortenedDescription: 'An app that helps users find recipes using the ingredients available to them.',
        link: '/project3',
        gitHubLink: 'https://github.com/kcash-dev/RecipeFinder',
        inProgress: true
    },
    {
        name: 'Break Time',
        picture: 'https://i.imgur.com/ajxMaPq.jpg',
        description: 'This app helps users to focus on tasks, while taking needed breaks at certain intervals. The app uses Redux to help store and share the activities across the app. In addition, it gave me the opportunity to incorporate push notifications to alert users.',
        shortenedDescription: 'An app to help users focus and take necessary breaks to improve productivity.',
        link: '/project4',
        gitHubLink: 'https://github.com/kcash-dev/BreakTime',
        inProgress: false
    }
]

export const skills = [
    {
        name: 'React/React Native',
        icon: <FaReact />
    },
    {
        name: 'HTML & CSS',
        icon: <FaHtml5 />
    },
    {
        name: 'JavaScript',
        icon: <FaJsSquare />
    },
    {
        name: 'React Navigation',
        icon: <FaReact />
    },
    {
        name: 'React Redux',
        icon: <SiRedux />
    },
    {
        name: 'Firebase',
        icon: <SiFirebase />
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />
    },
]