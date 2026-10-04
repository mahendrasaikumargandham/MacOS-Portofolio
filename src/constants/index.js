const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 4,
    name: "Experience",
    type: "experience",
  },
  {
    id: 5,
    name: "Certifications",
    type: "certifications"
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 2, 2025",
    title:
      "The Importance of System Design: Beyond the Basics",
    image: "/images/sd.png",
    link: "https://www.linkedin.com/pulse/importance-system-design-beyond-basics-mahendra-gandham-zeruc",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Unlocking the Power: How Mutex Locks Keep Your Game Running Smoothly",
    image: "/images/mutex.png",
    link: "https://www.linkedin.com/pulse/unlocking-power-how-mutex-locks-keep-your-game-running-gandham-inmcc",
  },
  {
    id: 3,
    date: "Jan 15, 2025",
    title: "Dynamic NPC Behavior: A Deep Dive into Proximity-Based Spawning and Despawning",
    image: "/images/npc.jpg",
    link: "https://www.linkedin.com/pulse/dynamic-npc-behavior-deep-dive-proximity-based-spawning-gandham-9dane",
  },
  {
    id: 4,
    date: "Jan 6, 2025",
    title: "Esports: The Algorithm of Excitement - Decoding the Future of Entertainment",
    image: "/images/bgmi.jpg",
    link: "https://www.linkedin.com/pulse/esports-algorithm-excitement-decoding-future-mahendra-gandham-n8myc",
  },
];

