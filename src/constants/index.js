import { meta, shopify, tesla, su, boxing, lifeguard,mm, zoo, battleShip, cards, ai, logo, dune_cover, meditations_cover} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    flutter,
    firebase,
    java,
    cpp,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "Cpp",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Summer Mobile App Developer",
        company_name: "Salisbury University",
        icon: su,
        iconBg: "#accbe1",
        date: "June 2024 - Present",
        points: [
            "Designing and developing a fitness mobile application 'Moving Matters' for iOS and Android platforms.",
            "Collaborating with proffesor Dr. Venable-Edwards to create a user-friendly and interactive mobile application that fits her needs.",
            "Implementing responsive design and ensuring cross platform capability",
            "Implemented social media sharing and user authentication using Firebase. Designed a monthly chalenge with step tracker, achievments and graphs, createded a responsive routine creation and sharing capabilities",
        ],
    },
    {
        title: "Salisbury Zoo Prairie Dof Research Project Group Leader",
        company_name: "Salisbury Zoo",
        icon: zoo,
        iconBg: "#accbe1",
        date: "September 2024 - Present",
        points: [
            "Design and develop Arduino rfid smart trap, a trap designed to catch the desired prairie dog, based off an RFID in it's shoulder.",
            "Developing Prairie Patrol, a mobile and hardware-integrated application designed to assist the Salisbury Zoo in monitoring and managing prairie dogs using smart trapping technology.",
            "Maneged GitHub repository, this included, merging branches, creating projects and objectives, and organizing work flow.",
            "Collaborating with a multidisciplinary team, including zookeepers and professors, to design a system that leverages RFID technology to identify individual animals.",
            "Integrating Arduino-based hardware with Firebase to allow real-time data communication between the trap mechanism and the Flutter-based mobile application.",
            "Implementing features such as remote trap control, real-time notifications for zookeepers, and a user-friendly interface for monitoring animal activity.",
            "Ensuring system reliability by testing and optimizing the hardware-software integration and enhancing user experience with intuitive designs."
        ],
    },
    {
        title: "SU Club Kickboxing SGA Representative",
        company_name: "Salisbury University",
        icon: boxing,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Present",
        points: [
            "Help coach and train new members in the sport of Boxing, Kickboxing, and Muay Thai.",
            "Represent the club in the Student Government Association and help organize events and fundraisers.",
            "Help organize and run the club's social media accounts and help promote the club.",
            "Help manage finances for club.",
        ],
    },
    {
        title: "Lifeguard",
        company_name: "High Sierra Pools",
        icon: lifeguard,
        iconBg: "#b7e4c7",
        date: "June 2022 - Present",
        points: [
            "Maintain constant surveillance of patrons in the facility; act immediately and appropriately to secure safety of patrons in the event of emergency.",
            "Provide emergency care and treatment as required until the arrival of emergency medical services.",
            "Present professional appearance and attitude at all times, and maintain a high standard of customer service.",
            "Perform various maintenance duties as directed to maintain a clean and safe facility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/connorssullivan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/connorssullivan',
    }
];

export const projects = [
    {
        iconUrl: mm,
        theme: 'btn-back-red',
        name: 'Moving Matters',
        description: 'The Moving Matters Initiative (MM), created by Dr. Victoria Venable-Edwards in 2023, promotes movement to boost wellbeing. Now, with developer Connor Sullivan, they are creating the first cross platform MM mobile app using Firebase and Flutter to engage participants and share event info.',
        link: 'https://github.com/connorssullivan/Moving-Matters',
    },
    {
        iconUrl: zoo,
        theme: 'btn-back-green',
        name: 'Prairie Patrol',
        description: 'Prairie Patrol is a Flutter-based mobile application designed to work in tandem with an Arduino and Google Firebase. The app facilitates smart, remote-controlled trapping of prairie dogs using RFID technology to identify animals and close the cage only when the desired dog is detected. This project is built to assist zookeepers or wildlife researchers with precision and automation, ensuring humane and efficient trapping.',
        link: 'https://github.com/connorssullivan/Prairie-Patrol',
    },
    {
        iconUrl: battleShip,
        theme: 'btn-back-blue',
        name: 'Java Swing Multi Player Battleship',
        description: 'This is a Java implementation of the classic Battleship game. It features a graphical user interface where players can place their ships, take turns attacking their opponents grid, and listen to sounds indicating successful hits',
        link: 'https://github.com/connorssullivan/Java-Multiplayer-Battleship',
    },
    {
        iconUrl: cards,
        theme: 'btn-back-black',
        name: 'Slots Overflow Casino',
        description: 'This is a C++ terminal based casino game that lets you play poker and blackjack. This project is not very impressive, but it is near and dear to my heart because it was one of my first.',
        link: 'https://github.com/connorssullivan/Slots-Overflow-Casino'
    },
    {
        iconUrl: ai,
        theme: 'btn-back-pink',
        name: 'Python Ai Projects',
        description: 'This is a collection of Python projects from my AI class',
        link: 'https://github.com/connorssullivan/Python-AI-Projects'
    },
    {
        iconUrl: logo,
        theme: 'btn-back-white',
        name: '3D Parallax Portfolio Website',
        description: 'My React 3D Portfolio Website, a visually engaging platform designed to showcase my projects, skills, and experiences. This portfolio combines the power of React with 3D visualizations to create an immersive user experience.',
        link: 'https://github.com/connorssullivan/React-Portfolio-Site'
    },
];

export const books = [
    {
        title: "Dune 1",
        author: "Frank Herbert",
        description: "Dune by Frank Herbert is a science fiction epic set on the desert planet Arrakis, where young Paul Atreides becomes embroiled in a web of politics, religion, and survival. The story explores themes of power, destiny, and ecological preservation as Paul rises to fulfill his potential as a messianic figure.",
        coverImage: dune_cover, 
        status: "finishedReading",
        gerne:"Fiction"
    },
    {
        title: "Dune 2",
        author: "Frank Herbert",
        description: "Dune by Frank Herbert is a science fiction epic set on the desert planet Arrakis, where young Paul Atreides becomes embroiled in a web of politics, religion, and survival. The story explores themes of power, destiny, and ecological preservation as Paul rises to fulfill his potential as a messianic figure.",
        coverImage: dune_cover, 
        status: "currentlyReading",
        gerne: "Fiction"
    },
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        description: "Meditations (Koinē Greek: Τὰ εἰς ἑαυτόν, romanized: Ta eis heauton, lit. ''Things Unto Himself'') is a series of personal writings by Marcus Aurelius, Roman Emperor from 161-180 C.E., recording his private notes to himself and ideas on Stoic philosophy.",
        coverImage: meditations_cover, 
        status: "currentlyReading",
        gerne: "Philosophy"
    },
    
    
    
];