const techStack = [
  {
    "category": "Project stack",
    "items": [
      "PL/SQL",
      "JavaScript",
      "Java",
      "Python"
    ]
  },
  {
    "category": "Languages",
    "items": [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "SQL",
      "C#"
    ]
  },
  {
    "category": "Backend",
    "items": [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Multithreading"
    ]
  },
  {
    "category": "Frontend",
    "items": [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Ext JS"
    ]
  },
  {
    "category": "Databases",
    "items": [
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ]
  },
  {
    "category": "Messaging",
    "items": [
      "Redis",
      "Apache Kafka"
    ]
  },
  {
    "category": "Cloud & Tools",
    "items": [
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS EC2/S3",
      "Firebase"
    ]
  },
  {
    "category": "Game Dev",
    "items": [
      "Unity",
      "Photon PUN"
    ]
  },
  {
    "category": "Fundamentals",
    "items": [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "System Design",
      "Distributed Systems"
    ]
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#000000",
    link: "https://github.com/mahendrasaikumargandham",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#FFA116",
    link: "https://leetcode.com/mahendra4919",
  },
  {
    id: 3,
    text: "YouTube",
    icon: "/icons/youtube-outlined.svg",
    bg: "#FF0000",
    link: "https://www.youtube.com/@mahendra4919",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077B5",
    link: "https://www.linkedin.com/in/mahendragandham",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  // {
  //   id: 1,
  //   img: "/images/1.jpeg",
  // },
  {
    id: 2,
    img: "/images/2.jpeg",
  },
  {
    id: 3,
    img: "/images/3.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

// --- FILE SYSTEM DATA ---
// IDs are structured to be unique:
// 100 series -> Work folders
// 1000 series -> Work items
// 200 series -> About items
// 300 series -> Resume items
// 400 series -> Trash items
// 500 series -> Experience folders
// 5000 series -> Experience items

const WORK_LOCATION = {
  "id": 1,
  "type": "work",
  "name": "Work",
  "icon": "/icons/work.svg",
  "kind": "folder",
  "children": [
    {
      "id": 13,
      "name": "ScaleWithMahi",
      "icon": "/images/folder.png",
      "kind": "folder",
      "children": [
        {
          "id": 131,
          "name": "ScaleWithMahi.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "subtitle": "ScaleWithMahi ? Tech Interview Prep Platform",
          "description": [
            "2026 | Java, Spring Boot, PostgreSQL, Next.js, Firebase, Tailwind CSS",
            "Built a full-stack educational platform for Data Structures, Algorithms, and System Design, with a Java/Spring Boot REST API and PostgreSQL database.",
            "Developed a gamification engine that tracks problem-solving streaks and daily activity, powering a GitHub-style consistency grid.",
            "Integrated Firebase Authentication with Spring Security and stateless JWT validation to secure API routes and manage user sessions.",
            "Designed a responsive, dark-mode frontend with mobile navigation, interactive progress tracking, and real-time feedback notifications."
          ]
        },
        {
          "id": 132,
          "name": "Visit ScaleWithMahi",
          "icon": "/images/safari.png",
          "kind": "file",
          "fileType": "url",
          "href": "https://scalewithmahi.com/"
        }
      ]
    },
    {
      "id": 10,
      "name": "TDM Multiplayer",
      "icon": "/images/folder.png",
      "kind": "folder",
      "position": "top-10 left-5",
      "windowPosition": "top-[5vh] left-5",
      "children": [
        {
          "id": 101,
          "name": "TDM Multiplayer.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "position": "top-5 left-10",
          "description": [
            "A high-octane Team Deathmatch shooter engineered for competitive play. Built with Unity and C#, this project focuses on responsive mechanics and real-time network synchronization using Photon PUN.",
            "Key Features:",
            "• seamless Multiplayer: Low-latency networking ensures every shot counts.",
            "• Secure Backend: Integrated Firebase Authentication (OAuth) for secure user login.",
            "• Persistent Data: Utilizes Cloud Firestore to track player progression, K/D ratios, and match history in real-time.",
            "It's not just a game, it's a full-stack multiplayer architecture demonstrating scalable code and robust cloud integration."
          ]
        },
        {
          "id": 102,
          "name": "gameplay-video.com",
          "icon": "/images/safari.png",
          "kind": "file",
          "fileType": "url",
          "href": "https://youtu.be/mZx57gI02Jc",
          "position": "top-10 right-20"
        },
        {
          "id": 103,
          "name": "main-menu.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-52 right-80",
          "imageUrl": "/images/main-menu.png"
        },
        {
          "id": 104,
          "name": "Gameplay UI.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-60 right-20",
          "imageUrl": "/images/gameplay-av.jpg"
        }
      ]
    },
    {
      "id": 11,
      "name": "Git Commit Optimizer",
      "icon": "/images/folder.png",
      "kind": "folder",
      "position": "top-52 right-80",
      "windowPosition": "top-[20vh] left-7",
      "children": [
        {
          "id": 111,
          "name": "AI Resume Analyzer Project.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "position": "top-5 right-10",
          "description": [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device."
          ]
        },
        {
          "id": 112,
          "name": "ai-resume-analyzer.com",
          "icon": "/images/safari.png",
          "kind": "file",
          "fileType": "url",
          "href": "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          "position": "top-20 left-20"
        },
        {
          "id": 113,
          "name": "ai-resume-analyzer.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-52 left-80",
          "imageUrl": "/images/project-2.png"
        },
        {
          "id": 114,
          "name": "Design.fig",
          "icon": "/images/plain.png",
          "kind": "file",
          "fileType": "fig",
          "href": "https://google.com",
          "position": "top-60 left-5"
        }
      ]
    },
    {
      "id": 12,
      "name": "Rubix Rampage",
      "icon": "/images/folder.png",
      "kind": "folder",
      "position": "top-10 left-80",
      "windowPosition": "top-[33vh] left-7",
      "children": [
        {
          "id": 121,
          "name": "Game Details.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "position": "top-5 left-10",
          "description": [
            "PROJECT 1: RUBIX RAMPAGE (Open World Engine)",
            "Rubix Rampage is an ambitious technical showcase—a fully functional open-world action game inspired by the mechanics of GTA Vice City. This wasn't just about building a game; it was about engineering a living, breathing world.",
            "• Core Mechanics: I engineered a robust Third-Person Controller featuring advanced camera logic, responsive shooting mechanics, and arcade-style vehicle physics that feel satisfying to drive.",
            "• AI & Systems: The world is populated by a Professional AI system. NPCs have specific patrol routes and behaviors, reacting dynamically to the player. I also implemented a scalable 'Wanted Level' police system that ramps up difficulty based on player actions.",
            "• Game Loop: Beyond the sandbox, the game features a structured Mission System complete with cinematic cut-scenes to drive the narrative forward."
          ]
        },
        {
          "id": 122,
          "name": "gameplay-video.com",
          "icon": "/images/safari.png",
          "kind": "file",
          "fileType": "url",
          "href": "https://youtu.be/K0fmCSgu_UI",
          "position": "top-10 right-20"
        },
        {
          "id": 123,
          "name": "Cut Scenes.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-52 right-80",
          "imageUrl": "/images/cutscene.jpg"
        },
        {
          "id": 124,
          "name": "Gameplay UI.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-60 right-20",
          "imageUrl": "/images/gameplay.jpg"
        }
      ]
    }
  ]
};

const ABOUT_LOCATION = {
  "id": 2,
  "type": "about",
  "name": "About me",
  "icon": "/icons/info.svg",
  "kind": "folder",
  "children": [
    {
      "id": 201,
      "name": "me.png",
      "icon": "/images/image.png",
      "kind": "file",
      "fileType": "img",
      "position": "top-10 left-5",
      "imageUrl": "/images/itsme.jpg"
    },
    {
      "id": 202,
      "name": "with-gameeon-ceo.png",
      "icon": "/images/image.png",
      "kind": "file",
      "fileType": "img",
      "position": "top-28 right-72",
      "imageUrl": "/images/gameeon.jpeg"
    },
    {
      "id": 203,
      "name": "with-ajay.png",
      "icon": "/images/image.png",
      "kind": "file",
      "fileType": "img",
      "position": "top-52 left-80",
      "imageUrl": "/images/nodwin.jpeg"
    },
    {
      "id": 204,
      "name": "about-me.txt",
      "icon": "/images/txt.png",
      "kind": "file",
      "fileType": "txt",
      "position": "top-60 left-5",
      "subtitle": "Software Analyst, Developer & Content Creator",
      "image": "/images/main.jpeg",
      "description": [
        "I'm Mahendra Gandham, a Software Analyst at Accenture based in Hyderabad, India. I build backend systems and full-stack applications, and create content alongside my engineering work.",
        "I joined Accenture as an Associate Software Engineer in August 2024 and was promoted to Software Analyst in May 2026. My project work spans PL/SQL, JavaScript, Java, and Python.",
        "My engineering interests include Java microservices, concurrent data integration, distributed systems, and end-to-end product development.",
        "I built ScaleWithMahi, a tech interview preparation platform covering Data Structures, Algorithms, and System Design with progress tracking and problem-solving streaks.",
        "I also build games with Unity and C#, including multiplayer and open-world projects. Explore the Work folder for my software and game-development projects.",
        "Outside my project work, I create content and share ideas. You can find my creator and professional profiles in Contact."
      ]
    },
    {
      "id": 205,
      "name": "Game Dev Me.png",
      "icon": "/images/image.png",
      "kind": "file",
      "fileType": "img",
      "href": "https://youtu.be/mZx57gI02Jc",
      "position": "top-10 right-20",
      "imageUrl": "/images/stats.jpeg"
    },
    {
      "id": 206,
      "name": "Education.txt",
      "icon": "/images/txt.png",
      "kind": "file",
      "fileType": "txt",
      "subtitle": "Education",
      "description": [
        "Vishnu Institute of Technology | Bhimavaram, India",
        "Bachelor of Technology in Computer Science | 2020 ? 2024",
        "CGPA: 9.1/10",
        "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems, Object-Oriented Programming, and Computer Networks."
      ]
    },
    {
      "id": 207,
      "name": "Achievements.txt",
      "icon": "/images/txt.png",
      "kind": "file",
      "fileType": "txt",
      "subtitle": "Achievements",
      "description": [
        "LeetCode ? Top 5%: Solved 400+ problems, with a focus on Dynamic Programming and Graph Algorithms.",
        "Hackathon Lead (IGDC Partner): Organized REIMAGINE, a Pan-India game-development hackathon, coordinating logistics for student developers nationwide."
      ]
    }
  ]
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 301,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const EXPERIENCE_LOCATION = {
  "id": 5,
  "type": "experience",
  "name": "Experience",
  "icon": "/icons/work.svg",
  "kind": "folder",
  "children": [
    {
      "id": 50,
      "name": "Accenture",
      "icon": "/images/folder.png",
      "kind": "folder",
      "position": "top-10 left-10",
      "children": [
        {
          "id": 501,
          "name": "Software Analyst.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "subtitle": "Accenture ? Software Analyst",
          "description": [
            "May 2026 ? Present | Hyderabad, India",
            "Promoted to Software Analyst in May 2026 after joining Accenture as an Associate Software Engineer in August 2024.",
            "Designing a scalable, concurrent Java integration service with dynamically configurable thread pools for high-volume data ingestion into Hexagon EAM and DB Pro.",
            "The service automates workflow execution and targets an 80% reduction in QA cycle time.",
            "Project technologies: PL/SQL, JavaScript, Java, and Python."
          ]
        },
        {
          "id": 502,
          "name": "Associate Software Engineer.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "subtitle": "Accenture ? Associate Software Engineer",
          "description": [
            "August 2024 ? May 2026 | Hyderabad, India",
            "Engineered PL/SQL stored procedures and triggers for critical transactional workflows.",
            "Optimized multi-table JOIN queries, reducing data-retrieval latency by approximately 40% on large-scale datasets.",
            "Built JavaScript (Ext JS) UI modules with dynamic field validations for data security and integrity compliance.",
            "Promoted to Software Analyst in May 2026."
          ]
        }
      ]
    },
    {
      "id": 51,
      "name": "Kanine Klans",
      "icon": "/images/folder.png",
      "kind": "folder",
      "position": "top-10 left-48",
      "children": [
        {
          "id": 511,
          "name": "Internship Details.txt",
          "icon": "/images/txt.png",
          "kind": "file",
          "fileType": "txt",
          "position": "top-5 left-10",
          "description": [
            "Software Engineer Intern | Aug 2023 - July 2024",
            "• Developed a robust login system for the Kanine Klans game.",
            "• Integrated Blockchain APIs to securely maintain user data and manage the in-game purchase system.",
            "• Implemented complex game mechanics including the LAP system, AI NPC system, and Garage system.",
            "• Worked on backend integration and game logic optimization."
          ]
        },
        {
          "id": 512,
          "name": "Work.png",
          "icon": "/images/image.png",
          "kind": "file",
          "fileType": "img",
          "position": "top-5 left-40",
          "imageUrl": "/images/kk.jpeg"
        }
      ]
    }
  ]
};

const CERTIFICATIONS_LOCATION = {
  id: 6,
  type: "certifications",
  name: "Certifications",
  icon: "/icons/file.svg", // Make sure to add a certificate icon to your public/icons folder
  kind: "folder",
  children: [
    {
      id: 60,
      name: "Microsoft",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {
          id: 601,
          name: "Microsoft Certified: Azure Administrator Associate.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Microsoft Certified: Azure Administrator Associate",
          ]
        },
        {
          id: 602,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://learn.microsoft.com/en-gb/users/mahendragandham-7588/credentials/39884AD703B4BF2D?ref=https%3A%2F%2Fwww.linkedin.com%2F",
          position: "top-5 right-15",
        },
      ]
    },
    {
      id: 61,
      name: "SAFe®",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 left-48",
      children: [
        {
          id: 611,
          name: "Certified SAFe® 6 Practitioner.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Certified SAFe® 6 Practitioner",
          ]
        },
        {
          id: 612,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.credly.com/badges/b6a4dfaf-39d5-42cc-8567-e2042b00ef68/linked_in_profile",
          position: "top-20 right-25",
        },
      ]
    },
    {
      id: 62,
      name: "Hero Vired x Nodwin Gaming",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 right-20",
      children: [
        {
          id: 611,
          name: "Certificate Program in Gaming & Esports- Batch 4.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-25",
          description: [
            "Certificate Program in Gaming & Esports- Batch 4",
          ]
        },
        {
          id: 612,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://herovired.certificate.givemycertificate.com/c/efd6a38f-1446-4d03-bbeb-45ac6e3420e4",
          position: "top-5 right-15",
        },
      ]
    }
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 401,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 402,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  experience: EXPERIENCE_LOCATION,
  certifications: CERTIFICATIONS_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };